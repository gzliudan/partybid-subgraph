module.exports = {
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    overrides: [
        {
            files: 'subgraph.template.yaml',
            options: {
                bracketSpacing: false,
            },
        },
    ],
};
