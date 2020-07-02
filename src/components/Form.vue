<template>
  <div class="flex flex-row justify-center p-4">
    <form @submit.prevent="addtoinventory">
      <label for="name">Name</label>
      <input
        :class="style.input"
        type="text"
        v-model="inventoryName"
        required
      />
      <label for="quantity">Quantity</label>
      <input
        :class="style.input"
        class="w-32 appearance-none"
        type="number"
        min="0"
        v-model="inventoryQuantity"
        required
      />
      <label for="type">Type</label>
      <select
        class="w-32 bg-gray-200 border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        :class="style.input"
        v-model="inventorytype"
      >
        <option>Kg</option>
        <option>Litter</option>
        <option>Piece</option>
      </select>
      <button
        class="border-2 w-20 p-2 bg-green-800 border-gray-900 hover:bg-green-900 rounded-lg"
      >
        ADD
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Form',
    data() {
      return {
        style: {
          input: 'p-2 m-2 w-input focus:outline-none text-black rounded-lg',
        },
        inventoryName: null,
        inventoryQuantity: null,
        inventorytype: 'Piece',
      }
    },
    methods: {
      addtoinventory() {
        this.$emit(
          'addInventory',
          this.inventoryName,
          this.inventoryQuantity,
          this.inventorytype
        )

        this.inventoryName = null
        this.inventoryQuantity = null
      },
    },
  }
</script>

<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
</style>
