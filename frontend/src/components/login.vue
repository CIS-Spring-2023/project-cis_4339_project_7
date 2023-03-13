<script>
const apiURL = import.meta.env.VITE_ROOT_API
import { useVisitor, useEditor } from "@/store/loggedInUser";

export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    onSubmit() {
      if (this.username === "visitor" && this.password === "visitor") {
        // Login as visitor
        const visitor = useVisitor()
        visitor.login(this.username, this.password)
      } else if (this.username === "editor" && this.password === "editor") {
        // Login as editor
        const editor = useEditor()
        editor.login(this.username, this.password)
      } else {
        alert("Invalid Credentials.");
      }
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
        <form @submit.prevent="onSubmit" novalidate="true">
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