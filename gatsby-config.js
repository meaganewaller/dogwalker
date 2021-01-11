module.exports = {
    plugins: [
        {
            resolve: "gatsby-transformer-yaml",
            options: {
                typeName: ({node}) => {
                    const name = node.sourceInstanceName
                    if (name === `locations`) {
                        return `Location`
                    }
                    return name
                },
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: "./locations",
                name: "locations",
            },
            __key: "locations",
        },
    ],
};
