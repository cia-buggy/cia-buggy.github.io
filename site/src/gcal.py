#!flask/bin/python
from googleapiclient.discovery import build
from google.oauth2 import service_account
import googleapiclient.discovery
from pytz import timezone
import datetime
from dateutil import parser
from bs4 import BeautifulSoup
from itertools import cycle

# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']
SERVICE_ACCOUNT_FILE = 'credentials.json'

BUGGY_IMAGES = cycle([
    '/static/img/gallery/2019_36.jpg',
    '/static/img/gallery/2019_3.jpg',
    '/static/img/gallery/2019_13.jpg',
])
GARAGE_IMAGES = cycle([
    '/static/img/calendarEvents/garage1.jpg',
    '/static/img/calendarEvents/garage2.jpg',
    '/static/img/calendarEvents/garage3.jpg'
])
PORCH_IMAGES = cycle(['/static/img/calendarEvents/pizza.gif'])
WORKOUT_IMAGES = cycle([
    '/static/img/calendarEvents/workouts1.jpg',
    '/static/img/calendarEvents/workouts2.jpg'
])
STAIRS_IMAGES = cycle(['/static/img/calendarEvents/stairs.jpg'])
KAYAKING_IMAGES = cycle(['/static/img/calendarEvents/kayaking.jpg'])
MIXER_IMAGES = cycle(['/static/img/calendarEvents/mixer1.jpg'])
ICE_CREAM_SOCIAL_IMAGES = cycle(['/static/img/calendarEvents/ice_cream_social.jpg'])
PANCAKING_IMAGES = cycle(['/static/img/calendarEvents/pancaking.jpg'])


def get_image_for_event(name):
    nameLower = name.lower()
    if 'workout' in nameLower:
        return '/static/img/recruitmentEvents/cia-virtual-workout.png'
    elif 'build' in nameLower:
        return '/static/img/recruitmentEvents/intro-to-buggy-build.png'
    elif 'yoga' in nameLower:
        return '/static/img/recruitmentEvents/yoga.jpg'
    elif 'happy hour' in nameLower:
        return '/static/img/recruitmentEvents/happy-hour.png'
    elif 'study' in nameLower or 'office hours' in nameLower:
        return '/static/img/recruitmentEvents/study-hours.jpg'
    elif 'movie' in nameLower:
        return '/static/img/recruitmentEvents/movie-night.jpg'
    elif 'meche' in nameLower:
        return '/static/img/recruitmentEvents/meche.jpg'
    if 'bugg' in name.lower():
        return next(BUGGY_IMAGES)
    elif name == 'Garage Hours':
        return next(GARAGE_IMAGES)
    elif name == 'The Porch':
        return next(PORCH_IMAGES)
    elif name == 'Pusher Workout':
        return next(WORKOUT_IMAGES)
    elif name == 'Stairs!':
        return next(STAIRS_IMAGES)
    elif name == 'Kayaking':
        return next(KAYAKING_IMAGES)
    elif name == 'CIA Mixer':
        return next(MIXER_IMAGES)
    elif name == 'Pancaking':
        return next(PANCAKING_IMAGES)
    elif 'Ice Cream' in name:
        return next(ICE_CREAM_SOCIAL_IMAGES)
    else:
        return '/static/img/calendarEvents/generic.jpg'
    return ''


def filter_unwanted_events(events):
    IGNORED = ['Officers Meeting', 'Workout with Luis', 'Carry out for tabling']
    conditions = [
        lambda x: '#nofeature' not in x.get('description', ''),
        lambda x: x['summary'] not in IGNORED
    ]
    return list(filter(lambda x: all(cond(x) for cond in conditions), events))


def get_events_from_calendar():
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)

    service = googleapiclient.discovery.build(serviceName='calendar', version='v3', credentials=credentials)

    # Call the Calendar API
    tz = timezone('Etc/GMT-5')
    now = datetime.datetime.now(tz=tz)
    now_str = now.isoformat()
    two_months_later_str = (now + datetime.timedelta(days=60)).isoformat()
    events_result = service.events().list(calendarId='81chdj6lpav23v9fe3ig7mrj88@group.calendar.google.com',
                                          timeMin=now_str,
                                          timeMax=two_months_later_str,
                                          singleEvents=True,
                                          orderBy='startTime').execute()
    events = events_result.get('items', [])
    return events

def format_event_time(datetime_string):
    date_time = parser.parse(datetime_string)
    return date_time.strftime('%A, %-m/%d at %-I:%M %p')

def parse_event(event):
    summary = event['summary'].replace('[Recruitment]', '').strip()
    parsed_event = {
        'summary': summary,
        'location':  event.get('location', 'TBD'),
        'image': get_image_for_event(event['summary']),
        'dateString': format_event_time(event['start'].get('dateTime', event['start'].get('date'))),

        # default contact
        'contact_name': 'Ethan Husted',
        'contact_email': 'cia@andrew.cmu.edu',
        'description_text': "This fun event has no description, so you'll have to show up to find out what happens."
    }

    try:
        raw_description = event.get('description', '').replace('<br>', '\n')
        text_description = BeautifulSoup(raw_description, features='html5lib').get_text()
        description_lines = text_description.split('\n')
        for line in description_lines:
            if 'Contact:' in line:
                contact_parts = line.split('Contact:')[1].split('-')
                for part in contact_parts:
                    if part.replace(' ', '').isalpha():
                        parsed_event['contact_name'] = part.strip()
                    elif '@' in part:
                        parsed_event['contact_email'] = part.strip()

            if 'Description:' in line:
                parsed_event['description_text'] = line.split('Description:')[1]
    except:
        pass
    
    return parsed_event

def get_parsed_calendar_events():
    all_events = get_events_from_calendar()
    filtered_events = filter_unwanted_events(all_events)
    return [parse_event(event) for event in filtered_events]
