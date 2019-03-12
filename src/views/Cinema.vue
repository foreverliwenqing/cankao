<template>
  <div class="cinemas-list">
    <header class="header">
      <div class="left">
        <div class="city">
          <span>深圳</span>
          <img src="../images/cityXia.png" alt="">
        </div>
      </div>
      <div class="title">
        <div>影院</div>
      </div>
      <div class="right">
        <div class="searchImg" @click="CinemaSearch">
          <img src="../images/search.png" alt="">
        </div>
      </div>
    </header>
    <div class="cinema-list-tag">
      <label for="">
        <span>全城</span>
        <img src="../images/cityXia.png" alt="">
      </label>
      <label for="">
        <span>最近去过</span>
        <img src="../images/cityXia.png" alt="">
      </label>
    </div>
    <div class="cinema-list-wrap">
      <ul>
        <li v-for="(item, index) in result" :key="index">
          <div class="cinema-item-wrap">
            <div class="clnemaInfoL">
              <span class="cinema-name">{{ item.name }}</span>
              <span class="cinema-address">{{ item.address }}</span>
            </div>
            <div class="clnemaInfoR">
              <div>
                <span class="filmsPrice">
                  <i>￥</i>
                  <span class="interge" style="font-size: 15px;">{{ item.lowPrice/100 }}</span>
                </span>
                <span class="upon" style="color:#ff5f16">起</span>
              </div>
              <span class="cinema-gpsAddress">距离未知</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Cinema',
  data () {
    return {
      result: ''
    }
  },
  methods: {
    getPosition () {
      axios.get('/static/api/position.json').then((res) => {
        let result = res.data;
        // 把值传给data方法里面的result
        this.result = result;
        console.log(this.result);
      })
    },
    CinemaSearch () {
      let filmId = this.$route.params.filmId;
      console.log(this.filmId);
      this.$router.push({
        // name: 'search',
        path: `/cinemas/search/${filmId}`
      })
    }
  },

  created () {
    this.getPosition();
  }
}
</script>

<style lang="scss">
/* @import '../styles/common/px2rem.scss'; */
@import '@/styles/common/px2rem.scss';

.cinemas-list {
  flex: 1;
  .header {
    height: px2rem(44);
    display: flex;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    flex-direction: row;
    justify-content: space-around;
    background: #fff;
    .left {
      display: flex;
      align-items: center;
      margin-left: px2rem(-15);
      .city {
        font-size: px2rem(13);
        img {
          width: px2rem(6);
          height: px2rem(3);
          vertical-align: middle;
        }
      }
    }
    .title {
      font-size: px2rem(17);
      text-align: center;
      white-space: nowrap;
      line-height: px2rem(44);
    }
    .right {
      width: px2rem(54);
      height: px2rem(44);
      padding-left: px2rem(50);
      .searchImg {
        padding-top: px2rem(15);
        width: px2rem(110);
        height: px2rem(44);
        img {
          width: px2rem(18);
          height: px2rem(18);
        }
      }
    }
  }
  .cinema-list-tag {
    width: 100%;
    height: px2rem(49);
    text-align: center;
    position: fixed;
    top: px2rem(44);
    left: 0;
    z-index: 10;
    background: #fff;
    label {
      width: 50%;
      height: px2rem(49);
      float: left;
      line-height: px2rem(49);
      img {
        width: px2rem(6);
        height: px2rem(3);
        vertical-align: middle;
      }
    }
  }
  .cinema-list-wrap {
    height: px2rem(45);
    position: relative;
    background-color: #fff;
    padding-top: px2rem(94);
    ul {
      li {
        height: px2rem(80);
        position: relative;
        background-color: #fff;
        padding: px2rem(15);
        .clnemaInfoL {
          width: px2rem(280);
          text-align: left;
          height: px2rem(45);
          padding-right: px2rem(15);
          float: left;
          span {
            display: block;
          }
          .cinema-address {
            color: #797d82;
            font-size: px2rem(12);
            margin-top: px2rem(13);
          }
          .cinema-name {
            font-size: px2rem(15);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .clnemaInfoR {
          width: px2rem(65);
          text-align: right;
          height: px2rem(45);
          float: right;
          font-size: px2rem(10);
          .filmsPrice {
            font-size: 15px;
            color: #ff5f16;
          }
          .cinema-gpsAddress {
            display: block;
            font-size: px2rem(11);
            color: #797d82;
            margin-top: px2rem(10);
          }
        }
      }
    }
  }
}
</style>
