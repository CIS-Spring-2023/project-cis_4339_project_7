<template>
  <div>
    <!-- Add/Edit Service Form -->
    <h2 class="page-header">Add/Edit Service</h2>
    <form>
      <div>
        <label for="name">Name:</label>
        <input id="name" type="text" v-model="serviceName" required>
      </div>
      <div>
        <!-- Status dropdown -->
        <label for="status">Status:</label>
        <select id="status" v-model="serviceStatus" required>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="serviceDescription" required></textarea>
      </div>
      <button type="button" @click="addOrUpdateService">
        {{ editingService ? 'Update Service' : 'Add Service' }}
      </button>
    </form>
    <!-- Table Header -->
    <table class="services-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <!-- Table body -->
      <tbody>
        <!-- Loop through recentServices array and display each service -->
        <tr v-for="service in recentServices" :key="service._id">
          <td>{{ service._id }}</td>
          <td>{{ service.name }}</td>
          <td>{{ service.status }}</td>
          <td>{{ service.description }}</td>
          <td>
            <!-- Edit and Delete buttons -->
            <button type="button" class="action-button" @click="editService(service)">Edit</button>
            <button type="button" class="action-button" @click="deleteService(service)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// Import store
import { useMyStore } from '@/store/store.js'
// Import ref from Vue
import { ref, onMounted } from 'vue'

export default {
  // Component name
  name: 'ServicesTable',
  // Setup function
  setup() {

    // Use store
    const store = useMyStore()

    // Refs
    const serviceName = ref('')
    const serviceStatus = ref('')
    const serviceDescription = ref('')
    const editingService = ref(null)

    // Methods
    // Add or update service
    const addOrUpdateService = () => {
      // Check if editingService is null
      if (editingService.value) {
        // Update existing service
        editingService.value.name = serviceName.value
        editingService.value.status = serviceStatus.value
        editingService.value.description = serviceDescription.value
        editingService.value = null
      } else {
        // Add new service
        const newService = {
          _id: store.recentServices.length + 1,
          name: serviceName.value,
          status: serviceStatus.value,
          description: serviceDescription.value,
        }
        // Push new service to recentServices array
        store.recentServices.push(newService)
      }
      // Reset form
      serviceName.value = ''
      serviceStatus.value = ''
      serviceDescription.value = ''
    }

    // Edit service
    const editService = (service) => {
      editingService.value = service
      serviceName.value = service.name
      serviceStatus.value = service.status
      serviceDescription.value = service.description
    }

    // Delete service
    const deleteService = (service) => {
      const index = store.recentServices.indexOf(service)
      // Remove service from recentServices array
      store.recentServices.splice(index, 1)
    }

    // Call fetchRecentServices action when component is mounted
    onMounted(() => {
      store.fetchRecentServices()
    })

    // Return values
    return {
      recentServices: store.recentServices,
      serviceName,
      serviceStatus,
      serviceDescription,
      editingService,
      addOrUpdateService,
      editService,
      deleteService,
    }
  },
}
</script>


<style scoped>

/* Table styles */
.services-table {
  border-collapse: collapse;
  width: 100%;
}

.services-table th {
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.services-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.services-table tr:nth-child(even) {
  background-color: #f2f2f2;
}


/* Form styles */
form {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 24px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

form div {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

form label {
  margin-bottom: 8px;
  font-weight: bold;
}

form input,
form select,
form textarea {
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  transition: border-color 0.2s ease-in-out;
}

form input:focus,
form select:focus,
form textarea:focus {
  border-color: #C90F30;
}

form button {
  background-color: #C90F30;
  color: #fff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

/* Button styles */
.services-table button {
  background-color: #ddd;
  color: #333;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #bbb;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.action-button {
  margin-right: 8px;
}

/* Hover styles */
.services-table button:hover {
  background-color: #C90F30;
  color: #fff;
}

.page-header {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 24px;
  display: flex;
  justify-content: center;
}

</style>
