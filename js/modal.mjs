export class Modal {
    modalElement
    overlayElement
    nameElement
    lastNameElement
    ageElement
    submitElement
    closeElement
    modalMode = 0 //0 - добавление, 1 - редактирование
    triggerEelement
    onUpdate
    name = ''
    id = 0
    onLiisten
    lastName = ''
    age = 0
    
    constructor(modalElement,triggerEelement,overlayElement,onLiisten,onUpdate) {
        
        this.modalElement = modalElement
        this.onUpdate = onUpdate
        this.nameElement = modalElement.querySelector('#name')
        this.lastNameElement = modalElement.querySelector('#last-name')
        this.ageElement = modalElement.querySelector('#age')
        this.overlayElement = overlayElement
        this.submitElement = modalElement.querySelector('#submit')
        this.closeElement = modalElement.querySelector('#close')
        this.triggerEelement = triggerEelement 
        this.onLiisten = onLiisten
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.changeAge = this.changeAge.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeName = this.changeName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        
        this.triggerEelement.addEventListener('click',() => {
            this.openModal(0)
        })
        this.closeElement.addEventListener('click',this.closeModal)
        this.nameElement.addEventListener('input',this.changeName)
        this.lastNameElement.addEventListener('input',this.changeLastName)
        this.ageElement.addEventListener('input',this.changeAge)
        this.submitElement.addEventListener('click',this.onSubmit)
    }
    
    openModal(mode) {
        this.modalMode = mode
        this.overlayElement.style.display = "flex"
        this.submitElement.textContent = this.modalMode ? "Изменить" : "Создать" 
    }
    closeModal() {
        this.overlayElement.style.display = "none"
        this.name = ''
        this.lastName = ''
        this.age = 0
        this.id = 0
        this.nameElement.value = ''
        this.lastNameElement.value = ''
        this.ageElement.value = ''
        
    }
    setValue(name,lastName,age,id) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.lastNameElement.value = lastName
        this.ageElement.value = age
        this.nameElement.value = name
        this.id = id
    }
    changeName(){
        this.name = this.nameElement.value
    }
    changeLastName(){
        this.lastName = this.lastNameElement.value
    }
    changeAge(){
        this.age = this.ageElement.value
    }
    onSubmit(){
        if(this.modalMode) {
            this.onUpdate(this.name, this.lastName, this.age,this.id)
        } else {
            this.onLiisten(this.name,this.lastName,this.age)
        }
        this.closeModal()
    }
}