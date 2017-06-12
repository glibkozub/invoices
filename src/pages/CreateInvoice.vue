<template>
  <div class="content">
    <div class="container">
      <h1>Create new invoice</h1>
      <form>
        <div class="form-group row align-items-center">
          <div class="col-2 col-form-label">User</div>
          <div class="col-10">
            <datapicker :data="data.customers" :multiple="false" placeholder="Start typing user name.." selects="customer" @selected="onSelected"></datapicker>
          </div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2 col-form-label">Products</div>
          <div class="col-10">
            <datapicker :data="data.products" :multiple="true" placeholder="Start typing product.." selects="products" @selected="onSelected"></datapicker>
          </div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2">Discount</div>
          <div class="col-10">
            <input type="text" class="form-control col-4" v-model="discount" @input="finalPrice()">
          </div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2">Total</div>
          <div class="col-4">{{totalWithDiscount}}</div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2"></div>
          <div class="col-4">
            <button type="button" class="btn btn-primary" @click="saveInvoice()">Save invoice</button>
          </div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2"></div>
          <div class="col-4 alert-info" v-if="notification">
            Your invoice is saved. Check 'Invoices' page
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
        discount: 0,
        total: 0,
        totalWithDiscount: 0,
        notification: false
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

        this.showSaveNotification()
      },
      showSaveNotification () {
        this.notification = true
      },
      hideSaveNotification () {
        this.notification = false
      },
      finalPrice () {
        this.totalWithDiscount = Math.round((this.total - this.discount) * 100) / 100
      },
      onSelected (val) {
        this.hideSaveNotification()

        const vm = this

        // Find customer id from selected customer
        if (val.customer) {
          for (let customer of vm.data.customers) {
            if (customer.name === val.customer[0].name) {
              vm.customer_id = customer.id
            }
          }
        }

        if (val.products) {
          let newTotal = 0

          // Find total
          val.products.forEach(selectedProduct => {
            for (let product of vm.data.products) {
              if (product.name === selectedProduct.name) {
                newTotal += product.price * selectedProduct.quantity
              }
            }
          })

          this.total = Math.round(newTotal * 100) / 100
          this.finalPrice()
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
