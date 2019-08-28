<template>
  
    <router-view></router-view>
    
</template>

<script>
import admin from './components/admin.vue'
import hello from './components/HelloWorld.vue'

export default {
  data(){
    return {

    }
  },
  components: {
    admin,
    hello

  }
}
</script>

<style>
template{
background: #ccc;
}
  


</style>
