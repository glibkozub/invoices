<template>
  <div id="app">
    <navbar></navbar>
    <router-view :data="data"></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import getData from './helpers/get-data'

  export default {
    name: 'app',
    components: { Navbar },
    data () {
      return {
        'data': {
          'customers': [{
            'name': 'Bob Smith'
          }, {
            'name': 'Bob Dilan'
          }],
          'products': [{
            'name': 'Parachute pants'
          }, {
            'name': 'Potato'
          }]
        }
      }
    },
    created () {
      const vm = this
      getData('/api/customers', vm, 'customers')
      getData('/api/products', vm, 'products')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  /* Shared styles */

  .theme-fill-primary {
    background-color: lightgoldenrodyellow;
  }

  .content {
    padding: 20px 0;
  }

  h1 {
    margin-bottom: 2rem!important;
  }
</style>
