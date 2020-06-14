<template>
<div>
    <h1>第9章 文本</h1>
    <h2>9.1 文本的相关术语</h2>
    <ul>
        <li>字符：就是传统意义的字符，SVG中字符用unicode表示，有时一个字符也可能以多个符号组成</li>
        <li>符号：符号是字符的视觉呈现，相同字符的不同字体所呈现的符号是不同的，符号可能由多个字符组成</li>
        <li>字体：</li>
        <li>基线
            <div>基线对齐和CSS中概念一样</div>
            <ul>
                <li>上坡度：基线到字体最高字符顶部的距离</li>
                <li>下坡度：基线到字体最矮/深字符顶部的距离</li>
            </ul>
        </li>
        <li>大写字母高度，x高度
            <ul>
                <li>大写字母高度：基线上的大写字母的高度</li>
                <li>x高度：基线到小写x字幕顶部的高度</li>
            </ul>
        </li>
    </ul>
    <h2>9.2 &lt;text&gt;元素的基本属性</h2>
    <ul>
        <li>最基本的是x，y属性，用来指定首个字符的基线位置</li>
        <li>文本默认黑色填充，无边框</li>
        <li>&lt;text&gt;元素的其余属性和CSS标准一致
            <ul>
                <li>font-family</li>
                <li>font-size</li>
                <li>font-weight</li>
                <li>font-style</li>
                <li>text-decoration</li>
                <li>word-spacing</li>
                <li>letter-spacing</li>
            </ul>
        </li>
    </ul>
    <pre>
        &lt;svg width="300" height="150" viewBox="0 0 225 112" class="border"&gt;
            &lt;path d="M20 10, 20 120 M 10 30 100 30 M 10 70 100 70 M 10 110 100 110" style="stroke: gray"&gt;&lt;/path&gt;
            &lt;text x="20" y="30"&gt;abcdefg&lt;/text&gt;
            &lt;text x="20" y="70" style=<strong>"stroke: black;"</strong>&gt;abcdefg&lt;/text&gt;
            &lt;text x="20" y="110" style=<strong>"stroke: black; stroke-width: 0.5; fill: none;"</strong>&gt;abcdefg&lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="300" height="150" viewBox="0 0 225 112" class="border">
            <path d="M20 10, 20 120 M 10 30 100 30 M 10 70 100 70 M 10 110 100 110" style="stroke: gray"></path>
            <text x="20" y="30">abcdefg</text>
            <text x="20" y="70" style="stroke: black;">abcdefg</text>
            <text x="20" y="110" style="stroke: black; stroke-width: 0.5; fill: none;">abcdefg</text>
        </svg>
    </code>
    <h2>文本对齐</h2>
    属性text-anchor用来设置文字对齐方式
    <ul>
        <li>start：起点对齐</li>
        <li>middle：居中对齐</li>
        <li>end：尾部对齐</li>
    </ul>
    <code>
        <svg width="300" height="150" viewBox="0 0 300 150" class="border">
            <path d="M130 10 130 100" style="stroke: gray; fill:none"></path>
            <text x="130" y="30" style="text-anchor: start">text-anchor: start</text>
            <text x="130" y="60" style="text-anchor: middle">text-anchor: middle</text>
            <text x="130" y="90" style="text-anchor: end">text-anchor: end</text>
        </svg>
    </code>
    <h2>&lt;tspan&gt;元素</h2>
    <ul>
        <li>tspan用于在text元素内部改变部分文字的样式，比如一段话里加粗几个字就可以用tspan</li>
        <li>因为tspan是内嵌在text元素内部使用，所以不用关注文字的位置</li>
    </ul>
    <pre>
        &lt;svg width="300" height="50" viewBox="0 0 300 50" class="border"&gt;
            &lt;text x="30" y="30" style="text-anchor: start"&gt;这是一段用<strong>&lt;tspan style="stroke: red;font-size: 20px;&gt;</strong>"svg&lt;/tspan&gt;画出的文字&lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="300" height="50" viewBox="0 0 300 50" class="border">
            <text x="30" y="30" style="text-anchor: start">这是一段用<tspan style="stroke: red;font-size: 20px;">svg</tspan>画出的文字</text>
        </svg>
    </code>
    <h2>9.5 设置文本长度</h2>
    <ul>
        <li>textLength：这个属性可以控制文本的长度，SVG会自动调整</li>
        <li>lengthAdjust属性可以调整文字长度的调节方式
            <ul>
                <li>spacing：中间加空白，这也是默认值</li>
                <li>spacingAndGlyphs：同时调节空白和字符大小</li>
            </ul>
        </li>
    </ul>
    <pre>
        &lt;svg width="300" height="200" viewBox="0 0 300 200" class="border"&gt;
            &lt;text x="30" y="30"&gt;这是一段文字！(原始长度)&lt;/text&gt;
            &lt;text x="30" y="50"&gt;这是一段文字！！(80长度)&lt;/text&gt;
            &lt;text x="30" y="70" <strong>textLength="250" lengthAdjust="spacing"</strong>&gt;这是一段文字！(250长度)&lt;/text&gt;
            &lt;text x="30" y="90" <strong>textLength="250" lengthAdjust="spacingAndGlyphs"</strong>&gt;这是一段文字！(250长度)&lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="300" height="100" viewBox="0 0 300 100" class="border">
            <text x="30" y="30">这是一段文字！(原始长度)</text>
            <text x="30" y="50">这是一段文字！！(80长度)</text>
            <text x="30" y="70" textLength="250" lengthAdjust="spacing">这是一段文字！(250长度)</text>
            <text x="30" y="90" textLength="250" lengthAdjust="spacingAndGlyphs">这是一段文字！(250长度)</text>
        </svg>
    </code>
    <h2>9.6 纵向文本</h2>
    纵向文本有两种方法
    <ul>
        <li>通过变换 transform 属性把文字旋转90度</li>
        <li>设置write-mode=tb（从上倒下）</li>
    </ul>
    <pre>
        &lt;svg width="100" height="250" viewBox="0 0 100 250" class="border"&gt;
            &lt;text x="20" y="20" style=<strong>"writing-mode: tb;"</strong>&gt;垂直文字输出&lt;/text&gt;
            &lt;text x="20" y="40" transform=<strong>"translate(90,2) rotate(90)"</strong>&gt;平移+旋转的文字输出&lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="100" height="300" viewBox="0 0 100 300" class="border">
            <text x="20" y="20" style="writing-mode: tb;">垂直文字输出 write-mode=tb</text>
            <text x="20" y="40" transform="translate(90,2) rotate(90)">平移+旋转 translate(90,2) rotate(90)</text>
        </svg>
    </code>
    <ul>
        <li>write-mode-=tb在输出英文和中文时显示方式非常智能，输出的中文非常适合中文竖排习惯</li>
        <li>write-mode=tb不够灵活，只能竖排</li>
        <li>平移+旋转方式非常适合需要旋转文字的场景</li>
    </ul>
    <h2>9.7 国际化和文本</h2>
    <h3>9.7.1 Unicode和双向语言</h3>
    <ul>
        <li>多语言的书写方向问题</li>
    </ul>
    <h3>9.7.2 &lt;switch&gt;元素</h3>
    <ul>
        <li>switch元素提供了根据systemLanguage属性自动适配子节点的能力，确实很像java的switch语句</li>
        <li>几乎所有的svg元素都有systemLanguage属性，器可选值可以参考bcp47标准
            <ul>
                <li>zh：表示中文</li>
                <li>zh-CN：表示简体中文</li>
                <li>zh-TW：表示繁体中文</li>
                <li>en：表示英语</li>
                <li>en-US：表示美式英语</li>
                <li>en-UK：表示英式英语</li>
            </ul>
        </li>
        <li>systemLanguage可以有多个待选语言，中间用逗号隔开</li>
    </ul>
    <pre>
        &lt;svg width="300" height="100" viewBox="0 0 300 100" class="border"&gt;
            &lt;switch&gt;
                &lt;text <strong>systemLanguage="zh, zh-CN, zh-TW"</strong> x="20" y="20"&gt;中文 zh, zh-CN, zh-TW&lt;/text&gt;
                &lt;text <strong>systemLanguage="en"</strong> x="20" y="20"&gt;english en&lt;/text&gt;
            &lt;/switch&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="300" height="100" viewBox="0 0 300 100" class="border">
            <switch>
                <text systemLanguage="zh, zh-CN, zh-TW" x="20" y="20">中文 zh, zh-CN, zh-TW</text>
                <text systemLanguage="en" x="20" y="20">english en</text>
            </switch>
        </svg>
    </code>
    <h3>9.7.3 使用自定义字体</h3>
    <ul>
        <li>SVG提供了以一个独立svg文件（内有font标签定义的独立字体）为另一SVG文件提供字体的功能</li>
        <li>这个功能存在浏览器兼容问题</li>
    </ul>
    <h3>9.8 文本路径</h3>
    <ul>
        <li>文本可以沿着定义的路径排列，该特性非常适合文字输出不规则的情况</li>
        <li>&lt;textPath&gt;可以实现一个文本路径，然后用xlink:href属性引用一个path，注意textPath元素并不会直接显示出来，需要use才可以显示</li>
    </ul>
    <pre>
        &lt;svg width="300" height="100" viewBox="0 0 300 100" class="border"&gt;
            &lt;defs&gt;
                &lt;path id="p98_1" d="M30 40 C50 10, 70 10, 120 30 S150 0, 260, 50" style="stroke-width: 1px; stroke: gray; fill: none"/&gt;
            &lt;/defs&gt;
            &lt;text&gt;
                &lt;!-- <strong>不知为什么，曲线没有画出来</strong>--&gt;
                &lt;use<strong>xlink:href="#p98_1"</strong>&gt;&lt;/use&gt;
                &lt;textPath id="tp98_1"<strong>xlink:href="#p98_1"</strong>&gt;
                    这是一段使用了textPath特性的文字
                &lt;/textPath&gt;
            &lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="300" height="100" viewBox="0 0 300 100" class="border">
            <defs>
                <path id="p98_1" d="M30 40 C50 10, 70 10, 120 30 S150 0, 260, 50" style="stroke-width: 1px; stroke: gray; fill: none"/>
            </defs>
            <text>
                <!--不知为什么，曲线没有画出来-->
                <use xlink:href="#p98_1"></use>
                <textPath id="tp98_1" xlink:href="#p98_1">
                    这是一段使用了textPath特性的文字
                </textPath>
            </text>
        </svg>
    </code>
    <h2>9.9 空白和文本</h2>
    <ul>
        <li>通过设置xml:space可以调整SVG处理空白字符（空格，制表符和换行符）</li>
        <li>默认是default，展示规则大部分都和HTML规范中对于空白字符的展示方法相同
            <ul>
                <li>不展示换行（HTML中会把换行转成空格，这点不一样）</li>
                <li>制表符展示为空格</li>
                <li>首尾自动trim</li>
                <li>连续空格会合并成一个空格</li>
            </ul>
        </li>
    </ul>
    <pre>
        &lt;svg width="300" height="100" viewBox="0 0 300 100" class="border"&gt;
            &lt;text x="20" y="20"&gt;展示\t\t\t\t对\s\s\s\sxml:space对空白符处理的


                文字&lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="300" height="100" viewBox="0 0 300 100" class="border">
            <text x="20" y="20">展示				对   xml:space对空白符处理的


                文字</text>
        </svg>
    </code>
    <h2>9.10 案例学习：为图形添加文本</h2>
</div>
</template>

<script>
    export default {
        name: "Training09"
    }
</script>

<style lang="less" scoped>
    @import "../../common/styles/common.less";
</style>

