<template>
  <section class="main-view container" ms-css-visibility="visible">
    <div class="personal-head head-bg-img">
      <img alt="" src="../assets/img/unlogin_avatar.png" id="imgAvatar" />
      <!--<img alt="" src="base/mobile_user_avatar.png" />-->
      <div class="p-head-info">
        <p class="p-nickname">未登录</p>
        <p class="p-platform"></p>
      </div>
    </div>
    <div class="personal-orders">
      <div class="p-orders" onclick="_gotoOrders(1)" id="p-orders-unpaied-orders">
        <span class="p-all-orders">我的订单</span>
        <span class="p-unpaied-orders">还有<b>1个订单</b>未付款</span>
        <img ms-src="arrowImg" class="p-arrow-img" src="../assets/img/view_more.png" />
      </div>
    </div>
    <div class="personal-wrapper-1">
      <div class="p-wrapper-1-item" onclick="_gotoOrders(5)">
        <div class="p-grouping bg-img">
          <i class="p-bubble p-o-bubble-1">0</i>{{grouping}}</i>
        </div>
        <p class="p-wrap-1-title">
          拼团中
        </p>
      </div>
      <div class="p-wrapper-1-item" onclick="_gotoOrders(2)">
        <div class="p-unshipping bg-img">
          <i class="p-bubble p-o-bubble-2">0</i>{{unshipping}}
        </div>
        <p class="p-wrap-1-title">
          待发货
        </p>
      </div>
      <div class="p-wrapper-1-item" onclick="_gotoOrders(3)">
        <div class="p-unreceived bg-img">{{unreceived}}
        </div>
        <p class="p-wrap-1-title">
          待收货
        </p>
      </div>
      <div class="p-wrapper-1-item" onclick="_gotoOrders(4)">
        <div class="p-unrated bg-img">
          {{unrated}}
        </div>
        <p class="p-wrap-1-title">
          待评价
        </p>
      </div>
      <div>
        <div class="p-wrapper-1-item" onclick="_gotoComplaintList()">
          <div class="p-complaint bg-img"></div>
          <p class="p-wrap-1-title">退款/售后</p>
        </div>
      </div>
    </div>
    <div class="personal-wrapper-2">
      <div class="p-wrapper-2-item" onclick="_gotoChatList()">
        <div class="p-messages bg-img">
        </div>
        <p class="p-wrap-2-title">
          我的消息
        </p>
      </div>
      <div class="p-wrapper-2-item" onclick="_gotoCoupons()">
        <div class="p-coupons bg-img"></div>
        <p class="p-wrap-2-title">我的优惠券</p>
      </div>
      <div class="p-wrapper-2-item" ms-if="showLottery" onclick="_gotoLotteries()">
        <div class="p-lotteries bg-img"></div>
        <p class="p-wrap-2-title">我的抽奖</p>
      </div>
      <div class="p-wrapper-2-item" onclick="_gotoGroups(3)">
        <div class="p-groups bg-img"></div>
        <p class="p-wrap-2-title">我的拼团</p>
      </div>
    </div>
    <div class="personal-list">
      <ul>
        <li onclick="_gotoMall()">
          <span class="p-invite-txt">我的店铺</span>
          <img class="p-arrow-img" src="../assets/img/view_more.png" />
        </li>
        <li onclick="_gotoLikes()">
          <p class="p-likes">我的收藏</p>
          <img class="p-arrow-img" src="../assets/img/view_more.png" />
        </li>
        <li onclick="_gotoAddresses()">
          <p class="p-addresses">收货地址</p>
          <img class="p-arrow-img" src="../assets/img/view_more.png" />
        </li>
        <li onclick="_gotoSetting()">
          <p class="p-setting">设置</p>
          <img class="p-arrow-img" src="../assets/img/view_more.png" />
        </li>
      </ul>
    </div>
    <div class="personal-space p-space-2"></div>
  </section>
</template>

<script>
  export default {
  components: {
  },
  data () {
    return {
      active_tab_id:"footer_personal",
      grouping:0,
      unshipping:0,
      unreceived:0,
      unrated:0,
      goto:function(){
      }
    }
  }
  }
</script>

<style scoped>
  @import "../assets/css/personal_v2.css";
</style>