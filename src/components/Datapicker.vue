<template>
  <div>
    <select>
      <option value="">Test</option>
    </select>

    <div class="dropdown">
      <input type="text" v-bind:placeholder="placeholder" class="form-control" :class="isOpen ? 'open' : ''" @focus="open()" @blur="close()" @input="typing(data, typed)" v-model="typed" v-if="!selected">
      <div type="text" class="selected" v-if="selected" @click="selected = ''">
        <span class="cansel">&times;</span>
        {{ selected }}
      </div>
      <div class="dropdown-content">
        <div v-if="!filtered.length > 0">There is no matching user in the database</div>
        <div v-if="filtered" class="item">
          <div v-for="data in filtered" @mousedown="select($event)">{{data.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'datapicker',
    props: ['data', 'placeholder'],
    data () {
      return {
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
      typing: function (data, typed) {
        console.log(data)
        const vm = this
        vm.filtered = data.filter(item => item.name.toLowerCase().includes(typed))
      },
      select (event) {
        this.selected = event.target.childNodes[0].textContent
      }
    },
    created () {
      const vm = this
      vm.filtered = vm.data
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
    z-index: 10;
    top: 100%;
    left: 0;
    width: 100%;
    padding: .5rem .75rem;
    border: 1px solid rgba(0, 0, 0, .15);
    background-color: #fff;
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
