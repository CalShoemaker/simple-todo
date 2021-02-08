<template>
    <v-list-item-content v-if="todo" :class="[ isExpired(todo) ? 'todo--pastdue' :'',  todo.isComplete ? 'todo--complete':'']">
        <v-row class="pl-2 pr-2">
            <v-col cols="1">
                <v-checkbox class="shrink ma-0 pa-0" @change="updateTodo(todo)" v-model="todo.isComplete" />
            </v-col>
            <v-col class="text-left">
                {{ todo.description }} 
            </v-col>
            <v-col>
            </v-col>
            <v-col class="text-right">
                <span class="todo--date">{{ formatDate(todo.dueDate) }}</span>
            </v-col>
        </v-row> 
    </v-list-item-content>          
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'Todo',
    data:() => ({ }),
    props: {
        todo: Object
    },
    methods: {
        ...mapActions('todos',{
            updateTodo: 'updateTodo'
        }),
        formatDate(date) {
            if(date) {
                let due = new Date(date);
                let dueDate = due;
                let padded = ('0' + dueDate.getMonth()).slice(-2) + '/' + ('0' + (dueDate.getDate()+1)).slice(-2) + '/' + dueDate.getFullYear();
                return padded;
            }
        },
        isExpired(todo) {
            let due = new Date(todo.dueDate);
            let today = new Date(Date.now());
            return todo.dueDate ? today > due : false;
        }
    }
}
</script>
<style>
    .todo--pastdue {
        background: lightcoral;
    }

    .todo--complete {
        background: lightgreen;
    }
    .todo--date {
        border: 1px solid #d1d1d1;
        display: inline-block;
        padding: 2px;
    }
</style>