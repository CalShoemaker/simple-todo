<template>
    <v-container>
        <v-card class="mx-auto mt-5" max-width="420" tile>
            <v-list v-if="todos.length > 0">
                <template v-for="(item, index) in todos">
                    <v-list-item class="ma-0 pa-0" :key="item.id" >
                        <Todo :todo="item" />
                    </v-list-item>
                    <v-divider v-if="index < todos.length - 1" :key="'divider-'+index" />
                </template>
            </v-list>
            <div v-else>
                no items
            </div>
        </v-card>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Todo from './Todo';

export default {
    name: 'Todos',
    data: ()=> ({ }),
    computed: {
        ...mapGetters('todos', {
            todos: 'todos'
        })
    },
    async mounted(){
        await this.getTodos();
    },
    methods: {
        ...mapActions('todos',{
            getTodos: 'getTodos'
        })
    },
    components: {
        Todo
    }
}
</script>