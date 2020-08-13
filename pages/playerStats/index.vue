<template>
  <main>
    <b-container fluid>
      <b-container>
        <b-row align-v="center">
          <article class=" col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div>
            <p v-if="$fetchState.pending" class="load">
              <loading></loading>
            </p>
            <p v-else-if="$fetchState.error">
              Erreur lors du chargement des données: {{ $fetchState.error.message }}
            </p>
            <div id="graphe" v-else>
              <line-chart
                v-if="loaded"
                :chartdata="chartdata"
                :options="options"/>
            </div>
            </div>
          </article>
        </b-row>
      </b-container>
    </b-container>
  </main>
</template>

<script>
import LineChart from '~/components/Chart.vue'
import loading from '~/components/loadingAnimation'
export default {
  layout: 'navbar',
  name: 'LineChartContainer',
  components: {LineChart,loading},
  data: () => ({
    loaded: false,
    chartdata: {labels:[],datasets:[{label:"Age des joueurs", borderColor: "#3cba9f",data:[],backgroundColor: 'grey'}]}
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


<style scoped>

main{
  margin-top: 50px;
}
.load {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#graphe{
  //background-color: white;
  //opacity: 90%;
}

</style>
