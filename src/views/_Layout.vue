<template>
  <v-app>
    <v-app-bar app color="primary" >

      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://vecino.villaallende.gov.ar/App_Themes/images/GESTION%20vertical%202.png" width="100" />
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer2 = !drawer2" style="margin-right: 2%" >
        <v-avatar>
          <v-img style="height: 55px; margin-top: 25px" alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down"
            contain min-width="100" src="https://randomuser.me/api/portraits/women/81.jpg" width="100" />
        </v-avatar>
      </v-app-bar-nav-icon>

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary  color="primary" dark shift >
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item :href="'/GestCementerio/'">
            <v-list-item-icon>
              <v-icon>mdi-tree</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cementerio Parque</v-list-item-title>
          </v-list-item>

          <v-list-item :href="'/'">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cuenta</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="drawer2" absolute temporary right>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Jane Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-main>
       
         <router-view />
       
    </v-main>
  </v-app>
</template>

<script>
import Login from "../views/Login.vue"
export default {
  name: 'App',
  components: { Login },
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>