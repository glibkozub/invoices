<template>
  <div class="content">
    <div class="container">
      <h1>Create new invoice</h1>
      <form>
        <div class="form-group row align-items-center">
          <div class="col-2 col-form-label">User</div>
          <div class="col-4">
            <datapicker :data="data.customers" :multiple="false" placeholder="Start typing user name.." selects="customer" @selected="onSelected"></datapicker>
          </div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2 col-form-label">Products</div>
          <div class="col-4">
            <datapicker :data="data.products" :multiple="true" placeholder="Start typing product.." selects="products" @selected="onSelected"></datapicker>
          </div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2">Discount</div>
          <div class="col-4">
            <input type="text" class="form-control">
          </div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2">Total</div>
          <div class="col-4">

          </div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2"></div>
          <div class="col-4">
            <button type="button" class="btn btn-primary" @click="saveInvoice()">Save invoice</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Datapicker from '../components/Datapicker'
  import getData from '../helpers/get-data'

  export default {
    name: 'createInvoice',
    components: { Datapicker },
    props: ['data'],
    data () {
      return {
        customer_id: '',
        discount: '',
        total: ''
      }
    },
    methods: {
      saveInvoice () {
        const vm = this

        // Create new invoice
        fetch('/api/invoices', {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify({
            customer_id: this.customer_id,
            discount: this.discount,
            total: this.total
          })
        }).then(response => response.json()).then((data) => {
          getData('/api/invoices', vm, 'invoices')
        })
      },
      onSelected (val) {
        const vm = this

        // Find customer id from selected customer
        if (val.customer) {
          for (let customer of vm.data.customers) {
            if (customer.name === val.customer) {
              vm.customer_id = customer.id
            }
          }
        }
      }
    }
  }
</script>

<style>
  .btn {
    cursor: pointer;
  }
</style>
