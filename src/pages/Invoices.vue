<template>
  <div class="content">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <h1>List of invoices</h1>
        <router-link to="/invoices/new" class="btn btn-primary">Create invoice</router-link>
      </div>
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
          <tr v-for="invoice, i in data.invoices">
            <td>{{ i + 1 }}</td>
            <td>{{ invoice.createdAt }}</td>
            <td>{{ getCustomer(data.customers, invoice.customer_id) }}</td>
            <td>{{ invoice.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'invoices',
    props: ['data'],
    methods: {
      getCustomer: (customers, invoiceId) => {
        for (let customer of customers) {
          if (customer.id === invoiceId) {
            return customer.name
          }
        }
      },
      foo: (val, oldVal) => {
        const vm = this
        console.log(vm.data)
        console.log(val, oldVal)
      }
    },
    watch: {
      'data': {
        handler: function (val, oldVal) {
          this.foo(val, oldVal)
        },
        deep: true
      }
    },
    created () {
      console.log(this.data)
    }
  }
</script>
