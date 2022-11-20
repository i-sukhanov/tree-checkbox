<template>
  <div class="node">
    <div class="node--item" @click="handleChange">
      <div
        class="node--checkbox"
        :class="{
          'node--checkbox-checked': checked,
          'node--checkbox-indeterminate': indeterminated,
        }"
      ></div>
      <div class="node--label">{{ nodeState?.label }}</div>
    </div>
    <div class="node--children">
      <tree-node
        v-for="childNode in nodeState?.children"
        :key="childNode.id"
        :node="childNode"
        @node:updateState="emits('node:updateState', $event)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Node } from '@/types';
import { defineProps, PropType, computed, defineEmits, ref } from 'vue';

const emits = defineEmits(['node:updateState']);
const props = defineProps({
  node: {
    type: Object as PropType<Node>,
    required: true,
  },
});

const nodeState = ref(props.node);

const indeterminated = computed(() => {
  return props.node.checked
    ? false
    : props.node.children?.some((n) => n.checked) &&
        !props.node.children?.every((n) => n.checked);
});

const checked = computed(() => {
  return props.node.checked || props.node.children?.every((n) => n.checked);
});

const handleChange = () => {
  nodeState.value.checked = !nodeState.value.checked;

  nodeState.value.children?.forEach((child) => {
    child.checked = nodeState.value.checked;
  });

  emits('node:updateState', nodeState.value);
};
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

.node--checkbox-checked {
  background-color: #000;
}

.node--checkbox-indeterminate {
  background-color: #aaa;
}

.node--children {
  padding-left: 24px;
}
</style>
