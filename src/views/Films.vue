<template>
  <div class="films-list">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../images/pic-1.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../images/pic-2.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../images/pic-3.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="../images/pic-4.jpg" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- /轮播图 -->

    <!-- 定位城市 -->
    <div class="city-fixed" @click="cityPosition">
      <span>{{ city }}</span>
      <i class="iconfont icon-xiala"></i>
    </div>
    <!-- /定位城市 -->

    <!-- tab-bar -->
    <div class="tab-bar-wrapper">
      <ul class="tab-bar">
        <li :class="{'z-act': $route.path === '/films/nowPlaying'}" @click="switchList('now')">
          <span>正在热映</span>
        </li>
        <li :class="{'z-act': $route.path === '/films/comingSoon'}" @click="switchList('soon')">
          <span>即将上映</span>
        </li>
      </ul>
    </div>
    <!-- /tab-bar -->

    <router-view></router-view>

  </div>
</template>

<script>
// 引入 Swiper
import Swiper from 'swiper';
import store from '../store';
import { mapState } from 'vuex';

console.log(store.state.city);
export default {
  name: 'Films',

  data () {
    return {
      // 当前城市
      curCity: ''
    }
  },

  computed: {
    ...mapState([
      'city'
    ])
  },
  methods: {
    /**
     * 根据百度地图地位的api。获取当前的城市
     */
    // getCityName () {
    //   /* eslint-disable */
    //   let myCity = new BMap.LocalCity();
    //   console.log(myCity);
    //   myCity.get((result) => {
    //     this.curCity = result.name;
    //   })
    // },

    /**
     * 切换路由
     */
    switchList (type) {
      if (type === 'now') {
        // this.$router.push('/films/nowPlaying');
        this.$router.push({
          name: 'nowPlaying'
        })
      } else {
        this.$router.push('/films/comingSoon');
      }
    },
    // 跳转到城市页面
    cityPosition () {
      this.$router.push({
        path: '/city'
      })
    }
  },

  created () {
    // this.getCityName();
  },

  mounted () {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项

      autoplay: true,

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss">
@import '@/styles/common/px2rem.scss';
@import 'swiper/dist/css/swiper.min.css';

.films-list {
  flex: 1;
  overflow-y: auto;
}

.swiper-container {
  height: px2rem(210);

  .swiper-pagination-bullet {
    width: px2rem(10);
    height: px2rem(10);
  }
  .swiper-pagination-bullet-active {
    background: yellowgreen;
  }

  img {
    width: 100%;
  }
}

.city-fixed {
  position: absolute;
  top: px2rem(18);
  left: px2rem(8);
  z-index: 999;
  height: px2rem(30);
  line-height: px2rem(30);
  font-size: px2rem(14);
  color: #fff;
  border-radius: px2rem(15);
  text-align: center;
  padding: 0 px2rem(5);
  background: rgba(0, 0, 0, 0.2);
}

.tab-bar-wrapper {
  position: sticky;
  z-index: 999;
  top: px2rem(0);
  height: px2rem(50);
  border-bottom: px2rem(1) solid #ededed;
  background: #fff;
  .tab-bar {
    display: flex;
    height: px2rem(50);
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      font-size: px2rem(14);
      span {
        padding: 0 px2rem(10);
      }
      &.z-act {
        color: #ff5f16;
      }
    }
  }
}

</style>
