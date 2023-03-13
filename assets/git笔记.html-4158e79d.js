import{_ as n,p as a,q as s,a1 as e}from"./framework-5866ffd3.js";const i={},t=e(`<h2 id="git基本命令" tabindex="-1"><a class="header-anchor" href="#git基本命令" aria-hidden="true">#</a> git基本命令</h2><p>git使用前 配置提交人信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name 姓名       配置姓名
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email 邮箱      配置邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常用命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init                      初始化git仓库
<span class="token function">git</span> status                    查看文件状态

<span class="token function">git</span> <span class="token function">add</span> 文件名                	将文件添加到暂存区
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>                     将全部文件添加到暂存区
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> 提交信息     		将暂存区中的文件提交到本地库

<span class="token function">git</span> reflog                    查看简单提交历史记录
<span class="token function">git</span> log                       查看详细提交历史记录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> 文件名        将文件从暂存区中移出
<span class="token function">git</span> checkout 文件名           将暂存区中的文件覆盖工作目录上的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git撤销命令" tabindex="-1"><a class="header-anchor" href="#git撤销命令" aria-hidden="true">#</a> git撤销命令</h2><p>git 撤销命令常用的有两个</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--hard</span> commitID		回滚到指定版本版本，丢弃后面的提交
<span class="token function">git</span> push <span class="token parameter variable">-f</span> 地址 分支			 回滚后版本号变旧需要强制推送

<span class="token function">git</span> revert <span class="token parameter variable">-n</span> commitID			撤销到之前的一次版本，保留后面的提交
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> 提交信息			 撤销后再次提交，指定的版本提交内容就已经消失
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git分支命令" tabindex="-1"><a class="header-anchor" href="#git分支命令" aria-hidden="true">#</a> git分支命令</h2><p>分支合并冲突时需要手动调整，调整完毕后再进行一次<strong>暂存，提交。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-v</span>                查看分支
<span class="token function">git</span> branch 分支名称           创建分支
<span class="token function">git</span> checkout 分支名称         切换分支
<span class="token function">git</span> merge 分支名称            将指定的分支合并到当前分支上
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> 分支名称        删除已经合并的分支（-D强制删除）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切换分支前保存暂存区中的内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> stash                     临时存储暂存区中的改动
<span class="token function">git</span> stash pop                 回复之前存储的暂存区
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github远程仓库命令" tabindex="-1"><a class="header-anchor" href="#github远程仓库命令" aria-hidden="true">#</a> github远程仓库命令</h2><p>为远程仓库注册别名</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>                     查看已经注册的仓库别名
<span class="token function">git</span> remote <span class="token function">add</span> 别名 远程地址        为远程仓库注册别名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>远程命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> push 地址 分支                  推送远程仓库
<span class="token function">git</span> pull 地址 分支                  拉取全程仓库
<span class="token function">git</span> clone 地址                     克隆全程仓库到本地
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多人合作时务必先拉去远程仓库的最新代码后再推送。</p><h2 id="gitignore忽略文件" tabindex="-1"><a class="header-anchor" href="#gitignore忽略文件" aria-hidden="true">#</a> .gitignore忽略文件</h2><p>让git忽略指定的文件或文件夹，不进行版本控制。只需在隐藏的git文件夹同级目录下创建即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>abc.txt							忽略指定文件
node_modules					忽略指定文件夹
node_modules/hello.js			忽略指定路径下的文件
css/*.js						忽略指定后缀名文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),l=[t];function d(c,r){return a(),s("div",null,l)}const p=n(i,[["render",d],["__file","git笔记.html.vue"]]);export{p as default};
