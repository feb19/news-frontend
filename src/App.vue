<script>
import routes from './Routes'

export default {
  name: 'app',
  data () {
    return {
      currentRoute: window.location.pathname
    }
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      console.log(matchingView)
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) { return h(this.ViewComponent) }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
</style>
