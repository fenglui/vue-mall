<template>
  <footer id="index_footer">
    <ul class="footer">
      <li v-for="tab of tabs">
        <a :id="tab.id" :class="tab.id == active_tab_id ? 'active nav-controller':'nav-controller'" v-on:click="goto(tab.id)">
          <i :class="tab.cls"></i>
          {{tab.title}}
        </a>
      </li>
    </ul>
  </footer>
</template>
<script>
import redpoint from 'components/redpoint'

export default {
  components: {
    redpoint
  },
  data () {
    return {
      active_tab_id:"footer_home",
      tabs:[
        {title:"首页",id:"footer_home",cls:"fb fb-home"}
        ,{title:"排行榜",id:"footer_rank",cls:"fb fb-rank"}
        ,{title:"我要拼",id:"footer_oversea",cls:"fb fb-oversea"}
        ,{title:"搜索",id:"footer_class",cls:"fb fb-class"}
        ,{title:"个人中心",id:"footer_personal",cls:"fb fb-user",link:"/user"}
      ],
      url_user_center:"user_center.html",
      goto:function(id){

        this.active_tab_id = id;
       
        switch (this.active_tab_id) {
          default:
            break;
          case "footer_home":
            this.$emit('changeMainView', 'MainContent' );
            return;
          case "footer_rank":
            this.$emit('changeMainView', 'new_arrivals' );
            return;
          case "footer_oversea":
            this.$emit('changeMainView', 'wyp' );
            return;
          case "footer_class":
            this.$emit('changeMainView', 'classification' );
            return;
          case "footer_personal":

            this.$emit('changeMainView', 'UserHome' );
            return;
        }
      }
    }
  }
  }
</script>
<style scoped>
  @import "../assets/css/footer.css"
</style>
