import Vue from "vue";
import VueRouter from "vue-router";

//导入需要的组件
import Login from "@/components/MyLogin";
import Home from "@/components/MyHome";
import MyGoods from "@/components/menus/MyGoods";
import MyOrders from "@/components/menus/MyOrders";
import MyRights from "@/components/menus/MyRights";
import MySettings from "@/components/menus/MySettings";
import MyUsers from "@/components/menus/MyUsers";
import MyUserDetail from "@/components/user/MyUserDetail";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/home', component: Home, redirect: '/home/users', children: [
                { path: 'users', component: MyUsers },
                { path: 'rights', component: MyRights },
                { path: 'goods', component: MyGoods },
                { path: 'orders', component: MyOrders },
                { path: 'settings', component: MySettings },
                // 用户详情页的路由规则
                { path: 'userinfo/:uid', component: MyUserDetail, props: true }
            ] }
    ]
})

// 全局前置守卫
router.beforeEach(function (to, from, next) {
    if(to.path === '/home') {
        if (localStorage.getItem('token')) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
})

export default router
