import { createStore } from 'vuex'
import ModuleUser from './user';



export default createStore({
  // state存储所有数据
  state: {
  },
  // 某些state里的内容需要进行一些计算才能获取就用到getter
  getters: {
  },
  //对state直接进行修改
  //vue对mutation有限制，不能执行异步操作
  mutations: {
  },
  //对应所有的更新方式，action里不能直接对state进行修改，必须放到mutatuin里
  //完整的，复杂的修改
  actions: {

  },
  //将states进行分割
  modules: {
    user: ModuleUser,
  }
});

