<template>
  <div class="header">
    <h1>Jignesh Patel</h1>
    <p>Student ID: 301109873</p>
    <p>College: Seneca</p>
  </div>
  <div class="body">
    <div v-if="isLogin">
      <p>Welcome {{name}}</p>
      <button @click="logOut()" class="logout">Logout</button>
    </div>
    <div v-else>
      <h3>Select an option</h3>
      <button @click="logIn()" class="google-btn" v-bind:disabled="loading"><img src="./assets/google-icon.png" alt="Google Icon"> Login with Google</button>
    </div> 
    <div class="loader" v-if="loading">
      <img src="./assets/loader.png" alt="loader icon" >
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      isLogin: false,
      name: "",
      loading: false
    }
  },
  methods: {
    async logOut() {
      const result = this.$gAuth.signOut();
      if(result) {
        this.isLogin = false
      }
    },
    async logIn() {
      this.loading = true
      const googleUser = await this.$gAuth.signIn()
      if(googleUser) {
        this.isLogin = true
        this.name = googleUser.su.qf
        this.loading = false
      } else {
        this.loading = false
      }
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
#app {
  font-family: "Poppins", sans-serif;
  line-height: 100%;
  color: #444;
}
.header {
  text-align: center;
}
.body {
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #eee;
  min-height: 300px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 4px solid #4c8bf5;
  border-bottom:4px solid #4c8bf5;
}
.body h3 {
  text-align: center;
}
.google-btn {
  height: 40px;
  border-radius: 5px;
  width: 250px;
  color: #4c8bf5;
  border: none;
  background: #fff;
  box-shadow: 0px 0px 4px #ddd;
  cursor: pointer;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.google-btn:hover {
  background: #eee;
}
.google-btn img {
  height: 35px;
}
.loader img{
  height: 50px;
  margin: 10px 0;
  animation: rotate 3s linear infinite;
}
.logout {
  height: 40px;
  border-radius: 5px;
  width: 250px;
  color: #fff;
  border: none;
  background: rgb(255, 27, 27);
  font-size: 15px;
  cursor: pointer;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
