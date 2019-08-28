<template>
  <div id="hello">
    <img src="../assets/flights.png">
    <p>Welcome to Royal Server</p>
    <img id="admin" src="../assets/user-3.png"><router-link to='/admin'>{{admin}}</router-link>
    ----
    <router-link to='/guidePage'>{{guide}}</router-link><img id="tour" src="../assets/tour-guide.png">

  </div>
   
</template>

<script>
export default {
  data(){
    return{
      guide: 'Tour Guide',
      admin: 'Agency Admin'
    }
  }
}
</script>

<style scoped>
#hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 50px;
}
img{
  width:20%;
}
#tour{
  width:8%;
}
#admin{
  width:6%;
  margin-right: 12px
}
</style>
