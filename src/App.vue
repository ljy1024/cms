<template>
  <div id="app">
    <div class="header">
      <h2>看点咨询</h2>
    </div>
    <div class="content">
      <div class="left_nav">
        <ul :class="{}">
          <li>
        <router-link to='/'>欢迎</router-link>
            
          </li>
          <li>
        <router-link to='/category'>栏目管理</router-link>
          </li>
          <li>
        <router-link to='/article'>文章管理</router-link>
            
          </li>
          <li>
        <router-link to='/user'>用户管理</router-link>
            
          </li>
        </ul>
      </div>
      <div class="right_content">
        <router-view></router-view>
        <div class="wrapper">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
 data(){
   return{
     msg:'App.vue',
     currentRoute:'/'
   }
 }
}
</script>
<style>
body,ul,ol,dl,p,h1,h2,h3{
  margin: 0;
  padding:0;
}
ul>ol{
  list-style:none;
}

  .header{
    position: absolute;
    width: 100%;
    height: 60px;
    top: 0;
    background-color:teal;
  }
  .header> h2{
    color:#ffffff;
    text-align: center;
    line-height: 60px;
  }
  .content{
    position: absolute;
    width: 100%;
    top:60px;
    bottom:0;
   
  }
  .content>.left_nav{
    width: 160px;
    height: 100%;
    border-right:1px solid #ccc;
    float: left;
  }
  .content>.right_content{
    margin-left:160px;
    height:100%;
    background-color: pink;
    padding:1em;
  }
  .content>.right_content>.wrapper{
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: #ffffff;
    padding:.5em;
  }
  .left_nav ul{
    
  }
   .left_nav ul li{
    line-height: 2em;
    text-align: center;
  }

</style>

