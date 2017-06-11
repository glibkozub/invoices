<template>
  <div class="content">
    <div class="container">
      <h1>Create new invoice</h1>
      <form>
        <div class="form-group row align-items-center">
          <div class="col-2 col-form-label">User</div>
          <div class="col-4">
            <datapicker :data="data.customers" placeholder="Start typing user name.."></datapicker>
          </div>
        </div>
        <div class="form-group row align-items-center">
          <div class="col-2 col-form-label">Products</div>
          <div class="col-4">
            <datapicker :data="data.products" placeholder="Start typing product.."></datapicker>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Datapicker from '../components/Datapicker'

  export default {
    name: 'createInvoice',
    props: ['data'],
    components: { Datapicker }
  }
</script>
