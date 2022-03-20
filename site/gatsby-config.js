module.exports = {
  siteMetadata: {
      title: `cia-buggy`,
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