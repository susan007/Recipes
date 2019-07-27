<template>
  <div>
    <div class="card" v-for="(card, index) in cards" :key="index" :style="`background-image: url(${card.src})`">
      <h4>{{card.title}}</h4>
      <p>{{card.detail}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      cards: Array
    }
  }
</script>

<style scoped>
  .card {
    height: 10rem;
    margin: 0.2rem 1rem;
    border-radius: 8px;
    background-size: cover;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    left: 0;
    top: 0;
  }

  .card h4{
    padding-top: 5rem;
  }

  .card p{
    font-size: small;
  }

  .card p, .card h4{
    text-align: left;
    padding-left: 1rem;
    color: #ffffff;
  }

</style>
