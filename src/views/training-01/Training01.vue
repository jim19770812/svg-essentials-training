<template>
<div>
    <h1>第1章 入门指南</h1>
    SVG是矢量图，是种XML脚本，可以展示图形
    <h2>1.1 图形系统</h2>
    <h3>1.1.1 珊格图形</h3>
    <ul>
        <li>珊格图形是用像素表示的矩形数组，每个像素用RGB表示，也叫位图（bitmap）</li>
    </ul>
    <h3>1.1.2 矢量图形</h3>
    矢量图和珊格图的最大区别在于矢量图缩放不会造成图像模糊和失真
    <h3>1.1.3 珊格图形的用途</h3>
    珊格图最适合表示照片
    <h3>1.1.4 矢量图的用户他</h3>
    <ul>
        <li>CAD图（需要等比例放大、精确测量和查看细节）</li>
        <li>设计高分辨率的可打印图像</li>
        <li>RIA动画，例如flash之类</li>
    </ul>
    <h2>1.2 可缩放</h2>
    矢量图可以随意的缩放而依旧保持清晰不失真，珊格图在放大后会锯齿问题严重，虽然可以通过算法消除锯齿，但会带来严重的模糊问题。矢量图就不存在这一问题
    <h2>1.3 SVG的作用</h2>
    <ul>
        <li>SVG是W3C推出的标准</li>
        <li>大多数软件都可以导入/导出SVG格式的图像</li>
        <li>众多浏览器都支持SVG</li>
        <li>SVG也实现了和CSS相似的图像变换和动画能力</li>
        <li>SVG是用XML描述的，因此可以用任何解析XML的工具来读取和显示</li>
    </ul>
    <h2>1.4 创建一个SVG图像</h2>
    <h3>1.4.1 文档结构</h3>
    <pre>
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        &lt;svg width="140" height="170" xmlns="http://www.w3.org/2000/svg"&gt;
            &lt;title&gt;Cat&lt;/title&gt;
            &lt;desc&gt;一只猫&lt;/desc&gt;

            &lt;!-- 这里画图 --&gt;

        &lt;/svg&gt;
    </pre>
    <h3>1.4.2 基本形状</h3>
    <pre>
        &lt;svg width="140" height="170" xmlns="http://www.w3.org/2000/svg"&gt;
            &lt;title&gt;Cat&lt;/title&gt;
            &lt;desc&gt;一只猫&lt;/desc&gt;
            &lt;!-- 画一个空心圆 --&gt;
        <strong>
            &lt;circle cx="70" cy="95" r="50" style="stroke: black; fill:none" /&gt;
        </strong>
        &lt;/svg&gt;

    </pre>
    <code>
        <svg width="140" height="170" class="border" xmlns="http://www.w3.org/2000/svg">
            <title>Cat</title>
            <desc>一只猫</desc>
            <!-- 画一个空心圆 -->
            <circle cx="70" cy="95" r="50" style="stroke: black; fill:none" />
        </svg>
    </code>
    <h3>1.4.3 指定样式属性</h3>
    在上例中，画线和填充是用style的属性实现的（style="stroke:black; fill:none"），也可以把stroke和fill作为独立的属性提供stroke="black" fill="none"
    <pre>
        &lt;svg width="140" height="170" xmlns="http://www.w3.org/2000/svg"&gt;
            &lt;title&gt;Cat&lt;/title&gt;
            &lt;desc&gt;一只猫&lt;/desc&gt;
            &lt;!-- 画一个空心圆 --&gt;
            &lt;circle cx="70" cy="95" r="50" style="stroke: black; fill:none" /&gt;
        <strong>
            &lt;circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--左眼，采用stroke和fill属性实现--&gt;
            &lt;circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--右眼，采用stroke和fill属性实现--&gt;
        </strong>
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="140" height="170" class="border" xmlns="http://www.w3.org/2000/svg">
            <title>Cat</title>
            <desc>一只猫</desc>
            <!-- 画一个空心圆 -->
            <circle cx="70" cy="95" r="50" style="stroke: black; fill:none" />
            <circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /> <!--左眼，采用stroke和fill属性实现-->
            <circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /> <!--右眼，采用stroke和fill属性实现-->
        </svg>
    </code>
    <h3>1.4.4 图形对象分组</h3>
    图形对象分组是用一个g标签把多个图元分成一个组
    <div>接下来画胡子，用line方法搞定</div>
    <pre>
        &lt;svg width="140" height="170" xmlns="http://www.w3.org/2000/svg"&gt;
            &lt;title&gt;Cat&lt;/title&gt;
            &lt;desc&gt;一只猫&lt;/desc&gt;
            &lt;!-- 画一个空心圆 --&gt;
            &lt;circle cx="70" cy="95" r="50" style="stroke: black; fill:none" /&gt;
            &lt;circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--左眼，采用stroke和fill属性实现--&gt;
            &lt;circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--右眼，采用stroke和fill属性实现--&gt;
        <strong>
            &lt;g id="whiskers"&gt;
                &lt;line x1="75" y1="95" x2="135" y2="85" stroke="black"&gt;&lt;/line&gt;
                &lt;line x1="75" y1="95" x2="135" y2="105" stroke="black"&gt;&lt;/line&gt;
            &lt;/g&gt;
        </strong>
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="140" height="170" class="border" xmlns="http://www.w3.org/2000/svg">
            <title>Cat</title>
            <desc>一只猫</desc>
            <!-- 画一个空心圆 -->
            <circle cx="70" cy="95" r="50" style="stroke: black; fill:none" />
            <circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /> <!--左眼，采用stroke和fill属性实现-->
            <circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /> <!--右眼，采用stroke和fill属性实现-->
            <g id="whiskers">
                <line x1="75" y1="95" x2="135" y2="85" stroke="black"></line>
                <line x1="75" y1="95" x2="135" y2="105" stroke="black"></line>
            </g>
        </svg>
    </code>
    <h3>1.4.5 变换坐标系统</h3>
    变换坐标系统相当于css里的transform，就是把图像通过use标签复用，并变向（翻转坐标系）
    <pre>
        &lt;svg width="140" height="170" xmlns="http://www.w3.org/2000/svg"&gt; &lt;title&gt;Cat&lt;/title&gt;
            &lt;desc&gt;一只猫&lt;/desc&gt;
            &lt;!-- 画一个空心圆 --&gt;
            &lt;circle cx="70" cy="95" r="50" style="stroke: black; fill:none" /&gt;
            &lt;circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--左眼，采用stroke和fill属性实现--&gt;
            &lt;circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--右眼，采用stroke和fill属性实现--&gt;
            &lt;g id="whiskers"&gt;
                &lt;line x1="75" y1="95" x2="135" y2="85" stroke="black"&gt;&lt;/line&gt;
                &lt;line x1="75" y1="95" x2="135" y2="105" stroke="black"&gt;&lt;/line&gt;
            &lt;/g&gt;
        <strong>
            &lt;use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"&gt;&lt;/use&gt;
            //反转坐标系 scale(-1 1) 表示水平方向*-1，即水平反转
        </strong>
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="140" height="170" class="border" xmlns="http://www.w3.org/2000/svg">
            <title>Cat</title>
            <desc>一只猫</desc>
            <!-- 画一个空心圆 -->
            <circle cx="70" cy="95" r="50" style="stroke: black; fill:none" />
            <circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /> <!--左眼，采用stroke和fill属性实现-->
            <circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /> <!--右眼，采用stroke和fill属性实现-->
            <g id="whiskers">
                <line x1="75" y1="95" x2="135" y2="85" stroke="black"></line>
                <line x1="75" y1="95" x2="135" y2="105" stroke="black"></line>
            </g>
            <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"></use>
        </svg>
    </code>
    <ul>
        <li>use标签的xlink:href属性在不同的命名空间中，</li>
        <li>transform属性依次列出了所有变换，不同变换之间用空格分隔</li>
    </ul>
    <h3>1.4.6 其它图形</h3>
    polyline元素是用一组x,y坐标数组来构建多边形，用法
    <pre>
    &lt;polyline points="x1, y1, x2 y2, x3 y3, x4 y4, x5 y5, x6 y6 ...."&gt;&lt;/polyline&gt;
    </pre>
    代码如下
    <pre>
        &lt;svg width="140" height="170" xmlns="http://www.w3.org/2000/svg"&gt;
            &lt;title&gt;Cat&lt;/title&gt;
            &lt;desc&gt;一只猫&lt;/desc&gt;
            &lt;!-- 画一个空心圆 --&gt;
            &lt;circle cx="70" cy="95" r="50" style="stroke: black; fill:none" /&gt;
            &lt;circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--左眼，采用stroke和fill属性实现--&gt;
            &lt;circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--右眼，采用stroke和fill属性实现--&gt;
            &lt;g id="whiskers"&gt;
                &lt;line x1="75" y1="95" x2="135" y2="85" stroke="black"&gt;&lt;/line&gt;
                &lt;line x1="75" y1="95" x2="135" y2="105" stroke="black"&gt;&lt;/line&gt;
            &lt;/g&gt;
            &lt;use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"&gt;&lt;/use&gt;
        <strong>
            &lt;!--耳朵--&gt;
            &lt;polyline points="108 62, 90 10, 70 45, 50 ,10, 32, 62" stroke="black" fill="none"&gt;&lt;/polyline&gt;
            &lt;!--嘴巴--&gt;
            &lt;polyline points="35 110, 45 120, 95 120, 105, 110" stroke="black" fill="none"&gt;&lt;/polyline&gt;
        </strong>
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="140" height="170" class="border" xmlns="http://www.w3.org/2000/svg">
            <title>Cat</title>
            <desc>一只猫</desc>
            <!-- 画一个空心圆 -->
            <circle cx="70" cy="95" r="50" style="stroke: black; fill:none" />
            <circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /> <!--左眼，采用stroke和fill属性实现-->
            <circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /> <!--右眼，采用stroke和fill属性实现-->
            <g id="whiskers">
                <line x1="75" y1="95" x2="135" y2="85" stroke="black"></line>
                <line x1="75" y1="95" x2="135" y2="105" stroke="black"></line>
            </g>
            <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"></use>
            <!--耳朵-->
            <polyline points="108 62, 90 10, 70 45, 50 ,10, 32, 62" stroke="black" fill="none"></polyline>
            <!--嘴巴-->
            <polyline points="35 110, 45 120, 95 120, 105, 110" stroke="black" fill="none"></polyline>
        </svg>
    </code>
    <h3>1.4.7 路径</h3>
    <div>
        路径即path，所有的形状（圆，矩形，直线，椭圆等）都是路径的快捷写法
    </div>
    <div>
        接下来用路径画上鼻子（用polyline也是可以完成的，但这里主要为了说明path的用法)
    </div>
    <pre>
        &lt;svg width="140" height="170" xmlns="http://www.w3.org/2000/svg"&gt;
            &lt;title&gt;Cat&lt;/title&gt;
            &lt;desc&gt;一只猫&lt;/desc&gt;
            &lt;!-- 画一个空心圆 --&gt;
            &lt;circle cx="70" cy="95" r="50" style="stroke: black; fill:none" /&gt;
            &lt;circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--左眼，采用stroke和fill属性实现--&gt;
            &lt;circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--右眼，采用stroke和fill属性实现--&gt;
            &lt;g id="whiskers"&gt;
                &lt;line x1="75" y1="95" x2="135" y2="85" stroke="black"&gt;&lt;/line&gt;
                &lt;line x1="75" y1="95" x2="135" y2="105" stroke="black"&gt;&lt;/line&gt;
            &lt;/g&gt;
            &lt;use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"&gt;&lt;/use&gt;
            &lt;!--耳朵--&gt;
            &lt;polyline points="108 62, 90 10, 70 45, 50 ,10, 32, 62" stroke="black" fill="none"&gt;&lt;/polyline&gt;
            &lt;!--嘴巴--&gt;
            &lt;polyline points="35 110, 45 120, 95 120, 105, 110" stroke="black" fill="none"&gt;&lt;/polyline&gt;
            &lt;!--鼻子--&gt;
            <strong>
            &lt;path d="M 75 90 L 65 90 A 5 10 0 0 0 75 90" stroke="black" fill="#ffcccc"&gt;&lt;/path&gt;
            </strong>
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="140" height="170" class="border" xmlns="http://www.w3.org/2000/svg">
            <title>Cat</title>
            <desc>一只猫</desc>
            <!-- 画一个空心圆 -->
            <circle cx="70" cy="95" r="50" style="stroke: black; fill:none" />
            <circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /> <!--左眼，采用stroke和fill属性实现-->
            <circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /> <!--右眼，采用stroke和fill属性实现-->
            <g id="whiskers">
                <line x1="75" y1="95" x2="135" y2="85" stroke="black"></line>
                <line x1="75" y1="95" x2="135" y2="105" stroke="black"></line>
            </g>
            <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"></use>
            <!--耳朵-->
            <polyline points="108 62, 90 10, 70 45, 50 ,10, 32, 62" stroke="black" fill="none"></polyline>
            <!--嘴巴-->
            <polyline points="35 110, 45 120, 95 120, 105, 110" stroke="black" fill="none"></polyline>
            <!--鼻子-->
            <path d="M 75 90 L 65 90 A 5 10 0 0 0 75 90" stroke="black" fill="#ffcccc"></path>
        </svg>
    </code>
    <h3>1.4.8 文本</h3>
    文本用text标签，格式
    <pre>
        &lt;text x="x" y="y" style="字体样式，同css字体规则" stroke="stroke" fill="颜色"&gt;
        需要输出的文字
        &lt;/text&gt;
    </pre>
    <pre>
        &lt;svg width="140" height="170" xmlns="http://www.w3.org/2000/svg"&gt;
            &lt;title&gt;Cat&lt;/title&gt;
            &lt;desc&gt;一只猫&lt;/desc&gt;
            &lt;!-- 画一个空心圆 --&gt;
            &lt;circle cx="70" cy="95" r="50" style="stroke: black; fill:none" /&gt;
            &lt;circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--左眼，采用stroke和fill属性实现--&gt;
            &lt;circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /&gt; &lt;!--右眼，采用stroke和fill属性实现--&gt;
            &lt;g id="whiskers"&gt;
                &lt;line x1="75" y1="95" x2="135" y2="85" stroke="black"&gt;&lt;/line&gt;
                &lt;line x1="75" y1="95" x2="135" y2="105" stroke="black"&gt;&lt;/line&gt;
            &lt;/g&gt;
            &lt;use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"&gt;&lt;/use&gt;
            &lt;!--耳朵--&gt;
            &lt;polyline points="108 62, 90 10, 70 45, 50 ,10, 32, 62" stroke="black" fill="none"&gt;&lt;/polyline&gt;
            &lt;!--嘴巴--&gt;
            &lt;polyline points="35 110, 45 120, 95 120, 105, 110" stroke="black" fill="none"&gt;&lt;/polyline&gt;
            &lt;!--鼻子--&gt;
            &lt;path d="M 75 90 L 65 90 A 5 10 0 0 0 75 90" stroke="black" fill="#ffcccc"&gt;&lt;/path&gt;
        <strong>
            &lt;text x="50" y="165" style="font-family: monospace; font-size: 14pt" stroke="none" fill="red"&gt;小猫&lt;/text&gt;
        </strong>
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="140" height="170" class="border" xmlns="http://www.w3.org/2000/svg">
            <title>Cat</title>
            <desc>一只猫</desc>
            <!-- 画一个空心圆 -->
            <circle cx="70" cy="95" r="50" style="stroke: black; fill:none" />
            <circle cx="55" cy="80" r="5" stroke="black" fill="#339933" /> <!--左眼，采用stroke和fill属性实现-->
            <circle cx="85" cy="80" r="5" stroke="black" fill="#339933" /> <!--右眼，采用stroke和fill属性实现-->
            <g id="whiskers">
                <line x1="75" y1="95" x2="135" y2="85" stroke="black"></line>
                <line x1="75" y1="95" x2="135" y2="105" stroke="black"></line>
            </g>
            <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"></use>
            <!--耳朵-->
            <polyline points="108 62, 90 10, 70 45, 50 ,10, 32, 62" stroke="black" fill="none"></polyline>
            <!--嘴巴-->
            <polyline points="35 110, 45 120, 95 120, 105, 110" stroke="black" fill="none"></polyline>
            <!--鼻子-->
            <path d="M 75 90 L 65 90 A 5 10 0 0 0 75 90" stroke="black" fill="#ffcccc"></path>
            <text x="50" y="165" style="font-family: monospace; font-size: 14pt" stroke="none" fill="red">小猫</text>
        </svg>
    </code>
</div>
</template>

<script>
    export default {
        name: "Training01"
    }
</script>

<style lang="less" scoped>
@import "../../common/styles/common.less";

</style>
