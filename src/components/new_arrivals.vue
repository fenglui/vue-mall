<template>
  <section id="new-arrivals" ms-class="scroller-wrapper-for-ios-wechat:isWeChatIOS" ms-controller="root">
    <div id="na-header">
      <div class="na-header-container" avalonctrl="na-header">
        <div class="na-header-entrance na-on-left">
          <a href="rank_hot.html">
            <div class="na-entrance-wrapper">
              <div class="na-entrance-name">
                <img src="../assets/img/same_city.png" />
                <span>同城排行</span>
              </div>
              <div class="na-entrance-tip">身边的人都在拼</div>
              <div class="na-entrance-icons na-entrance-avatars">
                <div class="na-icon-avatar">
                  <img src="../assets/img/more.png" />
                </div><div class="na-icon-avatar">
                  <img src="../assets/avatar/target/u_31.jpg" />
                </div><div class="na-icon-avatar">
                  <img src="../assets/avatar/target/u_35.jpg" />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div class="na-header-entrance na-on-right">
          <a href="prime_subjects.html">
            <div class="na-entrance-wrapper">
              <div class="na-entrance-name">
                <img src="../assets/img/magic.png" />
                <span>精选专题</span>
              </div>
              <div class="na-entrance-tip">你要的，都整理好了</div>
              <div class="na-entrance-icons na-entrance-goods-icon">
                <div class="na-icon-goods">
                  <img src="../assets/img/more2.png" />
                </div><div class="na-icon-goods">
                  <img src="../assets/img/x50q.jpg" />
                </div><div class="na-icon-goods">
                  <img src="../assets/img/y50Q.jpg" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="na-hint-container">
      <div class="na-hint" ms-if="showHint">
        <div class="na-hint-title">
          <img ms-src="newArrivalsIcon" />
          <span>新品上新</span>
        </div>
        <div class="na-hint-subtitle">小编为您挑选推荐</div>
      </div>
    </div>
    <div id="new-arrivals-list" :class="isWeChatIOS() ? 'na-margin-bottom':''">

    </div>
  </section>
</template>

<script>

  export default {
  components: {
  },
  
  data () {
    return {
      isWeChatIOS:function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger" && /iphone|ipad|ipod/.test(ua);
      },
      goto:function(){
      }
    }
  }
  }

</script>

<style scoped>
  @import "../assets/css/new_arrivals.css";
</style>