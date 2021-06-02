export default class Panel {
    score: number
    level: number
    maxLevel: number
    upScore: number
    scoreEl: HTMLElement
    levelEl: HTMLElement
    constructor() {
        this.score = 0
        this.level = 1
        this.upScore = 10
        this.maxLevel = 5
        this.scoreEl = document.getElementById('score')!
        this.levelEl = document.getElementById('level')!
    }
    get S() {
        return this.score
    }
    set S(value: number) {
        this.score = value
    }
    get L() {
        return this.level
    }
    set L(value: number) {
        this.level = value
    }
    addScore() {
        this.scoreEl.innerHTML = ++this.score + ''
        if (this.score % this.upScore === 0) {
            this.addLevel()
        }
    }
    addLevel() {
        if (this.level < this.maxLevel) {
            this.levelEl.innerHTML = ++this.level + ''
        }
    }
}
