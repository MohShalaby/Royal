<template>

    <div id="login">
        <div id="form">
        <h3> Log In </h3>
        <form @submit="submit">
            <label> Email </label>
            <input type="text" v-model="email" placeholder="Email" required/>
            <label> Password </label>
            <input type="password" placeholder="Password"/>
            <div id="check">
                <input type="checkbox">
                <label> Remember Me </label>
                <a href="#"> forgot password ?</a>
            </div>
            <button type="submit"> Log in </button>
        </form>
        </div>
    </div>

</template>

<script>
export default {
 data(){
     return{
         email:'',
         wrong:''
     }
 },
 methods:{
     /* // for JWT Auth
    login: function () {
        const email = this.email 
        const password = this.password
        this.$store.dispatch('login', { email, password }).then(() => this.$router.push('/'))
    },
     signup: function () {
        let info = {
          name: this.name,
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('signup', info).then(() => this.$router.push('/login'))

     }*/
     submit:function(){
         if(this.email=='royal@admin.com'){
            this.$router.push('/adminPage')
         }else{
             //wrong email
         }
     }
 }
}
</script>

<style scoped>

#login{
    background: #ccc;
    padding:10%;
}

#form {
    background:white;
    margin: 20px auto;
    max-width: 300px;
    padding: 22px 30px;
    border-style: groove;
}
h3{
    margin-top: 10px;
    text-align: center;
    color: blue;
    font-size: 35px;
    }
label{
    display: block;
    margin: 20px 0 10px;
    }
#form input[type='text'],input[type='password']{
    
        display: block;
        width:90%;
        padding:8px;
}
    
button{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    margin-top: 50px;
    display: block;
    width: 97%;
    background-color: #4c4cd4;
}
#check label{
    display: inline-block;
    color: blue;
    text-align: left;
}
#check input{
    display: inline-block;
}
#check a{
    display: inline-block;    
    color: blue;
    font-size: 17px;
    padding-left: 56px;
}
</style>
