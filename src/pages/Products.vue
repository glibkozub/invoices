<template>
  <div class="content">
    <div class="container">
      <h1>List of products</h1>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product, i in data.products">
          <td>{{i + 1}}</td>
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'products',
    props: ['data'],
    data () {
      return {
        'products': ''
      }
    }
  }
</script>
