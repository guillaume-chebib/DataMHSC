<template>
  <p v-if="$fetchState.pending">Fetching posts...</p>
  <p v-else-if="$fetchState.error">
    Error while fetching posts: {{ $fetchState.error.message }}
  </p>

  <div class="container" v-else>
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>

<script>
import LineChart from '~/components/Chart.vue'

export default {
  layout: 'navbar',
  name: 'LineChartContainer',
  components: {LineChart},
  data: () => ({
    loaded: false,
    chartdata: {labels:[],datasets:[{label:"Age des joueurs", borderColor: "#3cba9f",data:[]}]}
  }),
  async fetch() {
    const data = await this.$http.$get('/api/playerStats')
    let players =data.api.players
    for (let j = 0; j < players.length; j++) {
      let obj = players[j];
      if(obj.league==='Ligue 1') {

        this.chartdata.labels.push(obj.lastname)
        //this.chartdata.datasets[0].backgroundColor.push("#3cba9f")
        this.chartdata.datasets[0].data.push(obj.age)
       //this.chartdata.dataset=obj.age
        //this.chartdata.labels=obj.lastname
      }
    }
    console.log(this.chartdata.datasets[0])
  },
  async mounted() {
    this.loaded = false
    try {
      //const {data} = await fetch('/api/playerStats')
      //this.chartdata = data
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  head() {
    return {
      title: 'Stats'
    }
  },

}
</script>
