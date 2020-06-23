<template>
  <div id="app">
    <Header class="fixed-top"/>
    <Cards/>
    <Footer class="fixed-bottom"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Cards from './components/Cards.vue'

export default {
  name: 'App',
  components: {
    Header,
    Cards,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
