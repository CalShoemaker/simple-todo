
import Api from '../../api/';
const API = new Api();

const state = () =>({
    todos: []
})

const getters = {
    todos: (state) => { return mutations.filter(state.todos); }
}

const actions = {
    async updateTodo({ commit }, todo) {
        await API.updateTodo(todo).catch(() => {
            commit('revertTodo', todo);
        });
    },
    async getTodos({commit}){
        let todos = await API.getTodos();
        commit('setTodos', todos);
    }
}

const mutations = {
    setTodos(state, todos){
        state.todos = todos;
    },
    revertTodo(state, item) {
        let todos = state.todos;
        let index = todos.findIndex(todo => todo.id === item.id);
        todos[index].isComplete = !item.isComplete;
    },
    filter(todos) {
        if(todos.length > 0) {
            todos.sort((a, b) =>{ 
                if(a.dueDate === b.dueDate) {
                    return 0
                }
                else if(a.dueDate === null) {
                    return 1
                }
                else if(b.dueDate === null) {
                    return -1
                }
                else {
                    return new Date(a.dueDate) - new Date(b.dueDate)
                }
            }); 
            todos.sort((a, b) => a.isComplete - b.isComplete); // Overdue items at top
        } 
        return todos; // Completed naturally fall to the bottom
    }
}

export default {
    namespaced: true,
    state, 
    getters,
    actions,
    mutations
}