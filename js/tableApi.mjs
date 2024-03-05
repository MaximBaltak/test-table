export class TableApi {
    static async getUsers() {
        return fetch('http://localhost:5000/user')
    }
    static async createUser(data) {
        return fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
    }
    static async updateUser(data) {
        return fetch('http://localhost:5000/user/update', {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        })
    }
    static async deleteUser(id) {
        return fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE",
        })
    }
    
}