<script>
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
export default {
  name:'login',
  data()
  {
    return {
      username:'',
      password:''
    }
  }
}
</script>

<template>
<main class="login-background">
<div class="login">
  <div class="login-header">
    <center><p><b>Login</b></p></center><br>
  </div>
  <div class="login-credentials">
    <label for="username">Username</label>
    <input type="text" v-model="username" placeholder="Enter Username" />
    <br>
    <label for="password">Password</label>
    <input type="password" v-model="password" placeholder="Enter Password" />
    <br>
    <div class="button-container">
      <button class="login-button">Login</button>
      <button class="login-button">Visitor</button>
    </div>
  </div>
</div>
</main>
</template>