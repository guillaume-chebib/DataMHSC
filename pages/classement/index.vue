<template>
  <main>
    <b-container fluid>
      <b-container>
        <b-row align-v="center">
          <article class=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div>

              <p v-if="$fetchState.pending" class="load">
                <loading></loading>
              </p>
              <p v-else-if="$fetchState.error">
                Erreur lors du chargement des données: {{ $fetchState.error.message }}
              </p>

              <b-table v-else responsive="true" striped hover :items="classement" :fields="field">
                <template v-slot:cell(logo)="data">
                  <b-avatar  size="sm" square variant="light" v-bind:src="data.item.logo"></b-avatar>
                </template>
              </b-table>

            </div>
          </article>
        </b-row>
      </b-container>
    </b-container>
  </main>
</template>

<script>
  import loading from '~/components/loadingAnimation'
  export default {

    layout: 'navbar',
    data(){
      return {
        field:[
          {
            key:"rank",
            label: "Position",
            sortable: true
          }
          ,
          {
            key: "logo",
            label:" ",
          }
          ,
          {
            key:"teamName",
            label: "Equipe",
          },
          {
            key: "points",
            label: "Pts",
          },
          {
            key: "all.matchsPlayed",
            label: "Joués",
            sortable: true
          },
          {
            key: 'all.win',
            label: 'Victoires',
            sortable: true
          },
          {
            key: 'all.draw',
            label: 'Nuls',
            sortable: true
          },
          {
            key: 'all.lose',
            label: 'Defaites',
            sortable: true
          },
          {
            key:"goalsDiff",
            label: "+/-",
            sortable: true
          },

        ],
        classement: []
      }
    },
    async fetch() {
      const data = await this.$http.$get('/api/classement')
      for (let i = 0; i < data.api.standings.length; i++) {

        let array = data.api.standings[i].length

        for (let j = 0; j < array; j++) {
          let obj = data.api.standings[i][j];
          if (obj.rank === 1) {
            data.api.standings[i][j]._cellVariants = {rank: "OrangeCustom"};
          }
          if (obj.rank === 2) {
            data.api.standings[i][j]._cellVariants = {rank: "BleuCustom"};
          }
        }
      }
      this.classement=data.api.standings[0]
    },
    head () {
      return {
        title: 'Classement'
      }
    },
    methods: {

    },
    computed:{

    },
    components:{
      loading
    }
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

</style>
