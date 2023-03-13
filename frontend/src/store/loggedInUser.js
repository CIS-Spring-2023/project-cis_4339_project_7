//Took loggedInUser.js from class that discussed using pinia for the login
//Similar code with few changes with them implementation of a visitor role that will be used as a button

import { defineStore } from 'pinia'
import { loginrole } from '@/store/loginrole'

//Visitor Role
//defining a store
export const useVisitor = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'visitor',
  //central part of the store
  state: () => {
    return {
      name: "",
      isVisitorLoggedIn: false,
    }
  },

  actions: {
    async login(username, password) {
      try {
        const response = await loginrole(username, password);
        this.$patch({
          isVisitorLoggedIn: response.isAllowed,
          name: response.name,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.$patch({
        name: "",
        isVisitorLoggedIn: false
      });
    }
  }
});

//Editor Role
//defining a store
export const useEditor = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'editor',
  //central part of the store
  state: () => {
    return {
      name: "",
      isEditorLoggedIn: false,
    }
  },

  actions: {
    async login(username, password) {
      try {
        const response = await loginrole(username, password);
        this.$patch({
          isEditorLoggedIn: response.isAllowed,
          name: response.name,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.$patch({
        name: "",
        isEditorLoggedIn: false
      });
    }
  }
});