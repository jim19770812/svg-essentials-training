<template>
<div>
    <h1>第15章 生成SVG</h1>
    前面章节都是教你手写SVG，但一般没人手写SVG的，都是用图形软件生成
    <p>生成SVG的方法</p>
    <ul>
        <li>通过SVG文档对象模型（DOM）生成，可以用snap.svg，svg.js，d3.js之类的js类库生成会更简单一些</li>
        <li>动态生成，通过编程语言处理，比如把xml格式的地理数据转换成SVG，或者通过xslt把xml格式数据转换成SVG</li>
    </ul>
    <strong>第二种方法适用于特定软件，比如GIS软件之类，比较定制化，无法通用，相对来说第一种方法适应性更强一些</strong>
    <h2>15.1 将自定义数据转换为SVG</h2>
    <strong>这节主要讲述如何通过编程语言产生SVG，起始就是把数据格式化成符合SVG格式的文本文件</strong>
    <h2>15.2 使用XSLT将XML数据转换为SVG</h2>
    <ul>
        <li>XSLT有点像是javaee的JSTL，是种用xml表示的标记编程语言，里面也有for，if等循环和分支语句</li>
        <li>XSLT可以通过浏览器指定头之后自动执行转换，也可以通过专门的xslt执行程序执行转换</li>
    </ul>
    <strong>个人认为XSLT比较鸡肋，用通用化的编程语言可以快速搞定的事情却非要重新造个轮子，用一种非通用的标记语言来处理</strong>
    <pre>
        &lt;?xml version="1.0"?&gt;
        &lt;?xml-stylesheet type="text/xsl"<strong>href="weather.xsl"</strong>?&gt;
        &lt;current_observation version="1.0"&gt;
          &lt;credit&gt;NOAA's National Weather Service&lt;/credit&gt;
          &lt;credit_URL&gt;http://weather.gov/&lt;/credit_URL&gt;
          &lt;location&gt;San Jose International Airport, CA&lt;/location&gt;
          &lt;station_id&gt;KSJC&lt;/station_id&gt;
          &lt;latitude&gt;37.37&lt;/latitude&gt;
          &lt;longitude&gt;-121.93&lt;/longitude&gt;
          &lt;observation_time&gt;Last Updated on Jul 15 2014, 7:53 am PDT
            &lt;/observation_time&gt;
          &lt;observation_time_rfc822&gt;Tue, 15 Jul 2014 07:53:00 -0700
            &lt;/observation_time_rfc822&gt;
          &lt;weather&gt;Overcast&lt;/weather&gt;
          &lt;temperature_string&gt;62.0 F (16.7 C)&lt;/temperature_string&gt;
          &lt;temp_f&gt;62.0&lt;/temp_f&gt;
          &lt;temp_c&gt;16.7&lt;/temp_c&gt;
          &lt;wind_string&gt;West at 5.8 MPH (5 KT)&lt;/wind_string&gt;
          &lt;wind_dir&gt;West&lt;/wind_dir&gt;
          &lt;wind_degrees&gt;290&lt;/wind_degrees&gt;
          &lt;wind_mph&gt;5.8&lt;/wind_mph&gt;
          &lt;visibility_mi&gt;10.00&lt;/visibility_mi&gt;
          &lt;copyright_url&gt;http://weather.gov/disclaimer.html&lt;/copyright_url&gt;
        &lt;/current_observation&gt;
    </pre>
    从上图可以看出，高亮的weather.xsl就是转换整个数据文件的xslt，通过在xml头定义样式表来执行xslt转换
</div>
</template>

<script>
    export default {
        name: "Training15"
    }
</script>

<style lang="less" scoped>
    @import "../../common/styles/common.less";
</style>

