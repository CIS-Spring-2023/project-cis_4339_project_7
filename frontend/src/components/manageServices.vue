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
            <tr v-for="service in recentServices" :key="service._id" @click="toggleServiceModal(service)">
              <td class="p-2 text-left">{{ service.name }}</td>
              <td class="p-2 text-left">{{ service.status }}</td>
              <td class="p-2 text-left">{{ service.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <servicesModal v-if="showModal" theme="sale" @close="toggleServiceModal" :service="selectedService" />
  </div>
</template>

<script>
import servicesModal from './servicesModal.vue'

export default {
  components: { servicesModal },
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
        },
        {
          _id: 4,
          name: 'Service 4',
          status: 'inactive',
          description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          _id: 5,
          name: 'Service 5',
          status: 'active',
          description:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ],
      showModal: false,
      selectedService: null
    }
  },
  methods: {
    toggleServiceModal(service) {
      this.selectedService = service
      this.showModal = !this.showModal
      console.log('toggleServiceModal')
    }
  }
}
</script>



<style lang="scss" scoped></style>
