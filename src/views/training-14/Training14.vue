<template>
<div>
    <h1>第14章 使用SVG DOM</h1>
    <ul>
        <li>SVG中数值都是带单位的，比如10px,10rem,10pt,10pct,10mm,10cm，每个属性都有
            <ul>
                <li>可写属性 baseVal，以10rem为例
                    <ul>
                        <li>element.baseVal.value：基础的数字部分（10）</li>
                        <li>element.baseVal.valueInSpecifiedUnits：字面上是用指定单位表示的值，但经过实践，和value是一样的（10）</li>
                        <li>element.baseVal.valueAsString()：是包含单位的完整字符串（10rem）</li>
                        <li>element.baseVal.convertToSpecifiedUnit(unitConstant)：把baseVal转换成新的单位（不会返回值，而是直接修改baseVal），比如从rem转成px</li>
                    </ul>
                </li>
                <li>只读属性 animVal（只在动画发生改变后会自动变化）：以10rem为例
                    <ul>
                        <li>element.animVal.value：基础的数字部分（10）</li>
                        <li>element.animVal.valueInSpecifiedUnits：字面上是用指定单位表示的值，但经过实践，和value是一样的（10）</li>
                        <li>element.animVal.valueAsString()：是包含单位的完整字符串（10rem）</li>
                        <li>element.animVal.convertToSpecifiedUnit(unitConstant)：把animVal转换成新的单位（不会返回值，而是直接修改animVal），比如从rem转成px</li>
                    </ul>
                </li>
                <li>所有的数值都是这种方式表示的，比如width，就可以用element.width.baseVal.value来访问</li>
            </ul>
        </li>
    </ul>
    <pre>
        &lt;svg width="400" height="120" class="border"&gt;
            &lt;g <strong>@click="btn141_1_click"</strong>&gt;
                &lt;rect <strong>ref="rect141_1"</strong> x="20" y="20" width="160px" height="40px" rx="4" ry="4" style="fill:green" /&gt;
                &lt;foreignObject <strong>ref="frg141_1"</strong> x="20" y="20" width="160" height="40"&gt;
                    &lt;div style="text-align: center"&gt;每次点击都会变大&lt;/div&gt;
                &lt;/foreignObject&gt;
            &lt;/g&gt;
        &lt;/svg&gt;

        ....

        <strong>btn141_1_click()</strong>{
            <strong>
            //这里改变element.width.baseVal.value实现的宽度变化，每次宽度+2个像素
            </strong>
            this.$refs.rect141_1.width.baseVal.value+=20
            this.$refs.frg141_1.width.baseVal.value+=20
        }
    </pre>
    <code>
        <svg width="400" height="120" class="border">
            <g @click="btn141_1_click">
                <rect ref="rect141_1" x="20" y="20" width="160px" height="40px" rx="4" ry="4" style="fill:green" />
                <foreignObject ref="frg141_1" x="20" y="20" width="160" height="40">
                    <div style="text-align: center">每次点击都会变大</div>
                </foreignObject>
            </g>
        </svg>
    </code>
    <p>可用的SVG数据对象</p>
    <p><strong>注意：部分属性可能存在浏览器兼容问题</strong></p>
    <ul>
        <li>SVGLength：带单位的长度，比如winth，height，r，cx，cy，rx，ry等，单位可以是任何符合CSS规范的度量单位
            <ul>
                <li>unitType：允许的单位</li>
                <li>value：长度</li>
                <li>InSpecifiedUnits：长度，和value一样</li>
                <li>valueAsString：带单位的长度</li>
                <li>newValueSpecifiedUnits：设置值和单位</li>
                <li>convertToSpecifiedUnits:改变anemia，并保持值和用户单位相同</li>
            </ul>
        </li>
        <li>SVGAngle：所有带单位的角度
            <ul>
                <li>同SVGLength</li>
            </ul>
        </li>
        <li>SVGRect：使用用户单位的矩形，这个和&lt;rect&gt;不是一回事
            <ul>
                <li>x, y, width, height：表示用户坐标</li>
            </ul>
        </li>
        <li>SVGPoint：用户空间中的点
            <ul>
                <li>x，y：用户坐标</li>
                <li>matrixTransform(maxtrix)：通过矩阵变换后的点的值，参数就是是个矩阵</li>
            </ul>
        </li>
        <li>SVGMatrix：用于变换矩阵的对象
        </li>
        <li>SVGTransform：变换命令对象</li>
        <li>SVGTransformList：变换命令列表</li>
        <li>SVGXxxList：任何可以被当成列表或数组的数据类型</li>
        <li>SVGAnimatedXxx：能够使用动画的属性值，几乎所有数据类型都有该接口</li>
    </ul>
    <h2>14.2 SVG接口方法</h2>
    <ul>
        <li>SVG接口方法主要提供一些围绕着SVG图形，坐标，文本的一些辅助计算方法，比如计算文本的实际输出rect</li>
    </ul>
    <h3>SVGElement</h3>
    <ul>
        <li>.ownerSVGElement()：返回当前元素的父元素，如果当前元素是顶级则返回null</li>
        <li>.viewportElement()：返回当前视口元素（SVG，pattern，symbol，marker）</li>
    </ul>
    <h3>SVGLocatable元素：一般是容器元素，比如g，svg</h3>
    <ul>
        <li>.nearestViewportElement：指向创建当前元素的视口（svg，pattern，symbol，marker）</li>
        <li>.farthestViewportElement：指向包含当前元素的最顶层元素</li>
        <li>.getBBox()：返回以SVGRect类型当前元素的边界</li>
        <li>.getCTM()：返回一个SVGMatrix对象，表示从当前元素坐标到nearestViewportElement坐标系统之间的变换</li>
        <li>.getScreenCTM()：返回一个SVGMatrix对象，表示从当前元素坐标系统到文档最顶层的屏幕坐标活客户端坐标之间的变换矩阵，一般用这个方法处理图形坐标到鼠标光标坐标之间的转换</li>
        <li>.getTransformToElement(SVGElement)：返回当前元素和传入的SVGElement之间的变换矩阵（用SVGMatrix表示）</li>
    </ul>
    <h3>SVGTransformable：具有transform属性的任何元素</h3>
    <ul>
        <li>.transform：指向了变换过程中的值列表（SVGAnimatedTransformList）</li>
    </ul>
    <h3>SVGStylable：具有style属性的任何元素</h3>
    <ul>
        <li>.style：返回一个CSSStyleDeclaration元素</li>
    </ul>
    <h3>SVGSVGElement：对应svg元素</h3>
    <ul>
        <li>.suspendRedraw(maxWaitTimeInMilliseconds)->suspendId：在批量画图时，可以用此方法暂停浏览器重绘，等多条变更处理完再一次性重绘出所有变更，这是个优化加速的方法，很有用</li>
        <li>.unsuspendRedraw(suspendId)：根据传入的suspendId取消暂停重绘</li>
        <li>.unsuspendRedrawAll()：取消SVG上所有由suspendRedraw创建的暂停重绘</li>
        <li>.pauseAnimations()：暂停SMIL动画的时钟</li>
        <li>.unpauseAnimations()：恢复SMIL动画的时钟</li>
        <li>.animationsPaused()：返回bool值，表示当前SMIL动画处于暂停状态</li>
        <li>.getCurrentTime()：返回SMIL动画当前始终，一般是文档加载后的秒数</li>
        <li>.setCurrentTime(timeInSeconds)：修改SMIL动画的时钟值，修改后会影响所有动画</li>
        <li>.getIntersectionList(rectangle, referenceElement)：返回一个指定Rect区域内的所有某元素的子元素的列表（这些元素必须能响应鼠标指针事件），指定的referenceElement如果是null表示顶级SVG元素</li>
        <li>.getEnclosureList(rectangle, referenceElement)：与.getIntersectionList()类似，但getEnclosureList只返回完全包含的元素（比较适合做鼠标选择图元）</li>
        <li>.checkIntersection(element, rectangle)：返回bool，判断在指定的rectangle中是否覆盖到了传入的element元素</li>
        <li>.checkEnclousure(element, rectangle)：返回bool，判断在指定的rectangle中是否完全包含传入的element元素</li>
        <li>.createSVGXxx()：创建各种数据对象（SVGPoint，SVGAngle,SVGMatrix等）</li>
    </ul>
    <h3>SVGUseElement：对应use元素</h3>
    <ul>
        <li>.instanceRoot：包含use元素的图形Shadow DOM树的最顶层节点</li>
    </ul>
    <h3>SVGPathElement：对应path元素</h3>
    <ul>
        <li>.getTotalLength()：获取所有路径的总长度，这个值在不同客户端会因为舍入问题存在一点点差异</li>
    </ul>
    <h3>SVGPathData：path元素和其它支持路径属性的元素</h3>
    <ul>
        <li>.pathSegList：包含包含路径各个部分的对象列表</li>
        <li>.normalizedPathSegList：简化版的路径各个部分对象列表，每个部分被转化为绝对坐标下的移动、画线、区县或者关闭路径等命令</li>
    </ul>
    <h3>SVGAnimatedPoints：</h3>
    <h3>SVGTextContentElement：任何文本元素</h3>
    <ul>
        <li>.getNumberOfChars()：返回元素中字符总数（包含tspan中的字符），多语言字符会用utf-16字符集，即中文算成一个字符</li>
        <li>.getComputedTextLength()：返回用户坐标下应用了所有css属性和dx，dy属性之后，包含整个文本的长度</li>
        <li>.getSubStringLength(charNum, nChars)：返回截取的字符串部分的长度（从charNum开始，取nChars个字符）</li>
        <li>.getStartPositionOfChar(charNum)：返回从左侧开始截取指定数量的字符串。</li>
        <li>.getEndPositionOfChar(charNum)：返回从右侧开始截取指定数量的字符串。</li>
        <li>.getExtentOfChar(charNum)：获取指定数量的字符串所占Rect，返回一个SVGRect对象</li>
        <li>.getRotationOfChar(charNum)：获取指定个数的字符串的所有变换后的旋转角度（单位是度）</li>
        <li>.getCharNumAtPosition(point)：返回指定坐标的字符粗换索引值，如果指定坐标没有字符串就返回-1</li>
    </ul>
    <h3>ElementTimeControl/SVGAnimationElement：任何SVG动画元素（animate, set, animateTransform, animateMotion）</h3>
    <ul>
        <li>.targetElement：SVG动画修改的当前的SVGElement元素</li>
        <li>.beginElement()：执行后会立刻开始动画（除非被restart属性阻止）</li>
        <li>.endElement()：立刻结束当前正在运行的动画</li>
        <li>.endElementAt(offset)：在offset秒后结束当前动画</li>
        <li>.getStartTime()：获取SVG动画的开始时间</li>
        <li>.getCurrentTime()：获取SVG动画的当前时间（秒为单位）</li>
        <li>.getSimpleDuration()：返回动画每轮的时长（dur属性）</li>
    </ul>
    <h2>14.3 使用ECMAScript/Javascript创建SVG</h2>
    <ul>
        <li>使用javascript来生成SVG当然没问题，但脚本臃肿不好维护，有更棒的替代方法</li>
        <li>脚本创建SVG的思路是用SVG画出界面，用脚本动态修改SVG元素</li>
    </ul>
    <h2>14.4 使用脚本控制动画</h2>
    <h2>14.5 使用Javascript库</h2>
    <ul>
        <li><a href="http://d3js.org">D3.js</a>：是个数据驱动的文档js库，比较适合做互动性较强的图表</li>
        <li><a href="http://raphaeljs.com">Raphael.js</a>：比较通用的js库，适合创建俺动画，提供与老版本浏览器的兼容性</li>
        <li><a href="http://snapsvg.io">Snap.svg</a>：比较通用的js库，审核创建动画，adobe出品，适用于现代浏览器</li>
        <li><a href="http://svgjs.com">Svg.js</a>：一个轻量级的svg库，没有任何外部依赖，支持绘图和动画
            <ul>
                <li>所有图元都有统一风格的API</li>
                <li>文档比较全面（英文）</li>
                <li>和vue适配的很好</li>
                <li>支持各种插件，比如拖拽就很简单可以实现</li>
            </ul>
            安装方法
            <ul>
                <li>npm install @svgdotjs/svg.js --save</li>
                <li>npm install @svgdotjs/svg.draggable.js --save</li>
            </ul>
        </li>
    </ul>
    <p><strong>个人觉得Snap.svg有adobe撑腰，更靠谱一些，然而貌似Snap.svg加入vue后会报错，尴尬</strong></p>
    <ul>
        <li>不要用非SVG的js库来处理SVG，可能会丢失属性，特别是xml命名空间信息可能会丢失</li>
    </ul>
    <p><strong>和书里介绍的不一样，这里用svg.js做个例子</strong></p>
    <pre>
        &lt;svg id="svg145_1"&gt;
        &lt;/svg&gt;
        ....
        <strong>//导入SVG类</strong>
        import {SVG} from "@svgdotjs/svg.js"
        let draw = SVG().addTo('#svg145_1')
        let rect = draw.rect(100, 100).fill('#f06')
    </pre>
    <button @click="btn145_1_click">点我会动态创建一个可以拖拽的矩形</button>
    <code>
        <div id="svg145_1">

        </div>
<!--        <svg id="" width="500" height="300" class="border">-->
<!--        </svg>-->
    </code>
</div>
</template>

<script>
import {SVG} from "@svgdotjs/svg.js"
import dragable from "@svgdotjs/svg.draggable.js"
export default {
    name: "Training14",
    data:function(){
        return {
            t14_1:{
            }
        }
    },
    methods:{
        btn141_1_click(){
            console.log('event.target.textContent', this.$refs.rect141_1.width)
            this.$refs.rect141_1.width.baseVal.value+=20
            this.$refs.frg141_1.width.baseVal.value+=20
        },
        btn145_1_click(){
            let draw = SVG().addTo('#svg145_1')
                .size(300, 300).addClass("border")
            // let rect = draw.rect(100, 100).fill('white')
            let g=draw.group()
            let rect = g.rect(150, 50).fill('green').click(e=>{
                console.log("Svg矩形被点击啦！")
            })
            g.text("点我触发事件").center(75, 25)
            g.draggable() //只有导入了 import dragable from "@svgdotjs/svg.draggable.js"才可以拖拽
        }
    }
}
</script>

<style lang="less" scoped>
    @import "../../common/styles/common.less";
</style>

