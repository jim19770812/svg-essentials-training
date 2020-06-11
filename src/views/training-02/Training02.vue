<template>
<div>
    <h1>第2章 在网页中使用SVG</h1>
    <h2>2.1 将SVG作为图像</h2>
    SVG是种图像格式，可以把SVG嵌入到网页（当成图片包含在img元素，或者用在样式中）
    不过这两种方式在网页中的应用是有局限的
    <ul>
        <li>渲染时和html是分离的，无法应用html的样式，也无法事件交互</li>
        <li>SVG中的字体需要单独定义字体大小，无法与HTML的统一</li>
        <li>SVG具有引用别的SVG、图像、html页面和脚本的功能，在包含其余文档的SVG嵌入到HTML中后，可能会受到浏览器安全设置的限制，造成无法加载</li>
    </ul>
    <h3>2.1.1 在img元素中包含SVG</h3>
    <pre>
        &lt;img src="../../assets/cat.svg" alt="小猫" title="这是一只SVG画的小猫"/&gt;
    </pre>
    <img src="../../assets/cat.svg" alt="小猫"/>
    <ul>
        <li>如果svg中包含了height和width，会自动使用其高度和宽度，否则就就默认的</li>
        <li>最好不要依赖默认尺寸，svg本身就是矢量图无惧缩放，如果当成珊格图来用就太大才小用了</li>
    </ul>
    <h3>2.1.2 在CSS中包含SVG</h3>
    <ul>
        <li>和图片一样，svg也受到background-size, background-repeat, background-position的影响</li>
        <li>SVG也可以用list-image, border-image来使用</li>
    </ul>
    <p class="c2_1_2"></p>
    <h2>2.2 将SVG作为应用程序</h2>
    <ul>
        <li>&lt;object&gt;是嵌入到html的元素，可以嵌入多媒体和HTML，当然也可以嵌入SVG</li>
        <li>&lt;embed&gt;也可以实现和object相同效果，但注意，是用src属性而不是data</li>
        <li>与做为图像使用的方式不同，作为应用程序嵌入到html中的时候可以包含外部文件，同时脚本可以子啊对象和父页面进行通讯</li>
    </ul>
    <pre>
        &lt;object data="../../assets/cat.svg" width="200" height="200" type="image/svg+xml"/&gt;
        <strong>经过尝试，&lt;object&gt;无法使用svg，并且不同的浏览器错误的模式还不一样</strong>
        &lt;embed src="../../assets/cat.svg" width="200" height="200" type="image/svg+xml"/&gt;
        <strong>经过尝试，&lt;embed&gt;无法使用svg，并且不同的浏览器错误的模式还不一样</strong>
    </pre>
    <object data="../../assets/cat.svg" width="200" height="200" type="image/svg+xml"/>
    <embed src="../../assets/cat.svg" width="200" height="200" type="image/svg+xml"/>
    <h2>2.3 混合文档中的SVG标记</h2>
    SVG图片，SVG应用程序和包含HTML的SVG程序都是可以嵌入HTML的。需要注注意的是，嵌入到HTML中的SVG对象（可能包含了图像，html，文字，脚本等）会被做为一个整体视作一个对象
    <h3>2.3.1 SVG中的foreign object</h3>
    <ul>
        <li>SVG规范定义了一种嵌入foreign内容的方式插入其它（HTML，图片等）内容</li>
        <li>foreignObject 通过x,y,width,height属性来定义位置和大小，方式类似use或image元素</li>
        <li>foreignObject作为一个SVG元素，可以用坐标，变换和各种效果来控制，比如变形，动画等</li>
        <li><strong>foreignObject可以实现文本自动换行</strong></li>
    </ul>
    <pre>
        &lt;foreignObject xmlns="内容类型"&gt;&lt;/foreignObject&gt; 元素定义了一个矩形区域，通过xmlns属性来定义其
    </pre>
    <code>
        <svg width="200" height="200" class="border">
            <g transform="skewX(25)">
                <switch>
                    <!--选择第一个子元素-->
                    <foreignObject x="1rem" y="10%" width="10rem" height="80%"
                                   requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility">
                        <body xmlns="http://www.w3.org/1999/xhtml">
                            <div>
                                这段文字是内嵌在SVG
                                中的信息，而且受到外部CSS样式影响
                            </div>
                        </body>
                    </foreignObject>
                    <text x="1rem" y="25%" dy="1rem">
                        这段文字不会显示，因为受到switch标签的影响，只显示第一个元素（foreignObject）
                    </text>
                </switch>
            </g>
            <foreignObject x="0.5rem" y="60%" width="12rem" height="5rem">
                这段文字自动换行了，&lt;text&gt;标签是无法自动换行的
            </foreignObject>
        </svg>
    </code>
    switch元素的主要作用和js的switch类似，实现在根据不同的条件显示不同元素，上面例子中会判断下面三个属性求值=true或属性缺失才会显示
    <ul>
        <li>requiredFeatures</li>
        <li>requiredExtensions</li>
        <li>systemLanguage</li>
    </ul>
    <h3>2.3.2 在XHTML或者HTML5中内嵌SVG</h3>
    非常简单，直接使用svg标签就可以，不仅如此，还可以用样式控制svg标签
    <pre>
        &lt;svg class="c2_3_2"&gt;
            &lt;title&gt;一个圆&lt;/title&gt;
            &lt;circle cx="90" cy="80" r="70" stroke="white" fill="white"&gt;&lt;/circle&gt;
            &lt;text x="55" y="85"&gt;这是个圆&lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg class="c2_3_2 border">
            <title>一个圆</title>
            <circle cx="90" cy="80" r="70" stroke="white" fill="white"></circle>
            <text x="55" y="85">这是个圆</text>
        </svg>
    </code>
    <ul>
        <li>样式定义了SVG显示的盒子样式和图形的尺寸</li>
        <li>主文档的样式会被SVG继承，这点也普通哦你的html元素一样</li>
        <li>可以在样式表里为SVG元素定义样式</li>
    </ul>
    <h3>2.3.3 其他XML应用程序中的SVG</h3>
    较少用到，就不赘述了

</div>
</template>

<script>
    export default {
        name: "Training02"
    }
</script>

<style lang="less" scoped>
@import "../../common/styles/common.less";
@size:140px;
.c2_3_2{
    display: block;
    width:200px;
    height:200px;
    background:gray;
    color:blue;

}
.c2_1_2{
    display: block;
    width: @size;
    height: @size;
    background-image: url(../../assets/cat.svg);
    background-repeat: no-repeat;
    background-size: @size @size;
}
.big-size{
    font-size: 30px;
}
</style>
