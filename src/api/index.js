export default class Api {
    constructor() {
        this.todos = [];
        this.apiKey = 'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c';
    }
    async getTodos() {
        const headers = { "Content-Type": "application/json", "X-Api-Key": this.apiKey };
        const response = await fetch("https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/get", { headers });
        const data = await response.json();
        return data;
    }
    async updateTodo(todo) {
        const method = "PATCH";
        const headers = { "Content-Type": "application/json", "X-Api-Key": this.apiKey };
        const body = JSON.stringify({ "isComplete": todo.isComplete });
        const response = await fetch("https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/patch/" + todo.id , { headers, method, body });
        const data = await response.json();
        return data;
    }
}