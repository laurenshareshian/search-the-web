<template>
  <section class="houses">
    <h2>Houses</h2>

    <HousesSearch :onSearch="handleSearch"/>
    
    <Loader :loading="loading"/>

    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <p v-if="search">Searching for &quot;{{ search }}&quot;</p>
    <div class="search-container">
      <ul v-if="houses">
        <p> Length of Results: {{houses.length}} </p>
        <House v-for="house in houses"
          :key="house.property_id"
          :house="house"
        />
      </ul>
    </div>

  </section>
</template>

<script>
import api from '../../services/api';
import House from './House';
import HousesSearch from './HousesSearch';
import Loader from './Loader';

export default {
  data() {
    return {
      houses: null,
      loading: false,
      error: null,
      search: '',
      total: 0,
    };
  },
  components: {
    House,
    HousesSearch,
    Loader
  },
  // created() {
  //   this.searchHouses();
  // },
  methods: {
    handleSearch(search) {
      this.search = search;
      this.searchHouses();
    },
    searchHouses() {
      this.loading = true;
      this.error = null;

      api.getHouses(this.search)
        .then(response => {
          this.houses = response.results;
          this.total = response.count;
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

<style>

.error {
  color: red;
}

.loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}
</style>