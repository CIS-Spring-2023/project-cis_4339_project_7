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
            <tr v-for="service in recentServices" :key="service._id" @click="editServiceModal(service)">
              <td class="p-2 text-left">{{ service.name }}</td>
              <td class="p-2 text-left">{{ service.status }}</td>
              <td class="p-2 text-left">{{ service.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button class="bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-10 ml-10" @click="toggleAddServiceModal">Add Service</button>
    <editServicesModal v-if="showModal" theme="sale" @close="editServiceModal" :service="selectedService" />
    <addServiceModal v-if="showAddServiceModal" @close="showAddServiceModal = false" v-on:addService="addNewService" />
  </div>
</template>

<script>
import editServicesModal from './editServicesModal.vue'
import addServiceModal from './addServicesModal.vue'
import eventForm from './eventForm.vue'


export default {
  components: { editServicesModal, addServiceModal, eventForm},
  data() {
    return {
      recentServices: [
        {
          _id: 1,
          name: 'Service 1',
          status: 'active',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
          _id: 2,
          name: 'Service 2',
          status: 'inactive',
          description:
            'Sed do eiusmod tempor incididunt ut labore'
        },
        {
          _id: 3,
          name: 'Service 3',
          status: 'active',
          description:
            'Ut enim ad minim veniam, quis nostrud'
        },
        {
          _id: 4,
          name: 'Service 4',
          status: 'inactive',
          description:
            'Duis aute irure dolor in reprehenderit in'
        },
        {
          _id: 5,
          name: 'Service 5',
          status: 'active',
          description:
            'Excepteur sint occaecat cupidatat non proident'
        }
      ],
      showModal: false,
      selectedService: null,
      showAddServiceModal: false,
      newService: {
        name: '',
        status: '',
        description: ''
      }
      
    }
  },
  created() {
  console.log(this.recentServices);
}
,
  methods: {
    editServiceModal(service) {
      this.selectedService = service
      this.showModal = !this.showModal
      if (this.showModal) {
        console.log('editServiceModal')
      }
      if (!this.showModal) {
        console.log('save editServiceModal')
      }
    },
    toggleAddServiceModal() {
      this.showAddServiceModal = !this.showAddServiceModal
      if (this.showAddServiceModal) {
        console.log('toggleAddServiceModal')
      }
    },
    addService() {
      console.log('Adding service:', this.newService)
      this.recentServices.push({
        _id: this.recentServices.length + 1,
        name: this.newService.name,
        status: this.newService.status,
        description: this.newService.description
      })
      this.showAddServiceModal = false
      this.newService = {
        name: '',
        status: '',
        description: ''
      }
    },
    addNewService(service) {
      this.recentServices.push(service)
    }
  }
}
</script>



<style lang="scss" scoped></style>
