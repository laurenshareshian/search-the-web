<template>
  <form @submit.prevent="handleSubmit">
    <h1> Search </h1>
    <p> 
      <label> Sold After MM/DD/YYYY 
        <input v-model="sold_min"> 
      </label>
    </p>
    <p> 
      <label> Sold Before MM/DD/YYYY 
        <input v-model="sold_max">
      </label> 
    </p>
    <p> 
      <label> Market Value Min 
        <input v-model="market_min">
        </label>
        </p> 
    <p> 
      <label> Market Value Max 
        <input v-model="market_max">
        </label>
    </p> 
    <p> 
      <label> Square Feet  Min 
        <input v-model="sqft_min">
      </label>
    </p> 
    <p> 
      <label> Square Feet Max 
        <input v-model="sqft_max">
      </label>
    </p> 
    <p> 
      <label> Year Built Min 
        <input v-model="year_min">
      </label>
    </p> 
    <p> 
      <label> Year Built Max 
        <input v-model="year_max">
      </label>
    </p> 
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

<style scoped>
form {
  background: white;
  padding: 30px;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
}
p {
  text-align: center;
  text-transform: uppercase;
}
button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
}
button:hover {
    transform: scale(1.1); 
}

</style>