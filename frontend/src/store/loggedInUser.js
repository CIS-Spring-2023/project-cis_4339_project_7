//Taken from most recent class, this is where the the login information will be stored for Sprint2 until it is later moved in Sprint3 mentioned below.
//This is also where the errors will be given to the console in google when using inspect element.

import { defineStore } from 'pinia'

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      name: "",
      isLoggedIn: false,
    }
  },
  // equivalent to methods in components, perfect to define business logic

  actions: {
    async login(username, password) {
      try {
        const response = await apiLogin(username, password);
        this.$patch({
          isLoggedIn: response.isAllowed,
          name: response.name,
        })
        this.$router.push("/");
      } catch(error) {
        console.log(error)
      }
    },
    logout() {
      this.patch({
        name: "",
        isLoggedIn: false
      });

      // we could do other stuff like redirecting the user
    }
  }
});

//simulate a login - we will later use our backend to handle authentication
function apiLogin(u, p) {
  if (u === "editor" && p === "editor") return Promise.resolve({ isAllowed: true, name: "John Doe" });
  if (p === "editor") return Promise.resolve({ isAllowed: false });
  return Promise.reject(new Error("invalid credentials"));
}

