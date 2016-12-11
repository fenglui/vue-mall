<template>
  <div id="index-content" class="container">
    <div class="cf-container">
      <div class="cf-edge"></div>
      <ul class="cf-content" id="nav-bar">
        <li class="cf-tab-item" v-for="nav of navs" v-on:click="changeNav(nav.id)">
          <span :data-id="nav.id" :class="nav.id == active_nav_id ? 'cur-cf-tab':''">{{nav.title}}</span>
        </li>
      </ul>
    </div>
    <div id="catboard" class="catboard-container" style="display: none;">

    </div>
    <div style="display:block;" id="defaultView">
      <div id="rp-banner">
        <ul class="islider-outer"></ul>
      </div>
      <div id="quick-entrance-new-2">
        <ul class="qe-wrapper-2">
          <li v-on:click="cubeClick(0)">
            <div data-index="0" class="quick-entrance-cube">
              <div class="item-img-box">
                <img src="../assets/index/p_0.png" />
              </div><div class="cube-text"><span>{{cubes[0].title}}</span></div>
            </div>
          </li>
          <li v-on:click="cubeClick(1)">
            <div data-index="1" class="quick-entrance-cube">
              <div class="item-img-box">
                <img src="../assets/index/p_1.png" />
              </div>
              <div class="cube-text"><span>{{cubes[1].title}}</span></div>
            </div>
          </li>
          <li v-on:click="cubeClick(2)">
            <div data-index="2" class="quick-entrance-cube">
              <div class="item-img-box">
                <img src="../assets/index/p_2.png" />
              </div>
              <div class="cube-text"><span>{{cubes[2].title}}</span></div>
            </div>
          </li>
          <li v-on:click="cubeClick(3)">
            <div data-index="3" class="quick-entrance-cube">
              <div class="item-img-box">
                <img src="../assets/index/p_3.png" />
              </div>
              <div class="cube-text"><span>{{cubes[3].title}}</span></div>
            </div>
          </li>
          <li class="not-first-li-row" v-on:click="cubeClick(4)">
            <div data-index="5" class="quick-entrance-cube">
              <div class="item-img-box">
                <img src="../assets/index/p_4.png" />
              </div>
              <div class="cube-text">
                <span>{{cubes[4].title}}</span>
              </div>
            </div>
          </li>
          <li class="not-first-li-row" v-on:click="cubeClick(5)">
            <div data-index="6" class="quick-entrance-cube">
              <div class="item-img-box">
                <img src="../assets/index/p_5.png" />
              </div>
              <div class="cube-text">
                <span>{{cubes[5].title}}</span>
              </div>
            </div>
          </li>
          <li class="not-first-li-row" v-on:click="cubeClick(6)">
            <div data-index="4" class="quick-entrance-cube">
              <div class="item-img-box">
                <img src="../assets/index/p_6.png" />
              </div>
              <div class="cube-text"><span>{{cubes[6].title}}</span></div>
            </div>
          </li>
          <li class="not-first-li-row" v-on:click="cubeClick(7)">
            <div data-index="7" class="quick-entrance-cube">
              <div class="item-img-box">
                <img src="../assets/index/p_7.png" />
              </div>
              <div class="cube-text">
                <span>{{cubes[7].title}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="showIndexBanner" id="annv-index-banner">
        <img src="../assets/anniversary/index_banner.png" />
      </div>
      <div id="app-group-index">
      </div>
      <section class="main-view tuan-index" id="goods_list">
        <div class="base-list-wrapper">
          <div v-for="(item,index) in goods" class="single-list-item" data-goods-id="47847">
            <div class="goods-image">
              <img v-bind:src="item.image_url + '@750w_1l_50Q.jpg'" data-index="1" height="1.76rem">
            </div>
            <p class="goods-name">{{item.goods_name}}</p>
            <div class="detail">
              <img src="../assets/anniversary/single-list-item-tuan-icon.png">
              <a class="group-desc">{{item.customer_num}}人团</a>
              <a class="sale-price"><i>￥</i>{{item.group_price/100}}</a>
              <del class="normal-price">单买价￥{{item.direct_price/100}}</del>
            </div>
            <div class="core">
              <span>去开团</span>
              <img src="../assets/anniversary/go_group.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="main-view tuan-index" id="cat_goods_list" style="display:none;margin-top:12px;">
      <div class="base-list-wrapper">
        <div class="load-more pull-up-hide">
          <div class="list-center" style="display:none;">
            <img class="img-rotate" src="../assets/img/loading.png" /><span class="loading-text middle">没有更多了...</span>
          </div>
        </div>
        <div class="go-top top-button-hide">
          <span>顶部</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  //import redpoint from 'components/redpoint'

export default {
  //components: {
  //  redpoint
  //},
  data () {
    return {
      showIndexBanner:false,
      cube:["菜市场"],
      navs:[
        {title:"上海首页",id:0}
        ,{title:"服饰箱包",id:14}
        ,{title:"食品",id:1}
        ,{title:"家居生活",id:15}
        ,{title:"数码电器",id:18}
        ,{title:"美妆护肤",id:16}
        ,{title:"家纺家具",id:818}
        ,{title:"水果生鲜",id:13}
        ,{title:"母婴",id:4}
      ],
      active_nav_id:0,
      changeNav:function(nav_id){
        this.active_nav_id = nav_id;
      },
      cubes:[
        {title:"菜市场",url:"",thumb:"../assets/index/p_0.png"}
        ,{title:"品质水果团",url:"",thumb:"../assets/index/p_1.png"}
        ,{title:"房产特购",url:"",msg:"正在筹备上线中，敬请期待...",thumb:"../assets/index/p_2.png"}
        ,{title:"装修特价",url:"",thumb:"../assets/index/p_3.png"}
        ,{title:"呀哦到家",url:"",msg:"正在筹备上线中，敬请期待...",thumb:"../assets/index/p_4.png"}
        ,{title:"旅游民宿",url:"",msg:"正在筹备上线中，敬请期待...",thumb:"../assets/index/p_5.png"}
        ,{title:"呀粉需求",url:"",thumb:"../assets/index/p_6.png"}
        ,{title:"特惠量贩",url:"",thumb:"../assets/index/p_7.png"}
      ],
      cubeClick:function(index){
        alert(index);
      },
      goods:[
      {
        "goods_id": 47847,
        "goods_name": "山东特产 无核蜜枣阿娇金丝红枣阿胶蜜枣大红枣子 独立包装零食品200gX2",
        "direct_price": 2900,
        "group_price": 2200,
        "image_url": "http://testpddimg.yangkeduo.com/goods/d41d8cd98f36387eca9936a434dd59e41eb418e321.jpg",
        "customer_num": 2
      },
  {
    "goods_id": 31543,
    "goods_name": "榛核我薏 奶油味夏威夷果200gX2",
    "direct_price": 7100,
    "group_price": 5500,
    "image_url": "http://testpddimg.yangkeduo.com/goods/d41d8cd98f17ebb2c3dd5886a983940582a28c713f.jpg",
    "customer_num": 2
  }
      ],
      url_subject:"subject.html?subject_id=6",
      goto_user_center:function(){
        alert('goto_user_center');
      }
    }
  }
  }
</script>
<style scoped>
  #lnkHome.cur-cf-tab {
    background-image: url(../assets/anniversary/lnkHome_arrow.jpg);
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .qe-wrapper-2 li .quick-entrance-cube img {
    width: .45rem;
    height: .39rem;
  }

  #quick-entrance-new-2 {
    height: 1.7rem;
    /*padding: .09rem .09rem .08rem;*/
  }

  .bg-fill {
    background-color: rgba(0,0,0,.7);
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: fixed;
    z-index: 10001;
  }

  ul.rp-islider-dot-wrap {
    display: none;
  }

  ul.islider-dot-wrap {
    display: none;
  }
</style>
