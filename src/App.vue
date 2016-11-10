<template>
  <div>
    <rx-simple></rx-simple>
    <rx-watch></rx-watch>
  </div>
</template>

<script>
import RxSimple from './components/rx-simple.vue'
import RxWatch from './components/rx-watch.vue'

export default {
  name: 'app',

  components: {
    RxSimple,
    RxWatch
  }
}
</script>
