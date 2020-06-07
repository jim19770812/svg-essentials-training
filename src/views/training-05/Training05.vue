<template>
<div>
    <h1>第5章 文档结构</h1>
    <ul>
        <li>本章重点介绍文档表现和文档结构分离的做法</li>
    </ul>
    <h2>5.1 结构和表现</h2>
    <ul>
        <li>所谓结构是指SVG的XML组织形式，即数据内容</li>
        <li>所谓表现是其风格等，即样式表</li>
    </ul>
    <h2>5.2 在SVG中使用样式</h2>
    <ul>
        <li>SVG允许使用样式表，内联样式表，外部样式表，内部样式表都可以</li>
        <li>SVG使用样式表的方式和HTML规范一致</li>
        <li><strong>SVG中只有一部分CSS样式语法可以使用</strong></li>
    </ul>
    <h3>内部样式表和内联样式表的例子</h3>
    <pre>
    &lt;svg width="300" height="100" viewBox="0 0 300 100" class="border"&gt;
        &lt;rect x="20" y="20" width="100" height="40" <strong>style="stroke:black; fill:green"</strong>&gt;&lt;/rect&gt;
        &lt;text x="30" y="45"&gt;内联样式表&lt;/text&gt;
        &lt;rect x="150" y="20" width="100" height="40" <strong>class="c5_2_1"</strong>&gt;&lt;/rect&gt;
        &lt;text x="160" y="45"&gt;内部样式表&lt;/text&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="300" height="100" viewBox="0 0 300 100" class="border">
            <rect x="20" y="20" width="100" height="40" style="stroke:black; fill:green"></rect>
            <text x="30" y="45">内联样式表</text>
            <rect x="150" y="20" width="100" height="40" class="c5_2_1"></rect>
            <text x="160" y="45">内部样式表</text>
        </svg>
    </code>
    <h3>外部样式表</h3>
    <ul>
        <li>由于SVG是XML，引入外部样式表需要使用XML语法</li>
    </ul>
    <pre>
        &lt;?xml-stylesheet type="text/css" href="xxxxx"?&gt;
    </pre>
    引入之后就可以和内部样式的方式使用样式了
    <ul>
        <li>内联样式表有更快的渲染速度，但也降低了样式表的复用性，也增加了SVG文件的尺寸</li>
        <li>外部样式表虽然额外多了文件加载开销，但样式的复用性更好，SVG文件尺寸也会减小，特别是多个SVG使用一个样式时，可以显著减少文件载入时间</li>
    </ul>
    <h3>5.2.4 表现属性</h3>
    <ul>
        <li>表现属性stroke，fill之类控制表现的属性</li>
        <li>style="stroke:black; fill:green" 这种写法提现了表现和结构分离的要求，但在一些需要SVG独立时是有问题的，所以这些表现属性以独立的形态出现是个不错的选择</li>
        <li>注意：要优先使用样式的形式定义表现</li>
    </ul>
    <h2>5.3 分组和引用对象</h2>
    <ul>
        <li>分组类似viso的对象租，可以把多个对象组合起来使用</li>
        <li>引用对象是指对象复用之前已经定义过的对象，避免重复编写，减少文件尺寸</li>
    </ul>
    <h3>5.3.1 分组元素 &lt;g&gt;</h3>
    <ul>
        <li>分组元素会将所有子元素作为一个组合，一般分组元素会有一个id属性（在该html文档中是唯一）</li>
        <li>分组元素还具有&lt;title&gt;子元素来提供分组标题</li>
        <li>分组元素还具有&lt;desc&gt;子元素来提供分组注解</li>
        <li>一些SVG编辑器会在光标提示中显示分组的title和desc信息</li>
        <li>分组元素可以迁到分组元素</li>
        <li>分组元素提供了类似图层的概念，一个分组对象就是一个图层</li>
        <li><strong>分组元素是SVG中非常常用的一个元素</strong></li>
    </ul>
    <pre>
    &lt;svg width="240" height="140" viewBox="0 0 240 140"&gt;
        &lt;title&gt;我是一个分组&lt;/title&gt;
        &lt;desc&gt;分组的例子&lt;/desc&gt;
        <strong>&lt;g id="house"</strong> style="fill:none; stroke:black;"&gt;
            &lt;title&gt;一栋房子&lt;/title&gt;
            &lt;desc&gt;房子分组&lt;/desc&gt;
            &lt;rect x="6" y="50" width="60" height="60"&gt;&lt;/rect&gt;
            &lt;polyline points="6 50, 36 9, 66 50"&gt;&lt;/polyline&gt;
            &lt;polyline points="36 110, 36 80, 50 80, 50 110"&gt;&lt;/polyline&gt;
        <strong>&lt;/g&gt;</strong>
        <strong>&lt;g id="man"</strong> style="fill:none; stroke:black;"&gt;
            &lt;title&gt;一个人&lt;/title&gt;
            &lt;desc&gt;人类分组&lt;/desc&gt;
            &lt;circle cx="85" cy="56" r="10"&gt;&lt;/circle&gt;
            &lt;line x1="85" y1="66" x2="85" y2="80"&gt;&lt;/line&gt;
            &lt;polyline points="76 104, 85 80, 94 104"&gt;&lt;/polyline&gt;
            &lt;polyline points="76 70, 85 76, 94 70"&gt;&lt;/polyline&gt;
        <strong>&lt;/g&gt;</strong>
    &lt;/svg&gt;

    </pre>
    <code>
        <svg width="240" height="140" viewBox="0 0 240 140" class="border">
            <title>我是一个分组</title>
            <desc>分组的例子</desc>
            <g id="house" style="fill:none; stroke:black;">
                <title>一栋房子</title>
                <desc>房子分组</desc>
                <rect x="6" y="50" width="60" height="60"></rect>
                <polyline points="6 50, 36 9, 66 50"></polyline>
                <polyline points="36 110, 36 80, 50 80, 50 110"></polyline>
            </g>
            <g id="man" style="fill:none; stroke:black;">
                <title>一个人</title>
                <desc>人类分组</desc>
                <circle cx="85" cy="56" r="10"></circle>
                <line x1="85" y1="66" x2="85" y2="80"></line>
                <polyline points="76 104, 85 80, 94 104"></polyline>
                <polyline points="76 70, 85 76, 94 70"></polyline>
            </g>
        </svg>
    </code>
    <h3>5.3.2 &lt;use&gt;元素</h3>
    <ul>
        <li>use元素主要是用来复用元素的（类似复制粘贴），在前面几章中已经有过应用</li>
        <li>use可以引用独立的元素也可以引用分组元素，但被引用的元素必须有全文档唯一的id</li>
        <li>&lt;use xlink:href="#被引用的ID" x="新的x轴坐标" y="新的yz轴坐标"&gt;</li>
    </ul>
    <pre>
        &lt;svg width="300" height="100" viewBox="0 0 300 100" class="border"&gt;
            &lt;rect id="src" x="20" y="20" width="100" height="40" style="stroke:black; fill:green"&gt;&lt;/rect&gt;
            &lt;text x="30" y="45"&gt;源对象&lt;/text&gt;
            &lt;use id="tar" xlink:href="#src" <strong>x="130" y="0"</strong>&gt;&lt;/use&gt;
            &lt;text x="160" y="45"&gt;use后对象&lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="300" height="100" viewBox="0 0 300 100" class="border">
            <rect id="src_5_3_2" x="20" y="20" width="100" height="40" style="stroke:black; fill:green"></rect>
            <text x="30" y="45">源对象</text>
            <use id="tar_5_3_2" xlink:href="#src_5_3_2" x="130" y="0" style="fill: blue"></use>
            <text x="160" y="45">use后对象</text>
        </svg>
    </code>
    <ul>
        <li>注意：复制后对象的x和y坐标的基准值是源对象，所以新对象的x,y都是相对位置，因此实际的坐标x=20+130=150, y=20+0=0</li>
        <li><strong>另外源对象是绿色，目标对象改成了蓝色，但改不了</strong></li>
    </ul>
    <h3>5.3.3 &lt;defs&gt;元素</h3>
    几个g和use的缺点
    <ul>
        <li>使用use复用元素时，是以原始元素的x，y坐标为基准，并非是从0开始的</li>
        <li>元素的颜色由原始元素生成，不能通过use来覆盖（就是use之后的元素无法修改表现属性）</li>
        <li>无法把匀速单独存储，只能先画一个出来，然后复制一批，样式还没法改，位置还是相对位置，比较难用</li>
    </ul>
    &lt;defs&gt;就是为了解决以上三个问题来出现的，它的作用主要用来包含并隐藏&lt;g&gt;元素
    <ul>
        <li>defs元素中包含的g元素只定义但并不显示，可以被use复制</li>
    </ul>
    <pre>
    &lt;svg width="165" height="120" viewBox="0 0 165 120" class="border" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
        &lt;defs&gt;
            &lt;g id="house5_3_3" style="stroke: black;"&gt;
                &lt;title&gt;一栋房子&lt;/title&gt;
                &lt;desc&gt;房子分组&lt;/desc&gt;
                &lt;rect x="6" y="50" width="60" height="60"&gt;&lt;/rect&gt;
                &lt;polyline points="6 50, 36 9, 66 50"&gt;&lt;/polyline&gt;
                &lt;polyline points="36 110, 36 80, 50 80, 50 110"&gt;&lt;/polyline&gt;
            &lt;/g&gt;
        &lt;/defs&gt;
        &lt;use xlink:href="#house5_3_3" x="0" y="0" style="fill: blue"&gt;&lt;/use&gt;
        &lt;use xlink:href="#house5_3_3" x="90" y="0" style="fill: red"&gt;&lt;/use&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="165" height="120" viewBox="0 0 165 120" class="border" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <g id="house5_3_3" style="stroke: black;">
                    <title>一栋房子</title>
                    <desc>房子分组</desc>
                    <rect x="6" y="50" width="60" height="60"></rect>
                    <polyline points="6 50, 36 9, 66 50"></polyline>
                    <polyline points="36 110, 36 80, 50 80, 50 110"></polyline>
                </g>
            </defs>
            <use xlink:href="#house5_3_3" x="0" y="0" style="fill: blue"></use>
            <use xlink:href="#house5_3_3" x="90" y="0" style="fill: red"></use>
        </svg>
    </code>
    <h3>5.3.4 &lt;symbol&gt;元素</h3>
    symbol提供了另一种组合的方式
    <ul>
        <li>和g元素不同，symbol不会显示</li>
        <li>symbol不需要放到defs里</li>
        <li>symbol可以指定 preserveAspectRatio, viewBox, width, height</li>
    </ul>
    <pre>
    &lt;svg width="165px" height="120px" viewBox="0 0 165 120" class="border" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
        &lt;defs&gt;
            &lt;symbol id="house_5_3_4" style="stroke: black;"&gt;
                &lt;rect x="6" y="50" width="60" height="60"&gt;&lt;/rect&gt;
                &lt;polyline points="6 50, 36 9, 66 50"&gt;&lt;/polyline&gt;
                &lt;polyline points="36 110, 36 80, 50 80, 50 110"&gt;&lt;/polyline&gt;
            &lt;/symbol&gt;
        &lt;/defs&gt;
        &lt;use xlink:href="#house_5_3_4" x="20" y="0" style="fill: yellow"/&gt;
        &lt;use xlink:href="#house_5_3_4" x="90" y="0" style="fill: red"/&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="165px" height="120px" viewBox="0 0 165 120" class="border" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <symbol id="house_5_3_4" style="stroke: black;">
                    <rect x="6" y="50" width="60" height="60"></rect>
                    <polyline points="6 50, 36 9, 66 50"></polyline>
                    <polyline points="36 110, 36 80, 50 80, 50 110"></polyline>
                </symbol>
            </defs>
            <use xlink:href="#house_5_3_4" x="0" y="0" style="fill: yellow"/>
            <use xlink:href="#house_5_3_4" x="90" y="0" style="fill: red"/>
        </svg>
    </code>
    <ul>
        <li>使用symbol复制后，坐标仍然是相对坐标，问题并没有解决</li>
    </ul>

    <strong>推荐使用symbol</strong>
    <h3>5.3.5 &lt;image&gt;元素</h3>
    <ul>
        <li>&lt;image&gt;元素可以引入外部svg或珊格图</li>
    </ul>
    <pre>
    &lt;svg width="230" height="200" viewBox="0 0 230 200" class="border"&gt;
        &lt;image x="20" y="20" width="180" height="180" xlink:href="../../assets/logo.png"&gt;&lt;/image&gt;
        &lt;image x="20" y="20" width="180" height="180" xlink:href="../../assets/cat.svg"&gt;&lt;/image&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="230" height="200" viewBox="0 0 230 200" class="border">
            <image x="20" y="20" width="180" height="180" xlink:href="../../assets/logo.png"></image>
            <image x="20" y="20" width="180" height="180" xlink:href="../../assets/cat.svg"></image>
        </svg>
    </code>
    <ul>
        <li>貌似必须得引入可以通过网络访问的图片，而当前目录下的图片是无法访问的</li>
        <li>可以用preserveAspectRatio属性解决显示和图像尺寸不一致的问题</li>
        <li>和html的流式布局有区别，可以任意叠加</li>
    </ul>
</div>
</template>

<script>
    export default {
        name: "Training05"
    }
</script>

<style lang="less" scoped>
@import "../../common/styles/common.less";
.c5_2_1{
    fill:coral;
    stroke: blueviolet;
    stroke-width: 2px;
    stroke-dasharray: 5 3; //这里显示报错，但实际上是没有问题的
}
</style>
