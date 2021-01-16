<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <div class="d-flex align-center">
        Todo App
      </div>
    </v-app-bar>

    <v-main>
      <Todos />
    </v-main>
  </v-app>
</template>

<script>
import Todos from './components/Todos';

export default {
  name: 'App',
  components: {
    Todos,
  },

  data: () => ({
    //
  }),
};
</script>
