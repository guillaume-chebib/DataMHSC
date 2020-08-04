<template>
  <main>
    <b-container fluid>
      <b-container>
        <b-row align-v="center">
          <b-col lg="4" md="4" sm="12" xs="12" class="test">One of three columns</b-col>
          <b-col lg="4" md="4" sm="12" xs="12" class="test">One of three columns</b-col>
          <b-col lg="4" md="4" sm="12" xs="12" class="test">One of three columns</b-col>
        </b-row>
      </b-container>
    </b-container>
  </main>
</template>
<script>



export default {
  layout: 'navbar',
  head () {
    return {
      title: 'DataMHSC'
    }
  },
  components:{
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
.test{
  background-color: red;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
