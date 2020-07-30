<template>
  <section class="container">

    <div>
      <ul class="classement">
      <template v-for='team in classement.api.standings'>
          <b-table responsive="true" striped hover :items="team" :fields="field" :tbody-tr-class="rowClass" >
            <template v-slot:cell(logo)="data">
              <b-avatar  size="sm" square variant="light" v-bind:src="data.item.logo"></b-avatar>
            </template>
          </b-table>
      </template>
      </ul>
    </div>

  </section>
</template>

<script>
  export default {
    async asyncData ({ $http }) {
      const data = await $http.$get('/api/classement')
      return {
        field:["rank","logo","teamName","forme","goalsDiff","points"],
        classement: data
      }
    },
    head () {
      return {
        title: 'Classement'
      }
    },
    methods: {
      rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.rank === 1 ) return 'table-OrangeCustom'
      }
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
