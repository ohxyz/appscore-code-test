const path = require( 'path' );

module.exports = {
    
    mode: 'development',
    entry: {
        'bundle.js': [
            path.resolve(__dirname, 'src/index.js'),
        ]
    },
    output: {
        filename: '[name]',
        path: path.join( __dirname, 'public' ),
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join( __dirname, 'public' ),
        compress: true,
        port: 5000,
    },
    module: {
        rules: [ 
            {
                test: /\.js[x]{0,1}$/,
                exclude: [ /node_modules/, /src\/map/ ],
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