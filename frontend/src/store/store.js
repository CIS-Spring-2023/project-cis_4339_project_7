// import { defineStore } from 'pinia'
// import axios from 'axios'

// // Update this to match your backend server URL
// const apiURL = 'http://localhost:3000'

// export const useMyStore = defineStore('myStore', {
//   state: () => ({
//     recentServices: []
//   }),
//   actions: {
//     async fetchRecentServices() {
//       try {
//         const response = await axios.get(`${apiURL}/services`)
//         this.recentServices = response.data
//         // console.log(this.recentServices)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//   }
// })