<template>
  <div class="item">
    <h2>{{ item }}</h2>
    <img :src="url" width="235" height="300" />
    <div class="quantity">
      <button class="inc" @click="counter > 0 ? (counter -= 1) : 0">-</button>
      <span class="quant-text">Quantity: {{ counter }}</span>
      <button class="inc" @click="counter += 1">+</button>
    </div>
    <button class="submit">Submit</button>
  </div>
</template>

<script>
export default {
  props: ['item', 'url'],
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
