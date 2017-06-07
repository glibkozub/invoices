<template>
  <nav class="navbar navbar-toggleable-md navbar-light theme-fill-primary">
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link class="navbar-brand" to="/">My invoice</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/customers">Customers</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Invoices</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style>
  .router-link-exact-active:not(.navbar-brand) {
    color: orangered!important;
  }
</style>

