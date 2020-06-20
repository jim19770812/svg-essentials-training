<template>
    <div>
        <h1>第7章 路径</h1>
        <ul>
            <li>所有形状本质上都是路径&lt;path&gt;的简写形式</li>
            <li>所有描述轮廓的数据都在&lt;path d="xxxx"&gt;中的d属性里（data的缩写）</li>
            <li>命令和命令之间用空格或逗号间隔M 0 50 L 100 50 和 M 0 50<strong>,</strong>L 100 50 是等效的</li>
            <li>d属性中包含了用单字符表示的命令
                <ul>
                    <li>M：绝对位置移动</li>
                    <li>m：相对位置移动</li>
                    <li>L：绝对位置画线</li>
                    <li>l：相对位置画线</li>
                    <li>Z：关闭路径，注意：Z是无参数的，而且要出现在d属性表达式的最后</li>
                    <li>z：和Z等效</li>
                </ul>
                大写字母后要跟一个空格，然后是数字，例如 M 0 50 L 100 50 （这表示一条水平直线的路径，首先移动到起点(0, 50)，然后向(100, 50)画线）
            </li>
        </ul>
        <h2>7.1 moveto、lineto和closepath</h2>
        <ul>
            <li>每个路径都应该以M命令开始</li>
        </ul>
        <pre>
        &lt;svg width="200" height="200" viewBox="0 0 200 200" class="border"&gt;
            &lt;path <strong>d="M 0 50 L 100 50 L 50 100"</strong> style="stroke-width: 1px; stroke: red; fill: none"&gt;&lt;/path&gt;
            &lt;foreignObject x="10" y="120" width="180" height="50"&gt;
                注意：线没有闭合，如果有填充色就会是一个倒三角形
            &lt;/foreignObject&gt;
        &lt;/svg&gt;
        </pre>
        <code>
            <svg width="200" height="200" viewBox="0 0 200 200" class="border">
                <path d="M 0 50 L 100 50 L 50 100" style="stroke-width: 1px; stroke: red; fill: none"></path>
                <foreignObject x="10" y="120" width="180" height="50">
                    注意：线没有闭合，如果有填充色就会是一个倒三角形
                </foreignObject>
            </svg>
        </code>
        <ul>
            <li>路径的价值在于把复杂的多条指令用一个d属性表示了，这种紧凑的表示法会占用更少的内存和带宽，多用路径是个加速SVG渲染的好办法</li>
            <li>注意：画闭合图形时一定要用Z指令，不然因为线是有宽度的，在自己连向起点时的线总会差那么一点点，在线特别粗并且放大时，线会缺一个角，用Z就没有这个问题</li>
        </ul>
        <h2>相对moveto和lineto</h2>
        路径的d属性表达式中，小写m和小写l表示相对坐标（相对于当前画笔位置的坐标）
        <ul>
            <li>m：表示相对移动</li>
            <li>l：表示相对画线</li>
        </ul>
        <pre>
        &lt;svg width="100" height="100" viewBox="0 0 100 100" class="border"&gt;
            &lt;path <strong>d="M 10 10, L 10 40, L 50 40, L 50 10, z"</strong> style="stroke: black; fill: none"&gt;
            &lt;/path&gt;
            &lt;path <strong>d="M 10 50, l 0 30, l 40 0, l 0 -30, z"</strong> style="stroke: blue; fill: none"&gt;&lt;/path&gt;
        &lt;/svg&gt;
        </pre>
        <code>
            <svg width="100" height="100" viewBox="0 0 100 100" class="border">
                <path d="M 10 10, L 10 40, L 50 40, L 50 10, z" style="stroke: black; fill: none">
                </path>
                <path d="M 10 50, l 0 30, l 40 0, l 0 -30, z" style="stroke: blue; fill: none"></path>
            </svg>
        </code>
        黑色框是绝对位置，蓝色框是相对位置
        <h2>7.3 路径的快捷方式</h2>
        <h3>7.3.1 水平和垂直lineto命令</h3>
        <ul>
            <li>H：绝对水平lineto：H 20 等效与 L 20 current_y</li>
            <li>h：相对水平lineto：h 20 等效与 l 20 0</li>
            <li>V：绝对垂直lineto：V 20 等效与 L current_x 20</li>
            <li>v：绝对垂直lineto：v 20 等效与 v 0 20</li>
        </ul>
        <h3>7.3.2 路径快捷表示法</h3>
        <ul>
            <li>可以在L/l后面跟多组坐标，如 L 10 40, L 50 40, L 50 10 可以省略掉正中间的L，简化成L 10 40 50 40 50 10 </li>
            <li>M后如果没有约定，默认都是L/l，例如 m 30 30 25 -25 25 25 -25 25 只有m 30 30表示移动到，后面全是相对画线l（大小写和首字幕m保持一致）</li>
        </ul>
        <h2>7.4 椭圆弧</h2>
        <ul>
            <li>圆弧命令
                <ul>
                    <li>A：绝对坐标圆弧</li>
                    <li>a：相对坐标圆弧</li>
                </ul>
                圆弧命令的A/a的7个参数
                <ul>
                    <li>椭圆半径x</li>
                    <li>椭圆半径y</li>
                    <li>x-axis-rotation：x轴的旋转角度</li>
                    <li>large-arc-flag：0：圆弧角度小于180度，1：圆弧角度大于180度</li>
                    <li>sweep-flag：0：负角度绘制（逆时针方向），1：正角度绘制（顺时针方向）</li>
                    <li>终点的x坐标</li>
                    <li>终点的y坐标</li>
                </ul>
                <pre>
        &lt;svg width="400" height="400" viewBox="0 0 400 400"&gt;
            &lt;path d="M 125,75 A 100, 50 0 0, 1 225, 125" style="stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
            &lt;path d="M 125,75 A 100, 50 0 1, 0 225, 125" style="stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
            &lt;path d="M 125,75 A 100, 50 0 0, 0 225, 125" style="stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
            &lt;path d="M 125,75 A 100, 50 0 1, 1 225, 125" style="stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
        &lt;/svg&gt;
                </pre>
                <code>
                    <svg width="350" height="200" viewBox="0 0 350 200" class="border">
                        <path d="M 125,75 A 100,50 0 0,1 225, 125" style="stroke: #2c3e50; fill: none"></path>
                        <path d="M 125,75 A 100,50 0 1,0 225, 125" style="stroke: #2c3e50; fill: none"></path>
                        <path d="M 125,75 A 100,50 0 0,0 225, 125" style="stroke: red; fill: none"></path>
                        <path d="M 125,75 A 100,50 0 1,1 225, 125" style="stroke: blue; fill: none"></path>
                    </svg>
                    <div>
                        <div class="blue">
                            蓝色线参数的解释<br>
                            椭圆半径(rx=125, ry=75) <br>
                            x轴旋转角度：100度 <br>
                            圆弧角度大于180度 <br>
                            逆时针方向绘制（正角度） <br>
                            终点x坐标：225 <br>
                            终点y坐标：125 <br>
                        </div>
                        <div class="red">
                            红色线参数的解释<br>
                            椭圆半径(rx=125, ry=75) <br>
                            x轴旋转角度：100度 <br>
                            圆弧角度小于180度 <br>
                            逆时针方向绘制（负角度） <br>
                            终点x坐标：225 <br>
                            终点y坐标：125 <br>
                        </div>
                    </div>
                </code>
                <strong>注意，上图的4段弧线并没有中心点，而是以终点为结束的</strong>
            </li>
        </ul>
        <h2>7.5 从其他弧线格式转换</h2>
        <ul>
            <li>SVG这种用终点和范围表示弧线的方式转换成传统根据cx,cy和半径及夹角来绘制弧线的转换关系比较复杂</li>
        </ul>
        <h2>7.6 贝塞尔曲线</h2>
        <ul>
            <li>绘制曲线从来都是不容易的</li>
            <li>类似adobe photoshop画曲线的时候有个控制柄来调节曲线的弯度是个绘制曲线的成熟解决方案</li>
        </ul>
        <h2>7.6.1 二次贝塞尔曲线</h2>
        <ul>
            <li>贝塞尔曲线需要 起点，终点和切线点(控制点)，有了这三要素就可以绘制一条曲线</li>
            <li>起点，终点和切线点(控制点)之间形成两条切线</li>
            <li>Q：生成一条绝对坐标的贝塞尔曲线，Q {切点坐标/控制点坐标} {终点坐标}</li>
            <li>q：生成一条相对坐标的贝塞尔曲线</li>
        </ul>
        <pre>
        &lt;svg width="350" height="200" viewBox="0 0 350 200" class="border"&gt;
            &lt;path <strong>d="M30 75 Q 240 30, 300 120"</strong> style="stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
            &lt;line x1="30" y1="75" x2="240" y2="30" style="stroke: blue; fill: none"&gt;&lt;/line&gt;
        &lt;/svg&gt;
        <strong>起点是30,75,贝塞尔曲线控制点是240,30，贝塞尔曲线结束点是300,120</strong>
        </pre>
        <code>
            <svg width="350" height="200" viewBox="0 0 350 200" class="border">
                <path d="M30 75 Q 240 30, 300 120" style="stroke: #2c3e50; fill: none"></path>
                <line x1="30" y1="75" x2="240" y2="30" style="stroke: blue; fill: none"></line>
            </svg>
        </code>
        <ul>
            <li>上图的蓝色线是控制线</li>
            <li>使用二次贝塞尔曲线还可以一次画出多条曲线</li>
        </ul>
        <pre>
        &lt;svg width="250" height="150" viewBox="0 0 250 150" class="border"&gt;
            &lt;path <strong>d="M30 100 Q 80 30, 100 100, 130 65, 200 80"</strong> style="stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
            &lt;line x1="30" y1="100" x2="80" y2="30" style="stroke: blue; fill: none"&gt;&lt;/line&gt;
            &lt;line x1="100" y1="100" x2="130" y2="65" style="stroke: red; fill: none"&gt;&lt;/line&gt;
        &lt;/svg&gt;
        </pre>
        <code>
            <svg width="250" height="150" viewBox="0 0 250 150" class="border">
                <path d="M30 100 Q 80 30, 100 100, 130 65, 200 80" style="stroke: #2c3e50; fill: none"></path>
                <line x1="30" y1="100" x2="80" y2="30" style="stroke: blue; fill: none"></line>
                <line x1="100" y1="100" x2="130" y2="65" style="stroke: red; fill: none"></line>
            </svg>
        </code>
        <ul>
            <li>上图中蓝色线和红色线分别是两段曲线的控制线</li>
            <li>第一条曲线：M 30 100 Q80 30, 100 100 起点：30,100 切线点：80,30，终点 100,100</li>
            <li>第二条曲线：M 100 100 Q 130 65, 200 80，起点：100,100, 切线点：130,65, 终点：200,80</li>
        </ul>
        <h4>流畅二次曲线</h4>
        <ul>
            <li>流畅的二次曲线，弧形会漂亮很多</li>
            <li>T：生成一条绝对坐标的流畅曲线，T {控制线/切线坐标} {终点坐标}</li>
            <li>t：生成一条相对坐标的流畅曲线</li>
        </ul>
        上面那两天曲线改用流畅二次曲线后变成下面的样子
        <pre>
        &lt;svg width="250" height="150" viewBox="0 0 250 150" class="border"&gt;
            &lt;path <strong>d="M30 100 T 80 30, 100 100, 130 65, 200 80"</strong> style="stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
            &lt;line x1="30" y1="100" x2="80" y2="30" style="stroke: blue; fill: none"&gt;&lt;/line&gt;
            &lt;line x1="100" y1="100" x2="130" y2="65" style="stroke: red; fill: none"&gt;&lt;/line&gt;
        &lt;/svg&gt;
        </pre>
        <code>
            <svg width="250" height="150" viewBox="0 0 250 150" class="border">
                <path d="M30 100 T 80 30, 100 100, 130 65, 200 80" style="stroke: #2c3e50; fill: none"></path>
                <line x1="30" y1="100" x2="80" y2="30" style="stroke: blue; fill: none"></line>
                <line x1="100" y1="100" x2="130" y2="65" style="stroke: red; fill: none"></line>
            </svg>
        </code>
        <h3>7.6.2 三次贝塞尔曲线</h3>
        <ul>
            <li>三次贝塞尔曲线有一个拐点，曲线从该点从一个方向向另一个方向弯曲</li>
            <li>三次贝塞尔曲线有两条切线在控制曲线</li>
            <li>三次贝塞尔曲线也是比较常用的曲线</li>
            <li>C：绝对坐标的三次贝塞尔曲线，C {起点切点} {终点切点} {终点}</li>
            <li>c：相对坐标的三次贝塞尔曲线</li>
        </ul>
        <pre>
        &lt;svg width="250" height="150" viewBox="0 0 250 150" class="border"&gt;
            &lt;path <strong>d="M30 80 C 50 20, 150 60, 200 120"</strong> style="stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
            &lt;line x1="30" y1="80" x2="50" y2="20" style="stroke: blue; fill: none"&gt;&lt;/line&gt;
            &lt;line x1="150" y1="60" x2="200" y2="120" style="stroke: blue; fill: none"&gt;&lt;/line&gt;
        &lt;/svg&gt;
        </pre>
        <code>
            <svg width="250" height="150" viewBox="0 0 250 150" class="border">
                <path d="M30 80 C 50 20, 150 60, 200 120" style="stroke: #2c3e50; fill: none"></path>
                <line x1="30" y1="80" x2="50" y2="20" style="stroke: blue; fill: none"></line>
                <line x1="150" y1="60" x2="200" y2="120" style="stroke: blue; fill: none"></line>
            </svg>
        </code>
        <ul>
            <li>两条蓝色线就是三次贝塞尔曲线的两条控制线</li>
            <li>S：绝对坐标平滑曲线指令，可以让多条曲线之间保证平滑，和T指令类似，S {控制线/切线坐标} {终点坐标}</li>
            <li>s：相对坐标平滑曲线指令，可以让多条曲线之间保证平滑</li>
        </ul>
        <pre>
        &lt;svg width="250" height="150" viewBox="0 0 250 150" class="border"&gt;
            &lt;path <strong>d="M30 100 S 80 30, 100 100, 130 65, 200 80"</strong> style="stroke: #2c3e50; fill: none"&gt;&lt;/path&gt;
            &lt;line x1="30" y1="100" x2="80" y2="30" style="stroke: blue; fill: none"&gt;&lt;/line&gt;
            &lt;line x1="100" y1="100" x2="130" y2="65" style="stroke: red; fill: none"&gt;&lt;/line&gt;
        &lt;/svg&gt;
        </pre>
        <code>
            <svg width="250" height="150" viewBox="0 0 250 150" class="border">
                <path d="M30 100 S 80 30, 100 100, 130 65, 200 80" style="stroke: #2c3e50; fill: none"></path>
                <line x1="30" y1="100" x2="80" y2="30" style="stroke: blue; fill: none"></line>
                <line x1="100" y1="100" x2="130" y2="65" style="stroke: red; fill: none"></line>
            </svg>
        </code>
        <h2>7.7 路径总结</h2>
        path的d属性中包含了用单字符表示的命令
        <ul>
            <li>M：绝对位置移动</li>
            <li>m：相对位置移动</li>
            <li>L：绝对位置画线，如果连续画线可以省略掉中间的L简写成 L x1 y1 x2 y2 x3 y3 ...</li>
            <li>l：相对位置画线</li>
            <li>Z：关闭路径，注意：Z是无参数的，而且要出现在d属性表达式的最后</li>
            <li>z：和Z等效</li>
            <li>H：绝对水平lineto：H 20 等效与 L 20 current_y</li>
            <li>h：相对水平lineto：h 20 等效与 l 20 0</li>
            <li>V：绝对垂直lineto：V 20 等效与 L current_x 20</li>
            <li>v：绝对垂直lineto：v 20 等效与 v 0 20</li>
            <li>A：绝对坐标圆弧，A {x轴的旋转角度} {0：圆弧角度小于180度，1：圆弧角度大于180度} {0：负角度绘制（逆时针方向），1：正角度绘制（顺时针方向）} {终点的x坐标} 终点的y坐标 </li>
            <li>a：相对坐标圆弧</li>
            <li>Q：生成一条绝对坐标的贝塞尔曲线，Q {控制线/切线坐标} {终点坐标}</li>
            <li>q：生成一条相对坐标的贝塞尔曲线</li>
            <li>T：生成一条绝对坐标的流畅贝塞尔曲线，T {控制线/切线坐标} {终点坐标}</li>
            <li>t：生成一条相对坐标的流畅贝塞尔曲线</li>
            <li>C：绝对坐标的三次贝塞尔曲线，C {起点切点} {终点切点} {终点}</li>
            <li>c：相对坐标的三次贝塞尔曲线</li>
            <li>S：绝对坐标平滑曲线指令，可以让多条曲线之间保证平滑，和T指令类似，S {控制线/切线坐标} {终点坐标}</li>
            <li>s：相对坐标平滑曲线指令，可以让多条曲线之间保证平滑</li>
        </ul>
        注意事项
        <ul>
            <li>每个路径都应该以M命令开始</li>
            <li>使用Z/z可以完美闭合线，放大后线和线的接头处不会有缺角</li>
            <li>圆弧并不是以中心点为坐标绘制的，而是以旋转角度，圆弧角度，绘制方向和终点坐标绘制的，据说这样画矢量图起来更容易</li>
        </ul>
        <h2>7.8 路径和填充</h2>
        <ul>
            <li>注意画图形时的方向，方向会影响fill-rule（nonzero/evenodd）策略的最终呈现效果，一般用默认的nonzreo就可以</li>
        </ul>
        <h2>7.9 &lt;marker&gt;元素</h2>
        <ul>
            <li>marker可以实现类似photoshop画曲线时，在线上点可以出现可以拖拽的小方块的效果</li>
            <li>marker是用来标记路径的轨迹的，marker标签更象是个分组标签g，里面要放置具体的绘图元素，比如圆，方块等</li>
            <li>markerWidth：marker视窗的宽度</li>
            <li>markerHeight:marker视窗的高度</li>
            <li>orient：auto表示方向随着路径旋转</li>
            <li>refX：图形元素和marker连接处的x轴坐标，相当于x方向平移marker使之与图形元素对齐</li>
            <li>refY：图形元素和marker连接处的y轴坐标，相当于y方向平移marker使之与图形元素对齐</li>
            <li>在path及path衍生的元素（圆，矩形，线，椭圆等）可以设置marker出现的位置
                <ul>
                    <li>marker-start：起始处引用marker</li>
                    <li>marker-mid：中间引用marker</li>
                    <li>marker-end<：结束处引用marker</li>
                </ul>
            </li>
            <li>在path中引用marker时要用url(#marker_id)的方式引用</li>
        </ul>
        <pre>
        &lt;svg width="200" height="150" viewBox="0 0 200 150" class="border"&gt;
            &lt;defs&gt;
                &lt;marker id="m1" markerWidth="10" markerHeight="10" refX="5" refY="5"&gt;
                    &lt;circle cx="5" cy="5" r="4" style="fill: none; stroke: black"&gt;&lt;/circle&gt;
                &lt;/marker&gt;
                &lt;marker id="arrow"<strong>markerWidth="10" markerHeight="10" refX="0" refY="3" </strong>markerUnits="strokeWidth" style="fill:black"&gt;
                    &lt;path d="M0,0 L0,6 L9,3 z" /&gt;
                &lt;/marker&gt;
            &lt;/defs&gt;
            &lt;path d="M 10 20 100 20 A 20 30 0 0 1 120 50 L 120 110"
                    style="<strong>marker-start: url('#m1'); marker-end:url(#arrow);</strong>stroke-width: 2px; fill: none; stroke: black"&gt;&lt;/path&gt;
        &lt;/svg&gt;

        &lt;svg width="320px" height="200px" class="border"&gt;
            &lt;defs&gt;
                &lt;marker id="arrow2"<strong>markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto"</strong> markerUnits="strokeWidth" style="fill:black"&gt;
                    &lt;path d="M0,0 L0,6 L9,3 z" /&gt;
                &lt;/marker&gt;
            &lt;/defs&gt;
            &lt;line x1="50" y1="30" x2="250" y2="30" style="stroke: black; fill: none; stroke-width: 3px;<strong>marker-end:url('#arrow2')</strong>" /&gt;
            &lt;line x1="50" y1="60" x2="250" y2="60" style="stroke: black; fill: none; stroke-width: 3px;<strong>marker-start:url('#arrow2')</strong>" /&gt;
            &lt;line x1="50" y1="90" x2="250" y2="90" style="stroke: red; fill: none; stroke-width: 3px;<strong>marker-mid:url('#arrow2')</strong>" /&gt;
            &lt;line x1="50" y1="120" x2="250" y2="160" style="stroke: black; fill: none; stroke-width: 3px;<strong>marker-end:url('#arrow2')</strong>" /&gt;
        &lt;/svg&gt;
        </pre>
        <code>
            <svg width="200" height="150" viewBox="0 0 200 150" class="border">
                <defs>
                    <marker id="m1" markerWidth="10" markerHeight="10" refX="5" refY="5">
                        <circle cx="5" cy="5" r="4" style="fill: none; stroke: black"></circle>
                    </marker>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" markerUnits="strokeWidth" style="fill:black">
                        <path d="M0,0 L0,6 L9,3 z" />
                    </marker>
                </defs>
                <path d="M 10 20 100 20 A 20 30 0 0 1 120 50 L 120 110"
                      style="marker-start: url('#m1'); marker-end:url(#arrow); stroke-width: 2px; fill: none; stroke: black"></path>
            </svg>

            <svg width="320px" height="200px" class="border">
                <defs>
                    <marker id="arrow2" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth" style="fill:black">
                        <path d="M0,0 L0,6 L9,3 z" />
                    </marker>
                </defs>
                <line x1="50" y1="30" x2="250" y2="30" style="stroke: black; fill: none; stroke-width: 3px; marker-end:url('#arrow2')" />
                <line x1="50" y1="60" x2="250" y2="60" style="stroke: black; fill: none; stroke-width: 3px; marker-start:url('#arrow2')" />
                <line x1="50" y1="90" x2="250" y2="90" style="stroke: red; fill: none; stroke-width: 3px; marker-mid:url('#arrow2')" />
                <line x1="50" y1="120" x2="250" y2="160" style="stroke: black; fill: none; stroke-width: 3px; marker-end:url('#arrow2')" />
            </svg>
        </code>
        <ul>
            <li class="red">不知道为什么红色线的marker-mid没有生效？？</li>
            <li>marker #arrow的orient未设置，第一个图的箭头是原始方向</li>
            <li>marker #arrow2的orient=auto，所以箭头方向随着路径方向变化</li>
        </ul>
        <h2>7.10 标记记录</h2>
        <ul>
            <li>在path中属性marker:url(#marker)相当于同时对marker-start,marker-mid,marker-end做了设置</li>
            <li>一般较少使用</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Training07"
    }
</script>

<style lang="less" scoped>
    @import "../../common/styles/common.less";
    .blue{
        color:blue;
    }
</style>
