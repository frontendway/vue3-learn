import { createApp } from 'vue'
import App from './learn/app/app.vue'

import Setup from './learn/setup/index.vue'
import SetupWithContext from './learn/setup/with-context/index.vue'

/* 
  组件渲染流程
  动态节点收集过程（包括嵌套动态节点的收集）
  嵌套动态子节点是否会重复对比相同的动态节点
  globalProperties 混入时机
  $refs.component.$el 原理
*/
// const app = createApp(App)
// app.config.globalProperties.testAttr = 'globalAttr'
// app.mount('#app')

/* setup */
createApp(Setup).mount('#app')
// createApp(SetupWithContext).mount('#app')

/* 
  keep-alive
  #1742 未分析 
*/
