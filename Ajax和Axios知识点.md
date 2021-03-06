## AJAX是什么？  
AJAX的全称是Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。  

ajax不是新的编程语言，而是一种使用现有标准的新方法。ajax是与服务器交换数据并更新部分网页的艺术，在不重新加载整个页面的情况下。  

ajax是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。  

ajax是一种用于创建快速动态网页的技术。通过在后台与服务器进行少量数据交换。ajax可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。而传统的网页（不使用ajax）如果需要更新内容，必须重载整个网页面。  

ajax的应用使用支持以上技术的web浏览器作为运行平台。这些浏览器目前包括：Mozilla、Firefox、Internet Explorer、Opera、Konqueror及Safari。但是Opera不支持XSL格式对象，也不支持XSLT。  

ajax前景非常乐观，可以提高系统性能，优化用户界面。AJAX现有直接框架AjaxPro，可以引入AjaxPro.2.dll文件，可以直接在前台页面JS调用后台页面的方法。但此框架与FORM验证有冲突。另微软也引入了AJAX组建，需要添加AjaxControlToolkit.dll文件，可以在控件列表中出现相关控件。  

## ajax的优点：  
1、最大的一点是页面无刷新，用户的体验非常好。  
2、使用异步方式与服务器通信，具有更加迅速的响应能力。。  
3、可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，ajax的原则是“按需取数据”，可以最大程度的减少冗余请求，和响应对服务器造成的负担。  
4、基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。  
5、ajax可使因特网应用程序更小、更快，更友好。  

## ajax的缺点：  
1、ajax不支持浏览器back按钮。  
2、安全问题 AJAX暴露了与服务器交互的细节。  
3、对搜索引擎的支持比较弱。  
4、破坏了程序的异常机制。  
5、不容易调试。  

## Axios  
axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，它本身具有以下特征：  
从浏览器中创建 XMLHttpRequest  
从 node.js 发出 http 请求  
支持 Promise API  
拦截请求和响应  
转换请求和响应数据  
取消请求  
自动转换JSON数据  
客户端支持防止 CSRF/XSRF  

## 引入方式：  
1.$ npm install axios  

 
2.$ cnpm install axios //taobao源   

3.$ bower install axios  
4.或者使用cdn：<script src="https://unpkg.com/axios/dist/axios.min.js"></script>  

## 具体例子  
1.https://blog.csdn.net/qq_41033290/article/details/82844716  
2.https://blog.csdn.net/hsany330/article/details/71079745  
2.http://axios-js.com/zh-cn/docs/ 官方文档  


