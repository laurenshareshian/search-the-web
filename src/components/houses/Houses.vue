<template>
  <section class="houses">
    <div class='houses-search'>
      <HousesSearch :onSearch="handleSearch"/>
    </div>
    <Loader :loading="loading"/>

    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <h3 class='length' v-if="houses">  Length of Results: {{houses.length}} </h3>
    <div class="houses-body">
      <ul v-if="houses">
        <House v-for="house in uniqueHouses"
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
    },
  },
  computed: {
    uniqueHouses: function() {
      var filtered_array = [];
      var property_ids = [];
      for(var i = 0; i < this.houses.length; i++) {
        if(property_ids.indexOf(this.houses[i].property_id) === -1) {
          property_ids.push(this.houses[i].property_id);
          filtered_array.push(this.houses[i]);
        }
      }
      return filtered_array;
    }
  }
};
</script>

<style scoped>

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

.houses-title {
  background: white;
  padding: 20px;
}
.houses-body {
  padding: 50px 100px 50px 100px ;
  background: #e9e9e9;
  text-align:center;
  margin:0;
}
h3{
  font-family:'Playfair Display';
  font-size:25px;
  letter-spacing: 1px;
  color:white;
  margin-bottom:0;
  text-transform: none;
  padding: 20px;
}
h1 {
    margin-top: 0px;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  padding-left:0px;
  color:black;
  
}
.length {color: black;}
li {
  min-height: 250px;
  background:black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* box-shadow: 0px 1px 5px rgba(0,0,0,0.2); */
  transition: all .2s ease-in-out;
  list-style: none;
  text-align: center;
  position: relative;
}
li:hover {
  transform: scale(1.03); 
}


</style>