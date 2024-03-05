import { App } from './app.mjs'

const trigger = document.querySelector('#add')
const modalElement = document.querySelector('#modal')
const overlayElement = document.querySelector('#overlay')
const tableElement = document.querySelector("#table")

const appOptions = {
    trigger,
    modalElement,
    overlayElement,
    tableElement
}
new App(appOptions)
