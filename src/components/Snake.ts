export default class Snake {
    el: HTMLElement
    head: HTMLElement
    body: HTMLCollection
    crash: boolean
    constructor() {
        this.el = document.getElementById('snake')!
        this.head = document.querySelector('#snake > div') as HTMLElement
        this.body = this.el.getElementsByTagName('div')
        this.crash = false
    }
    get X() {
        return this.head.offsetLeft
    }
    set X(value: number) {
        if (this.X === value) return
        if (value < 0 || value > 290) {
            this.crash = true
        } else {
            if (this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value) {
                if (value > this.X) {
                    value = this.X - 10
                } else {
                    value = this.X + 10
                }
            }
            this.bodyMove()
            this.head.style.left = value + 'px'
            this.checkcrash()
        }
    }
    get Y() {
        return this.head.offsetTop
    }
    set Y(value: number) {
        if (this.Y === value) return
        if (value < 0 || value > 290) {
            this.crash = true
        } else {
            if (this.body[1] && (this.body[1] as HTMLElement).offsetTop === value) {
                if (value > this.Y) {
                    value = this.Y - 10
                } else {
                    value = this.Y + 10
                }
            }
            this.bodyMove()
            this.head.style.top = value + 'px'
            this.checkcrash()
        }
    }
    grow() {
        this.el.insertAdjacentHTML('beforeend', '<div></div>')
    }
    bodyMove() {
        for (let i = this.body.length - 1; i > 0; i--) {
            let x = (this.body[i - 1] as HTMLElement).offsetLeft
            let y = (this.body[i - 1] as HTMLElement).offsetTop;
            (this.body[i] as HTMLElement).style.left = x + 'px';
            (this.body[i] as HTMLElement).style.top = y + 'px'
        }
    }
    checkcrash() {
        for (let i = 1; i < this.body.length; i++) {
            let bd = this.body[i] as HTMLElement
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                this.crash = true
            }
        }
    }
}