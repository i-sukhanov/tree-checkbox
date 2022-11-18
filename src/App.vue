<template>
  <div id="app">
    <tree-node v-for="node in data" :key="node.id" :node="node" />
  </div>
</template>

<script lang="ts" setup>
import TreeNode from '@/components/TreeNode.vue';
import { ref } from 'vue';
import { Node } from './types';

const data = ref<Node[]>([
  {
    id: Date.now(),
    label: 'root',
    checked: false,
    children: [
      { id: Date.now(), label: '1 first level child', checked: false },
      { id: Date.now(), label: '2 first level child', checked: false },
      {
        id: Date.now(),
        label: '3 first level child',
        checked: false,
        children: [
          { id: Date.now(), label: '1 second level child', checked: false },
          { id: Date.now(), label: '2 second level child', checked: false },
          { id: Date.now(), label: '3 second level child', checked: false },
        ],
      },
    ],
  },
]);
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 60px auto;
  width: calc(100% - 32px);
  max-width: 700px;
}
</style>
