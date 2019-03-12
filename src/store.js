import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 实例化 store对象
const store = new Vuex.Store({
  // 状态放置整个项目中所有能够被共用的数据
  state: {
    // card ，购物车的数据
    filmsCard: [],
    city: '南昌'
  },

  // 对当前的state里面某个状态左派生。，类似计算属性
  getters: {
  },
  // 唯一能够修改state状态的东西，同步操作
  mutations: {
    // 唯一能够修改state状态的东西。同步操作
    /**
     * 添加电影
     * @param {Object} payload 添加的电影票
     *      filmId  电影id
     *      ....
     */
    addFilm (state, payload) {
      state.filmsCard.push(payload)
    },
    // 定义一个方法  改变厂库里面的数据
    cityChange (state, name) {
      state.city = name.newCity;
    }
  },
  // 做异步操作的时候，要用
  actions: {
  },
  // 对store做拆分  ，拆分一个一个的store
  modules: {
  }
})
// 暴露store对象
export default store
