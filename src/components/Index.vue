<template>
  <form action="/create-checkout" method="POST">
    <input type="hidden" name="priceId" value="price_1JT1xCLK3HhRLfWR4jsujPON" />
    <button type="submit">Checkout</button>
  </form>
</template>

<script>
export default {
  name: "Index",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
