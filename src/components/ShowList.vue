<template>
  <div class="overflow-auto" style="max-height: 400px">
    <div
      v-for="(inv, index) in inventroies"
      :key="index"
      class=" w-2/6 bg-gray-900 h-auto mx-auto text-lg flex-row justify-between"
    >
      <div class="flex justify-between items-center">
        <p class="p-2">{{ index + 1 }}. {{ inv.name }}</p>
        <div class="flex items-center">
          <span class="p-2">{{ inv.amount }} {{ inv.type }}</span>
          <span
            class="material-icons my-auto hover:text-red-900 cursor-pointer transform ease-in-out delay-100 p-3"
            title="Delete Item"
            @click="deleteitem(index)"
          >
            delete_outline
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShowList',
    props: ['inventroies'],
    methods: {
      deleteitem(index) {
        this.inventroies.splice(index, 1)
      },
    },
  }
</script>

<style></style>
