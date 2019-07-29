<template>
  <div>
    <div class="card" :style="`background-image: url(${src})`">
      <h4>{{title}}</h4>
      <p>{{detail}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      detail: String,
      src: String
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
