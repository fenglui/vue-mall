<template>
  <section id="rank-hot-content" :class="isWeChatIOS() ? 'scroller-wrapper-for-ios-wechat':''" ms-controller="rank-hot">
    <div id="rank-hot-list">
      <div class="base-list-wrapper" avalonctrl="rank-hot-list">
        <div v-for="(item,index) in listData" class="rank-hot-list-item">
          <div class="v2-rank-base">
            <div class="v2-rank-img">
              <div class="v2-rank-index">
                <span class="v2-rank-text-white">{{index+1}}</span>
                <img class="rank-mark-img" v-bind:src="_get_dataImage(index)">
              </div>
              <img class="image lazy" v-bind:src="_imageView2(item.hd_thumb_url,750,50)">
            </div>
            <div class="v2-rank-right-box">
              <div class="v2-rank-info">
                <p>{{item.goods_name}}</p>
              </div>
              <div class="v2-rank-core">
                <div class="v2-rank-market-price" style="font-size: 0;">
                  <span>已团{{item.sales}}件 · </span>
                  <span>市场价</span>
                  <div>
                    <b>￥</b>
                    <b>{{item.market_price/100}}</b>
                  </div>
                </div>
                <div class="v2-rank-detail">
                  <div class="v2-rank-btn">去开团</div>
                  <div class="v2-rank-group">
                    <div class="v2-rank-sold">
                      <b>{{item.customer_num}}人团</b>
                      <div class="v2-rank-price">
                        <span>￥</span>
                        <span class="sale-price">{{item.group_price/100}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="display:none">
      <p v-for="(item,index) in loadData()"></p>
    </div>
  </section>
</template>

<script>
  export default {
  components: {
  },
  methods:{
    _imageView2 :function (url, w, q) {
      if (url == null) {
        return '';
      }
      if (url.indexOf('.clouddn.com') != -1) {
        //var format = isAndroid ? 'webp' : 'jpg';
        return url + '?imageView2/2/w/' + w + '/q/' + q;
      } else if (url.indexOf('.yangkeduo.com') != -1) {
        return url + '@' + w + 'w_1l_' + q + 'Q.' + 'jpg';
      }
      return url;
    },
      _get_dataImage :function(index) {
        switch (index) {
          default:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAMAAACcjsm3AAAASFBMVEXl5eXl5eUAAADl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eV2dbbmAAAAGHRSTlP1zADw39Lq2sWifjS6rqWTc2RZTT8ZDAismrw8AAAAnUlEQVRIx72WOxKDQAxDtSwQfvkncP+b0jCoRSqk/o09XltaXFftCjXAJBco6gneIak9wRGazmafgNfsBFG3A3yrYD3ALwBrPjPMkn94JYcGXskHQW2wE0HtLT8EtfWZCWrj2SywlrGxQHQvE2x/JtivKZCtxobD50gtAFcuteQ8q9gh0zpSZkV7TBkyIyAVOow5O1gjUV4LtdjflR2YhwQFI9/mfAAAAABJRU5ErkJggg==";
          case 0:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAMAAACcjsm3AAAAS1BMVEX/I0f/I0cAAAD/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0f/I0dL4BhjAAAAGXRSTlP1zADw3+rS2sWifjTJuq6lk3NkWU0/GQwIgwGVZQAAAJ5JREFUSMe9ljcWg0AQQ7WwYIJtcrj/SWl4qEUqRv1/sztJg/cq60Q1UMhE/aCoIviHpPyALTQ93xwB77EdRH1ucAYlZXYFYOWnhxlyhxeyKeCFHAhqie0IarVcCGrt01tgTt/TAsvUFhaIejLBvJlgdUSDeQtLDssR1QBsuagm51iFDTJXR9Sy4nqMWsi0gCjToc3ZxmpbuX082OfKBT6zBC8e3ZyZAAAAAElFTkSuQmCC";
          case 1:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAMAAACcjsm3AAAASFBMVEX/0gD/0gAAAAD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gD/0gAjSJLOAAAAGHRSTlP1zADw3+rS2sWifjS6rqWTc2RZTT8ZDAj0SaaDAAAAnUlEQVRIx72WORaEMAxDFQgMy7Bv978pDQ+1SIXV/+dEcSzju8o6UQ0UMlF/KKoIDpCUX7CFpveaE+AdtoOo3wMuoCRnNwCWPz3Mkge8kk0Br+RIUDO2I6i95UpQa5+eoGbPZYFlagsLRD2bYN5NsDqjwbyHmcPniGoAtlxUk/NbhX1kjo6oYcXxGDWQGQFRocOYs4PVjnJ7ebDXlRt2fwQBBkdoFAAAAABJRU5ErkJggg==";
          case 2:
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAoCAMAAACcjsm3AAAAe1BMVEUez08r0FQbz04AAAAdz08fz08ez08k0FEp0FMj0FEfz08bz04r0FQbz04cz08cz04m0FIcz04bz04bz04q0FQbz04r0FQj0FEbz04j0FEj0FEj0FEj0FEj0FEj0FEj0FEcz08r0FQbz04r0FQbz04r0FQr0FQr0FQbz07ie+ymAAAAKXRSTlP1zMwA8Ory39I07cejo9/d2trS0c7OxZN+ZFlNPxkMCOC6uq6ugHxzczb80G4AAADMSURBVEjHvdFJFoJADEXRRKEoWhWQVsRe979C4wGsqfkD3/weqB/6PZOvXDEp8vYOXkiT7+CNVG2+MNVBUyywJl3RAhtStpthq4XeDHvSlk0wVEMzHXMgCThJvCaCXpk6qBu2QaAvsEMgFTIqBE+reISgJ9tAkPIXCLMDCP3jv2GA/qp9YjDiBIMB8whByxwi0GfmDoFbgXcAeiwlAAxYqvTQlPxpgD4ohdALpV4/6VSrvuHcQ7mMXWANLSMl0I9KV42LSgfPmktYdlVvFakHO+HxPKoAAAAASUVORK5CYII=";

        }
      }
  },
  data () {
    return {
      isWeChatIOS:function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == "micromessenger" && /iphone|ipad|ipod/.test(ua);
      },
      page:1,
      size:20,
      dataLoaded:false,
      loadData:function(){
        if (this.dataLoaded){
          console.warn('loadData called');
          return [];
        }

        this.$http.get('http://api.yyyooo.net/v3/yfxq', {page:1,size:10}).then((response) => {
          if (response.ok){
            console.warn(response);
            var data = response.body;
            console.warn(data);
            console.warn(data.length);
            if (data.length > 0){
              this.listData = data;
              this.dataLoaded = true;
            }
          }
        }, (response) => {
          alert(response);
        });
        return [];
      },
      listData:[],
      goto:function(){
      }
    }
  }
  }
</script>

<style scoped>
  @import "../assets/css/wyp.css";
</style>

