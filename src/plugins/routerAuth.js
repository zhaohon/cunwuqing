import router from '../router'
import VueTk from '@moke/vue-tk'
import store from '../store'
const rulers = [
  {
    match: '*',
    except: [
      '/login'
    ],
    handler: async function (route, next) { // 路由鉴权方法
      // 判断路由是否有权访问
      if (!!store.state.user && !!store.state.sessionToken) {
        // 用户鉴权
        next(true)
      } else { // 未登录状态下的用户鉴权
        next('/login')
      }
    },
    // // 禁止访问的跳转地址，优先级低于handler中返回的地址
    fallbackUrl: '/login'
  }
]

// 必须执行初始化方法
VueTk.history.init(router, {
  // 页面动画模式， auto（默认) pc不使用动画，手机使用动画
  //                none 不使用动画
  //                always 总是使用动画
  transitionMode: 'auto'
})

VueTk.tkRouterAuth.init(rulers, router)
