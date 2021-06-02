import Food from './Food'
import Panel from './Panel'
import Snake from './Snake'
import Over from './Over'

export default class Game {
    snake: Snake
    food: Food
    panel: Panel
    over: Over
    start: HTMLElement
    state: string
    direction: string
    timer: any
    live: boolean
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.panel = new Panel()
        this.over = new Over()
        this.start = document.getElementById('start')!
        this.state = this.start.innerText
        this.direction = 'Right'
        this.timer = null
        this.live = true
        this.init()
    }
    init() {
        this.start.addEventListener('click', this.stateCtrl)
    }
    stateCtrl = () => {
        if (this.state === 'START') {
            document.addEventListener('keydown', this.directionCtrl)
            this.live ? this.moveCtrl() : null
            this.start.innerText = 'STOP'
        } else {
            document.removeEventListener('keydown', this.directionCtrl)
            clearTimeout(this.timer)
            this.start.innerText = 'START'
        }
        this.state = this.start.innerText
    }
    directionCtrl = (event: KeyboardEvent) => {
        this.direction = event.key
        this.live ? this.moveCtrl() : null
    }
    moveCtrl() {
        clearTimeout(this.timer)
        let x = this.snake.X
        let y = this.snake.Y
        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                y -= 10
                break;
            case 'ArrowDown':
            case 'Down':
                y += 10
                break;
            case 'ArrowLeft':
            case 'Left':
                x -= 10
                break;
            case 'ArrowRight':
            case 'Right':
                x += 10
                break;
            default:
                break;
        }
        if (this.eatCheck(x, y)) {
            this.food.changePosition()
            this.panel.addScore()
            this.snake.grow()
        }
        if (!this.snake.crash) {
            this.snake.X = x
            this.snake.Y = y
        } else {

            this.gameCtrl()
        }
        this.live ? this.timer = setTimeout(() => this.moveCtrl(), 550 - this.panel.level * 100) : null
    }
    eatCheck(x: number, y: number) {
        return this.food.X === x && this.food.Y === y
    }
    gameCtrl() {
        clearTimeout(this.timer)
        this.live = false
        this.over.show(this.panel.S)
        this.panel.S = 0
        this.panel.L = 1
        this.panel.scoreEl.innerHTML = this.panel.S + ''
        this.panel.levelEl.innerHTML = this.panel.L + ''
        this.state = 'START'
        this.start.innerText = this.state
        this.start.removeEventListener('click', this.stateCtrl)
    }
}