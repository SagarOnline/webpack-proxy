//const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    /*module:{
        rules: [
                {
                    test: /\.html$/,
                        use: [
                            {
                                loader: "html-loader",
                                options: {minimize: true}
                            }
                        ]
                }
        ]
    }
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ],*/
    devServer:{
        https: true,
        proxy: {
            '/': {
              target: 'https://chartink.com/',
              secure: false,
              //ignorePath: true,
            }
        }
    }
}