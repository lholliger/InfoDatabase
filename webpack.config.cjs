module.exports = {
    entry: './index.js',
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            { test: /\.(txt|html|css|txt)$/, loader: "raw-loader" }
        ]
    }
};