<template>
<!--  所有元素必须不能在根节点下-->
  <div>
    <h1>用户信息</h1>
<!--    两种方式接收参数  一、route 二、props-->
    {{$route.params.id}}
    {{id}}
  </div>

</template>

<script>
export default {
  props:['id'],
  name: "Profile",
  beforeRouteEnter:(to,from,next)=>{
    console.log("进入路由之前");
    next(vm => {
      //进入路由之前执行getData
      vm.getData()
    });
  },
  beforeRouteLeave:(to,from,next)=>{
    console.log("进入路由之后");
    next();
  },
  methods:{
    getData:function () {
      this.axios({
        method:'get',
        url:'http://localhost:8080/static/mock/data.json'
      }).then(function (response){
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>
