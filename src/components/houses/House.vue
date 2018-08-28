<template>
  <li>
    <router-link :to="`/houses/${house.property_id}`">
    <p>Address: {{house.address}}</p>
    </router-link>
  </li>
</template>

<script>

export default {
  props: {
    house: Object
  }
};

</script>

<style>

</style>