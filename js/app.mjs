import { Modal } from "./modal.mjs"
import { RenderTable } from "./render-table.mjs"
import { TableApi } from "./tableApi.mjs"

export class App {
    modal
    table
    constructor(AppElements) {
        this.createUser = this.createUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.updateUser= this.updateUser.bind(this)
        this.editModal = this.editModal.bind(this)
        this.renderTable = this.renderTable.bind(this)
        
        this.table = new RenderTable(AppElements.tableElement,
            this.deleteUser,
            this.editModal
        )
        this.modal = new Modal(AppElements.modalElement,
            AppElements.trigger,
            AppElements.overlayElement,
            this.createUser,
            this.updateUser
        )

        this.renderTable()
    }
    async renderTable() {
        try {
            const res = await TableApi.getUsers()
            const users = await res.json()
            this.table.renderContent(users)
        } catch (e) {
            this.table.clearContent()
            console.log(e)
        }
    }

    createUser(firstName, lastName, age) {
        if (firstName && lastName && age) {
            const data = {
                firstName,
                lastName,
                age
            }
            TableApi.createUser(data)
                .then(() => {
                    console.log(this)
                    this.renderTable()
                })
                .catch((e) => console.log(e))
        }

    }
    deleteUser(id) {
        TableApi.deleteUser(id)
            .then(() => {
                this.renderTable()
            })
            .catch((e) => console.log(e))

    }
    editModal(user, id) {
        this.modal.openModal(1)
        this.modal.setValue(user.firstName, user.lastName, user.age, id)
    }
    updateUser(firstName, lastName, age, id) {
        if (firstName && lastName && age && id) {
            const data = {
                firstName,
                lastName,
                age,
                id
            }
            TableApi.updateUser(data)
                .then(() => {
                    this.renderTable()
                })
                .catch((e) => console.log(e))
        }
    }
}