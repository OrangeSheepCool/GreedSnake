export default class Food {
    el: HTMLElement
    randFix: number
    constructor() {
        this.el = document.getElementById('food')!
        this.randFix = Math.floor(document.getElementById('content')!.offsetHeight / 10) - 1
        this.changePosition()
    }
    get X() {
        return this.el.offsetLeft
    }
    get Y() {
        return this.el.offsetTop
    }
    changePosition() {
        const top = Math.floor(Math.random() * this.randFix) * 10
        const left = Math.floor(Math.random() * this.randFix) * 10
        this.el.style.left = top + 'px'
        this.el.style.top = left + 'px'
    }
}