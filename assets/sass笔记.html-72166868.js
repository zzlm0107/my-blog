import{_ as s,p as n,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h2 id="sass学习" tabindex="-1"><a class="header-anchor" href="#sass学习" aria-hidden="true">#</a> Sass学习</h2><h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单行注释： / / css文件里不会显示 压缩方式的css不会显示
多行注释： /**/ css文件里会显示 压缩方式的css不会显示
强制注释：/* ! */ css文件里会显示 压缩方式的css会显示
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套写法" tabindex="-1"><a class="header-anchor" href="#嵌套写法" aria-hidden="true">#</a> 嵌套写法</h3><p>与less相同，可查看上文。</p><h3 id="父元素选择器" tabindex="-1"><a class="header-anchor" href="#父元素选择器" aria-hidden="true">#</a> 父元素选择器&amp;</h3><p>与less相同，可查看上文。</p><h3 id="占位符选择器" tabindex="-1"><a class="header-anchor" href="#占位符选择器" aria-hidden="true">#</a> 占位符选择器%</h3><p>占位符选择器声明那些主要用来扩展其他类的类，并且不会将其编译成css。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 用来进行极差等扩展，不会对其进行编译</span>
<span class="token selector"><span class="token placeholder">%box</span> </span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="运算" tabindex="-1"><a class="header-anchor" href="#运算" aria-hidden="true">#</a> 运算</h3><p>sass同样有运算功能，用法基本与less相同。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .scss文件</span>
<span class="token selector">.box </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50px <span class="token operator">+</span> 50px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px <span class="token operator">-</span> 50px<span class="token punctuation">;</span>
    <span class="token comment">// 这里不能两个都带单位，否则是100px*px这种不合法的值</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 10px <span class="token operator">*</span> 10<span class="token punctuation">;</span> 
    <span class="token comment">// css会将/认为是合法的，所以需要加括号</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>100px <span class="token operator">/</span> 2<span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><p>sass中变量的定义语法为 <strong>$变量名：值</strong> 。需要使用时直接在css值的位置写 <strong>$变量名</strong> 即可。</p><ul><li><p>多个单词，变量名以-分割，如：$theme-color。</p></li><li><p>使用 <strong>！global</strong> 来定义全局变量; 使用 <strong>！default</strong> 来定义默认变量。</p></li><li><p>对于选择器名称、属性名称、url和@import使用变量时，变量必须以插值 <strong>#{$变量名}</strong> 的形式使用（同less）。</p></li><li><p>变量也可以用来定义<strong>list列表</strong>和<strong>map集合</strong>（一组键值对）。</p></li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .scss文件  Sass后缀名为scss</span>
<span class="token property"><span class="token variable">$dark</span></span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$side</span></span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$dark</span></span><span class="token punctuation">:</span> #eee <span class="token statement keyword">!default</span><span class="token punctuation">;</span>   <span class="token comment">//默认变量，如果没有定义过就使用，定义过就使用定义的</span>

<span class="token property"><span class="token variable">$my-list</span></span><span class="token punctuation">:</span> 1px 5px 10px 20px<span class="token punctuation">;</span>	<span class="token comment">// list列表</span>
<span class="token property"><span class="token variable">$my-map</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token property">font-10</span><span class="token punctuation">:</span> 10px<span class="token punctuation">,</span> <span class="token property">font-red</span><span class="token punctuation">:</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// map集合</span>
<span class="token selector">.box </span><span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$dark</span><span class="token punctuation">;</span>
    <span class="token property"><span class="token variable">$my-color</span></span><span class="token punctuation">:</span> #fff !global<span class="token punctuation">;</span> 	<span class="token comment">// 在局部定义全局变量</span>
<span class="token punctuation">}</span>

<span class="token selector">.box2 </span><span class="token punctuation">{</span>
    <span class="token property">border-<span class="token variable">#{$side}</span>-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span> <span class="token comment">// 在选择器名称上使用变量</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="混合" tabindex="-1"><a class="header-anchor" href="#混合" aria-hidden="true">#</a> 混合</h3><p>使用混合可以将一系列样式从一个规则引入（“混合”）到另一个样式规则集，充分发挥复用性。</p><p><strong>不含参数的混合：</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">mystyle </span><span class="token punctuation">{</span>      <span class="token comment">//定义一个混合</span>
  <span class="token comment">// css样式</span>
<span class="token punctuation">}</span>

