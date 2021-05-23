<template>
  <h1>Hello {{ count }}</h1>
  <a-button @click="clickBtn" type="primary">++</a-button>
</template>

<script lang="ts">
import { defineComponent, computed, useContext, getCurrentInstance } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup(props, context) {
    const store = useStore();
    const { ctx } = getCurrentInstance();
    const clickBtn = () => {
      store.commit("increment");
      ctx.$message.error("error");
    };
    const count = computed(() => store.state.count);
    return { clickBtn, count };
  },
});
</script>
