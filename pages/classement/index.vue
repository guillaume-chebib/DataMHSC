<template>
  <main>
    <section>
      <div class="container-fluid">
        <div class="container">
          <div class="row-align-self-center mb-4">
            <article class=" col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div>
            <p v-if="$fetchState.pending">Fetching posts...</p>
            <p v-else-if="$fetchState.error">
              Error while fetching posts: {{ $fetchState.error.message }}
            </p>
            <ul class="classement" v-else>
              <template v-for='team in classement.api.standings'>
                <b-table responsive="true" striped hover :items="team" :fields="field" :head-variant="headVariant">
                  <template v-slot:cell(logo)="data">
                    <b-avatar  size="sm" square variant="light" v-bind:src="data.item.logo"></b-avatar>
                  </template>
                </b-table>
              </template>
            </ul>
          </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
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
        headVariant: "null",
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
      this.classement=data
    },
    head () {
      return {
        title: 'Classement'
      }
    },
    methods: {

    },
    computed:{

    }
  }
</script>

<style scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .title
  {
    margin: 30px 0;
  }
  .users
  {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .user
  {
    margin: 10px 0;
  }
  .button
  {
    display: inline-block;
    margin-top: 50px;
  }

</style>
