<template>
  <div>
    <div class="cinemas-search">
      <div class="search">
        <div class="searchInput">
          <img src="../images/search.png" alt="">
          <input type="text" placeholder="输入城市名或拼音" style="outline:none" v-model="inputText">
        </div>
        <div class="cancel-btn" @click="cancel">
          取消
        </div>
      </div>
    </div>
    <div class="cinema-list-wrap">
      <ul>
        <li v-for="(item, index) in filterList" :key="index">
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
  name: 'search',
  data () {
    return {
      inputText: '',
      result: []
    };
  },
  watch: {
    inputText () {
      this.fetchData();
    }
  },
  methods: {
    fetchData () {
      axios.get('/static/api/position.json', {
        params: {
          inputText: this.inputText
        }
      }).then((res) => {
        this.result = res.data;
      })
    },
    cancel () {
      let filmId = this.$route.params.filmId;
      this.$router.push({
        path: `/film/cinemas/${filmId} `
      })
    }
  },
  computed: {
    filterList () {
      return this.result.filter(item => {
        return item.name.indexOf(this.inputText) > -1;
      });
    }
  },
  created () {
    // this.getPosition();
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/common/px2rem.scss";
.cinemas-search {
  z-index: 10;
  height: px2rem(49);
  width: 100%;
  padding: px2rem(9.5) px2rem(15);
  background-color: #fff;
  position: fixed;
  .search {
    width: px2rem(287);
    height: px2rem(30);
    border-radius: px2rem(6);
    background: #eee;
    position: relative;
    .searchInput {
      width: px2rem(187);
      img {
        width: px2rem(14);
        position: absolute;
        left: px2rem(7);
        top: 0;
        line-height: px2rem(30);
        font-size: px2rem(21);
        color: #797d82;
        margin-top: px2rem(7);
      }
      input {
        position: absolute;
        left: px2rem(33);
        top: 0;
        width: px2rem(222);
        border: 0;
        height: px2rem(28);
        background: #eee;
      }
    }
    .cancel-btn {
      width: px2rem(43);
      position: absolute;
      right: px2rem(-59);
      font-size: px2rem(14);
      line-height: px2rem(30);
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
</style>
