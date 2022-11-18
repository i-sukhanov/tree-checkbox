<template>
  <div class="node">
    <div class="node--item">
      <div class="node--checkbox"></div>
      <div class="node--label">{{ node?.label }}</div>
    </div>
    <div class="node--children">
      <tree-node
        v-for="childNode in node?.children"
        :key="childNode.id"
        :node="childNode"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Node } from '@/types';
import { defineProps, PropType } from 'vue';

defineProps({
  node: {
    type: Object as PropType<Node>,
    required: true,
  },
});
</script>

<style scoped>
.node {
  margin-top: 10px;
}

.node--item {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.node--checkbox {
  border: 1px solid #e1e1e1;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 8px;
}

.node--children {
  padding-left: 16px;
}
</style>
