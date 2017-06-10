<template>
  <div class="content">
    <h1>List of invoices</h1>
    <div v-for="invoice in invoices">
      {{invoice.total}} : {{invoice.discount}}
    </div>
  </div>
</template>

<script>
  import getData from '../helpers/get-data'

  export default {
    name: 'invoices',
    data () {
      return {
        'invoices': ''
      }
    },
    created () {
      const vm = this
      getData('/api/invoices', vm, 'invoices')
    }
  }
</script>
