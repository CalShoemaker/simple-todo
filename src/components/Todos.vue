<template>
    <v-container>
        <v-card class="mx-auto mt-5" max-width="420" tile>
            <v-list>
                <template v-for="(item, index) in todos">
                    <v-list-item class="ma-0" :key="index">
                        <Todo :todo="item" />
                    </v-list-item>
                    <v-divider v-if="index < todos.length - 1" :key="index" />
                </template>
            </v-list>
        </v-card>
        
    </v-container>
</template>
<script>
import Todo from './Todo';

export default {
    name: 'Todos',
    data: ()=> ({
        todos:[{
            "id": "1",
            "description": "File 2020 Taxes",
            "isComplete": true,
            "dueDate": "2020-03-10T17:50:44.673Z"
        },{
            "id": "2",
            "description": "Fold laundry",
            "isComplete": true,
            "dueDate": null
        },{
            "id": "3",
            "description": "Call Mom",
            "isComplete": false,
            "dueDate": "2020-06-26T19:00:00.000Z"
        },{
            "id": "4",
            "description": "Walk the dog",
            "isComplete": false,
            "dueDate": null
        },{
            "id": "5",
            "description": "Feed the cat",
            "isComplete": false,
            "dueDate": "2020-06-24T15:45:00.000Z"
        },{
            "id": "6",
            "description": "Run LA marathon",
            "isComplete": false,
            "dueDate": "2021-03-21T13:30:00.000Z"
        }]
    }),
    components: {
        Todo
    }
}
</script>