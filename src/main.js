import { createApp } from 'vue'
import App from './learn/app/app.vue'

import Setup from './learn/setup/index.vue'
import SetupWithContext from './learn/setup/with-context/index.vue'
import SetupstateWithData from './learn/setup/setupstate-with-data.vue'

import Reactive from './learn/reactive/index.vue'
import Readonly from './learn/reactive/readonly.vue'
import Ref from './learn/reactive/ref.vue'
import CleanUp from './learn/reactive/cleanUp.vue'

import Computed from './learn/computed/index.vue'
import Computed2 from './learn/computed/computed2.vue'

import Watch1 from './learn/watch/watch1.vue'
import Watch2 from './learn/watch/watch2.vue'
import Watch21 from './learn/watch/watch2.1.vue'
import Watch22 from './learn/watch/watch2.2.vue'
import Watch3 from './learn/watch/watch3.vue'
import Watch4 from './learn/watch/watch4.vue'
import Watch5 from './learn/watch/watch5.vue'
import Watch6 from './learn/watch/watch6.vue'

import Hook from './learn/hook/index.vue'
import TrackTrigger from './learn/hook/track-trigger.vue'

import ProvideInject from './learn/provide-inject/index.vue'

import BlockComponent from './learn/block/component.vue'
import BlockDynamicComponent from './learn/block/dynamic-component/index.vue'
import BlockDynamicKey from './learn/block/dynamic-key/index.vue'
import BlockVIf from './learn/block/v-if/index.vue'

import PropsLearn from './learn/props/index.vue'

import DefaultSlot from './learn/slot/default-slot/index.vue'
import NameSlot from './learn/slot/name-slot/index.vue'
import NamespaceSlot from './learn/slot/namespace-slot/index.vue'

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


/* 
  setupState 可在模板中访问原理
  setupContext 传入条件
  setupState 与 data 优先级:
    模板编译后的结果访问的是 $data.msg 并依赖收集，而修改 msg 值是派发的 setupState 的 msg
    但 setupState.msg 模板中并未使用，所以没有做依赖收集，导致无法派发通知，最终页面无任何响应
*/
// createApp(Setup).mount('#app')
// createApp(SetupWithContext).mount('#app')
// createApp(SetupstateWithData).mount('#app')


/* 
  响应式原理：依赖收集 与 派发通知 
  延时响应式带来的性能提升
  清除多余依赖原理
*/
// createApp(Reactive).mount('#app')
// createApp(Readonly).mount('#app')
// createApp(Ref).mount('#app')
// createApp(CleanUp).mount('#app')


/* 
  计算属性
  嵌套 computed
*/
// createApp(Computed).mount('#app')
// createApp(Coumpted2).mount('#app')


/* 侦听 getter 函数 */
// createApp(Watch1).mount('#app')
/* 直接侦听响应式对象 */
// createApp(Watch2).mount('#app')
/* 监听深层次的响应式对象，分析 traverse 次数 */
// createApp(Watch21).mount('#app')
/* 不执行 traverse 依然可以监测数据变化 */
// createApp(Watch22).mount('#app')
/* 侦听多个响应式对象组成的数组 */
// createApp(Watch3).mount('#app')
/* watchEffect */
// createApp(Watch4).mount('#app')
/* onInvalidate */
// createApp(Watch5).mount('#app')
/* 循环更新 */
// createApp(Watch6).mount('#app')


/* 生命周期钩子函数 */
// createApp(Hook).mount('#app')
// 追踪数据依赖收集与数据修改派发通知来源
// createApp(TrackTrigger).mount('#app')


/* Provide-Inject */
// createApp(ProvideInject).mount('#app')


/* 
  block tree:
    vue3 为了运行时更新性能，设计了 block tree
    block tree 就是将模板基于动态节点指令切割的嵌套区块，每个区块只需要一个数组来追踪自身包含的动态节点
  为何动态组件、svg、foreignObject、teleport、suspense、keep-alive、v-if 要单独维护一个 block？
    条件语句每次只渲染一部分，那么它内部的动态节点是没法被外部的 block 收集到的，所以需要单独一个 block 来维护内部的动态节点
*/
// createApp(BlockComponent).mount('#app')
// createApp(BlockDynamicComponent).mount('#app')
// createApp(BlockDynamicKey).mount('#app')
// createApp(BlockVIf).mount('#app')


/* props */
// createApp(PropsLearn).mount('#app')


/* slot */
createApp(DefaultSlot).mount('#app')
// createApp(NameSlot).mount('#app')
// createApp(NamespaceSlot).mount('#app')


/* 
  keep-alive
  #1742 未分析
*/
