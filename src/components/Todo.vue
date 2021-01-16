<template>
    <v-list-item-content :class="[ isExpired(todo) ? 'todo--pastdue' :'',  todo.isComplete ? 'todo--complete':'']">
        <v-row>
            <v-col cols="1">
                <v-checkbox class="shrink ma-0 pa-0"  v-model="todo.isComplete" />
            </v-col>
            <v-col class="text-left">
                {{ todo.description }} 
            </v-col>
            <v-col>
            </v-col>
            <v-col class="text-right">
                {{ formatDate(todo.dueDate) }}
            </v-col>
        </v-row> 
    </v-list-item-content>          
</template>
<script>
export default {
    name: 'Todo',
    data:() => ({ }),
    props: {
        todo: Object
    },
    methods: {
        formatDate(date) {
            let due = new Date(date);
            return due.toLocaleString().split(',')[0];
        },
        isExpired(todo) {
            let due = new Date(todo.dueDate);
            let today = new Date(Date.now());

            return today > due;
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
</style>