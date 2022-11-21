<template>
  <div id="app">
    <tree-node
      v-for="node in treeData"
      :key="node.id"
      :node="node"
      @node:updateState="updateNodeState"
    />
  </div>
</template>

<script lang="ts" setup>
import TreeNode from '@/components/TreeNode.vue';
import { ref } from 'vue';
import { Node } from './types';
import { nanoid } from 'nanoid';

const treeData = ref<Node[]>([
  {
    id: nanoid(),
    label: 'root',
    checked: false,
    children: [
      { id: nanoid(), label: '1 first level child', checked: false },
      {
        id: nanoid(),
        label: '2 first level child',
        checked: false,
        children: [
          { id: nanoid(), label: '1 first level child', checked: false },
          { id: nanoid(), label: '2 first level child', checked: false },
          { id: nanoid(), label: '1 first level child', checked: false },
          {
            id: nanoid(),
            label: '1 first second child',
            checked: false,
            children: [
              { id: nanoid(), label: '1 third level child', checked: false },
              { id: nanoid(), label: '2 third level child', checked: false },
              { id: nanoid(), label: '3 third level child', checked: false },
              { id: nanoid(), label: '4 third level child', checked: false },
              { id: nanoid(), label: '5 third level child', checked: false },
              { id: nanoid(), label: '6 third level child', checked: false },
            ],
          },
        ],
      },
    ],
  },
]);

const updateNodeState = (node: Node) => {
  const updateTreeData = (arrNode: Node[]) => {
    arrNode.forEach((n) => {
      if (n.id === node.id) {
        n = node;
      } else if (n.children) {
        updateTreeData(n.children);
      }
    });
  };

  updateTreeData(treeData.value);
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 60px auto;
  width: calc(100% - 32px);
  max-width: 700px;
}
</style>
