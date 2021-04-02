<template>
  <form class="form">
    <label>Enter the numbers</label>
    <input type="number" placeholder="number 1" v-model="number1" />
    <input type="number" placeholder="number 2" v-model="number2" />

    <button id="submit" @click.prevent="handleSubmit">Sum</button>

    <div class="separator"></div>

    <label>Results</label>
    <input type="num" class="result" placeholder="Result" v-model="result" readonly />
  </form>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Sum',
  data() {
    return {
      number1: null as number | null,
      number2: null as number | null,
      result: null as number | null,
    }
  },
  methods: {
    async handleSubmit() {
      try {
        let { data } = await this.$http.post('sum', {
          number1: this.number1,
          number2: this.number2
        })
        this.result = data.result
      } catch(error) {
        alert('Invalid request')
      }
    }
  }
});
</script>

<style lang="scss" scoped>
#submit {
  margin-top: 7px;
}
.separator {
  margin-top: 49px;
  margin-bottom: 49px;
}
</style>
