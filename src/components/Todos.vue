<template>
    <v-container>
        <v-card class="mx-auto mt-5" max-width="420" tile>
            <v-list>
                <template v-for="(item, index) in todos">
                    <v-list-item class="ma-0" :key="index">
                        <Todo :todo="item" />
                    </v-list-item>
                    <v-divider v-if="index < todos.length - 1" :key="'divider-'+index" />
                </template>
            </v-list>
        </v-card>
    </v-container>
</template>
<script>
import { mapGetters} from 'vuex'
import Todo from './Todo';

export default {
    name: 'Todos',
    data: ()=> ({ }),
    computed: {
        ...mapGetters('todos', {
            todos: 'todos'
        })
    },
    components: {
        Todo
    }
}
</script>