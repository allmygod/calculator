<template>
  <form class="form">
    <label>Enter the numbers</label>
    <input type="number" placeholder="number 1" />
    <input type="number" placeholder="number 2" />
    <button>Sum</button>

    <div class="separator"></div>

    <label>Results</label>
    <input type="num" class="result" placeholder="Result" readonly />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Sum',
});
</script>

<style lang="scss" scoped>
button {
  margin-top: 7px;
}
.separator {
  margin-top: 49px;
  margin-bottom: 49px;
}
</style>
