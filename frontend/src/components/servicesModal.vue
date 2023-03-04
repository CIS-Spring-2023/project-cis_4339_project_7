<template>
  <div class="backdrop">
      <div class="modal" :class="{ sale: theme === 'sale'}">
          <h1 class="text-2xl font-bold">Edit Service</h1>
          <form class="p-8">
              <label for="name" class="block mb-2 p-3">Name</label>
              <input type="text" id="name" v-model="service.name" class="block w-full p-3 mb-4 border border-gray-300 rounded-md">
              <label for="description" class="block mb-2 p-3">Description</label>
              <textarea id="description" v-model="service.description" class="block w-full p-3 resize-none h-40 overflow-y-scroll border border-gray-300 rounded-md mb-4"></textarea>
              <label for="status" class="block mb-2 p-3">Status</label>
              <input type="" id="status" v-model="service.status" class="block w-full p-3 mb-4 border border-gray-300 rounded-md">
          </form>
          <button class="bg-red-700 text-white rounded" @click="closeModal">Close</button>
          <button class="bg-red-700 text-white rounded float-right" @click="closeModal">Save</button>
      </div>
  </div>
</template>

<script>
export default {
  props: ['service', 'theme'],
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
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
  .servicesModal h1 {
      color: #03cfb4;
      border: none;
      padding: 0;
  }
  .servicesModal p {
      font-style: normal;
  }

  .servicesModal.sale {
      background: crimson;
      color: white;
  }

  .servicesModal.sale h1 {
      color: white;
  }

  textarea {
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 100%;
      font-size: 16px;
      line-height: 1.5;
      padding: 10px;
      margin: 5px 0;
  }
</style>
