export default class Over {
    container: HTMLElement
    message: HTMLElement
    count: HTMLElement
    reset: HTMLElement
    constructor () {
        this.container = document.createElement('div')
        this.message = document.createElement('span')
        this.count = document.createElement('span')
        this.reset = document.createElement('span')
    }
    show(score: number) {
        this.container.setAttribute('id', 'over')
        this.message.appendChild(document.createTextNode('GAME OVER!'))
        this.count.appendChild(document.createTextNode(`SCORE : ${score}`))
        this.reset.appendChild(document.createTextNode('TRY AGAIN'))
        this.reset.addEventListener('click', this.newGame)
        this.container.appendChild(this.message)
        this.container.appendChild(this.count)
        this.container.appendChild(this.reset)
        document.getElementById('content')?.appendChild(this.container)
    }
    newGame = () => {
        window.location.reload()
    }
}