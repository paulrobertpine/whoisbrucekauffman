module.exports = {
  siteMetadata: {
    title: 'Who is Bruce Kauffman?',
    author: 'Paul Clifford',
    description: 'website for film Who is Bruce Kauffman?',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/WIBK_Question_Mark_White.svg', 
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
