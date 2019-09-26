# axios-study

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 仅作学习axios，未进行路由跳转设计；测试的时候，在localhost：8080后面直接输入对应组件

  例如：http://localhost:8080/2-3


## 知识点总结：

#### axios请求方法：get, post, put, patch, delete

  + get: 获取数据
  + post: 提交数据（表单提交，文件上传等） （公司中一般用于新建）
  + put: 更新数据 （所有数据推送到后端）  （公司中一般用于更新）
  + patch: 更新数据 （只将修改的数据推送到后端） （公司中一般用于更新，表单数据的内容比较多的时候）
  + delete: 删除数据

#### 2-2 请求方法的不同书写格式

#### 2-3 并发请求，axios.all及axios.spread

#### 3-1 创建一个axios实例及实例的作用

#### 3-2 配置axios实例的参数及实例开发中的情况

#### 3-3 登录拦截器及实例开发中的登录拦截器的作用

#### ContactList.vue 为axios的一个实例，运用Vant-ui，以及node.js 自己定义的数据，进行一个联系人的一个demo
  + 使用vant-ui 建议使用方式1，自动按需引入组件

  + 并且基于Vue-cli3创建的项目，推荐使用babel7.0
    + `
      // 对于使用 babel7 的用户，可以在 babel.config.js 中配置
        module.exports = {
          plugins: [
            ['import', {
              libraryName: 'vant',
              libraryDirectory: 'es',
              style: true
            }, 'vant']
          ]
        };
      `

#### 接口数据




