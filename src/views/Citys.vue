<template>
  <div>
    <div class="header">
      <i class="iconfont icon-cuo" v-on:click="goBack"></i>
      <span>当前城市 -{{ city }} </span>
    </div>
    <div class="search">
      <div class="searchInput">
        <img src="../images/search.png" alt="">
        <input type="text" placeholder="输入城市名或拼音" style="outline:none">
      </div>
    </div>
    <div class="content">
      <div class="contentMain">
        <div class="dingweiCity">
          <div class="numCity">
            GPS定位你所在城市
          </div>
          <div class="cityFalse">
            定位失败
          </div>
          <div class="hotCity">
            <div class="city-index">
              热门城市
            </div>
            <ul>
              <li v-for ="(item, index) in hotCitys"
              :key=index
              v-on:click="cityChange(item.name)">
                <div class="cityFalse">
                  {{item.name}}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="cityA" v-for="(item, index) in address" :key=index>
          <p>
            {{ item.py }}
          </p>
          <ul>
            <li v-for="(item1, index) in item.list" :key=index @click="cityChange(item1.name)">
              {{ item1.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import store from '../store';
// 引入mapState的辅助函数
import { mapState } from 'vuex';
export default {
  // 组件名
  name: 'city',
  // 需要一个方法data来接收请求接收的数据
  data () {
    return {
      citys: '',
      hotCitys: [],
      address: [],
      // localCity: this.$store
      newCity: ''
    }
  },
  // 处理方法
  // 通过计算属性来调取厂库中的某个数据的值

  computed: {
    ...mapState([
      'city'
    ])
  },
  methods: {
    getCity () {
      axios.get('static/api/city.json', {

      }).then((response) => {
        // 把请求的数据保存在citys里面
        let citys = response.data.data.cities;
        // 同时把获得的citys赋值给this.states里面
        // this.citys = citys;
        for (var i = 0; i < citys.length; i++) {
          if (citys[i].isHot) {
            this.hotCitys.push(citys[i]);
            // console.log(citys[i]);
          } else {
            this.citys = citys[i]
          }
        }
        var j = 0;
        var hash = {};
        var res = [];
        citys.forEach(item => {
          // 拿到所有城市的首字母
          let py = item.pinyin.substring(0, 1).toUpperCase();
          if (hash[py]) {
            // 如果存在某个拼音的首字母就把当前城市添加到所属城市首字母下
            res[hash[py] - 1].list.push(item);
          } else {
            // 判断所属字母的个数
            hash[py] = ++j;
            // 在pysList中的对应的list中添加list
            res.push({
              py: py,
              list: [ item ]
            })
          }
        });
        this.address = res;
        this.address = res.sort(function (a, b) {
          return (a.py).localeCompare((b.py));
        })
        console.log(this.address);
      })
    },
    goBack () {
      window.history.back()
    },
    cityChange (name) {
      this.$store.commit('cityChange', {'newCity': name});
    }
  },

  // 填写声明周期函数
  created () {
    this.getCity();
  }
};

</script>

<style lang="scss" scoped>
@import '@/styles/common/px2rem.scss';
.header{
        flex-direction: row;
        justify-content: center;
        height:55px;
        width:100%;
        align-items:center;
        background: #fff;
        position: fixed;
        top:0;
        display: flex;
        z-index: 1000;
        span{
            font-size: 17px;
        }
        i{
            position: absolute;
            left:0.6rem;
            font-size: 19px;
        }
    }
    .search{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height:60px;
        width:100%;
        position: fixed;
        top:55px;
        z-index: 1000;
        background-color: #f4f4f4;
        .searchInput{
            width: 330px;
            position: relative;
            background-color: #fff;
            border-radius: 3px;
            height: 28px;
            input{
                border:0;
                top:8px;
                position: absolute;
                left: 33.5px;
            }
            img{
                position: absolute;
                left: 7px;
                top: 9px;
                width: 14px;
                height: 14px;
                color: #797d82;
                line-height: 28px;
            }
        }
    }
    .content{
        width: 100%;
        flex:1;
        position: relative;
        overflow: hidden;
        padding-top: 115px;
        margin-right:19px;
        display:flex;
        .dingweiCity{
            // display: flex;
            // // height:585px;
            flex-direction: column;
            padding-left: 15px;
            padding-top: 15px;
            background-color: #fff;
            width:100%;
            .numCity{
                font-size:13px;
                color: #797d82;
                margin-bottom: 18px;
            }
            .cityFalse{
                display: flex;
                height: 30px;
                background-color: #f4f4f4;
                line-height: 30px;
                border-radius: 3px;
                font-size:13px;
                margin: 0 6.5px;
                font-size: 14px;
                color: #191a1b;
                width:94px;
                flex-direction: row;
                justify-content: center;
                margin-bottom: 10px;
            }
            .hotCity{
                display: flex;
                flex-direction: column;
                .city-index{
                    display: flex;
                    flex-direction: row;
                    font-size: 13px;
                    color: #797d82;
                    margin-bottom: 10px;
                }
                ul{
                    flex-direction: row;
                    li{
                        float:left;
                    }
                }
            }
        }
        .contentMain{
            display:flex;
            overflow: auto;
            margin-right:19px;
            flex-direction: column;

            .cityA{
                // background-color: #f4f4f4;
                color: #797d82;
                line-height: 30px;
                flex-direction: column;
                background: #fff;
                p{
                    font-size:13px;
                    padding: 0 0 0 15px;
                    background: #f4f4f4;
                }
                ul{
                    margin-left:14px;;
                    background: #fff;
                    li{
                        width:109px;
                        height:68px;
                        line-height: 34px;
                        font-size: 14px;
                        color:black;
                        float:left;
                        text-align: center;
                    }
                }
            }
        }
        .nav{
            display: flex;
            position: fixed;
            right:0;
            width:19px;
            margin-top:36px;
            font-size:10px;
            text-align: center;
            background: #fff;
            flex-direction: column;
            justify-content: center;
            ul{
                margin: 20px auto;
                height:100%;
                li {
                    margin-top:4px
                }
            }
        }
    }
</style>
