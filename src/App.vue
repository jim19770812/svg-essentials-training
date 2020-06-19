<template>
  <div class="app">
    <div class="app-menu">
      <router-link to="/training-01">第一章 入门指南</router-link>
      <router-link to="/training-02">第二章 在网页中使用SVG</router-link>
      <router-link to="/training-03">第三章 坐标系统</router-link>
      <router-link to="/training-04">第四章 基本形状</router-link>
      <router-link to="/training-05">第五章 文档结构</router-link>
      <router-link to="/training-06">第六章 坐标系统转换</router-link>
      <router-link to="/training-07">第七章 路径</router-link>
      <router-link to="/training-08">第八章 图案和渐变</router-link>
      <router-link to="/training-09">第九章 文本</router-link>
      <router-link to="/training-10">第十章 裁剪和蒙板</router-link>
      <router-link to="/training-11">第十一章 滤镜</router-link>
      <router-link to="/training-12">第十二章 SVG动画</router-link>
      <router-link to="/training-13">第十三章 添加交互</router-link>
      <router-link to="/training-14">第十四章 使用SVG DOM</router-link>
      <router-link to="/training-15">第十五章 生成SVG</router-link>
    </div>
    <div class="app-content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="less">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width:100%;
  * {
      margin:8px;
  }
  .app-menu{
    padding-left: 8px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    background: black;
    a:hover{
        color:gray;
    }
    a{
      color:gray;
    }
  }
  >.app-content{
    line-height: 1.5;
    width:80%;
  }
  strong{
    font-weight: bold;
    color:coral;
  }
  .red{
    color:red;
  }
  code{
    display: block;
    background: #efc;
    color:black;
  }
  pre{
    display: block;
    background: black;
    color:white;
  }
}

</style>
