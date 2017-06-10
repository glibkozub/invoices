<template>
  <div class="content">
    <div class="container">
      <h1>List of invoices</h1>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice, i in invoices">
            <td>{{i + 1}}</td>
            <td>{{invoice.createdAt}}</td>
            <td>{{invoice.customer_id}}</td>
            <td>{{invoice.total}}</td>
          </tr>
        </tbody>
      </table>
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
