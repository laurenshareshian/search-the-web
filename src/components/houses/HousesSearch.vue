<template>
  <form @submit.prevent="handleSubmit">
    <ul>
    <li> Sold After MM/DD/YYYY <input v-model="sold_min"> </li>
    <li> Sold Before MM/DD/YYYY <input v-model="sold_max"> </li>
    <li> Market Value Min <input v-model="market_min"></li>
    <li> Market Value Max <input v-model="market_max"></li>
    <li> Square Feet  Min <input v-model="sqft_min"></li>
    <li> Square Feet Max <input v-model="sqft_max"></li>
    <li> Year Built Min <input v-model="year_min"></li>
    <li> Year Built Max <input v-model="year_max"></li>
    </ul>
    <button>Go</button>
  </form>
</template>

<script>
export default {
  props: {
    onSearch: Function
  },
  data() {
    return {
      sold_min: '',
      sold_max: '',
      market_min: '',
      market_max: '',
      sqft_min: '',
      sqft_max: '',
      year_min: '',
      year_max: ''
    };
  },
  methods: {
    handleSubmit() {
      this.onSearch([this.sold_min,
        this.sold_max, 
        this.market_min,
        this.market_max,
        this.sqft_min,
        this.sqft_max,
        this.year_min,
        this.year_max]);
    }
  }
};
</script>

<style>

</style>