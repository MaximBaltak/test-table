export class RenderTable {
    tableElement
     constructor(tableElement,onRemoveRow,onUpdateRow){
        this.tableElement = tableElement
        this.onRemoveRow = onRemoveRow
        this.onUpdateRow = onUpdateRow
    }
    
    renderCell(value){
        const cell = document.createElement('td')
        cell.textContent = value? value : '-'
        return cell
    }
    renderCellButton(id){
        const cell = document.createElement('td')
        cell.textContent = 'Удалить'
        cell.classList.add('remove')
        cell.addEventListener('click',(e) => {
            e.stopPropagation()
            this.onDeleteRow(id)
        })
        return cell
    }
    renderRow(user){
        const row = document.createElement('tr')
         row.id = user.id
         delete user.id
        Object.keys(user).forEach(key => {
            row.appendChild(this.renderCell(user[key]))
        })
        row.appendChild(this.renderCellButton(row.id))
        row.addEventListener('click',() => {
            this.onUpdateRow(user,row.id)
        })
        return row
    }

    renderContent(users){
        this.clearContent()
        const content = this.tableElement.querySelector('tbody')
        users.forEach(user => {
            content.appendChild(this.renderRow(user))
        })    
    }
    
    clearContent(){
        const content = this.tableElement.querySelector('tbody')
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }
    onDeleteRow(id){
        this.onRemoveRow(id)
    }
    onUpdate(user){
        this.onUpdateRow(user)
    }
}