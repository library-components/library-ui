## 项目目录结构
```
|-- libraryManagement                   # 项目名称
    |-- .babelrc
    |-- .editorconfig
    |-- .eslintignore                   # eslint配置文件，配置不进行eslint检查的目录和文件
    |-- .eslintrc.js
    |-- .gitignore
    |-- .postcssrc.js
    |-- index.html
    |-- package-lock.json
    |-- package.json
    |-- readme.CHN.md
    |-- README.EN.md
    |-- build                           # vue项目webpack配置文件目录
    |   |-- build.js
    |   |-- check-versions.js
    |   |-- logo.png
    |   |-- utils.js
    |   |-- vue-loader.conf.js
    |   |-- webpack.base.conf.js
    |   |-- webpack.dev.conf.js
    |   |-- webpack.prod.conf.js
    |-- config                          # 项目全局环境配置
    |   |-- dev.env.js
    |   |-- index.js
    |   |-- prod.env.js
    |   |-- test.env.js
    |-- src                             # 项目源码
    |   |-- App.vue
    |   |-- main.js
    |   |-- assets                      # css、图片等静态文件
    |   |   |-- logo.png
    |   |   |-- iconfont                # iconfont的字体文件
    |   |   |   |-- iconfont.css
    |   |   |   |-- iconfont.eot
    |   |   |   |-- iconfont.svg
    |   |   |   |-- iconfont.ttf
    |   |   |   |-- iconfont.woff
    |   |   |-- svg
    |   |       |-- logo.svg
    |   |-- axios                       # axios配置
    |   |   |-- index.js
    |   |   |-- login.js
    |   |-- components
    |   |   |-- homepage
    |   |   |   |-- index.vue
    |   |   |-- login
    |   |   |   |-- index.vue
    |   |   |-- managenavigator
    |   |   |   |-- index.vue
    |   |   |-- markdown
    |   |       |-- index.vue
    |   |-- mock                        # mockjs配置目录
    |   |   |-- mock.config.js
    |   |   |-- mock.example.json
    |   |   |-- mockServer.json
    |   |-- router                      # vue-router
    |   |   |-- index.js
    |   |-- store                       # vuex
    |   |   |-- index.js
    |   |-- templates                   # 项目所有的公共组件
    |   |   |-- inputgroup
    |   |   |   |-- index.vue
    |   |   |-- modal
    |   |   |   |-- index.vue
    |   |   |-- navbar
    |   |   |   |-- index.vue
    |   |   |-- particle
    |   |       |-- index.vue
    |   |-- utils                       # 项目所有的工具函数
    |       |-- HTMLLexicalParser.js
    |       |-- HTMLSyntacticalParser.js
    |       |-- readme.md
    |       |-- rem.js
    |-- static
    |   |-- .gitkeep
    |-- test                            # 测试
        |-- e2e
        |   |-- nightwatch.conf.js
        |   |-- runner.js
        |   |-- custom-assertions
        |   |   |-- elementCount.js
        |   |-- specs
        |       |-- test.js
        |-- unit
            |-- .eslintrc
            |-- jest.conf.js
            |-- setup.js
            |-- specs
                |-- HelloWorld.spec.js
```