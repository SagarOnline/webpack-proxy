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
	port: 8080,
	host: '0.0.0.0',
        proxy: {
            '/': {
              target: 'https://192.168.42.222:8443/',
              secure: false,
              //ignorePath: true,
            }
        }
    }

}