<span class="token selector">.box </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> mystyle<span class="token punctuation">;</span>    <span class="token comment">//使用混合样式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>含有参数的混合：</strong> 可以指定参数传值，这样参数顺序未知也可以正确传值；也可以设置默认值</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> mystyle <span class="token punctuation">(</span><span class="token variable">$param1</span>，<span class="token variable">$param2</span>， ...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// css样式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// 定义一个有默认参数的mixin</span>
<span class="token keyword">@mixin</span> box <span class="token punctuation">(</span><span class="token property"><span class="token variable">$width</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">,</span> <span class="token property"><span class="token variable">$height</span></span><span class="token punctuation">:</span> 50px<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$width</span><span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$height</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 使用</span>
<span class="token selector">.box </span><span class="token punctuation">{</span>
    <span class="token comment">// 直接将css样式写入,也可以传入定义的变量</span>
    <span class="token keyword">@include</span> <span class="token function">box</span><span class="token punctuation">(</span>200px<span class="token punctuation">,</span> 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><p>如果一个元素的样式和另一个元素的样式完全一样，可以使用 <strong>@extend</strong> 就可以把另一个元素的所有样式全部继承过来，继承的本质就是使用并集运算符。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// .scss文件</span>
<span class="token selector"><span class="token placeholder">%box1</span> </span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// box2 继承 box1的样式</span>
<span class="token selector">.box2 </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%box1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>但继承要慎用，被继承相关的元素的子元素的样式也会继承。</strong></p><h3 id="条件判断与循环" tabindex="-1"><a class="header-anchor" href="#条件判断与循环" aria-hidden="true">#</a> 条件判断与循环</h3><p>Sass可以根据条件判断给出特定的样式：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@if</span> <span class="token selector">条件语句 </span><span class="token punctuation">{</span>
  <span class="token comment">// css样式1</span>
<span class="token punctuation">}</span> <span class="token keyword">@else if</span> <span class="token selector">条件语句 </span><span class="token punctuation">{</span>
  <span class="token comment">// css样式2</span>
<span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
  <span class="token comment">// css样式3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sass也支持<strong>for循环</strong>，重复输出css，有两种语法：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@for</span> <span class="token variable">$index</span> <span class="token keyword">from</span> 开始值 <span class="token keyword">through</span> <span class="token selector">结束值 </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">//从开始值开始，到结束值结束，包含结束值  index表示 1， 2，...结束值</span>

<span class="token keyword">@for</span> <span class="token variable">$index</span> <span class="token keyword">from</span> <span class="token selector">开始值 to 结束值 </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">//从开始值开始，到结束值结束，不包含结束值  index表示 1， 2，...结束值-1</span>

<span class="token comment">// .scss文件</span>
<span class="token keyword">@for</span> <span class="token variable">$i</span> <span class="token keyword">from</span> <span class="token selector">1 to 5 </span><span class="token punctuation">{</span>
    <span class="token selector">.col-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 50px <span class="token operator">*</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sass同样支持<strong>each循环</strong>：</p><p>遍历一个以空格分隔的列表，然后依次从列表中取出对应值。</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$index</span> in <span class="token variable">$list</span> </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// .scss文件</span>
<span class="token property"><span class="token variable">$icons</span></span><span class="token punctuation">:</span> success fail warning<span class="token punctuation">;</span>
<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$i</span> in <span class="token variable">$icons</span> </span><span class="token punctuation">{</span>
    <span class="token selector">.icon-<span class="token variable">#{$i}</span> </span><span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url</span><span class="token punctuation">(</span>../images/icons/<span class="token variable">#{$icon}</span>.png<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以及还有<strong>while循环：</strong></p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@while</span> <span class="token selector">条件 </span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// .scss文件</span>
<span class="token property"><span class="token variable">$index</span></span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token keyword">@while</span> <span class="token selector"><span class="token variable">$index</span>&gt; 0 </span><span class="token punctuation">{</span>
    <span class="token selector">.box-<span class="token variable">#{$index}</span> </span><span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 5px <span class="token operator">*</span> <span class="token variable">$index</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token property"><span class="token variable">$index</span></span><span class="token punctuation">:</span> <span class="token variable">$index</span> <span class="token operator">-</span> 2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义函数" tabindex="-1"><a class="header-anchor" href="#自定义函数" aria-hidden="true">#</a> 自定义函数</h3><p>语法：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@function</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token variable">$param1</span>，<span class="token variable">$param2</span>，...<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// .scss文件</span>
<span class="token property"><span class="token variable">$index</span></span><span class="token punctuation">:</span> 6<span class="token punctuation">;</span>
<span class="token keyword">@function</span> <span class="token function">get-color</span><span class="token punctuation">(</span><span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$key</span> &gt; 5 </span><span class="token punctuation">{</span>
        <span class="token keyword">@return</span> #000<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">@else</span> <span class="token punctuation">{</span>
        <span class="token keyword">@return</span> #fff<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">get-color</span><span class="token punctuation">(</span><span class="token variable">$index</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h3><p>sass的导入同样使用 <strong>@import</strong> 完成，与less用法相同。</p><p><em>如果像让sass文件不进行编译，如只用来定义全局变量的sass文件，只需要对文件重命名在前面加上一个 <strong>下划线 _</strong> 即可。</em></p>`,44),c=[t];function i(l,o){return n(),a("div",null,c)}const r=s(p,[["render",i],["__file","sass笔记.html.vue"]]);export{r as default};
