<template>
  <div class="main-content">
    <el-card class="input-container">
      <el-input placeholder="" v-model="input"></el-input>
      <div style="width: 20px"></div>
      <el-button type="primary" v-on:click="addToDoItem">Add</el-button>
    </el-card>
    <el-card v-if="allItems.length === 0" class="empty-container">No Items</el-card>
    <div v-if="allItems.length !== 0">
      <div v-for="(list, index) in allItems" :key="index" @mouseover="showOnHoverIndex = index" @mouseout="showOnHoverIndex = null">
        <el-card class="card-list-background" v-bind:class = "(index === allItems.length-1)?'last-item':'not-last-item'">
          <el-checkbox v-model="list.status" @change="updateToDoItemStatus(index)">{{list.title}}</el-checkbox>
          <i class="el-icon-close cross-icon" v-show="showOnHoverIndex === index" v-on:click="deleteItem(index)"></i>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ItemComponent',
  data() {
    return {
      input: '',
      showOnHoverIndex: null,
    }
  },
  methods: {
    ...mapActions(['fetchItems', 'removeItem', 'addItem', 'updateItem']),
    deleteItem(index) {
      this.removeItem(this.allItems[index]);
    },
    addToDoItem(e) {
      e.preventDefault();
      const item = {
        title: this.input,
      }
      this.addItem(item);
    },
    updateToDoItemStatus(index) {
      const updatedItem = {
          id: this.allItems[index]._id,
          status: !this.allItems[index].completed
      };
      this.updateItem(updatedItem);
    }
  },
  computed: mapGetters(['allItems']),
  created() {
    this.fetchItems()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .el-card {
    box-shadow: none !important;
  }

  .main-content {
    padding: 20px 60px;
  }

  .el-card__body {
    display: flex;
  }

  .input-container {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .empty-container {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
    justify-content: center;
    display: flex;
  }

  .cross-icon {
    position: fixed;
    right: 80px;
  }

  .cross-icon:hover {
    cursor: pointer;
  }

  .card-list-background:hover {
    background: #B3D8FF;
  }

  .last-item {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  .not-last-item {
    border-radius: 0 !important;
  }

</style>
