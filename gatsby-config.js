module.exports = {
  siteMetadata: {
      title: `cia-buggy`,
    siteUrl: `https://www.yourdomain.tld`
  },
	pathPrefix: "/Tang-erin.github.io",

plugins: ["gatsby-plugin-styled-components",    
					`gatsby-transformer-sharp`,
    			`gatsby-plugin-sharp`,
{
	resolve: "gatsby-source-filesystem",
	options: {
		path: `${__dirname}/src/images/gallery`,
		name: "album",
	},
},
]

};