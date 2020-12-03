import { createApp } from 'vue'

/* 
  组件渲染流程
  动态节点收集过程（包括嵌套动态节点的收集）
  嵌套动态子节点是否会重复对比相同的动态节点
  globalProperties 混入时机
  $refs.component.$el 原理
*/
// import App from './learn/app/app.vue'
// const app = createApp(App)
// app.config.globalProperties.testAttr = 'globalAttr'
// app.mount('#app')


/* 
  setupState 可在模板中访问原理
  setupContext 传入条件
  setupState 与 data 优先级
    模板编译后的结果访问的是 $data.msg 并依赖收集，而修改 msg 值是派发的 setupState 的 msg
    但 setupState.msg 模板中并未使用，所以没有做依赖收集，导致无法派发通知，最终页面无任何响应
*/
// import Setup from './learn/setup/index.vue'
// import SetupWithContext from './learn/setup/with-context/index.vue'
// import SetupstateWithData from './learn/setup/setupstate-with-data.vue'
// createApp(Setup).mount('#app')
// createApp(SetupWithContext).mount('#app')
// createApp(SetupstateWithData).mount('#app')


/* 
  响应式原理：依赖收集 与 派发通知 
  延时响应式带来的性能提升
  清除多余依赖原理
*/
// import Reactive from './learn/reactive/index.vue'
// import Readonly from './learn/reactive/readonly.vue'
// import Ref from './learn/reactive/ref.vue'
// import CleanUp from './learn/reactive/cleanUp.vue'
// createApp(Reactive).mount('#app')
// createApp(Readonly).mount('#app')
// createApp(Ref).mount('#app')
// createApp(CleanUp).mount('#app')


/* 
  计算属性
  嵌套 computed
*/
// import Computed from './learn/computed/index.vue'
// import Computed2 from './learn/computed/computed2.vue'
// createApp(Computed).mount('#app')
// createApp(Coumpted2).mount('#app')


/* 侦听 getter 函数 */
// import Watch1 from './learn/watch/watch1.vue'
// import Watch2 from './learn/watch/watch2.vue'
// import Watch21 from './learn/watch/watch2.1.vue'
// import Watch22 from './learn/watch/watch2.2.vue'
// import Watch3 from './learn/watch/watch3.vue'
// import Watch4 from './learn/watch/watch4.vue'
// import Watch5 from './learn/watch/watch5.vue'
// import Watch6 from './learn/watch/watch6.vue'
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
// import Hook from './learn/hook/index.vue'
// import TrackTrigger from './learn/hook/track-trigger.vue'
// createApp(Hook).mount('#app')
// 追踪数据依赖收集与数据修改派发通知来源
// createApp(TrackTrigger).mount('#app')


/* Provide-Inject */
// import ProvideInject from './learn/provide-inject/index.vue'
// createApp(ProvideInject).mount('#app')


/* 
  block tree
    vue3 为了运行时更新性能，设计了 block tree
    block tree 就是将模板基于动态节点指令切割的嵌套区块，每个区块只需要一个数组来追踪自身包含的动态节点
  为何动态组件、svg、foreignObject、teleport、suspense、keep-alive、v-if 要单独维护一个 block？
    条件语句每次只渲染一部分，那么它内部的动态节点是没法被外部的 block 收集到的，所以需要单独一个 block 来维护内部的动态节点
*/
// import BlockComponent from './learn/block/component.vue'
// import BlockDynamicComponent from './learn/block/dynamic-component/index.vue'
// import BlockDynamicKey from './learn/block/dynamic-key/index.vue'
// import BlockVIf from './learn/block/v-if/index.vue'
// createApp(BlockComponent).mount('#app')
// createApp(BlockDynamicComponent).mount('#app')
// createApp(BlockDynamicKey).mount('#app')
// createApp(BlockVIf).mount('#app')


/* props */
// import PropsLearn from './learn/props/index.vue'
// createApp(PropsLearn).mount('#app')


/* 
  slot 原理
    1.编译生成的 render 函数，子组件的 vnode 的 children 是一个对象
    2.创建子组件 vnode 时执行的 normalizeChildren 将 shapeFlag = slot | statefulComponent
    3.子组件 initSlot 时将 children 对象挂载到子组件 instance.slots 中，完成了父组件的 vnode 传递给子组件的过程
    4.子组件生成 subTree 的过程中，执行 renderSlot 将返回结果作为子组件的 children
*/
// import DefaultSlot from './learn/slot/default-slot/index.vue'
// import NameSlot from './learn/slot/name-slot/index.vue'
// import NamespaceSlot from './learn/slot/namespace-slot/index.vue'
// createApp(DefaultSlot).mount('#app')
// createApp(NameSlot).mount('#app')
// createApp(NamespaceSlot).mount('#app')


