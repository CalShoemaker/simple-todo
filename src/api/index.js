export default class Api {
    constructor() {
        this.todos = [];
        this.url = 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io'
        this.apiKey = 'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c';
        this.headers = { "Content-Type": "application/json", "X-Api-Key": this.apiKey };
    }
    async getTodos() {
        const headers = this.headers;
        const response = await fetch(this.url + "/get", { headers });
        const data = await response.json();
        return data;
    }
    async updateTodo(todo) {
        const method = "PATCH";
        const headers = this.headers;
        const body = JSON.stringify({ "isComplete": todo.isComplete });
        const response = await fetch(this.url + "/patch/" + todo.id , { headers, method, body });
        const data = await response.json();
        return data;
    }
}