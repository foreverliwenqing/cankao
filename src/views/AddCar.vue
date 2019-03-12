<template>
  <div>
    <div class="header">
      <i class="iconfont icon-icon"></i>
      <span class="title">购物车</span>
    </div>
    <ul>
      <li>
        <div class="showImg">
          <img src="@/images/film-1.jpg" alt="">
        </div>
        <div class="showList">
          <h1>海王</h1>
          <p>海王的一生，深海的统治的者</p>
        </div>
        <div class="operation">
          <span>-</span>
          <b>&nbsp;1&nbsp;</b>
          <span>+</span>
        </div>
      </li>
    </ul>
    <div class="footer">
      <div class="count">2</div>
      <i class="iconfont icon-gouwuche"></i>
      <span>￥<b>10</b></span>
      <div class="goCash">去结算</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'addCar'
}
</script>

<style lang="scss" scoped>
@import '@/styles/common/px2rem.scss';

.header {
  height: px2rem(60);
  width: 100%;
  padding: px2rem(10) px2rem(20);
  background: #eee;
  i {
    width: 20%;
    margin-top: 10px;
    font-size: px2rem(20);
  }
  span {
    display: inline-block;
    width: 80%;
    font-size: px2rem(20);
    height: px2rem(60);
    text-align: center;
  }
}
ul {
  flex: 1;
  li {
    width: 100%;
    height: px2rem(120);
    background: #fee;
    // background: red;
    .showImg {
      height: 100%;
      float: left;
      img {
        height: 100%;
      }
    }
    .showList {
      float: left;
      height: 100%;
    }
    .operation {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      span {
        display: block;
        text-align: center;
        width: px2rem(20);
        height: px2rem(20);
        border-radius: 50%;
        background: blue;
      }
    }
  }
}
.footer {
  height: px2rem(50);
  width: 100%;
  background: rgb(53, 49, 49);
  position: absolute;
  bottom: 0;
  padding-left: px2rme(50);
  .count {
    position: absolute;
    height:px2rem(15);
    width: px2rem(15);
    top: -16px;
    left: 45px;
    color: white;
    text-align: center;
    line-height: px2rem(15);
    background: red;
    border-radius: 50%;
  }
  i {
    font-size: px2rem(50);
    position: absolute;
    bottom: px2rem(14);
    color: rgb(86, 60, 233);
  }
  span {
    margin-left: px2rem(60);
    line-height: px2rem(50);
    color: white;
  }
  .goCash {
    height: 100%;
    width: px2rem(100);
    float: right;
    background: green;
    text-align: center;
    line-height: px2rem(50);
    color: white;
  }
}
</style>
