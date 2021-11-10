import Vue from 'vue'
import VueRouter from "vue-router";
import Content from "../components/Content";
import main from "../view/main";
import HelloWorld from "../components/HelloWorld";
import Login from "../view/Login";
import List from "../view/user/List";
import Profile from "../view/user/Profile";
import NotFound from "../view/NotFound";
//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
  mode:'history',//去除#号
  routes: [
    {
      name: 'content',
      //路由路径
      path: '/Content',
      //跳转的组件
      component: Content
    },
    {
      name: 'HelloWorld',
      //路由路径
      path: '/HelloWorld',
      //跳转的组件
      component: HelloWorld
    },
    {
      name: 'main',
      //路由路径
      path: '/main/:name',
      //跳转的组件
      component: main,
      props:true,
      //嵌入页面
      children:[
        //id 接参数
        {path:'/user/profile/:id', name: 'Profile', component:Profile, props:true},
        {path:'/user/List',component:List}
      ]
    },
    {
      name: 'Login',
      //路由路径
      path: '/Login',
      //跳转的组件
      component: Login
    },
    {
      path:'/goHome',
      redirect:'/main'
    },
    {
      //其他所有路径都错误
      name:'NotFound',
      path:'*',
      component: NotFound
    }
  ]
});
