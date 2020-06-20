<template>
<div>
    <h1>第6章 坐标系统变换</h1>
    坐标变换是利用transform属性改变图形的位置，和进行旋转，缩放等操作
    <h2>6.1 translate变换</h2>
    <ul>
        <li>&lt;translate&gt;标签的主要作用是移动图形</li>
    </ul>
    <pre>
        &lt;svg width="200px" height="200px" viewBox="0 0 200 200" class="border"&gt;
            &lt;defs&gt;
                &lt;symbol id="id6_1"&gt;
                    &lt;rect x="10" y="10" width="50" height="50" style="stroke: none"&gt;&lt;/rect&gt;
                &lt;/symbol&gt;
            &lt;/defs&gt;
            <strong>//未定义x,y坐标，即使用#id6_1的(50,50)坐标</strong>
            &lt;use xlink:href="#id6_1" style="fill: #339933"&gt;&lt;/use&gt;
            <strong>//定义了x=50,y=50，所以要在原始坐标(50,50)上进一步位移，最终坐标为x=50+50, y=50+50</strong>
            &lt;use xlink:href="#id6_1" x="50" y="50" fill="purple"&gt;&lt;/use&gt;
        <strong>//定义了x=50,y=50，并且还定义了translate(50,50)，所以最终坐标为x=50+50+50, y=50+50+50</strong>
            &lt;use xlink:href="#id6_1" x="50" y="50" fill="blue" <strong>transform="translate(50,50)"</strong>&gt;&lt;/use&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200px" height="200px" viewBox="0 0 200 200" class="border">
            <defs>
                <symbol id="id6_1">
                    <rect x="10" y="10" width="50" height="50" style="stroke: none"></rect>
                </symbol>
            </defs>
            <use xlink:href="#id6_1" style="fill: #339933"></use>
            <use xlink:href="#id6_1" x="50" y="50" fill="purple"></use>
            <use xlink:href="#id6_1" x="50" y="50" fill="blue" transform="translate(50,50)"></use>
        </svg>
    </code>
    <h2>6.2 scale变换</h2>
    <ul>
        <li>scale是缩放坐标，让对象放大/缩小</li>
        <li>以矩形为例，scale缩放的不只是width,height,也会缩放x,y，下面一节会讲如何围绕中心点缩放</li>
        <li>scale(value)：水平方向和垂直方向都放大value倍（value可以是负数）</li>
        <li>scale(xValue, yValue)：水平方向放大xValue倍，垂直方向放大yValue倍（xValue,yValue可以是负数）</li>
        <li>scale(-1, 0)：水平翻转</li>
        <li>scale(0, -1)：垂直翻转</li>
    </ul>
    <pre>
    &lt;svg width="450" height="450" viewBox="0 0 450 450" class="border"&gt;
        &lt;g id="id6_2"&gt;
            &lt;resct x="10" y="10" width="50" height="50" style="fill:none; stroke: black; stroke-width: 1px"&gt;&lt;/rect&gt;
        &lt;/g&gt;
        &lt;use xlink:href="#id6_2"&gt;&lt;/use&gt;
        &lt;use xlink:href="#id6_2" x="50" y="50" <strong>transform="scale(1,2)</strong>"&gt;&lt;/use&gt;
        &lt;use xlink:href="#id6_2" x="150" y="150" <strong>transform="scale(2)</strong>"&gt;&lt;/use&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="450" height="450" viewBox="0 0 450 450" class="border">
            <g id="id6_2">
                <rect x="10" y="10" width="50" height="50" style="fill:none; stroke: black; stroke-width: 1px"></rect>
                <circle cx="35" cy="35" r="20" style="fill:green; stroke: none; stroke-width: 1px"></circle>
            </g>
            <use xlink:href="#id6_2"></use>
            <use xlink:href="#id6_2" x="50" y="50" transform="scale(1,2)"></use>
            <use xlink:href="#id6_2" x="150" y="150"  transform="scale(2)"></use>
        </svg>
    </code>
    <ul>
        <li>注意scale会把x，y坐标缩放的同时也会缩放stroke-width属性，所以第三个矩形的线变粗了</li>
        <li>可以为x轴和y轴设置不同的缩放倍数，看上去图像会被按比例拉伸</li>
        <li>对于分组来说效果也是一样的</li>
    </ul>
    <h3>围绕中心点缩放</h3>
    <ul>
        <li>上例中的缩放是围绕原点缩放的，导致x，y坐标也放大了，位置就变得很奇怪</li>
        <li>围绕图形的中心点缩放是比较符合人类认知的，中心点缩放需要组合translate和scale两个变换实现</li>
        <li>translate位移计算公式
            <p>假设缩放倍数是F</p>
            <p>假设中心点坐标cX, cY</p>
            <ul>
                <li>x=-cX*(F-1)</li>
                <li>y=-cY*(F-1)</li>
            </ul>
        </li>
    </ul>
    <pre>
    &lt;svg width="300" height="300" viewBox="0 0 300 300" class="border"&gt;
        &lt;g id="id6_2_1"&gt;
            &lt;rect x="120" y="120" width="50" height="50" style="fill:none; stroke: black"&gt;&lt;/rect&gt;
            &lt;line x1="0" y1="145" x2="300" y2="145" style="stroke: red; stroke-width: 0.1px"&gt;&lt;/line&gt;
            &lt;line x1="145" y1="0" x2="145" y2="300" style="stroke: red; stroke-width: 0.1px"&gt;&lt;/line&gt;
        &lt;/g&gt;
        &lt;use xlink:href="#id6_2_1" transform="<strong>translate(-145, -145) scale(2)</strong>" style="stroke-width: 0.5px"&gt;&lt;/use&gt;
        &lt;use xlink:href="#id6_2_1" transform="<strong>translate(-290, -290) scale(3)</strong>" style="stroke-width: 0.4px"&gt;&lt;/use&gt;
        &lt;use xlink:href="#id6_2_1" transform="<strong>translate(-435, -435) scale(4)</strong>" style="stroke-width: 0.3px"&gt;&lt;/use&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="300" height="300" viewBox="0 0 300 300" class="border">
            <g id="id6_2_1">
                <rect x="120" y="120" width="50" height="50" style="fill:none; stroke: black"></rect>
                <line x1="0" y1="145" x2="300" y2="145" style="stroke: red; stroke-width: 0.1px"></line>
                <line x1="145" y1="0" x2="145" y2="300" style="stroke: red; stroke-width: 0.1px"></line>
            </g>
            <use xlink:href="#id6_2_1" transform="translate(-145, -145) scale(2)" style="stroke-width: 0.5px"></use>
            <use xlink:href="#id6_2_1" transform="translate(-290, -290) scale(3)" style="stroke-width: 0.4px"></use>
            <use xlink:href="#id6_2_1" transform="translate(-435, -435) scale(4)" style="stroke-width: 0.3px"></use>
        </svg>
    </code>
    <ul>
        <li>注意：在transform变换字符串中不支持数学计算，写成translate(-145*(3-1))是不行的</li>
    </ul>
    <h2>6.3 变换序列</h2>
    <ul>
        <li>图形可以做多个变化，每个变换用空格或者逗号分隔,SVG会按照从左到右的顺序依次执行</li>
        <li><strong>需要注意的是，转换执行的先后顺序不同，实际结果也会不一样，这点和想像的不一样</strong></li>
    </ul>
    <pre>
    &lt;svg width="450" height="250" viewBox="0 0 450 250" class="border"&gt;
        &lt;g id="id6_2"&gt;
            &lt;rect x="10" y="10" width="50" height="50" style="fill:none; stroke: black; stroke-width: 1px"&gt;&lt;/rect&gt;
            &lt;circle cx="35" cy="35" r="20" style="fill:green; stroke: none; stroke-width: 1px"&gt;&lt;/circle&gt;
        &lt;/g&gt;
        &lt;use xlink:href="#id6_2" x="50" y="50" <strong>transform="translate(150,0) scale(1.6)</strong>"&gt;&lt;/use&gt;
        &lt;use xlink:href="#id6_2" x="50" y="50" <strong>transform="scale(1.6) translate(150,0)</strong>"&gt;&lt;/use&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="450" height="250" viewBox="0 0 450 250" class="border">
            <g id="id6_3">
                <rect x="10" y="10" width="50" height="50" style="fill:none; stroke: black; stroke-width: 1px"></rect>
                <circle cx="35" cy="35" r="20" style="fill:green; stroke: none; stroke-width: 1px"></circle>
            </g>
            <use xlink:href="#id6_3" x="50" y="50" transform="translate(150,0) scale(1.6)"></use>
            <use xlink:href="#id6_3" x="50" y="50" transform="scale(1.6) translate(150,0)"></use>
        </svg>
    </code>
    <ul>
        <li>从上图看出，先平移后放大和先放大后平移的结果是不一样的</li>
    </ul>
    <h2>6.4 技巧：笛卡尔坐标系统转换</h2>
    如果从几何系统中传数据到SVG，就涉及到坐标变换问题
    <ul>
        <li>SVG中y轴是上到下增长的，但几何中y轴是从下向上增长的，所以画出的是垂直方向反向的（像是水中倒影）所以必须变换下坐标才可以正常显示</li>
        <li>scale(0, -1)可以垂直掉转180度</li>
    </ul>
    <h2>6.5 rotate旋转</h2>
    <ul>
        <li>rotate是个控制旋转的变换</li>
        <li>旋转角度0～360,按照顺时针方向旋转</li>
    </ul>
    <pre>
    &lt;svg width="200" height="200" viewBox="0 0 200 200"&gt;
        &lt;polyline points="200 0, 0 0, 0, 200" style="stroke-width: 2px; stroke:black; fill: none "&gt;&lt;/polyline&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" <strong>transform="rotate(-50)"</strong>&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" <strong>transform="rotate(-40)"</strong>&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" <strong>transform="rotate(-30)"</strong>&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" <strong>transform="rotate(-20)"</strong>&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" <strong>transform="rotate(-10)"</strong>&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: black; stroke-width: 1px" <strong>transform="rotate(0)"</strong>&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" <strong>transform="rotate(10)"</strong>&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" <strong>transform="rotate(20)"</strong>&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" <strong>transform="rotate(30)</strong>"&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" <strong>transform="rotate(40)</strong>"&gt;&lt;/rect&gt;
        &lt;rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" <strong>transform="rotate(50)</strong>"&gt;&lt;/rect&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200" height="200" viewBox="0 0 200 200">
            <polyline points="200 0, 0 0, 0, 200" style="stroke-width: 2px; stroke:black; fill: none "></polyline>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" transform="rotate(-50)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" transform="rotate(-40)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" transform="rotate(-30)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" transform="rotate(-20)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" transform="rotate(-10)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: black; stroke-width: 1px" transform="rotate(0)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" transform="rotate(10)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" transform="rotate(20)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" transform="rotate(30)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" transform="rotate(40)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" transform="rotate(50)"></rect>
        </svg>
    </code>
    <ul>
        <li>黑色线标明了原点坐标</li>
        <li>上图中红色方块表示旋转的是负值，蓝色方块转转的是正值</li>
        <li>旋转是围绕着0,0坐标转动的，而并不是围绕着方块的中心点旋转</li>
    </ul>
    <h3>围绕某一点旋转</h3>
    <ul>
        <li>围绕某一点旋转应该是最常遇到的旋转情况了</li>
        <li>rotate(角度, x, y) 变换可以实现围绕x, y坐标旋转</li>
    </ul>
    <code>
        <svg width="200" height="200" viewBox="0 0 200 200" class="border">
            <circle cx="125" cy="75" r="2px" style="fill: black"></circle>
            <line x1="125" y1="200" x2="125" y2="0" style="stroke-width: 1px; stroke:black; fill: none "></line>
            <line x1="0" y1="75" x2="200" y2="75" style="stroke-width: 1px; stroke:black; fill: none "></line>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" transform="rotate(-60, 125, 75)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" transform="rotate(-30, 125, 75)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: red; stroke-width: 1px" transform="rotate(-10, 125, 75)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: black; stroke-width: 1px" transform="rotate(0, 125, 75)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" transform="rotate(30, 125, 75)"></rect>
            <rect x="100" y="50" width="50" height="50" style="fill:none; stroke: blue; stroke-width: 1px" transform="rotate(60, 125, 75)"></rect>
        </svg>
    </code>
    <ul>
        <li>上例中中心点的坐标计算公式
            <ul>
                <li>cx = rect.x + rect.width/2</li>
                <li>cy = rect.y + rect.height/2</li>
            </ul>
        </li>
    </ul>
    <h2>6.7 skewX和skewY变换</h2>
    <ul>
        <li>倾斜了坐标轴后，坐标仍然保持不变，但整个图形都会随着轴的偏转而发生变形</li>
        <li>skewX(角度)：倾斜X轴</li>
        <li>skewY(角度)：倾斜Y轴</li>
    </ul>
    <pre>
    &lt;svg width="450" height="450" viewBox="0 0 450 450" class="border"&gt;
        &lt;g id="id6_7_1"&gt;
            &lt;rect x="10" y="10" width="50" height="50" style="fill:none; stroke: black; stroke-width: 1px"&gt;&lt;/rect&gt;
        &lt;/g&gt;
        &lt;use xlink:href="#id6_7_1" x="25" y="25" transform="<strong>skewX(15)</strong> scale(2)"&gt;&lt;/use&gt;
        &lt;use xlink:href="#id6_7_1" x="25" y="25" transform="<strong>skewY(15)</strong> scale(2)"&gt;&lt;/use&gt;
        &lt;use xlink:href="#id6_7_1" x="50" y="50" transform="<strong>skewX(45)</strong> scale(2)"&gt;&lt;/use&gt;
        &lt;use xlink:href="#id6_7_1" x="50" y="50" transform="<strong>skewY(45)</strong> scale(2)"&gt;&lt;/use&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="450" height="450" viewBox="0 0 450 450" class="border">
            <g id="id6_7_1">
                <rect x="10" y="10" width="50" height="50" style="fill:none; stroke: black; stroke-width: 1px"></rect>
            </g>
            <use xlink:href="#id6_7_1" x="25" y="25" transform="skewX(15) scale(2)"></use>
            <use xlink:href="#id6_7_1" x="25" y="25" transform="skewY(15) scale(2)"></use>
            <use xlink:href="#id6_7_1" x="50" y="50" transform="skewX(45) scale(2)"></use>
            <use xlink:href="#id6_7_1" x="50" y="50" transform="skewY(45) scale(2)"></use>
        </svg>
    </code>
    <h2>6.8 变换总结</h2>

    <h2>6.9 CSS变换和SVG</h2>
    <ul>
        <li>CSS变换功能和SVG基本一样，但细节有差异</li>
        <li>CSS变换不能应用在SVG对象上</li>
    </ul>

</div>
</template>

<script>
    export default {
        name: "Training06"
    }
</script>

<style lang="less" scoped>
    @import "../../common/styles/common.less";
</style>
