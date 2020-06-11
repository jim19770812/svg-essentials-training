<template>
<div>
    <h1>第8章 图案和渐变</h1>
    <ul>
        <li>图案和渐变的效果和CSS中的同名效果一样，应用场景也差不多，也一样会消耗cpu</li>
    </ul>
    <h2>8.1 图案</h2>
    <ul>
        <li>定义一个可以重复的图像对象（Tile 瓷砖），然后循环填充到另一个对象</li>
        <li>定义一个可以重复的图像对象（Tile 瓷砖），把图像当画笔使用来填充另一个对象</li>
    </ul>
    <pre>
    &lt;svg width="50" height="50" viewBox="0 0 50 50" class="border"&gt;
        &lt;path d="M 0 25 H 50 M 25 0 V 50" style="stroke-width: 1px; stroke: #2c3e50; fill: none"&gt;
        &lt;/path&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="50" height="50" viewBox="0 0 50 50" class="border">
            <path d="M 0 25 H 50 M 25 0 V 50" style="stroke-width: 1px; stroke: #2c3e50; fill: none"></path>
        </svg>
    </code>
    <div>
        上图就是个简单的图案，50x50的课重复图像
    </div>
    <h3>8.1.1 patternUnits</h3>
    <ul>
        <li>创建可重复的图案必须用&lt;pattern&gt;包裹</li>
        <li>填充的时候需要用fill:url(#patternid)来实现</li>
    </ul>
    <h4>patternUnits="objectBoundingBox"</h4>
    <ul>
        <li>表示边界框，这是默认值，当patternUnits="objectBoundingBox"时，我们通过指定width和height来间接规定图案平铺的数量。因为这时，width和height被限制在0~1，或者0%~100%之间，即宽度或高度占填充区域高度或宽度的百分比。可想而知20%放5个，40%放2.5个。</li>
    </ul>
    <pre>
        &lt;svg width="700" height="200" viewBox="0 0 700 200" class="border"&gt;
            &lt;defs&gt;
                &lt;pattern id="tile_8111" x="0" y="0" width=<strong>"20%"</strong> height=<strong>"20%"</strong> <strong>patternUnits="objectBoundingBox"</strong>&gt;
                    &lt;path d="M 0 25 H 50 M 25 0 V 50" style="stroke-width: 1px; stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
                &lt;/pattern&gt;
            &lt;/defs&gt;
            &lt;rect x="20" y="20" width="230" height="160" style="fill: <strong>url('#tile_8111')</strong>; stroke: #2c3e50;" /&gt;
            &lt;rect x="300" y="20" width="300" height="160" style="fill: <strong>url('#tile_8111')</strong>; stroke: #2c3e50;" /&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="700" height="200" viewBox="0 0 700 200" class="border">
            <defs>
                <pattern id="tile_8111" x="0" y="0" width="20%" height="20%" patternUnits="objectBoundingBox">
                    <path d="M 0 25 H 50 M 25 0 V 50" style="stroke-width: 1px; stroke: #2c3e50; fill: none"></path>
                </pattern>
            </defs>
            <rect x="20" y="20" width="230" height="160" style="fill: url('#tile_8111'); stroke: #2c3e50;" />
            <rect x="300" y="20" width="300" height="160" style="fill: url('#tile_8111'); stroke: #2c3e50;" />
        </svg>
    </code>
    <ul>
        <li>第二张图，按照20%的比例铺5个，结果空间超了，图案又不会缩放所以就会有些难看的空白</li>
    </ul>
    <h4>patternUnits="userSpaceOnUse"</h4>
    <ul>
        <li>表示能铺多少铺多少，是将pattern的宽度和高度固定住，在指定区域内平铺，能铺多少铺多少，超出部分裁掉。相应的width和height即pattern的宽度和高度。</li>
    </ul>
    <pre>
        &lt;svg width="700" height="200" viewBox="0 0 700 200" class="border"&gt;
            &lt;defs&gt;
                &lt;pattern id="tile_8112" x="0" y="0" width=<strong>"50"</strong> height=<strong>"50"</strong> <strong>patternUnits="userSpaceOnUse"</strong>&gt;
                    &lt;path d="M 0 25 H 50 M 25 0 V 50" style="stroke-width: 1px; stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
                &lt;/pattern&gt;
            &lt;/defs&gt;
            &lt;rect x="20" y="20" width="250" height="160" style="fill: <strong>url('#tile_8112')</strong>; stroke: #2c3e50;" /&gt;
            &lt;rect x="300" y="20" width="300" height="160" style="fill: <strong>url('#tile_8112')</strong>; stroke: #2c3e50;" /&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="700" height="200" viewBox="0 0 700 200" class="border">
            <defs>
                <pattern id="tile_8112" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 0 25 H 50 M 25 0 V 50" style="stroke-width: 1px; stroke: #2c3e50; fill: none"></path>
                </pattern>
            </defs>
            <rect x="20" y="20" width="250" height="160" style="fill: url('#tile_8112'); stroke: #2c3e50;" />
            <rect x="290" y="10" width="390" height="180" style="fill: url('#tile_8112'); stroke: #2c3e50;" />
        </svg>
    </code>
    <ul>
        <li>userSpaceOnUse效果要比objectBoundingBox好很多，一方面平铺的比较连续，另外平铺的可以自适应区域</li>
    </ul>
    <h3>8.1.2 patternContentUnits</h3>
    <ul>
        <li>和patternUnits有点相似，但在缩放和图案定位有区别</li>
        <li>使用viewBox也可以实现patternContentUnits一样的缩放的效果，推荐用viewBox来缩放</li>
    </ul>
    <h4>patternContentUnits="objectBoundingBox"</h4>
    和patternUnits="objectBoundingBox"的区别
    <ul>
        <li>图案平铺时会从0,0开始</li>
        <li>如果空间不足会缩放以适应填充区域</li>
    </ul>
    <code>
        <svg width="700" height="200" viewBox="0 0 700 200" class="border">
            <defs>
                <pattern id="tile_812" x="0" y="0" width="2" height="2" patternContentUnits="objectBoundingBox">
                    <path d="M 0 25 H 50 M 25 0 V 50" style="stroke-width: 1px; stroke: #2c3e50; fill: none"></path>
                </pattern>
            </defs>
            <rect x="20" y="20" width="230" height="160" style="fill: url('#tile_812'); stroke: #2c3e50;" />
            <rect x="300" y="20" width="300" height="160" style="fill: url('#tile_812'); stroke: #2c3e50;" />
        </svg>
    </code>
    <ul>
        <li><strong>不知道为什么不显示？无所谓了，反正这种模式用处不多，重要的是接下来的patternContentUnits</strong></li>
    </ul>
    <h4>patternContentUnits="userSpaceOnUse"</h4>
    <pre>
        &lt;svg width="700" height="200" viewBox="0 0 700 200" class="border"&gt;
            &lt;defs&gt;
                &lt;pattern id="tile_8112" x="0" y="0" width="30" height="30" patternContentUnits="userSpaceOnUse"&gt;
                    &lt;path d="M 0 25 H 50 M 25 0 V 50" style="stroke-width: 1px; stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
                &lt;/pattern&gt;
            &lt;/defs&gt;
            &lt;rect x="20" y="20" width="250" height="160" style="fill: url('#tile_8112'); stroke: #2c3e50;" /&gt;
            &lt;rect x="290" y="10" width="390" height="180" style="fill: url('#tile_8112'); stroke: #2c3e50;" /&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="700" height="200" viewBox="0 0 700 200" class="border">
            <defs>
                <pattern id="tile_8112" x="0" y="0" width="30" height="30" patternContentUnits="userSpaceOnUse">
                    <path d="M 0 25 H 50 M 25 0 V 50" style="stroke-width: 1px; stroke: #2c3e50; fill: none"></path>
                </pattern>
            </defs>
            <rect x="20" y="20" width="250" height="160" style="fill: url('#tile_8112'); stroke: #2c3e50;" />
            <rect x="290" y="10" width="390" height="180" style="fill: url('#tile_8112'); stroke: #2c3e50;" />
        </svg>
    </code>
    <h3>8.1.3 图案嵌套</h3>
    <ul>
        <li>图案可以用另一个图案来填充，可以基于此机制实现更复杂的图形</li>
    </ul>
    <pre>
    &lt;svg width="400" height="200" viewBox="0 0 400 200" class="border"&gt;
        &lt;defs&gt;
            &lt;pattern id="tile_813_sub_title" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse"&gt;
                &lt;path d="M5 0 V 20 M10 0 V20 M15 0 V20" style="stroke: black; fill: none; stroke-width: 1"&gt;&lt;/path&gt;
            &lt;/pattern&gt;
            &lt;pattern id="tile_813" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse"&gt;
                &lt;circle cx="25" cy="25" r="25" style="fill: url(#tile_813_sub_title); stroke: #2c3e50;" /&gt;
            &lt;/pattern&gt;
        &lt;/defs&gt;
        &lt;rect x="10" y="10" width="250" height="160" style="fill: url(#tile_813); stroke: #2c3e50;"&gt;&lt;/rect&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="400" height="200" viewBox="0 0 400 200" class="border">
            <defs>
                <pattern id="tile_813_sub_title" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                    <path d="M5 0 V 20 M10 0 V20 M15 0 V20" style="stroke: black; fill: none; stroke-width: 1"></path>
                </pattern>
                <pattern id="tile_813" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="25" style="fill: url(#tile_813_sub_title); stroke: #2c3e50;" />
                </pattern>
            </defs>
            <rect x="10" y="10" width="250" height="160" style="fill: url(#tile_813); stroke: #2c3e50;"></rect>
        </svg>
    </code>
    <h2>8.2 渐变</h2>
    <ul>
        <li>SVG渐变的功能和CSS的渐变效果一样，用途相同</li>
        <li>用处不算多吧，想不出什么地方会用到渐变呀</li>
    </ul>
    <h3>8.2.1 linearGradient元素</h3>
    <ul>
        <li>linearGradient是线性渐变，就是沿着一条直线颜色主键过度
            斜度表示
            <ul>
                <li>(x1,y1)：渐变色起点百分比或0～1的小数，如（0%，0%）</li>
                <li>(x2,y2)：渐变色终点百分比或0～1的小数，如（100%，100%）</li>
            </ul>
        </li>
        <li>stop元素
            <ul>
                <li>offset：颜色的偏移，即过度的颜色深度</li>
                <li>stop-color：停止色</li>
            </ul>
        </li>
        <li>可以有多个stop元素，每个stop都会提现出前一个stop元素的渐变效果</li>
    </ul>
    <pre>
        &lt;svg width="400" height="200" viewBox="0 0 400 200" class="border"&gt;
            &lt;defs&gt;<strong>//从左到右渐变</strong>
                &lt;linearGradient id="l821"&gt;
                    &lt;stop <strong>offset="0%"</strong> style="<strong>stop-color: #339933"</strong>&gt;&lt;/stop&gt;
                    &lt;stop <strong>offset="100"</strong> style="<strong>stop-color: #2c3e50"</strong>&gt;&lt;/stop&gt;
                &lt;/linearGradient&gt;
            &lt;/defs&gt;
            &lt;rect x="0" y="0" width="400" height="200" style="fill: url(#l821); stroke: none"&gt;&lt;/rect&gt;
        &lt;/svg&gt;
        &lt;svg width="400" height="200" viewBox="0 0 400 200" class="border"&gt;
            &lt;defs&gt; <strong>//从左上角到右下角渐变</strong>
                &lt;linearGradient id="l822" <strong>x1="0%" y1="0%" x2="100%" y2="100%"</strong>&gt;
                    &lt;stop offset="0%" style="stop-color: #339933"&gt;&lt;/stop&gt;
                    &lt;stop offset="100" style="stop-color: #2c3e50"&gt;&lt;/stop&gt;
                &lt;/linearGradient&gt;
            &lt;/defs&gt;
            &lt;rect x="0" y="0" width="400" height="200" style="fill: url(#l822); stroke: none"&gt;&lt;/rect&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="400" height="200" viewBox="0 0 400 200" class="border">
            <defs>
                <linearGradient id="l821">
                    <stop offset="0%" style="stop-color: #339933"></stop>
                    <stop offset="100" style="stop-color: #2c3e50"></stop>
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="400" height="200" style="fill: url(#l821); stroke: none"></rect>
        </svg>
        <svg width="400" height="200" viewBox="0 0 400 200" class="border">
            <defs>
                <linearGradient id="l822" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color: #339933"></stop>
                    <stop offset="100" style="stop-color: #2c3e50"></stop>
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="400" height="200" style="fill: url(#l822); stroke: none"></rect>
        </svg>
    </code>
    <h4>spreadMethod属性</h4>
    <ul>
        <li>pad：控制渐变色的起始点和终点</li>
        <li>repeat：控制渐变色是否重复填充</li>
        <li>reflect：控制渐变色循环起点->终点->起点->终点不断循环（就是起点终点自然过度）</li>
    </ul>
    例子略，用的时候在查吧
    <h3>8.2.2 radialGradient元素</h3>
    <ul>
        <li>径向渐变，就是从中心向外渐变</li>
        <li>这个有点用，画圆什么的可能会用到</li>
        <li>radialGradient的几个属性
            <ul>
                <li>cx,cy：中心点水平/垂直百分比，默认50%，放大和缩小cx,cy可以实现偏转中心点</li>
                <li>r：渐变半径，默认50%，放大和缩小渐变半径可以放大/缩小渐变</li>
            </ul>
        </li>
    </ul>
    <pre>
        &lt;svg width="200" height="180" viewBox="0 0 200 180" class="border"&gt;
            &lt;radialGradient id="r822_1"&gt;
                &lt;stop offset="0%" style="stop-color: #f96;" /&gt;
                &lt;stop offset="50%" style="stop-color: #969;" /&gt;
                &lt;stop offset="100%" style="stop-color: #906;" /&gt;
            &lt;/radialGradient&gt;
            &lt;rect x="20" y="20" width="100" height="100" style="fill: url(#r822_1); stroke: black" /&gt;
        &lt;/svg&gt;
        &lt;svg width="200" height="180" viewBox="0 0 200 180" class="border"&gt;
            &lt;radialGradient id="r822_2" <strong>cx="50%" cy="50%" r="50%</strong>"&gt;
                &lt;stop offset="0%" style="stop-color: #f96;" /&gt;
                &lt;stop offset="50%" style="stop-color: #969;" /&gt;
                &lt;stop offset="100%" style="stop-color: #906;" /&gt;
            &lt;/radialGradient&gt;
            &lt;rect x="20" y="20" width="100" height="100" style="fill: url(#r822_2); stroke: black" /&gt;
        &lt;/svg&gt;
        &lt;svg width="200" height="180" viewBox="0 0 200 180" class="border"&gt;
            &lt;radialGradient id="r822_3" <strong>cx="0%" cy="0%" r="100%"</strong>&gt;
                &lt;stop offset="0%" style="stop-color: #f96;" /&gt;
                &lt;stop offset="50%" style="stop-color: #969;" /&gt;
                &lt;stop offset="100%" style="stop-color: #906;" /&gt;
            &lt;/radialGradient&gt;
            &lt;rect x="20" y="20" width="100" height="100" style="fill: url(#r822_3); stroke: black" /&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200" height="180" viewBox="0 0 200 180" class="border">
            <radialGradient id="r822_1">
                <stop offset="0%" style="stop-color: #f96;" />
                <stop offset="50%" style="stop-color: #969;" />
                <stop offset="100%" style="stop-color: #906;" />
            </radialGradient>
            <rect x="20" y="20" width="100" height="100" style="fill: url(#r822_1); stroke: black" />
        </svg>
        <svg width="200" height="180" viewBox="0 0 200 180" class="border">
            <radialGradient id="r822_2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style="stop-color: #f96;" />
                <stop offset="50%" style="stop-color: #969;" />
                <stop offset="100%" style="stop-color: #906;" />
            </radialGradient>
            <rect x="20" y="20" width="100" height="100" style="fill: url(#r822_2); stroke: black" />
        </svg>
        <svg width="200" height="180" viewBox="0 0 200 180" class="border">
            <radialGradient id="r822_3" cx="0%" cy="0%" r="100%">
                <stop offset="0%" style="stop-color: #f96;" />
                <stop offset="50%" style="stop-color: #969;" />
                <stop offset="100%" style="stop-color: #906;" />
            </radialGradient>
            <rect x="20" y="20" width="100" height="100" style="fill: url(#r822_3); stroke: black" />
        </svg>
    </code>
    <h4>spreadMethod属性</h4>
    <ul>
        <li>pad：作用和线性渐变特性类似</li>
        <li>repeat：作用和线性渐变特性类似</li>
        <li>reflect：作用和线性渐变特性类似</li>
    </ul>
    <h3>8.2.3 渐变总结</h3>
    <h2>8.3 变换图案和渐变</h2>
    <ul>
        <li>图案也可以使用transform，属性名字交gradientTransform，作用和前面几章的transform一样</li>
        <li>例如，在平铺图案的时候可以用shewX做下倾斜再平铺</li>
    </ul>
</div>
</template>

<script>
    export default {
        name: "Training08"
    }
</script>

<style lang="less" scoped>
    @import "../../common/styles/common.less";
</style>

