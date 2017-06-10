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
        customers: ['Pete', 'Simon', 'Igor', 'Severyn']
      }
    },
    methods: {
      test: () => {
        console.log(this)
      }
    },
    created () {
      fetch('/api', {
        'method': 'get'
      }).then(response => {
        console.log(response)
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>
