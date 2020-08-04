
  <template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="BleuCustom">
        <b-navbar-brand nuxt-link to="/">
          <img id="image" src="../assets/image/logo1.png" alt="Logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item nuxt-link to="/classement">Classement</b-nav-item>
            <b-nav-item nuxt-link to="/playerStats"   >Statistiques</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Mot clé"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" variant="outline-OrangeCustom" type="submit">Rechercher</b-button>
            </b-nav-form>


            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <nuxt/>
    </div>
  </template>


<script>
export default {
name: "navbar"
}
</script>

<style scoped>
#image{
  width: 30px;
  height: 30px;
}
</style>
