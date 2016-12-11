<template>
  <div>
    <section id="classification-container" class="container" ms-controller="classification">
      <div id="search-bar" v-on:click="_showSearchView">
        <div class="search-container">
          <div class="search-icon-container">
            <div class="search-icon-class"></div>
            <span class="search-box">搜索商品</span>
          </div>
        </div>
      </div>
      <div id="root-list">
      </div>
      <div id="detail-list">
      </div>
    </section>
    <div class="search-view-container" avalonctrl="search" style="visibility: hidden;">
      <div class="search-view-top">
        <form onsubmit="return _searchSubmit()" id="search-module-submit">
          <input id="view-input" name="k" type="search" style="-webkit-appearance: none; width: 294px;" class="search-box-view-main" placeholder="输入商品名称">
        </form>
        <div class="search-view-icon"></div>
        <div class="search-content-clear" onclick="_search_clear()"></div>
        <div class="cancel-container-view" onclick="_hideSearchView()">
          <div class="cancel-button-view">取消</div>
        </div>
      </div>
      <div class="search-main-view" style="display: none;">
        <div class="search-recent-title-view">历史搜索</div>
        <div class="search-recent-delete-view">
          <div class="delete-recent-search"></div>
        </div>
        <div class="search-recent-list-view">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  components: {
  },
  methods:{
    _showSearchView:function(){
      alert('_showSearchView');
    }
  },
  data () {
    return {
      turnRootBgColor:false,
      goto:function(){
      }
    }
  }
  }
</script>

<style scoped>
  @import "../assets/css/classification_v2.css";
</style>