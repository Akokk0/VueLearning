// src/router/index.js 就是当前项目的路由模块
// 1、导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

//导入需要的组件
import Home from "@/components/Home";
import Movie from "@/components/Movie";
import About from "@/components/About";
import Tab1 from "@/components/tabs/Tab1";
import Tab2 from "@/components/tabs/Tab2";
import Main from "@/components/Main";
import Login from "@/components/Login";

// 2、调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
Vue.use(VueRouter)

// 3、创建路由实例对象
const router = new VueRouter({
    // routes 是一个数组，作用：定义"hash 地址"与"组件"之间的对应关系
    routes: [
        // 路由规则
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/movie/:mid', component: Movie, props: true},
        {
            path: '/about',
            component: About,
            redirect: '/about/tab1',
            children: [
                // 子路由规则
                // 默认子路由：如果 children 数组中，某个路由规则的path值为空字符串，则这条路由规则叫做"默认子路由"
                {path: 'tab1', component: Tab1},
                {path: 'tab2', component: Tab2}
            ]
        },
        {path: '/main', component: Main},
        {path: '/login', component: Login}
    ]
})

// 为router实例对象，声明全局前置导航守卫
// 只要发生了路由的跳转，必然会触发beforeEach指定的function回调函数
router.beforeEach(function (to, from, next) {
    if (to.path === '/main') {
        if (localStorage.getItem('token')) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

//4、向外共享路由的实例对象
export default router
