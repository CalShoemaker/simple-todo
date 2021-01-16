<template>
    <v-list-item-content>
        <v-row>
            <v-col cols="1">
                <v-checkbox class="shrink ma-0 pa-0" :value="todo.isComplete" />
            </v-col>
            <v-col class="text-left">
                {{ todo.description }} 
            </v-col>
            <v-col>
            </v-col>
            <v-col class="text-right">
                {{ todo.dueDate }}
            </v-col>
        </v-row> 
    </v-list-item-content>          
</template>
<script>
export default {
    name: 'Todo',
    data() {
        return {}
    },
    props: {
        todo: Object
    }
}
</script>