<template>
  <div>
    <select>
      <option value="">Test</option>
    </select>

    <div class="dropdown">
      <input type="text" placeholder="Start typing user name..." class="form-control" :class="isOpen ? 'open' : ''" @input="typing(customers, typed); open()" v-model="typed" v-if="!selected">
      <div type="text" class="selected" v-if="selected" @click="selected = ''">
        <span class="cansel">&times;</span>
        {{ selected }}
      </div>
      <div class="dropdown-content">
        <div v-if="!filtered.length > 0">There is no matching user in the database</div>
        <div v-if="filtered" class="item">
          <div v-for="customer in filtered" @click="select($event)">{{customer.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import getData from '../helpers/get-data'

  export default {
    name: 'datapicker',
    data () {
      return {
        'customers': [{
          'name': 'Bob Smith'
        }, {
          'name': 'Bob Dilan'
        }],
        isOpen: false,
        typed: '',
        filtered: '',
        selected: ''
      }
    },
    methods: {
      open: function () {
        this.isOpen = true
      },
      close: function () {
        this.isOpen = false
      },
      typing: function (customers, typed) {
        const vm = this
        vm.filtered = customers.filter(customer => customer.name.toLowerCase().includes(typed))

        if (typed === '') {
          vm.filtered = []
        }
      },
      select (event) {
        this.selected = event.target.childNodes[0].textContent
      }
    },
    created () {
      const vm = this
      getData('/api/customers', vm, 'customers')
    }
  }
</script>

<style scoped>
  select {
    display: none;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: .5rem .75rem;
    border: 1px solid rgba(0, 0, 0, .15);
  }

  .open + .dropdown-content {
    display: block;
  }

  .item {
    cursor: pointer
  }

  .selected {
    display: flex;
    align-items: center;
  }

  .cansel {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: 6px;
    border-radius: 50%;
    cursor: pointer;
    background-color: lightcoral;
    color: #fff;
  }

  .cansel:hover {
    opacity: 0.8;
  }
</style>
