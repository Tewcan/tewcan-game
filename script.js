// Canvas Properties
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500

let score = 0
let gameFrame = 0

// Keyboard Functionality

// Player
const playerImg = new Image()
playerImg.src = 'assets/sprites/walk-animation.png'

class Player {
  constructor() {
    this.x = canvas.width
    this.y = canvas.height / 2
    this.radius = 20
    this.frameX = 0
    this.frameY = 0
    this.frame = 0
    this.spriteWidth = 50
    this.spriteHeight = 65
  }

  draw() {
    ctx.drawImage(
      playerImg,
      this.spriteWidth * this.frameX,
      this.spriteHeight * this.frameY,
      this.spriteWidth,
      this.spriteHeight,
      this.x - 15,
      this.y - 30,
      this.spriteWidth,
      this.spriteHeight
    )
  }
}

class Monster {
  constructor() {
    this.x = 50
    this.y = 50
    this.radius = 30
  }

  draw() {
    ctx.fillStyle = 'green'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.fillRect(this.x, this.y, this.radius, 10)
  }
}

const player = new Player()
const monster = new Monster()

// Animation Loop
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'rgb(30,30,30)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  // player.update()
  player.draw()
  monster.draw()
  ctx.font = '30px Georgia'
  ctx.fillStyle = 'black'
  ctx.fillText('TewCan Game', 300, 50)

  requestAnimationFrame(animate)
}

animate()
