<template>
  <div class="content">
    <div class="container">
      <h1>List of invoices</h1>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="customer, i in customers">
          <td>{{i + 1}}</td>
          <td>{{customer.id}}</td>
          <td>{{customer.name}}</td>
          <td>{{customer.address}}</td>
          <td>{{customer.phone}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import getData from '../helpers/get-data'

  export default {
    name: 'customers',
    data () {
      return {
        'customers': ''
      }
    },
    created () {
      const vm = this
      getData('/api/customers', vm, 'customers')
    }
  }
</script>
