module.exports = {
    siteMetadata: {
        title: "Michael Valdron",
        description: "",
        author: "Michael Valdron"
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-react-helmet`
    ]
}
