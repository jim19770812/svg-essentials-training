<template>
<div>
    <h1>第3章 坐标系统</h1>
    SVG相当于一个无限大的画布，本章重点描述画布上的坐标系统，确定点的位置等
    通过一个在线的例子可以更容易理解本章内容
    <a href="https://www.sarasoueidan.com/demos/interactive-svg-coordinate-system/index.html">The viewport, viewBox & preserveAspectRatio</a>
    <h2>3.1 视口</h2>
    SVG是无限大的，但展示在屏幕上的区域是有限大小的，这个可视的区域就是viewport（视口），与html5中的viewport功能类似。
    <ul>
        <li>svg标签的width和height属性确定视口的大小</li>
        <li>视口单位的取值与css3规范一致（px,pt,em,rem,pc,cm,mm,in等）</li>
        <li>视口相当于在画布上用来观察画布上图形的矩形窗口</li>
    </ul>
    声明形式如下
    <pre>
        &lt;svg width="300" height="200"&gt;
        <strong>使用像素为单位，不带单位就表示默认用px</strong>
        &lt;/svg&gt;
        &lt;svg width="10in" height="6in"&gt;
        <strong>使用英寸为单位</strong>
        &lt;/svg&gt;
        &lt;svg width="50%" height="50%"&gt;
        <strong>使用百分比为单位</strong>
        &lt;/svg&gt;
    </pre>
    <h2>3.2 使用默认用户坐标</h2>
    <ul>水平坐标系是x轴，垂直坐标系是y轴，和几何上的定义一致</ul>
    <li>视口左上角的坐标是x=0,y=0，这个点也叫原点</li>
    <li>坐标系的x和y是无限大的，也就是说width和height是无限大</li>
    <pre>
	&lt;svg width="200px" height="100px"&gt;
		&lt;rect x="10" y="10" width="50px" height="50px" stroke="black" fill="none"&gt;
	    &lt;/rect&gt;
	&lt;/svg&gt;
    </pre>
    <code>
        <svg width="300px" height="100px" class="border">
            <rect x="10" y="10" width="50px" height="50px" stroke="black" fill="none">
            </rect>
            <text x="10" y="80">width="200"和width="200px"效果相同</text>
        </svg>
    </code>
    <h2>3.3 为视口指定用户坐标</h2>
    <ul>
        <li>SVG通过viewBox（视盒）属性为视口设置坐标系统，所谓坐标系统就是集合上的坐标系，用4个值来表示，中间用逗号或空格间隔，需要>=0才算有效</li>
        <li>视口相当于观察画布的一个浮动窗口窗口，而viewBox就相当于在窗口上安装的透镜（可以放大/缩小/偏转/拉长/压扁）</li>
        <li>0 0 100 200 就表示(0,0)(100,200)的一个矩形，坐标原点是(0,0)，其值相当于一个和宽高即时计算的比例，比如width/height=2,如果viewBox.width/view.height=2就表示100%，如果viewBox.width/view.height=4,就相当于放大到200%</li>
        <li>设定了坐标系后不设定单位，实际单位会根据坐标系计算得来（之前默认是px，设定viewBox之后就是一个计算值(对宽度而言就是viewBox.width/width)）</li>
        <li>viewBox需要和width/height同时存在，坐标系需要实时计算</li>
    </ul>
    <pre>
    &lt;svg class="border" width="4cm" height="5cm" <strong>viewBox="0 0 64 80"</strong>&gt;
        <strong>//svg的大小是4cm*5cm，但viewBox的大小是64*80，因为4/5==64/80，所以图像仍然是100%显示的</strong>
        &lt;rect x="10" y="35" width="40" height="40" style="stroke: black; fill: none; stroke-width: 0.5px;"&gt;&lt;/rect&gt;
        &lt;polyline points="10 35, 30 7.68, 50 35" style="stroke: black; fill: none; stroke-width: 0.5px;"&gt;&lt;/polyline&gt;
        &lt;polyline points="30 75, 30 55, 40 55, 40 75" style="stroke: black; fill: none; stroke-width: 0.5px;"&gt;&lt;/polyline&gt;
    &lt;/svg&gt;
    </pre>
    <code>
        <svg class="border" width="4cm" height="5cm" viewBox="0 0 64 80">
            <rect x="10" y="35" width="40" height="40" style="stroke: black; fill: none; stroke-width: 0.5px;"></rect>
            <polyline points="10 35, 30 7.68, 50 35" style="stroke: black; fill: none; stroke-width: 0.5px;"></polyline>
            <polyline points="30 75, 30 55, 40 55, 40 75" style="stroke: black; fill: none; stroke-width: 0.5px;"></polyline>
        </svg>
    </code>
    <h2>3.4 保留宽高比</h2>
    如果视口的比例和宽高比不同，SVG会
    <ul>
        <li>按照较小的宽或者高缩放</li>
        <li>按照较大的宽高缩放并裁剪掉溢出的部分</li>
        <li>拉伸图像适应新的宽高</li>
    </ul>
    <h3>3.4.1 为preserveAspectRatio指定对齐方式</h3>
    <ul>
        <li>preserveAspectRatio是用来控制viewBox缩放的，比如水平居中垂直居中，控制的也是视口而不是图像，图像在视口中始终是从视口相对坐标(0,0)开始的，所以这从认知上导致了一个误差，xMidYMid设置后，图像总是出现在意想不到的地方</li>
        <li><a href="https://www.sarasoueidan.com/demos/interactive-svg-coordinate-system/index.html">The viewport, viewBox & preserveAspectRatio</a> 可以很好的说明这点，在xMaxYMax时，调整viewBox的宽高，图像的缩放会贴近右侧和下放缩放</li>
        <li>一般来说xMinYMin比较符合认知，其余的不看上面的例子都不好理解</li>
        <li>preserveAspectRatio指定对齐方式
            <ul>
                <li>preserveAspectRatio="对齐方式 meet" 满足对齐，例如 preserveAspectRatio='xMinYMin meet'</li>
                <li>preserveAspectRatio="对齐方式 slice" 切片对齐，例如 preserveAspectRatio='xMinYMax slice'</li>
            </ul>
        </li>
        <li>对齐方式还分水平方向和垂直方向两种
            <div>
                垂直方向对齐
                <ul>
                    <li>yMin：viewBox垂直方向按照最小值对齐（一般是顶部）</li>
                    <li>yMid：viewBox垂直方向居中对齐</li>
                    <li>yMax：viewBox垂直方向按照最大值对齐（一般是底部）</li>
                </ul>
            </div>
            <div>
                水平方向对齐
                <ul>
                    <li>xMin：viewBox水平方向按照最小对齐（一般是左侧）</li>
                    <li>xMid：viewBox水平方向居中对齐</li>
                    <li>xMax：viewBox水平方向按照最大值对齐（一般是右侧）</li>
                </ul>
            </div>
        </li>
        <li>对齐方式要组合水平方向和垂直方向（x在前y在后），所以一般是6位表示，<strong>需要注意的是要按照驼峰命名规则（x要小写，Y要大写）</strong>，需要写成xMinYMax, xMidYMin，写错了会显示为默认值</li>
    </ul>
    下面是把宽度、高度和视口做了调整的房子效果（未设置preserveAspectRatio）
    <pre>
        &lt;svg width="45px" height="135px" class="border" viewBox="0 0 90 90" preserveAspectRatio="xMinYMin <strong>meet</strong>"&gt;
         &lt;rect x="10" y="35" width="40" height="40" stroke="black" fill="non&lt;"&gt;&lt;/rect&gt;
            &lt;polyline points="10 35, 30 7.68, 50 35" stroke="black" fil&lt;="none"&gt;&lt;/polyline&gt;
            &lt;polyline points="30 75, 30 55, 40 55, 40 75" stroke="blac&lt;" fill="none"&gt;&lt;/polyline&gt;
        &lt;/svg&gt;
    </pre>
    未指定preserveAspectRatio的样子（preserveAspectRatio默认是 <strong>"xMinYMid meet"</strong> ）
    <code>
        <svg width="45px" height="135px" class="border" viewBox="0 0 90 90">
            <rect x="10" y="35" width="40" height="40" stroke="black" fill="none"></rect>
            <polyline points="10 35, 30 7.68, 50 35" stroke="black" fill="none"></polyline>
            <polyline points="30 75, 30 55, 40 55, 40 75" stroke="black" fill="none"></polyline>
        </svg>
    </code>
    指定了preserveAspectRatio="xMinYMin meet"的样子
    <code>
        <svg width="45px" height="135px" class="border" viewBox="0 0 90 90" preserveAspectRatio="xMinYMin meet">
            <rect x="10" y="35" width="40" height="40" stroke="black" fill="none"></rect>
            <polyline points="10 35, 30 7.68, 50 35" stroke="black" fill="none"></polyline>
            <polyline points="30 75, 30 55, 40 55, 40 75" stroke="black" fill="none"></polyline>
        </svg>
    </code>
    上面的<strong>meet</strong>改成<strong>slice</strong>就是下面的样子
    <code>
        <svg width="45px" height="135px" class="border" viewBox="0 0 90 90" preserveAspectRatio="xMinYMin slice">
            <rect x="10" y="35" width="40" height="40" stroke="black" fill="none"></rect>
            <polyline points="10 35, 30 7.68, 50 35" stroke="black" fill="none"></polyline>
            <polyline points="30 75, 30 55, 40 55, 40 75" stroke="black" fill="none"></polyline>
        </svg>
    </code>
    <h3>3.4.2 使用meet说明符</h3>
    preserveAspectRatio="xMinYMin meet"
    <code>
        <svg width="300" height="200" class="border" viewBox="0 0 150 200" preserveAspectRatio="xMinYMin meet">
            <rect x="10" y="35" width="40" height="40" stroke="black" fill="none"></rect>
            <polyline points="10 35, 30 7.68, 50 35" stroke="black" fill="none"></polyline>
            <polyline points="30 75, 30 55, 40 55, 40 75" stroke="black" fill="none"></polyline>
        </svg>
    </code>
    preserveAspectRatio="xMidYMin meet"
    <code>
        <svg width="300" height="200" class="border" viewBox="0 0 150 200" preserveAspectRatio="xMidYMin meet">
            <rect x="10" y="35" width="40" height="40" stroke="black" fill="none"></rect>
            <polyline points="10 35, 30 7.68, 50 35" stroke="black" fill="none"></polyline>
            <polyline points="30 75, 30 55, 40 55, 40 75" stroke="black" fill="none"></polyline>
        </svg>
    </code>
    preserveAspectRatio="xMaxYMin meet"
    <code>
        <svg width="300" height="200" class="border" viewBox="0 0 150 200" preserveAspectRatio="xMaxYMin meet">
            <rect x="10" y="35" width="40" height="40" stroke="black" fill="none"></rect>
            <polyline points="10 35, 30 7.68, 50 35" stroke="black" fill="none"></polyline>
            <polyline points="30 75, 30 55, 40 55, 40 75" stroke="black" fill="none"></polyline>
        </svg>
    </code>
    preserveAspectRatio="xMinYMid meet"
    <code>
        <svg width="200" height="300" class="border" viewBox="0 0 200 150" preserveAspectRatio="xMinYMid meet">
            <rect x="10" y="35" width="40" height="40" stroke="black" fill="none"></rect>
            <polyline points="10 35, 30 7.68, 50 35" stroke="black" fill="none"></polyline>
            <polyline points="30 75, 30 55, 40 55, 40 75" stroke="black" fill="none"></polyline>
        </svg>
    </code>
    preserveAspectRatio="xMinYMax meet"
    <code>
        <svg width="200" height="300" class="border" viewBox="0 0 200 150" preserveAspectRatio="xMinYMax meet">
            <rect x="10" y="35" width="40" height="40" stroke="black" fill="none"></rect>
            <polyline points="10 35, 30 7.68, 50 35" stroke="black" fill="none"></polyline>
            <polyline points="30 75, 30 55, 40 55, 40 75" stroke="black" fill="none"></polyline>
        </svg>
    </code>
    <h3>3.4.3 使用slice说明符</h3>
    <ul>
        <li>preserveAspectRatio="xMinYMin slice"
            <code>
                <svg width="45" height="135" viewBox="0 0 90 90" preserveAspectRatio="xMinYMin slice" class="border">
                    <circle cx="42" cy="57" r="30" stroke="black" fill="none"/>
                    <circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <g id="whiskers">
                        <line x1="45" y1="57" x2="81" y2="51" stroke="black"/>
                        <line x1="45" y1="57" x2="81" y2="62" stroke="black"/>
                    </g>
                    <use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/>
                    <!-- ears -->
                    <polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/>
                    <!-- mouth -->
                    <polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/>
                    <path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/>
                </svg>
            </code>
        </li>
        <li>preserveAspectRatio="xMidYMin slice"
            <code>
                <svg width="45" height="135" viewBox="0 0 90 90" preserveAspectRatio="xMidYMin slice" class="border">
                    <circle cx="42" cy="57" r="30" stroke="black" fill="none"/>
                    <circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <g id="whiskers">
                        <line x1="45" y1="57" x2="81" y2="51" stroke="black"/>
                        <line x1="45" y1="57" x2="81" y2="62" stroke="black"/>
                    </g>
                    <use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/>
                    <!-- ears -->
                    <polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/>
                    <!-- mouth -->
                    <polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/>
                    <path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/>
                </svg>
            </code>
        </li>
        <li>preserveAspectRatio="xMaxYMin slice"
            <code>
                <svg width="45" height="135" viewBox="0 0 90 90" preserveAspectRatio="xMaxYMin slice" class="border">
                    <circle cx="42" cy="57" r="30" stroke="black" fill="none"/>
                    <circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <g id="whiskers">
                        <line x1="45" y1="57" x2="81" y2="51" stroke="black"/>
                        <line x1="45" y1="57" x2="81" y2="62" stroke="black"/>
                    </g>
                    <use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/>
                    <!-- ears -->
                    <polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/>
                    <!-- mouth -->
                    <polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/>
                    <path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/>
                </svg>
            </code>
        </li>
        <li>preserveAspectRatio="xMinYMin slice"
            <code>
                <svg width="135" height="45" viewBox="0 0 90 90" preserveAspectRatio="xMinYMin slice" class="border">
                    <circle cx="42" cy="57" r="30" stroke="black" fill="none"/>
                    <circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <g id="whiskers">
                        <line x1="45" y1="57" x2="81" y2="51" stroke="black"/>
                        <line x1="45" y1="57" x2="81" y2="62" stroke="black"/>
                    </g>
                    <use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/>
                    <!-- ears -->
                    <polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/>
                    <!-- mouth -->
                    <polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/>
                    <path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/>
                </svg>
            </code>
        </li>
        <li>preserveAspectRatio="xMinYMid slice"
            <code>
                <svg width="135" height="45" viewBox="0 0 90 90" preserveAspectRatio="xMinYMid slice" class="border">
                    <circle cx="42" cy="57" r="30" stroke="black" fill="none"/>
                    <circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <g id="whiskers">
                        <line x1="45" y1="57" x2="81" y2="51" stroke="black"/>
                        <line x1="45" y1="57" x2="81" y2="62" stroke="black"/>
                    </g>
                    <use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/>
                    <!-- ears -->
                    <polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/>
                    <!-- mouth -->
                    <polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/>
                    <path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/>
                </svg>
            </code>
        </li>
        <li>preserveAspectRatio="xMinYMax slice"
            <code>
                <svg width="135" height="45" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax slice" class="border">
                    <circle cx="42" cy="57" r="30" stroke="black" fill="none"/>
                    <circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                    <g id="whiskers">
                        <line x1="45" y1="57" x2="81" y2="51" stroke="black"/>
                        <line x1="45" y1="57" x2="81" y2="62" stroke="black"/>
                    </g>
                    <use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/>
                    <!-- ears -->
                    <polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/>
                    <!-- mouth -->
                    <polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/>
                    <path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/>
                </svg>
            </code>
        </li>
    </ul>
    <h3>3.4.4 使用none说明符</h3>
    如果指定了preserveAspectRatio="none"，图像会被拉伸并自动适配视口
    <pre>
        &lt;svg width="200" height="80" viewBox="0 0 90 90"<strong>preserveAspectRatio="none"</strong>&gt;
            &lt;circle cx="42" cy="57" r="30" stroke="black" fill="none"/&gt;
            &lt;circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/&gt;
            &lt;circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/&gt;
            &lt;g id="whiskers"&gt;
                &lt;line x1="45" y1="57" x2="81" y2="51" stroke="black"/&gt;
                &lt;line x1="45" y1="57" x2="81" y2="62" stroke="black"/&gt;
            &lt;/g&gt;
            &lt;use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/&gt;
            &lt;!-- ears --&gt;
            &lt;polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/&gt;
            &lt;!-- mouth --&gt;
            &lt;polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/&gt;
            &lt;path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/&gt;
        &lt;/svg&gt;
    </pre>
    <code>
        <svg width="200" height="80" viewBox="0 0 90 90" preserveAspectRatio="none" class="border">
            <circle cx="42" cy="57" r="30" stroke="black" fill="none"/>
            <circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/>
            <circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/>
            <g id="whiskers">
                <line x1="45" y1="57" x2="81" y2="51" stroke="black"/>
                <line x1="45" y1="57" x2="81" y2="62" stroke="black"/>
            </g>
            <use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/>
            <!-- ears -->
            <polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/>
            <!-- mouth -->
            <polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/>
            <path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/>
        </svg>
    </code>
    <h2>3.5 嵌套坐标系统</h2>
    <ul>
        <li>svg元素中还可以嵌入新的svg元素，嵌入的svg将使用自己的坐标系统</li>
        <li>应用嵌套坐标系统，把3.4.3节的6张图合并成一张图
            <div>
                <pre>
        &lt;svg width="300px" height="200px" viewBox="0 0 300 200" class="border"&gt;
            &lt;svg width="45" height="135" viewBox="0 0 90 90" preserveAspectRatio="xMinYMin slice" class="border"&gt;
                &lt;g id="cat"&gt;
                    &lt;circle cx="42" cy="57" r="30" stroke="black" fill="none"/&gt;
                    &lt;circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/&gt;
                    &lt;circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/&gt;
                    &lt;g id="whiskers"&gt;
                        &lt;line x1="45" y1="57" x2="81" y2="51" stroke="black"/&gt;
                        &lt;line x1="45" y1="57" x2="81" y2="62" stroke="black"/&gt;
                    &lt;/g&gt;
                    &lt;use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/&gt;
                    &lt;polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/&gt;
                    &lt;polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/&gt;
                    &lt;path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/&gt;
                &lt;/g&gt;
            &lt;/svg&gt;
            &lt;svg x="55" width="45" height="135" viewBox="0 0 90 90" preserveAspectRatio="xMidYMin slice" class="border"&gt;
                &lt;use xlink:href="#cat"&gt;&lt;/use&gt;
            &lt;/svg&gt;
            &lt;svg x="110" width="45" height="135" viewBox="0 0 90 90" preserveAspectRatio="xMaxYMin slice" class="border"&gt;
                &lt;use xlink:href="#cat"&gt;&lt;/use&gt;
            &lt;/svg&gt;
            &lt;svg x="150" y="0" width="135" height="45" viewBox="0 0 90 90" preserveAspectRatio="xMinYMin slice" class="border"&gt;
                &lt;use xlink:href="#cat"&gt;&lt;/use&gt;
            &lt;/svg&gt;
            &lt;svg x="150" y="55" width="135" height="45" viewBox="0 0 90 90" preserveAspectRatio="xMinYMid slice" class="border"&gt;
                &lt;use xlink:href="#cat"&gt;&lt;/use&gt;
            &lt;/svg&gt;
            &lt;svg x="150" y="110" width="135" height="45" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax slice" class="border"&gt;
                &lt;use xlink:href="#cat"&gt;&lt;/use&gt;
            &lt;/svg&gt;
        &lt;/svg&gt;
                </pre>
                <svg width="300px" height="200px" viewBox="0 0 300 200" class="border">
                    <svg width="45" height="135" viewBox="0 0 90 90" preserveAspectRatio="xMinYMin slice" class="border">
                        <g id="cat">
                            <circle cx="42" cy="57" r="30" stroke="black" fill="none"/>
                            <circle cx="33" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                            <circle cx="51" cy="48" r="3" style="stroke:none; fill:#339933;"/>
                            <g id="whiskers">
                                <line x1="45" y1="57" x2="81" y2="51" stroke="black"/>
                                <line x1="45" y1="57" x2="81" y2="62" stroke="black"/>
                            </g>
                            <use xlink:href="#whiskers" transform="scale(-1 1) translate(-84 0)"/>
                            <polyline stroke="black" fill="none" points="64.8 37.2, 54 6, 42 27, 30 6, 19.2 37.2"/>
                            <polyline stroke="black" fill="none" points="21 66, 27 72, 57 72, 62 66"/>
                            <path stroke="black" fill="#ffcccc"  d="M 45 54 L 39 54 A 3 6 0  0 0 45 54"/>
                        </g>
                    </svg>
                    <svg x="55" width="45" height="135" viewBox="0 0 90 90" preserveAspectRatio="xMidYMin slice" class="border">
                        <use xlink:href="#cat"></use>
                    </svg>
                    <svg x="110" width="45" height="135" viewBox="0 0 90 90" preserveAspectRatio="xMaxYMin slice" class="border">
                        <use xlink:href="#cat"></use>
                    </svg>
                    <svg x="150" y="0" width="135" height="45" viewBox="0 0 90 90" preserveAspectRatio="xMinYMin slice" class="border">
                        <use xlink:href="#cat"></use>
                    </svg>
                    <svg x="150" y="55" width="135" height="45" viewBox="0 0 90 90" preserveAspectRatio="xMinYMid slice" class="border">
                        <use xlink:href="#cat"></use>
                    </svg>
                    <svg x="150" y="110" width="135" height="45" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax slice" class="border">
                        <use xlink:href="#cat"></use>
                    </svg>
                </svg>
                <ul>
                    <li>上例中大量使用了use标签，避免了重复画猫的代码，use xlink:href所指向的是一个g标签定义的部分，而g标签里包含了所有svg指令</li>
                    <li>每个嵌入的svg元素都可以设置偏移量x和y的值，不然所有图都会叠在一起</li>
                    <li>use xlink:href 可以使用内部/外部的定义的svg图元，只要用id能找到就可以（在本例中是定义在svg内部）</li>
                    <li>如果把一个设置了preserveAspectRatio值的svg嵌入到一个preserveAspectRatio=none的svg里去，这样图形会受到两个preserveAspectRatio的影响，既会裁剪又会被拉伸，结果可能不会像预期的样子</li>
                </ul>
            </div>
        </li>

    </ul>
</div>
</template>

<script>
    export default {
        name: "Training03"
    }
</script>

<style lang="less" scoped>
@import "../../common/styles/common.less";
</style>
