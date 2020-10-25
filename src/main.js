import { createApp } from 'vue'
import App from './learn/app/app.vue'

/* 
  组件渲染流程
  动态节点收集过程（包括嵌套动态节点的收集）
  嵌套动态子节点是否会重复对比相同的动态节点
  globalProperties 混入时机
  $refs.component.$el 原理
  ces
*/
const app = createApp(App)
app.config.globalProperties.testAttr = 'globalAttr'
app.mount('#app')

/* 
  keep-alive
  2 版本重写未再次分析
  #1742 未分析 
*/
