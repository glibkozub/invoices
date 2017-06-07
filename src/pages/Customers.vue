<template>
  <div class="content">
    <h1>List of customers</h1>
    <p v-for="customer in customers">{{ customer }}</p>
  </div>
</template>

<script>
  export default {
    name: 'customers',
    data () {
      return {
        customers: ['Pete', 'Simon', 'Igor']
      }
    }
  }
</script>
