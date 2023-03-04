<script>
const apiURL = import.meta.env.VITE_ROOT_API
export default {
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<template>
<main class="login-background">
  <div class="login">
    <div class="login-header">
      <center><p><b>Login</b></p></center><br>
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
          <button class="login-button">Login</button>
          <button class="login-button">Visitor</button>
        </div>
      </form>
    </div>
  </div>
</main>
</template>