# Axios学习

## Axios初识

axios是目前前端最流行的请求库，在vue和react项目中都被经常使用。其本质就是**对ajax的封装**。



## 常见请求方式

1. `GET`:从服务器读取数据 查(R)
2. `post`：向服务器添加新的数据 增
3. `put`: 更新服务器端已存在的数据 
4. `delete`：删除服务器的数据 删



## 请求参数

`query参数` 参数包含在请求地址中 格式为/xxxx?name=tom&age=18
`param参数` 参数包含在请求地址中 格式为 /xxxx/tom/18
`请求体参数` 参数包含在请求体中 ，注意**get请求没有请求体**

请求体参数格式包括urlencoded格式（对应请求头：Content-Type:application/x-www-form-urlencoded）  
json格式（对应请求头：Content-Type:application/x-www-form-urlencoded）两种。



## 请求的分类

http请求可以分为**一般请求**和**ajax请求**。

- 一般请求:浏览器一般会直接显示响应体数据,也就是我们常说的刷新/跳转页面
- ajax请求:浏览器不会对界面进行任何更新操作,只是调用监视的回调函数并传入响应相关数据 （ajax实例，fetch）



## axios使用

axios请求会返回一个promise，可以设置成功和失败的回调。

```js
// axios一般使用
axios({
  url: 'http://localhost:5000/persons',
  method: 'post',
  params: { id: personId.value } //此处写的是params 但携带的是query参数,自动拼接到路径上
  //data:{a:3,d:3}, //配置请求体参数 (json)
	//data:'e=5&f=6' //配置请求体参数（urlencoded）
  //...
}).then()
```



## axios默认配置项

我们可以在全局定义一些axios常用的配置项，这样axios实例都会自动带上这些配置。[全部配置](https://www.axios-http.cn/docs/req_config)

使用 `axios.defaults.xxx` 来进行配置，请求实例上的配置优先级高于默认配置。

```js
axios.defaults.timeout = 2000
axios.defaults.headers = {name:atjm}
axios.defualts.baseURL='http://localhost:5000'
```



## 创建axios实例

使用 `axios.create（）`可以创建多个实例，这样就可以给每个实例配置不同的配置项。

```js
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})
```



## 拦截器

```js
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  })
```



## 批量请求

调用`axios.all`方法可以实现批量发送请求，其本质也是使用了`Promise.all()`方法。

```js
 axios.all([
    axios.get('http://localhost:5050/test1'),
    axios.get('http://localhost:5050/test2'),
    axios.get('http://localhost:5050/test3')
]).then(
    response => { console.log('请求成功了', response.data), },
    error => { console.log('请求失败了', error) }
)
```



## 取消请求

axios支持通过创建一个 [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) 取消请求：

```js
const controller = new AbortController();

axios.get('/foo/bar', {
   // 设置signal
   signal: controller.signal
}).then(function(response) {
   //...
});
// 取消请求
controller.abort()
```

