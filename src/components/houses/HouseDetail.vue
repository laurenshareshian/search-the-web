<template>
    <div>
      <section v-if="house">
        <h2>{{ house.address }}</h2>
        <p>Sale Price: {{ house.sale_price }}</p>
        <p>Sale Date: {{ house.sale_date }}</p>
        <p>Owner: {{ house.owner }}</p>
        <p>Year Built: {{ house.year_built }}</p>
        <p>Square Feet: {{ house.square_feet }}</p>
      </section>
    </div>

</template>

<script>
import api from '../../services/api';
import Loader from './Loader';

export default {
  data() {
    return {
      house: null,
      loading: false,
      error: null,
    };
  },
  created() {
    this.search = this.$route.params.property_id;
    this.searchHouse();
  },
  components: {
    Loader
  },
  methods: {
    searchHouse() {
      this.loading = true;
      this.error = null;

      api.getHouseById(this.search)
        .then(response => {
          this.house = response.results[0];
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.loading = false;
        });
    }
  }
};

</script>

<style scoped>
p {
  text-align: center !important;
  text-transform: uppercase;
}
section {
  margin-bottom: 200px;
}
h2 {text-align: center}
</style>
