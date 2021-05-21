<template>
  <h1>Hello {{ count }} </h1>
  <button @click="clickBtn">++</button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const clickBtn = () => store.commit('increment')
    const count = computed(() => store.state.count)
    return { clickBtn, count }
  }
})
</script>
