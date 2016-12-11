<template>

  <div id="app">
    <!--<div>
      {{currentView}}
    </div>-->
    <Main_footer v-on:changeMainView="changeView"></Main_footer>
    <div id="main">
      <keep-alive>
        <!-- 使用keep-alive可以让动态被切出去的组件继续保存在内存中（只是隐藏看不到），却回来之后会继续之前的状态和数据 -->
        <component v-bind:is="currentView"></component>
      </keep-alive>
      <!--<MainContent></MainContent>-->
    </div>
  </div>
</template>

<script>

import Main_footer from './components/Main_footer'
import MainContent from './components/MainContent'
import new_arrivals from './components/new_arrivals'
import wyp from './components/wyp'
import classification from './components/classification'
import UserHome from './components/UserHome'

export default {
  components: {
    Main_footer
    ,
    MainContent
    ,
    new_arrivals
    ,
    wyp
    ,
    classification
    ,
    UserHome
  },
  methods:{
    changeView:function(viewName){
      this.currentView = viewName;
    }
  },
  data:function(){
    return {
      currentView:"MainContent"
    }
  }
  }
</script>

<style scoped>
  @import "assets/css/boot.css";
  @import "assets/css/normalize.css";
  @import "assets/css/index.css";
</style>
