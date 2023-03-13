import{_ as p,M as o,p as c,q as i,R as n,t as s,N as e,a1 as a}from"./framework-5866ffd3.js";const l={},r=a(`<h1 id="axios学习" tabindex="-1"><a class="header-anchor" href="#axios学习" aria-hidden="true">#</a> Axios学习</h1><h2 id="axios初识" tabindex="-1"><a class="header-anchor" href="#axios初识" aria-hidden="true">#</a> Axios初识</h2><p>axios是目前前端最流行的请求库，在vue和react项目中都被经常使用。其本质就是<strong>对ajax的封装</strong>。</p><h2 id="常见请求方式" tabindex="-1"><a class="header-anchor" href="#常见请求方式" aria-hidden="true">#</a> 常见请求方式</h2><ol><li><code>GET</code>:从服务器读取数据 查(R)</li><li><code>post</code>：向服务器添加新的数据 增</li><li><code>put</code>: 更新服务器端已存在的数据</li><li><code>delete</code>：删除服务器的数据 删</li></ol><h2 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h2><p><code>query参数</code> 参数包含在请求地址中 格式为/xxxx?name=tom&amp;age=18 <code>param参数</code> 参数包含在请求地址中 格式为 /xxxx/tom/18 <code>请求体参数</code> 参数包含在请求体中 ，注意<strong>get请求没有请求体</strong></p><p>请求体参数格式包括urlencoded格式（对应请求头：Content-Type:application/x-www-form-urlencoded）<br> json格式（对应请求头：Content-Type:application/x-www-form-urlencoded）两种。</p><h2 id="请求的分类" tabindex="-1"><a class="header-anchor" href="#请求的分类" aria-hidden="true">#</a> 请求的分类</h2><p>http请求可以分为<strong>一般请求</strong>和<strong>ajax请求</strong>。</p><ul><li>一般请求:浏览器一般会直接显示响应体数据,也就是我们常说的刷新/跳转页面</li><li>ajax请求:浏览器不会对界面进行任何更新操作,只是调用监视的回调函数并传入响应相关数据 （ajax实例，fetch）</li></ul><h2 id="axios使用" tabindex="-1"><a class="header-anchor" href="#axios使用" aria-hidden="true">#</a> axios使用</h2><p>axios请求会返回一个promise，可以设置成功和失败的回调。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// axios一般使用</span>
<span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;http://localhost:5000/persons&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> personId<span class="token punctuation">.</span>value <span class="token punctuation">}</span> <span class="token comment">//此处写的是params 但携带的是query参数,自动拼接到路径上</span>
  <span class="token comment">//data:{a:3,d:3}, //配置请求体参数 (json)</span>
	<span class="token comment">//data:&#39;e=5&amp;f=6&#39; //配置请求体参数（urlencoded）</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="axios默认配置项" tabindex="-1"><a class="header-anchor" href="#axios默认配置项" aria-hidden="true">#</a> axios默认配置项</h2>`,15),u={href:"https://www.axios-http.cn/docs/req_config",target:"_blank",rel:"noopener noreferrer"},d=a(`<p>使用 <code>axios.defaults.xxx</code> 来进行配置，请求实例上的配置优先级高于默认配置。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">2000</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span>atjm<span class="token punctuation">}</span>
axios<span class="token punctuation">.</span>defualts<span class="token punctuation">.</span>baseURL<span class="token operator">=</span><span class="token string">&#39;http://localhost:5000&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建axios实例" tabindex="-1"><a class="header-anchor" href="#创建axios实例" aria-hidden="true">#</a> 创建axios实例</h2><p>使用 <code>axios.create（）</code>可以创建多个实例，这样就可以给每个实例配置不同的配置项。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Custom-Header&#39;</span><span class="token operator">:</span> <span class="token string">&#39;foobar&#39;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 添加请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在发送请求之前做些什么</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对请求错误做些什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应数据做点什么</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应错误做点什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="批量请求" tabindex="-1"><a class="header-anchor" href="#批量请求" aria-hidden="true">#</a> 批量请求</h2><p>调用<code>axios.all</code>方法可以实现批量发送请求，其本质也是使用了<code>Promise.all()</code>方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:5050/test1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:5050/test2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://localhost:5050/test3&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;请求成功了&#39;</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;请求失败了&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="取消请求" tabindex="-1"><a class="header-anchor" href="#取消请求" aria-hidden="true">#</a> 取消请求</h2>`,11),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/AbortController",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"AbortController",-1),m=a(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/foo/bar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
   <span class="token comment">// 设置signal</span>
   <span class="token literal-property property">signal</span><span class="token operator">:</span> controller<span class="token punctuation">.</span>signal
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 取消请求</span>
controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(b,x){const t=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[s("我们可以在全局定义一些axios常用的配置项，这样axios实例都会自动带上这些配置。"),n("a",u,[s("全部配置"),e(t)])]),d,n("p",null,[s("axios支持通过创建一个 "),n("a",k,[v,e(t)]),s(" 取消请求：")]),m])}const f=p(l,[["render",h],["__file","axios笔记.html.vue"]]);export{f as default};
