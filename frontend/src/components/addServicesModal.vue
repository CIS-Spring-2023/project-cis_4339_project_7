<template>
    <div class="backdrop">
      <div class="modal">
        <h3>{{ isNewService ? 'Add' : 'Edit' }} Service</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" required>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" v-model="formData.description" required></textarea>
          </div>
          <div class="form-group">
            <label>Status:</label>
            <div class="radio-buttons">
              <label>
                <input type="radio" v-model="formData.status" value="active">
                Active
              </label>
              <label>
                <input type="radio" v-model="formData.status" value="inactive">
                Inactive
              </label>
            </div>
          </div>
          <button type="submit" class="bg-red-701 text-white rounded">Submit</button>
        </form>
        <button class="bg-red-700 text-white rounded" @click="closeModal">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      service: {
        type: Object,
        default: () => ({})
      },
      isNewService: {
        type: Boolean,
        default: true
      },
      onClose: {
        type: Function,
        default: () => {}
      }
    },
    data() {
      return {
        formData: {
          name: this.service.name || '',
          description: this.service.description || '',
          status: this.service.status || 'active'
        }
      };
    },
    methods: {
      submitForm() {
        this.$emit('formSubmitted', this.formData);
        this.onClose();
      },
      closeModal() {
        this.onClose();
      },
      submitForm() {
  const newService = {
      name: this.formData.name,
      description: this.formData.description,
      status: this.formData.status
  };
  this.$emit('addService', newService);
  this.onClose();
}

      }
    };
  </script>
  
  <style>
.modal {
  width: 700px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

h3 {
  text-align: center;
  font-weight: bold;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  margin-bottom: 10px;
}

.form-group input[type="text"] {
  margin-right: 10px;
}

.form-group textarea {
  resize: none;
}

.form-group:last-child {
  margin-bottom: 0;
}

.radio-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.btn {
  margin-right: 10px;
}

.btn-primary {
  margin-top: 20px;
  float: right;
}

.bg-red-700 {
  background-color: #dc2626;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.bg-red-701 {
  background-color: #dc2626;
  color: #fff;
  padding: 10px 20px;
  float: right;
  border-radius: 5px;
  cursor: pointer;
}
  </style>
  