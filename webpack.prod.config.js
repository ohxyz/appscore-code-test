const path = require( 'path' );

module.exports = {
    
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join( __dirname, 'public' ),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [ 
            {
                test: /\.js[x]{0,1}$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: [ 'react', 'env' ] }
                }
            },
            {
                test: /\.css$/,
                use: [ 
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: [ 
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            }
        ]
    }
};