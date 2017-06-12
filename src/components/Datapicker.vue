<template>
    <div class="dropdown" :class="isOpen ? 'open' : ''">
      <div type="text" class="selected" v-if="canEdit()">
        <div v-for="selectedItem in selected" class="selected-item">
          <span class="cancel" @click="onDeselect($event)">&times;</span>
          {{ selectedItem }}
        </div>
      </div>
      <input type="text" :placeholder="placeholder" class="form-control" @focus="open()" @blur="close()" @input="typing(data, typed)" v-model="typed" v-if="canSelect()">
      <div class="dropdown-content">
        <div v-if="!filtered.length > 0">There is no matching user in the database</div>
        <div v-if="filtered" class="item">
          <div v-for="data in filtered" @mousedown="onSelect($event)">{{data.name}}</div>
        </div>
      </div>
      <div>{{selected}}</div>
    </div>
</template>

<script>
  export default {
    name: 'datapicker',
    props: ['data', 'selects', 'placeholder', 'multiple'],
    data () {
      return {
        isOpen: false,
        typed: '',
        filtered: '',
        selected: []
      }
    },
    methods: {
      open: function () {
        this.isOpen = true
        this.filtered = this.data
      },
      close: function () {
        this.isOpen = false
      },
      typing: function (data, typed) {
        this.filtered = data.filter(item => item.name.toLowerCase().includes(typed))
      },
      onSelect (event) {
        this.selected.push(event.target.childNodes[0].textContent)

        // Emit data to parent
        this.$emit('selected', {
          [this.selects]: this.selected
        })
      },
      onDeselect (event) {
        this.selected.splice(this.selected.indexOf(event.target.childNodes[0].textContent), 1)
      },
      canSelect () {
        if (!this.multiple) {
          return !this.selected.length > 0
        }

        if (this.multiple) {
          return true
        }
      },
      canEdit () {
        if (!this.multiple) {
          return this.selected.length > 0
        }

        if (this.multiple) {
          return true
        }
      }
    },
    created () {
      this.filtered = this.data
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

  .open .dropdown-content {
    display: block;
  }

  .item {
    cursor: pointer
  }

  .selected {
    display: flex;
    align-items: center;
  }

  .cancel {
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

  .cancel:hover {
    opacity: 0.8;
  }

  .selected-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .selected-item + .selected-item {
    margin-left: 15px;
  }
</style>
