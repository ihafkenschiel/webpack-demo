const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,                        // regex, i=case-insensitive
                use: ['style-loader', 'css-loader'],    // in order
            },
        ],
    },
};