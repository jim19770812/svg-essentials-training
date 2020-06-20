<template>
<div>
    <h1>第4章 基本形状</h1>
    本章主要介绍矩形，线，多边形，圆和椭圆
    <h2>4.1 线段</h2>
    <ul>
        <li>&lt;line&gt;标签可以画出一条直线</li>
        <li>属性x1,y1,x2,y2，用来表示起始坐标和截止坐标</li>
    </ul>
    <pre>
    &lt;svg width="100" height="100" class="border"&gt;
        &lt;line x1="10" y1="10" x2="90" y2="90" stroke-width="1.1px" stroke="black" fill="none"&gt;&lt;/line&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="100" height="100" class="border">
            <line x1="10" y1="10" x2="90" y2="90" stroke-width="1.1px" stroke="black" fill="none"></line>
        </svg>
    </code>
    <h2>4.2 画笔特性</h2>
    画笔的宽度，颜色，风格都是可以设置的，通过style属性或者具体的独立属性设置
    <h3>4.2.1 stroke-width 线宽, 4.2.2 画笔颜色</h3>
    <ul>
        <li>线是有宽度的，对于一条线来说，线宽是骑在标线上的，即10px位置的线宽是1px的一条线，线的边会显示在9.5px处到10.5处</li>
        <li>画笔颜色符合CSS规则</li>
    </ul>
    <pre>
    &lt;svg width="100" height="100" class="border"&gt;
        &lt;line x1="10" y1="20" x2="90" y2="20" <strong>stroke-width="0.5px"</strong> stroke="black" fill="none"&gt;&lt;/line&gt;
        &lt;line x1="10" y1="50" x2="90" y2="50" <strong>stroke-width="2.5px"</strong> stroke="black" fill="none"&gt;&lt;/line&gt;
        &lt;line x1="10" y1="80" x2="90" y2="80" <strong>stroke-width="4.5px"</strong> stroke="black" fill="none"&gt;&lt;/line&gt;
    &lt;/svg&gt;
    &lt;svg width="100" height="100" class="border"&gt;
        &lt;line x1="10" y1="20" x2="90" y2="20" stroke-width="0.5px" <strong>stroke="red"</strong> fill="none"&gt;&lt;/line&gt;
        &lt;line x1="10" y1="50" x2="90" y2="50" stroke-width="2.5px" <strong>stroke="#9999ff"</strong> fill="none"&gt;&lt;/line&gt;
        &lt;line x1="10" y1="80" x2="90" y2="80" stroke-width="4.5px" <strong>stroke="rgb(60%,20%,60%)"</strong> fill="none"&gt;&lt;/line&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="100" height="100" class="border">
            <line x1="10" y1="20" x2="90" y2="20" stroke-width="0.5px" stroke="red" fill="none"></line>
            <line x1="10" y1="50" x2="90" y2="50" stroke-width="2.5px" stroke="#9999ff" fill="none"></line>
            <line x1="10" y1="80" x2="90" y2="80" stroke-width="4.5px" stroke="rgb(60%,20%,60%)" fill="none"></line>
        </svg>
    </code>
    <h3>4.2.3 stroke-opacity 不透明度</h3>
    <ul>
        <li>stroke-opacity和css规范的opacity一致</li>
        <li>0表示全透明，1表示完全不透明</li>
    </ul>
    <pre>
    &lt;svg width="100" height="100" class="border"&gt;
        &lt;line x1="10" y1="20" x2="90" y2="20" stroke-width="4.5px" stroke="black" fill="none" <strong>stroke-opacity="0.3"</strong>&gt;&lt;/line&gt;
        &lt;line x1="10" y1="50" x2="90" y2="50" stroke-width="4.5px" stroke="black" fill="none" <strong>stroke-opacity="0.6"</strong>&gt;&lt;/line&gt;
        &lt;line x1="10" y1="80" x2="90" y2="80" stroke-width="4.5px" stroke="black" fill="none" <strong>stroke-opacity="0.9"</strong>&gt;&lt;/line&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="100" height="100" class="border">
            <line x1="10" y1="20" x2="90" y2="20" stroke-width="4.5px" stroke="black" fill="none" stroke-opacity="0.3"></line>
            <line x1="10" y1="50" x2="90" y2="50" stroke-width="4.5px" stroke="black" fill="none" stroke-opacity="0.6"></line>
            <line x1="10" y1="80" x2="90" y2="80" stroke-width="4.5px" stroke="black" fill="none" stroke-opacity="0.9"></line>
        </svg>
    </code>
    <h3>4.2.4 stroke-dasharray 属性</h3>
    <ul>
        <li>点线和虚线样式，这个属性在css中是没有的，css中通过定义border-style来实现，stroke-dasharray是通过定义一组数字来实现，数字大的线长，数字小的线短，1就是一个点</li>
        <li>数组中前面一位是线长，后面一位是间隔，如果只有一位就表示线长和间隔相等</li>
        <li>长度单位符合css规范，默认px，其余的单位全都支持</li>
        <li>stroke-dasharray="5"：表示线长5,间隔5，然后不断循环</li>
        <li>stroke-dasharray="5 1"：表示线长5,间隔1，然后不断循环</li>
        <li>stroke-dasharray="5 4 10 4"：表示线长4,间隔4，然后线长10,间隔4，不断循环</li>
        <li>stroke-dasharray="1mm 10mm"：表示线长1毫米，间隔10毫米，不断循环</li>
    </ul>
    <pre>
        &lt;svg width="500" height="160" class="border"&gt;
            &lt;line x1="10" y1="20" x2="490" y2="20" stroke-width="4.5px" stroke="black" <strong>stroke-dasharray="1mm 10mm"</strong>&gt;&lt;/line&gt;
            &lt;line x1="10" y1="50" x2="490" y2="50" stroke-width="4.5px" stroke="black" <strong>stroke-dasharray="10"</strong>&gt;&lt;/line&gt;
            &lt;line x1="10" y1="80" x2="490" y2="80" stroke-width="4.5px" stroke="black" <strong>stroke-dasharray="10 3"</strong>&gt;&lt;/line&gt;
            &lt;line x1="10" y1="110" x2="490" y2="110" stroke-width="4.5px" stroke="black" <strong>stroke-dasharray="10 1"</strong>&gt;&lt;/line&gt;
            &lt;line x1="10" y1="140" x2="490" y2="140" stroke-width="4.5px" stroke="black" <strong>stroke-dasharray="20 2"</strong>&gt;&lt;/line&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="500" height="160" class="border">
            <line x1="10" y1="20" x2="490" y2="20" stroke-width="4.5px" stroke="black" stroke-dasharray="1mm 10mm"></line>
            <line x1="10" y1="50" x2="490" y2="50" stroke-width="4.5px" stroke="black" stroke-dasharray="10"></line>
            <line x1="10" y1="80" x2="490" y2="80" stroke-width="4.5px" stroke="black" stroke-dasharray="10 3"></line>
            <line x1="10" y1="110" x2="490" y2="110" stroke-width="4.5px" stroke="black" stroke-dasharray="10 1"></line>
            <line x1="10" y1="140" x2="490" y2="140" stroke-width="4.5px" stroke="black" stroke-dasharray="20 2"></line>
        </svg>
    </code>
    <h2>4.3 矩形</h2>
    <ul>
        <li>&lt;rect&gt;元素可以绘制一个矩形</li>
        <li>矩形需要左上角坐标和宽度就可以绘制 x,y width, height，其中x,y默认是0</li>
        <li>stroke-width可以用来描述线宽</li>
        <li>fill属性可以用来描述矩形填充颜色</li>
        <li>fill-opacity可以用来描述填充的不透明度</li>
        <li>stroke-opacity可以用来描述线的不透明度</li>
        <li>和line一样，矩形的边框也是骑在标线上的</li>
        <li>如果矩形的width=0,height=0则矩形不显示</li>
    </ul>
    <pre>
    &lt;svg width="200" height="100" class="border"&gt;
        &lt;rect x="10" y="10" width="150" height="50" stroke-width="1px" stroke="black" fill="blue" fill-opacity="0.4"&gt;&lt;/rect&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200" height="100" class="border">
            <rect x="10" y="10" width="150" height="50" stroke-width="1px" stroke="black" fill="blue" fill-opacity="0.4"></rect>
        </svg>
    </code>
    <h3>圆角矩形</h3>
    <ul>
        <li>rx属性设置x方向半径，ry属性设置y方向半径</li>
        <li>功能类似css规范中的border-radius属性</li>
        <li>如果圆角半径=宽度或高度的一半，圆角矩形就成了一个椭圆，但最好用专门的椭圆指令来画，用圆角矩形画椭圆要复杂一些</li>
    </ul>
    <pre>
        &lt;svg width="200" height="100" class="border"&gt;
            &lt;rect x="10" y="10" <strong>rx="15" ry="15"</strong> width="150" height="50" stroke-width="1px" stroke="black" fill="yellow"&gt;&lt;/rect&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200" height="100" class="border">
            <rect x="10" y="10" rx="15" ry="15" width="150" height="50" stroke-width="1px" stroke="black" fill="yellow"></rect>
        </svg>
    </code>
    <h2>4.4 园和椭圆</h2>
    <h3>圆</h3>
    <ul>
        <li>&lt;circle&gt;用来绘制一个圆</li>
        <li>cx,cy表示圆的圆心坐标，r表示半径</li>
        <li>未设置stroke和fill，默认会用黑色填充</li>
    </ul>
    <pre>
    &lt;svg width="100" height="100" class="border"&gt;
        &lt;circle cx="50" cy="50" r="40" stroke-width="1px" stroke="black" fill="yellow"&gt;&lt;/circle&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="100" height="100" class="border">
            <circle cx="50" cy="50" r="40" stroke-width="1px" stroke="black" fill="yellow"></circle>
        </svg>
    </code>
    <h3>椭圆</h3>
    <ul>
        <li>&lt;ellipse&gt;用来绘制一个椭圆</li>
        <li>cx,cy表示椭圆的圆心坐标</li>
        <li>rx,ry表示椭圆的水平方向和垂直方向的半径</li>
        <li>未设置stroke和fill，默认会用黑色填充</li>
    </ul>
    <pre>
        &lt;svg width="200" height="100" class="border"&gt;
            &lt;ellipse cx="100" cy="50" rx="80" ry="40" stroke-width="1px" stroke="black" fill="yellow"&gt;&lt;/ellipse&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200" height="100" class="border">
            <ellipse cx="100" cy="50" rx="80" ry="40" stroke-width="1px" stroke="black" fill="yellow"></ellipse>
        </svg>
    </code>
    <h2>4.5 多边形</h2>
    <ul>
        <li>&lt;polygon&gt;标签用来绘制一个多边形</li>
        <li>多边形通过传入一系列用空格分隔的坐标对来绘制一个封闭图形（不需要封闭，polygon元素会自动做封闭处理）</li>
    </ul>
    <pre>
        &lt;svg width="200" height="200" viewBox="0 0 200 200" class="border"&gt;
            &lt;polygon points="15,10 55, 10 45,20 5,20" fill="red" stroke="none"&gt;&lt;/polygon&gt;
            &lt;polygon points="35,37.5 37.9,46.1 46.9,46.1 39.7,51.5 42.3,60.1 35,55 27.7,60.1 30.3,51.5 23.1,46.1 32.1,46.1"
        fill="none" stroke="black"&gt;&lt;/polygon&gt;
            &lt;polygon points="60,60 80,50 150,90 70,120" fill="none" stroke="black" stroke-width="2px"&gt;&lt;/polygon&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200" height="200" viewBox="0 0 200 200" class="border">
            <polygon points="15,10 55, 10 45,20 5,20" fill="red" stroke="none"></polygon>
            <polygon points="35,37.5 37.9,46.1 46.9,46.1 39.7,51.5 42.3,60.1 35,55 27.7,60.1 30.3,51.5 23.1,46.1 32.1,46.1" fill="none" stroke="black"></polygon>
            <polygon points="60,60 80,50 150,90 70,120" fill="none" stroke="black" stroke-width="2px"></polygon>
        </svg>
    </code>
    <h3>填充边线交叉的多边形</h3>
    <ul>
        <li>在多边形的线互相交叉时，判断哪些区块是多边形的内部就比较困难了</li>
        <li>fill-rule属性用来设置不同的填充规则
            <ul>
                <li>nonzero：默认值，即非零模式，其原理是假定一个点向一个方向无限延伸，如果穿过了的线的方向是从右往左，计数器-1,如果线是从左往右，则计数器+1，最终结果如果是0就表示点在多边形的外部，否则就处于多边形的内部</li>
                <li>eenodd：即奇偶模式，其原理是假定一个点向一个方向无限延伸，如果穿过了偶数条线就表示点在多边形的外部，奇数条线就表示处于多边形的内部</li>
            </ul>
        </li>
    </ul>
    <pre>
    &lt;svg width="200" height="150" viewBox="0 0 200 150" class="border"&gt;
        &lt;polygon points="48,16 16,96 96,48 0,48 80,96"
                 fill="green" stroke="black" <strong>fill-rule="nonzero"</strong>&gt;&lt;/polygon&gt;
        &lt;polygon points="148,16 116,96 196,48 100,48 180,96"
                 fill="green" stroke="black" <strong>fill-rule="evenodd"</strong>&gt;&lt;/polygon&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200" height="150" viewBox="0 0 200 150" class="border">
            <polygon points="48,16 16,96 96,48 0,48 80,96"
                     fill="green" stroke="black" fill-rule="nonzero"></polygon>
            <polygon points="148,16 116,96 196,48 100,48 180,96"
                     fill="green" stroke="black" fill-rule="evenodd"></polygon>
        </svg>
    </code>
    貌似<strong>fill-rule="nonzero"</strong>填充效果更好一点
    <h2>4.6 折线</h2>
    <ul>
        <li>&lt;polyline&gt;用来绘制折线（和polygon不同的是polyline不会封闭）</li>
        <li>和polygon一样，也需要传入points一组坐标来绘制折线</li>
    </ul>
    <pre>
    &lt;svg width="100" height="50" viewBox="0 0 100 50" class="border"&gt;
        &lt;polyline points="5 20, 20 20, 25 10, 35 30, 45 10, 55 30, 65 10, 75 30, 80 20, 95 20"
                 fill="none" stroke="black"&gt;&lt;/polyline&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg width="100" height="50" viewBox="0 0 100 50" class="border">
            <polyline points="5 20, 20 20, 25 10, 35 30, 45 10, 55 30, 65 10, 75 30, 80 20, 95 20"
                     fill="none" stroke="black"></polyline>
        </svg>
    </code>
    如果为polyline设置fill，会绘制成下面的样子
    <code>
        <svg width="100" height="50" viewBox="0 0 100 50" class="border">
            <polyline points="5 20, 20 20, 25 10, 35 30, 45 10, 55 30, 65 10, 75 30, 80 20, 95 20"
                      fill="green" stroke="black"></polyline>
        </svg>
    </code>
    <h2>4.7 线帽和线连接</h2>
    <h3>线帽 stroke-linecap</h3>
    <ul>
        <li>线与的样式也是可以设置的</li>
        <li>&lt;line&gt;的stroke-linecap属性定义了线与线的接头样式</li>
    </ul>
    <pre>
        &lt;svg width="500" height="100" class="border"&gt;
            &lt;line x1="30" y1="20" x2="170" y2="20" stroke-width="14.5px" stroke="black" <strong>stroke-linecap="butt"</strong>&gt;&lt;/line&gt;
            &lt;text x="200" y="20"&gt;butt：精确对齐（默认值）&lt;/text&gt;
            &lt;line x1="30" y1="50" x2="170" y2="50" stroke-width="14.5px" stroke="black" <strong>stroke-linecap="round"</strong>&gt;&lt;/line&gt;
            &lt;text x="200" y="50"&gt;round：圆角样式，超出了基准位置&lt;/text&gt;
            &lt;line x1="30" y1="80" x2="170" y2="80" stroke-width="14.5px" stroke="black" <strong>stroke-linecap="square"</strong>&gt;&lt;/line&gt;
            &lt;text x="200" y="80"&gt;square：四方形样式，超出了基准位置&lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="500" height="100" class="border">
            <line x1="30" y1="20" x2="170" y2="20" stroke-width="14.5px" stroke="black" stroke-linecap="butt"></line>
            <text x="200" y="20">butt：精确对齐（默认值）</text>
            <line x1="30" y1="50" x2="170" y2="50" stroke-width="14.5px" stroke="black" stroke-linecap="round"></line>
            <text x="200" y="50">round：圆角样式，超出了基准位置</text>
            <line x1="30" y1="80" x2="170" y2="80" stroke-width="14.5px" stroke="black" stroke-linecap="square"></line>
            <text x="200" y="80">square：四方形样式，超出了基准位置</text>
        </svg>
    </code>
    <h3>线连接 stroke-linejoin</h3>
    <ul>
        <li>线连接样式可以设置线与线相交初的接头效果</li>
    </ul>
    <pre>
        &lt;svg width="400" height="100" class="border"&gt;
            &lt;polyline points="30 30, 45 15, 60 30" stroke-width="14.5px" stroke="black" <strong>stroke-linejoin="miter"</strong>&gt;&lt;/polyline&gt;
            &lt;text x="200" y="20"&gt;miter：尖锐&lt;/text&gt;
            &lt;polyline points="90 30, 105 15, 120 30" stroke-width="14.5px" stroke="black" <strong>stroke-linejoin="round"</strong>&gt;&lt;/polyline&gt;
            &lt;text x="200" y="50"&gt;round：圆角样式&lt;/text&gt;
            &lt;polyline points="150 30, 165 15, 180 30" stroke-width="14.5px" stroke="black" <strong>stroke-linejoin="bevel"</strong>&gt;&lt;/polyline&gt;
            &lt;text x="200" y="80"&gt;bevel：平的样式&lt;/text&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="400" height="100" class="border">
            <polyline points="30 30, 45 15, 60 30" stroke-width="14.5px" stroke="black" stroke-linejoin="miter"></polyline>
            <text x="200" y="20">miter：尖锐</text>
            <polyline points="90 30, 105 15, 120 30" stroke-width="14.5px" stroke="black" stroke-linejoin="round"></polyline>
            <text x="200" y="50">round：圆角样式</text>
            <polyline points="150 30, 165 15, 180 30" stroke-width="14.5px" stroke="black" stroke-linejoin="bevel"></polyline>
            <text x="200" y="80">bevel：平的样式</text>
        </svg>
    </code>
    <h2>4.8 基本形状总结</h2>
    <h3>4.8.1 形状元素</h3>

    <h3>4.8.2 指定颜色</h3>
    填充和边框都可以设置颜色，颜色的表示方法与css规范一致
    <ul>
        <li>currentColor：元素的当前的color属性，一般是继承的</li>
    </ul>
    <pre>
        &lt;svg width="500" height="130" class="border"&gt;
            &lt;line x1="10" y1="20" x2="490" y2="20" stroke-width="4.5px" <strong>stroke="blue"</strong>&gt;&lt;/line&gt;
            &lt;line x1="10" y1="50" x2="490" y2="50" stroke-width="4.5px" <strong>stroke="rgba(200, 0, 200, 0.4)"</strong>&gt;&lt;/line&gt;
            &lt;line x1="10" y1="80" x2="490" y2="80" stroke-width="4.5px" <strong>stroke="#0ef0cc"</strong>&gt;&lt;/line&gt;
            &lt;line x1="10" y1="110" x2="490" y2="110" stroke-width="4.5px" <strong>stroke="currentColor"</strong>&gt;&lt;/line&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="500" height="130" class="border">
            <line x1="10" y1="20" x2="490" y2="20" stroke-width="4.5px" stroke="blue"></line>
            <line x1="10" y1="50" x2="490" y2="50" stroke-width="4.5px" stroke="rgba(200, 0, 200, 0.4)"></line>
            <line x1="10" y1="80" x2="490" y2="80" stroke-width="4.5px" stroke="#0ef0cc"></line>
            <line x1="10" y1="110" x2="490" y2="110" stroke-width="4.5px" stroke="currentColor"></line>
        </svg>
    </code>
    <h3>4.8.3 笔画和填充特性</h3>
</div>
</template>

<script>
    export default {
        name: "Training04"
    }
</script>

<style lang="less" scoped>
@import "../../common/styles/common.less";
</style>

