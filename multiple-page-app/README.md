# 使用create-react-app生成react多页面应用

1. 初始化react app

    ```shell
    npx create-react-app multiple-page-app
    ```

1. eject(eject前要commit)

    ```shell
    yarn eject
    ```


1. 在src文件夹里新建一个about.css(假如我们要做的另一个页面是about.html)

    ```css
    body{
        background-color: yellow;
    }
    ```

1. 在src文件夹里新建一个about.js

    ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './about.css';

    ReactDOM.render(<div>about</div>, document.getElementById('root'));
    ```

1. 增加入口配置，`config/webpack.config.dev.js`

    ```js
    entry: {
        index:[
            require.resolve('./polyfills'),
            require.resolve('react-dev-utils/webpackHotDevClient'),
            paths.appIndexJs
        ],
        about: [
            require.resolve('./polyfills'),
            require.resolve('react-dev-utils/webpackHotDevClient'),
            paths.appSrc + "/about.js",
        ]
    },
    ```

1. 修改输出配置output选项

    ```js
    filename: 'static/js/[name].bundle.js',
    ```

1. 增加HtmlWebpackPlugin

    ```js
    new HtmlWebpackPlugin({
        inject: true,
        chunks: ["index"],
        template: paths.appHtml,
    }),
    new HtmlWebpackPlugin({
        inject: true,
        chunks: ["about"],
        template: paths.appHtml,
        filename: 'about.html',
    }),
    ```

1. 效果如下

    ![multiple page app](assets/multiple-page-app.png?raw=true)

1. 然后按照对dev.js的修改，同样修改好prod.js，就可以build出两个页面了。

完整代码可以在github上看到：

[https://github.com/shengoo/react-demo/tree/master/multiple-page-app](https://github.com/shengoo/react-demo/tree/master/multiple-page-app)