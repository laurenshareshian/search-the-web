<template>
  <li>
    <router-link :to="`/houses/${house.property_id}`">
    <div class="title-bg">
      <h3>{{shortenedAddress}}</h3>
      <p> {{house.property_id}} </p>
    </div>
    </router-link>
  </li>
</template>

<script>

export default {
  props: {
    house: Object
  },
  data() {
    return {
      shortenedAddress: null
    };
  },
  created() {
    this.shortenedAddress = this.house.address.substring(0, 30);
  }
};

</script>

<style scoped>
li {
  list-style: none;
  text-align: center;
  position: relative;
}
h3{
  font-family:'Playfair Display';
  font-size:25px;
  letter-spacing: 1px;
  color:white;
  margin-bottom:0;
  text-transform: none;
}
p {
  margin-top: 15px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center !important;
}
.title-bg {
  background: #282828f2;
  color:white;
  position: absolute;     
  text-align: center;  
  padding: 0px 20px 10px 20px;  
  bottom: 0px; 
  width: 100%;
}


</style>