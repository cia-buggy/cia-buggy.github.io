module.exports = {
  siteMetadata: {
      title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
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