<template>
  <div class="content">
    <div class="container">
      <h1>List of customers</h1>
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
        <tr v-for="customer, i in data.customers">
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
  export default {
    name: 'customers',
    props: ['data'],
    data () {
      return {
        'customers': ''
      }
    }
  }
</script>
