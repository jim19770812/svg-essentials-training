<template>
<div>
    <h1>第10章 裁剪和蒙板</h1>
    <h2>10.1 裁剪路径</h2>
    <ul>
        <li>视口（viewBox）就是个裁剪区域，视口外的都不会显示</li>
        <li>&lt;clipPath&gt;也会创建一个裁剪区域，类似viewBox的裁剪特性，会只保留部分视口定义矩形区域内容，其余都裁剪掉</li>
        <li>clipPath是个容器，内里要放任意数量的基本形状（矩形/原型/路径等）作为裁剪区（只有用use元素引用才会显示）</li>
    </ul>
    <pre>
        &lt;svg width="400" height="200" viewBox="0 0 400 200" class="border"&gt;
            &lt;defs&gt;
                &lt;<strong>clipPath</strong> id="cp101"&gt;
                    &lt;rect id="r101" x="0" y="0" width="100" height="150"&gt;
                    &lt;/rect&gt;
                &lt;<strong>/clipPath</strong>&gt;
                &lt;image id="shape_cat" x="20" y="20" width="180" height="180" xlink:href="../../assets/cat.svg"&gt;&lt;/image&gt;
                &lt;g id="shape_polygon"&gt;
                    &lt;rect x="0" y="50" width="90" height="60" style="fill: #999;"/&gt;
                    &lt;circle cx="25" cy="25" r="25" style="fill: #666;"/&gt;
                    &lt;polygon points="30 0 80 0 80 100" style="fill: #ccc;"/&gt;
                &lt;/g&gt;
            &lt;/defs&gt;
            &lt;use xlink:href="#shape_cat" style="clip-path: url(#cp101)" &gt;&lt;/use&gt;
            &lt;use xlink:href="#r101" style="stroke: gray; fill: none; stroke-width: 1px;"&gt;&lt;/use&gt;
            &lt;use x="150" y="30" xlink:href="#shape_polygon" style="clip-path: url(#cp101)" &gt;&lt;/use&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="400" height="200" viewBox="0 0 400 200" class="border">
            <defs>
                <clipPath id="cp101">
                    <rect id="r101" x="0" y="0" width="100" height="150">
                    </rect>
                </clipPath>
                <image id="shape_cat" x="20" y="20" width="180" height="180" xlink:href="../../assets/cat.svg"></image>
                <g id="shape_polygon">
                    <rect x="0" y="50" width="90" height="60" style="fill: #999;"/>
                    <circle cx="25" cy="25" r="25" style="fill: #666;"/>
                    <polygon points="30 0 80 0 80 100" style="fill: #ccc;"/>
                </g>
            </defs>
            <use xlink:href="#shape_cat" style="clip-path: url(#cp101)" ></use>
            <use xlink:href="#r101" style="stroke: gray; fill: none; stroke-width: 1px;"></use>
            <use x="150" y="30" xlink:href="#shape_polygon" style="clip-path: url(#cp101)" ></use>
        </svg>
    </code>
    <h2>10.2 蒙板</h2>
    <ul>
        <li>SVG的蒙板会变换对象的透明度，可以选择让遮盖对象变得透明/半透明</li>
        <li>&lt;mask&gt;用来创建蒙板，是一个容器元素，里面可以包含形状，文本，图像等，常用属性如下
            <ul>
                <li>x，y，width，height：坐标和宽高</li>
                <li>maskUnits：设置蒙板的单位，一般设置成 userspaceOnUser</li>
                <li>maskContentUnits：可以设置内容单位
                    <ul>
                        <li>objectBoundingBox：内容边界，超出mask容器范围的会被裁剪</li>
                        <li>userSpaceOnUse：这是默认值</li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>fill-opacity：可以调节蒙板的透明度，0表示全透明，1表示不透明，可以用小数或百分比表示</li>
    </ul>
    <pre>
    &lt;svg width="600" height="150" viewBox="0 0 600 150" class="border"&gt;
        &lt;mask id="m102_red" x="0" y="0" width="1" height="1"
            <strong>maskContentUnits="objectBoundingBox" style="fill-opacity: 80%"</strong>&gt;
            &lt;rect x="0" y="0" width="1" height="1" style="fill: red"/&gt;
        &lt;/mask&gt;
        &lt;mask id="m102_green" x="0" y="0" width="1" height="1"
            <strong>maskContentUnits="objectBoundingBox" style="fill-opacity: 80%"</strong>&gt;
            &lt;rect x="0" y="0" width="1" height="1" style="fill: green"/&gt;
        &lt;/mask&gt;
        &lt;mask id="m102_blue" x="0" y="0" width="1" height="1"
            <strong>maskContentUnits="objectBoundingBox" style="fill-opacity: 80%"</strong>&gt;
            &lt;rect x="0" y="0" width="1" height="1" style="fill: blue"/&gt;
        &lt;/mask&gt;
        &lt;g style=<strong>"mask:url(#m102_red);"</strong>&gt;
            &lt;rect x="20" y="20" width="100" height="100" style="stroke: black; fill: red;"&gt;
            &lt;/rect&gt;
            &lt;text x="40" y="90" style="stroke: white;"&gt;红色&lt;/text&gt;
        &lt;/g&gt;
        &lt;g style=<strong>"mask: url(#m102_green)"</strong>&gt;
            &lt;rect x="190" y="20" width="100" height="100" style="stroke: black; fill: green;"&gt;
            &lt;/rect&gt;
            &lt;text x="200" y="90" style="stroke: white;"&gt;绿色&lt;/text&gt;
        &lt;/g&gt;
        &lt;g style=<strong>"mask: url(#m102_blue)"</strong>&gt;
            &lt;rect x="360" y="20" width="100" height="100" style="stroke: black; fill: blue;"&gt;
            &lt;/rect&gt;
            &lt;text x="380" y="90" style="stroke: white;"&gt;蓝色&lt;/text&gt;
        &lt;/g&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="600" height="150" viewBox="0 0 600 150" class="border">
            <mask id="m102_red" x="0" y="0" width="1" height="1" maskContentUnits="objectBoundingBox" style="fill-opacity: 80%">
                <rect x="0" y="0" width="1" height="1" style="fill: red"/>
            </mask>
            <mask id="m102_green" x="0" y="0" width="1" height="1" maskContentUnits="objectBoundingBox" style="fill-opacity: 80%">
                <rect x="0" y="0" width="1" height="1" style="fill: green"/>
            </mask>
            <mask id="m102_blue" x="0" y="0" width="1" height="1" maskContentUnits="objectBoundingBox" style="fill-opacity: 80%">
                <rect x="0" y="0" width="1" height="1" style="fill: blue"/>
            </mask>
            <g style="mask:url(#m102_red);">
                <rect x="20" y="20" width="100" height="100" style="stroke: black; fill: red;">
                </rect>
                <text x="40" y="90" style="stroke: white;">红色</text>
            </g>
            <g style="mask: url(#m102_green)">
                <rect x="190" y="20" width="100" height="100" style="stroke: black; fill: green;">
                </rect>
                <text x="200" y="90" style="stroke: white;">绿色</text>
            </g>
            <g style="mask: url(#m102_blue)">
                <rect x="360" y="20" width="100" height="100" style="stroke: black; fill: blue;">
                </rect>
                <text x="380" y="90" style="stroke: white;">蓝色</text>
            </g>
        </svg>
    </code>
    <h2>10.3 案例学习：用图形应用蒙板</h2>
    <pre>
        &lt;svg width="600" height="300" style=<strong>"mask: url(#m103);"</strong> class="border"&gt;
            &lt;radialGradient id="fade"&gt;
                &lt;stop offset="25%" style="stop-color: white; stop-opacity: 1.0;"&gt;&lt;/stop&gt;
                &lt;stop offset="60%" style="stop-color: white; stop-opacity: 0.5;"&gt;&lt;/stop&gt;
                &lt;stop offset="85%" style="stop-color: white; stop-opacity: 0.0;"&gt;&lt;/stop&gt;
            &lt;/radialGradient&gt;
            &lt;mask id="m103" x="0" y="0" width="1" height="1" <strong>maskContentUnits="objectBoundingBox"</strong>&gt;
                &lt;rect x="0" y="0" width="1" height="1" <strong>style="fill: url(#fade)"</strong>&gt;&lt;/rect&gt;
            &lt;/mask&gt;
            &lt;image x="20" y="20" width="180" height="180" xlink:href="../../assets/logo.png" <strong>style="mask: url(#m103); "</strong>&gt;&lt;/image&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="250" height="220" style="mask: url(#m103);" class="border">
            <radialGradient id="fade">
                <stop offset="25%" style="stop-color: white; stop-opacity: 1.0;"></stop>
                <stop offset="60%" style="stop-color: white; stop-opacity: 0.5;"></stop>
                <stop offset="85%" style="stop-color: white; stop-opacity: 0.0;"></stop>
            </radialGradient>
            <mask id="m103" x="0" y="0" width="1" height="1" maskContentUnits="objectBoundingBox">
                <rect x="0" y="0" width="1" height="1" style="fill: url(#fade)"></rect>
            </mask>
            <image x="20" y="20" width="180" height="180" xlink:href="../../assets/logo.png" style="mask: url(#m103); "></image>
        </svg>
    </code>
</div>
</template>

<script>
    export default {
        name: "Training10"
    }
</script>

<style lang="less" scoped>
    @import "../../common/styles/common.less";
</style>
