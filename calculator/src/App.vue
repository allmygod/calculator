<template>
  <div id="app">
    <header>
      <h1 class="title">Calculator</h1>
    </header>

    <main>
      <Sum />
    </main>
  </div>
</template>

<script lang="ts">
import './assets/scss/main.scss';
import Vue from 'vue';
import Sum from './components/Sum.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Sum
  }
});
</script>
