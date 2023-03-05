<script>
const apiURL = import.meta.env.VITE_ROOT_API

//needed for the store and loggedInUser to work properly
import { useLoggedInUserStore } from "@/store/loggedInUser";

//pulled from most recent class, the new portion is the setup() this is needed to pull the loggedInUser.js file to be used
export default {
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  setup() {
    const store = useLoggedInUserStore()
    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  }
};
</script>

<template>
<main class="login-background">
  <div class="login">
    <div class="login-header">
      <p><b>Login</b></p><br>
    </div>
    <div class="login-credentials">
      <form @submit.prevent="store.login(username, password)" novalidate="true">
        <label>Username</label><br>
        <input type="text" v-model="username" placeholder="Enter Username" required>
        <br><br>
        <label>Password</label><br>
        <input type="password" v-model="password" placeholder="Enter Password" required>
        <br><br>
        <div class="button-container">
          <button class="login-button">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</main>
</template>