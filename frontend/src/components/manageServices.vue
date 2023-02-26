<template>
  <div>
    <h1
      class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
    >
      Manage Services
    </h1>
    <br />
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
    >
      <div class="ml-10"></div>
      <div class="flex flex-col col-span-2">
        <table class="min-w-full shadow-md rounded">
          <thead class="bg-gray-50 text-xl">
            <tr class="p-4 text-left">
              <th class="p-4 text-left">Service Name</th>
              <th class="p-4 text-left">Status</th>
              <th class="p-4 text-left">Description</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-300">
            <tr
              @click="editService(service._id)"
              v-for="service in recentServices"
              :key="service._id"
            >
              <td class="p-2 text-left">{{ service.name }}</td>
              <td class="p-2 text-left">{{ service.status }}</td>
              <td class="p-2 text-left">{{ service.description }}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <!-- Start of loading animation -->
          <div class="mt-40" v-if="loading">
            <p
              class="text-6xl font-bold text-center text-gray-500 animate-pulse"
            >
              Loading...
            </p>
          </div>
          <!-- End of loading animation -->

          <!-- Start of error alert -->
          <div class="mt-12 bg-red-50" v-if="error">
            <h3 class="px-4 py-1 text-4xl font-bold text-white bg-red-800">
              {{ error.title }}
            </h3>
            <p class="p-4 text-lg font-bold text-red-900">
              {{ error.message }}
            </p>
          </div>
          <!-- End of error alert -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import servicesModal from './servicesModal.vue'

export default {
  data() {
    return {
      recentServices: [
        {
          _id: 1,
          name: 'Service 1',
          status: 'active',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
          _id: 2,
          name: 'Service 2',
          status: 'inactive',
          description:
            'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          _id: 3,
          name: 'Service 3',
          status: 'active',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ],
      selectedService: null,
      loading: false,
      error: null,
      showModal: false
    }
  },
  methods: {
    editService(id) {
      // Find the service with the given id
      this.selectedService = this.recentServices.find((s) => s._id === id)
      this.showModal = true
      // Show the modal
      // You could use a boolean data property to control the modal visibility
      // For example, you could add a `showModal` property to your data object:
      // showModal: false
      // And then set it to true here: this.showModal = true;
    }
  }
}
</script>

<style lang="scss" scoped></style>
