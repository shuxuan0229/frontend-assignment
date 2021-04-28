<template>
  <div class="main-container_padding">
    <AddItem />
    <el-card v-if="allItems.length === 0" class="no-item-container">No Items</el-card>
    <div v-if="allItems.length !== 0">
      <div v-for="(list, index) in allItems" :key="index" @mouseover="showOnHoverIndex = index" @mouseout="showOnHoverIndex = null">
        <el-card class="card-list_background" v-bind:class = "(index === allItems.length-1)?'last-card-item_border-radius':'middle-card-item_border-radius'">
          <el-checkbox v-model="list.status" @change="updateToDoItemStatus(index)">{{list.title}}</el-checkbox>
          <i class="el-icon-close cross-icon" v-show="showOnHoverIndex === index" v-on:click="deleteItem(index)"></i>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AddItem from './AddItem.vue'

export default {
  name: 'Item',
  components: {
    AddItem
  },
  data() {
    return {
      input: '',
      showOnHoverIndex: null,
    }
  },
  methods: {
    ...mapActions(['fetchItems', 'removeItem', 'updateItem']),
    deleteItem(index) {
      this.removeItem(this.allItems[index]);
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

  .main-container_padding {
    padding: 20px 60px;
  }

  .el-card__body {
    display: flex;
  }

  .no-item-container {
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

  .card-list_background:hover {
    background: #B3D8FF;
  }

  .last-card-item_border-radius {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  .middle-card-item_border-radius {
    border-radius: 0 !important;
  }

</style>
