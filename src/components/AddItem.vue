<template>
  <el-card class="input-container">
    <el-input placeholder="" v-model="input"></el-input>
    <div style="width: 20px"></div>
    <el-button id="addButton" type="primary" @click="addToDoItem()">Add</el-button>
  </el-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddItem',
  data() {
    return {
      input: '',
    }
  },
  methods: {
    ...mapActions(['addItem']),
    addToDoItem() {
      const item = {
        title: this.input,
      }
      this.addItem(item);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .input-container {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

</style>