/* 
  指令
    1.全局指令注册 app.directive() 就是往 app.context.directives 对象上扩展指令定义
    2.render 函数执行时先执行 resolveDirective 根据指令名称解析出指令定义
    3.withDirectives 将指令挂载到 vnode.dirs 数组中
    4.mountElement 时执行 vnode.dirs 中的 created 和 beforeMount queuePostRenderEffect -> mounted
    5.patchElement 时执行 vnode.dirs 中的 beforeUpdate 和 queuePostRenderEffect -> updated
    6.unmount -> 时执行 vnode.dirs 中的 beforeUnmount 和 queuePostRenderEffect -> unmounted
*/
// import Global from './learn/directive/index.vue'
// import Focus from './learn/directive/focus.vue'
// const globalLog = {
//   beforeMount() {
//     console.log('log directive before mount')
//   },
//   mounted () {
//     console.log('log directive mounted')
//   },
//   beforeUpdate () {
//     console.log('log directive before update')
//   },
//   updated () {
//     console.log('log directive updated')
//   },
//   beforeUnmount () {
//     console.log('log directive beforeUnmount')
//   },
//   unmounted () {
//     console.log('log directive unmounted')
//   }
// }
// const app = createApp(Global)
// app.directive('log', globalLog)
// app.mount('#app')
/* 局部指令 */
// createApp(Focus).mount('#app')


/* 
  v-model
    1.首次渲染
      withDirectives 将内置 vmodel 指令定义混入到 vnode.dirs 数组中
      mountElement 执行 vmodel 的 created 函数，就是给 input元素绑定一堆的事件函数
      然后执行 vmodel 的 mounted 函数，对 input type 是 range 情况的处理
    2.更新渲染
      input 中输入内容，触发绑定事件，内部调用 el._assign 做数据更新
      trigger 派发通知
      执行 vmodel 的 beforeUpdate 重置 input.value 为最新值
*/
// import AppModel from './learn/v-model/index.vue'
// import CustomInput from './learn/v-model/custom-input.vue'
// const app = createApp(AppModel)
// app.component('custom-input', CustomInput)
// app.mount('#app')


/* 
  teleport
    1.首次渲染
      创建完 teleport 内置组件其 vnode 的 shapeFlag & 64 判断为 teleport 组件后，直接执行 type.process()
      拿到 target，并判断是否 disabled 来觉得起子节点挂载的父节点是 target 还是 container

*/
// import TeleportElement from './learn/teleport/element.vue'
// import TeleportComponent from './learn/teleport/component/index.vue'
// createApp(TeleportElement).mount('#app')
// createApp(TeleportComponent).mount('#app')


/* 
  keep-alive
    首次渲染
      1.创建 keep-alive 组件 vnode 时，由于 children 是数组而非对象，所以 vnode.shapeFlag |= ARRAY_CHILDREN(16) 结果值是 20
      2.执行 setupComponent -> initSlot 中 vnode.shapeFlag & SLOTS_CHILDREN(32) 不满足走 else 逻辑
        将 instance.slots.default = () => normalized，normalized 就是经过 normalizeSlotValue 处理后的数组
      3.执行 keep-alive 组件 vnode 的 setup，混入 onMounted onUpdated onBeforeUnmount 钩子函数，将返回值渲染函数赋值给 instance.render
      4.patch -> instance.render 执行时将 peningCacheKey 赋值为当前渲染 vnode 的 key
        vnode.shapeFlag |= COMPONENT_SHOULD_KEEP_ALIVE(256)，避免 vnode 被卸载
      5.mounted hook -> queuePostRenderEffect -> flushPostFlushCbs -> cacheSubtree
    重新渲染
      1.切换 flag 值，父组件重新渲染，renderComponentRoot(instance) 生成 nextTree，并进行新旧 vnode 的 patch 过程
      2.patchBlockChildren -> patch -> processComponent -> updateComponent
        instance.next = n2
        instance.update()
        进行 keep-alive 组件的重新渲染
      3.renderComponentRoot(instance) -> render.call，执行 keep-alive 的渲染函数
      4.返回最新的 vnode 作为 keep-alive 的渲染 vnode
      5.patch 新旧的 keep-alive 组件 vnode，patchBlockChildren -> patch(childA, childB)
        unmount(childA)
        n1 = null
        processComponent 时 n2.shapeFlag & COMPONENT_KEPT_ALIVE(512) -> parentComponent.ctx.activate -> move 移动真实元素进行挂载
        此时则不会执行一整套创建组件的过程，从而优化了性能
      5.updated hook -> queuePostRenderEffect -> flushPostFlushCbs -> cacheSubtree
*/
// import AppKeepAlive from './learn/keep-alive/index.vue'
// createApp(AppKeepAlive).mount('#app')


/* 
transtion
  transition 组件是基于 baseTransition 的高阶函数式组件
高阶组件
  当前函数返回的是一个组件函数
初始化
  1.定义 transition 函数式组件，设置 props 和 displayName，props 是当前平台与 baseTransition.props 的一层合并
  2.render.call 生成 transition 组件的 vnode
  3.processComponent -> initProps initSlot -> setupRenderEffect 
    -> renderComponentRoot 因 vnode.shapeFlag 是 2 则执行 Transition(props, { slot }) 生成 baseTransition 的 vnode
    它的 type 是 baseTransition 对象而非函数
  4.path 
    -> processComponent setupComponent 时执行 baseTransition 的 setup 函数将返回值作为 instance.render
    -> vnode.shapeFlag 是 4 是有状态组件 -> setupRenderEffect -> renderComponentRoot 返回 slot 组件
    -> processElement 完成普通组件的挂载
*/
import TransitionElm from './learn/transition/element.vue'
createApp(TransitionElm).mount('#app')
