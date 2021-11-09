const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/tinyPlayer.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tinyPlayer.min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}