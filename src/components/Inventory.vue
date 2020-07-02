<template>
  <div class="h-screen w-screen bg-gray-800 text-white overflow-auto">
    <p :class="style.welcome">
      welcome to invenotory list
    </p>
    <p :class="style.msg">add an item to your inventory</p>

    <Form @addInventory="addInventory" />

    <p
      v-if="inventroies.length !== 0"
      class="text-center text-lg uppercase tracking-wider mb-12"
    >
      your inventory list
    </p>

    <ShowList :inventroies="inventroies" />

    <footer class="absolute bottom-0 w-full bg-black">
      <p class="text-center text-xs">Created By Md Abid Hossain 💚💚💚</p>
    </footer>
  </div>
</template>

<script>
  import Form from './Form'
  import ShowList from './ShowList'
  export default {
    name: 'Inventory',
    components: {
      Form,
      ShowList,
    },
    data() {
      return {
        style: {
          welcome:
            'welcome text-2xl capitalize text-center p-4 w-screen tracking-widest',
          msg: 'capitalize text-center',
        },
        inventroies: [],
      }
    },
    methods: {
      addInventory(name, amount, type) {
        this.inventroies.push({
          name,
          amount,
          type,
        })
      },
      deleteitem(index) {
        this.inventroies.splice(index, 1)
      },
    },
  }
</script>

<style></style>
