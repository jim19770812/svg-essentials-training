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
