<template>
<div>
    <h1>第13章 添加交互</h1>
    <h2>13.1 在SVG中使用链接</h2>
    <ul>
        <li>最简单的SVG交互元素是&lt;a&gt;超链接，和HTML的超链接作用相同</li>
        <li>SVG的用法
            <ol>
                <li>SVG的a元素使用的是xlink:href而不是href</li>
                <li>SVG的a元素是个容器，SVG的a元素必须包含&lt;text&gt;才可以正常显示文字</li>
            </ol>
        </li>
    </ul>
    <code>
        <svg width="300" height="300" viewBox="0 0 300 300" class="border">
            <a xlink:href="/img/cat.svg">
                <text x="20" y="20">查看小猫SVG</text>
            </a>
            <a xlink:href="http://www.baidu.com">
                <text x="20" y="50">打开百度</text>
            </a>
            <a xlink:href="http://www.sina.com.cn/" target="_self">
                <rect x="20" y="60" width="100" height="45" style="fill: #996699;"></rect>
                <text x="35" y="90" font-size="16" stroke="white">打开新浪</text>
            </a>
        </svg>
    </code>
    注意事项
    <ul>
        <li>在上例中&lt;a xlink:href ...&gt;所指向的图片，必须放到public下，也就是可以被浏览器直接访问才可以，vue的的assets目录的资源都是需要编译的，这种无法直接访问的不能用于 &lt;xlink:href &gt;</li>
        <li>&lt;a&gt;也支持target属性，和html规范一样</li>
    </ul>
    <h3>使用CSS样式</h3>
    <ul>
        <li>通过&lt;style type="text/css"&gt;可以控制SVG的样式风格（参看/img/t13_1.svg）</li>
        <li><strong>注意：vue对svg的内部的style样式无法解析（并非真的语法错误），但可以把内部style改到vue的style部分搞定</strong></li>
    </ul>
    下面是在vue中，通过svg嵌入一个超链接，在超链接中打开外部svg的例子
    <pre>
        &lt;svg xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             width="400" height="30"&gt;
            &lt;a<strong>class="words" xlink:href="cat.svg"</strong>&gt;
                &lt;text x="20" y="20"&gt;光标移入显示红字，点击可以查看小猫的SVG&lt;/text&gt;
            &lt;/a&gt;
        &lt;/svg&gt;

        ....

        <strong>a.words:hover, a.words:focus</strong> {
            stroke: red;
            text-decoration: none;
            outline:none;
            fill:none;
        }
    </pre>
    <code>
        <svg xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             width="400" height="30">
            <a class="words" xlink:href="cat.svg">
                <text x="20" y="20">光标移入显示红字，点击可以查看小猫的SVG</text>
            </a>
        </svg>
    </code>
    <h2>13.2 控制CSS动画</h2>
    <strong>动画需要用到第12章内容，在此略过</strong>
    <h2>13.3 用户触发的SMIL动画</h2>
    <ul>
        <li>CSS动画的局限：只能用于有限的变动类型和有限的事件响应</li>
        <li>SMIL动画：可以通过element.eventName设置响应交互动画时间属性，以begin和end来响应用户操作</li>
        <li>一旦动画开始就会进行下去，直到动画完成</li>
    </ul>
    <pre>
        &lt;svg width="200" height="120" class="border"&gt;
            &lt;g <strong>id="button"</strong>&gt;
                &lt;rect x="10" y="10" width="40" height="25" rx="4" ry="4" style="fill:#ddd" /&gt;
                &lt;text x="30" y="25" style="text-anchor: middle; font-size: 8pt;"&gt;开始&lt;/text&gt;
            &lt;/g&gt;
            &lt;g transform="translate(100, 60)"&gt;
                &lt;path d="M -25 -15, 0 -15, 25 15, -25 15 Z" style="stroke: gray; fill:#699"&gt;
                    &lt;animateTransform <strong>attributeName="transform" type="rotate"</strong> from="0" to="360" <strong>begin="button.click"</strong> dur="3s"&gt;
                    &lt;/animateTransform&gt;
                &lt;/path&gt;
            &lt;/g&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200" height="120" class="border">
            <g id="button">
                <rect x="10" y="10" width="40" height="25" rx="4" ry="4" style="fill:#ddd" />
                <text x="30" y="25" style="text-anchor: middle; font-size: 8pt;">开始</text>
            </g>
            <g transform="translate(100, 60)">
                <path d="M -25 -15, 0 -15, 25 15, -25 15 Z" style="stroke: gray; fill:#699">
                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" begin="button.click" dur="3s">
                    </animateTransform>
                </path>
            </g>
        </svg>
    </code>
    <ul>
        <li>这种形式的事件只是SVG事件的一种触发方式，而且并不好用，后面还有别的方法</li>
    </ul>
    <h2>13.4 使用脚本控制SVG</h2>
    <ul>
        <li>可以通过javascript来控制SVG</li>
        <li>以图片方式显示SVG时，内嵌样式和脚本可能不会执行，取决于显示软件的支持程度</li>
        <li>SVG读取文档时会创建一颗节点树（SVG的DOM模型），脚本会对DOM进行访问和操作</li>
        <li>常用方法和属性（和javascript操作html DOM的方法完全相同）
            <ul>
                <li>document.getElementById(id)：根据id获取DOM元素</li>
                <li>document.getElementByName(name)：根据名字获取DOM元素</li>
                <li>element.getAttribute(attrName)：获取属性</li>
                <li>element.setAttribute(attrName, attrValue)：设置属性</li>
                <li>element.removeAttribute(attrName)：移除属性</li>
                <li>element.style.getPropertyValue(propName)：获取样式属性</li>
                <li>element.style.setPropertyValue(propName, propValue)：设置样式属性</li>
                <li>element.style.removeProperty(propName)：移除样式属性</li>
            </ul>
        </li>
        <li>SVG和htmlDOM方法不一样的地方
            <ul>
                <li>element.style.cssText：是个表示全部样式的字符串，可以一次性完整修改所有样式</li>
                <li>element.textContent：可以一次性修改所有当前节点及子节点的字符串</li>
                <li>SVG DOM不支持innerHTML，innerText</li>
                <li>SVG DOM不能通过element.style["属性名"]方式读写属性</li>
            </ul>
        </li>
        <li>document.getElementById(id)方法根据id来获取DOM节点</li>
        <li>domcument.getElementByName(name)根据名字来获取节点</li>
    </ul>
    <pre>
        &lt;svg width="400" height="120" class="border"&gt;
            &lt;g id="btn134_1" <strong>@click.stop.prevent="btn134_1_click"</strong>&gt;
                &lt;rect ref="rect134_1" x="20" y="20" width="160" height="40" rx="4" ry="4" :style='{"fill": t134_1.style.fill}' /&gt;
                &lt;foreignObject ref="frg134_1" x="20" y="20" width="160" height="40"&gt;
                    &lt;div style="text-align: center"&gt;点击可以修改状态&lt;/div&gt;
                &lt;/foreignObject&gt;
            &lt;/g&gt;
        &lt;/svg&gt;

        ....

            btn134_1_click(){
                if (this.t134_1.status==0){
                    <strong>//直接用$refs.refName的方式访问SVG元素</strong>
                    this.$refs.rect134_1.setAttribute("width", 300)
                    this.$refs.rect134_1.setAttribute("height", 70)
                    this.$refs.frg134_1.setAttribute("width", 300)
                    this.$refs.frg134_1.setAttribute("height", 70)
                    <strong>//关于样式，可以直接用vue的样式绑定的方法实现</strong>
                    this.t134_1.style.fill="green"
                    this.t134_1.status=1
                }else{
                    this.$refs.rect134_1.setAttribute("width", 160)
                    this.$refs.rect134_1.setAttribute("height", 40)
                    this.$refs.frg134_1.setAttribute("width", 160)
                    this.$refs.frg134_1.setAttribute("height", 40)
                    this.t134_1.style.fill="#ddd"
                    this.t134_1.status=0
                }
            }
    </pre>
    <code>
        <svg width="400" height="120" class="border">
            <g id="btn134_1" @click.stop.prevent="btn134_1_click">
                <rect ref="rect134_1" x="20" y="20" width="160" height="40" rx="4" ry="4" :style='{"fill": t134_1.style.fill}' />
                <foreignObject ref="frg134_1" x="20" y="20" width="160" height="40">
                    <div style="text-align: center">点击可以修改状态</div>
                </foreignObject>
            </g>
        </svg>
    </code>
    <ul>
        <li>从上例可以看出SVG中的事件绑定可以按照vue的方式进行绑定 :)</li>
        <li>document.addEventListener这种原生的Javascript的绑定方式也支持</li>
    </ul>
    <h3>13.4.1 事件概览</h3>
    <ul>
        <li>用户接口事件：用户输入引发的事件（<strong>没有搞懂用户接口事件的明确界定</strong>）</li>
        <li>鼠标事件：</li>
        <li>DOM变化：当dom发生变化时的事件，例如元素添加到DOM</li>
        <li>文档事件：文档加载时触发SVG onoad事件<strong>onload也可以用vue的生命周期函数来替代</strong></li>
        <li>动画事件：</li>
        <li>键盘事件：</li>
    </ul>
    <h3>14.4.2 监听和响应事件</h3>
    <ul>
        <li>在SVG中定义的事件要写在&lt;script&gt;&lt;![CDATA[ ...... ]]&gt; &lt;/script&gt; 但这种代码在vue中无法处理，只能按照vue单文件组件规范编写</li>
        <li>document.addEventListener()来建立监听事件，用法和html DOM规范中的同名方法一样</li>
        <li>SVG中的事件一样存在冒泡问题</li>
    </ul>
    <pre>
        &lt;svg width="200" height="200" class="border"&gt;
            &lt;circle ref="c1442_1" cx="70" cy="70" r="50" style="stroke: none; fill: #996699;"
            <strong>@mouseenter="t1442_1_mouseenter" @mouseleave="t1442_1_mouseleave"</strong>/&gt;
            &lt;foreignObject x="0" y="140" width="160" height="50"&gt;
                &lt;div style="text-align: left"&gt;鼠标移入可以改变圆形的大小&lt;/div&gt;
            &lt;/foreignObject&gt;
        &lt;/svg&gt;

        ....

        t1442_1_mouseenter(event){
            this.$refs.c1442_1.setAttribute("r", 68)
        },
        t1442_1_mouseleave(event){
            this.$refs.c1442_1.setAttribute("r", 50)
        }
    </pre>
    <code>
        <svg width="200" height="200" class="border">
            <circle ref="c1442_1" cx="70" cy="70" r="50" style="stroke: none; fill: #996699;" @mouseenter="t1442_1_mouseenter($event)" @mouseleave="t1442_1_mouseleave($event)"/>
            <foreignObject x="0" y="140" width="160" height="50">
                <div style="text-align: left">鼠标移入可以改变圆形的大小</div>
            </foreignObject>
        </svg>
    </code>
    <h3>13.4.3 修改多个对象的属性</h3>
    <ul>
        <li>就是点击事件显示不同的path，例子没什么好写的</li>
    </ul>
    <h3>13.4.4 拖拽对象</h3>
    <ul>
        <li>SVG拖拽对象需要用到的事件
            <ul>
                <li>mousedown</li>
                <li>mousemove</li>
                <li>mouseup</li>
            </ul>
        </li>
    </ul>
    <h3>13.4.5 与HTML页面交互</h3>
    <ul>
        <li>本节主要介绍html页面和内嵌SVG元素（object/embed）间的交互</li>
        <li>与HTML页面交互的关键点
            SVG内部要定义一个方法method2，在svg的初始化方法里 parent.method1=method2;
            <pre>
                &lt;svg ... onload="init(event)"&gt;
                function init(event){
                    <strong>//绑定外部事件</strong>
                    parent.method1 = function(color){
                    obj = document.getElementById("someId");
                    obj.style.setProperty("fill", color, null);
                }
            </pre>
            在HTML页面中
            <pre>
                window.method1('red') <strong>//因为之前已经在SVG的onload事件里绑定过method1，所以这里直接调用就可以</strong>
            </pre>
            随书的范例：<a href="http://oreillymedia.github.io/svg-essentials-examples/ch13/shirt_interact.html">shirt_interact</a>
        </li>
    </ul>
    <h3>13.4.6 创建新元素</h3>
    <ul>
        <li>用Vue的方法也可以创建SVG新元素，例子就不写了</li>
    </ul>
</div>
</template>

<script>
    export default {
        name: "Training13",
        data:function(){
            return {
                t134_1:{
                    status:0,
                    style:{
                        fill:"#ddd"
                    }
                }
            }
        },
        methods:{
            btn134_1_click(){
                if (this.t134_1.status==0){
                    this.$refs.rect134_1.setAttribute("width", 300)
                    this.$refs.rect134_1.setAttribute("height", 70)
                    this.$refs.frg134_1.setAttribute("width", 300)
                    this.$refs.frg134_1.setAttribute("height", 70)
                    this.t134_1.style.fill="green"
                    this.t134_1.status=1
                }else{
                    this.$refs.rect134_1.setAttribute("width", 160)
                    this.$refs.rect134_1.setAttribute("height", 40)
                    this.$refs.frg134_1.setAttribute("width", 160)
                    this.$refs.frg134_1.setAttribute("height", 40)
                    this.t134_1.style.fill="#ddd"
                    this.t134_1.status=0
                }
            },
            t1442_1_mouseenter(event){
                this.$refs.c1442_1.setAttribute("r", 68)
            },
            t1442_1_mouseleave(event){
                this.$refs.c1442_1.setAttribute("r", 50)
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../../common/styles/common.less";
a.words:hover, a.words:focus {
    stroke: red;
    text-decoration: none;
    outline:none;
    fill:none;
}
</style>
