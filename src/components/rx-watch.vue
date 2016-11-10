<template>
  <div>
    <h4>Watch</h4>
    <div>
      <button v-on:click="num++">add</button>
      source: {{num}}  -> result: {{num$}}
    </div>
  </div>
</template>

<script>
import 'rxjs/add/operator/pluck'
import 'rxjs/add/operator/startWith'
import 'rxjs/add/operator/delay'

export default {
  name: 'rx-watch',

  data() {
    return {
      num: 1
    }
  },

  subscriptions() {
    return {
      num$: this.$watchAsObservable('num')
        .pluck('newValue')
        .startWith(this.num)
        .map(a => a + 1)
        .delay(3000)
    }
  }
}
</script>
