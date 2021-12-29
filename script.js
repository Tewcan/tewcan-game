// Canvas Properties
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500

let score = 0
let gameFrame = 0
ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx.font = '50px Georgia'

// Mouse Functionality
let canvasPosition = canvas.getBoundingClientRect()
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false
}
canvas.addEventListener('mousedown', (event) => {
  mouse.click = true
  mouse.x = event.x - canvasPosition.left
  mouse.y = event.y - canvasPosition.top
})

canvas.addEventListener('mouseup', () => {
  mouse.click = false
})

// Player
const playerImg = new Image()
playerImg.src = 'idle.png'

class Player {
  constructor() {
    this.x = canvas.width
    this.y = canvas.height / 2
    this.radius = 20
    this.frameX = 0
    this.frameY = 0
    this.frame = 0
    this.spriteWidth = 50
    this.spriteHeight = 30
  }

  update() {
    const dx = this.x - mouse.x
    const dy = this.y - mouse.y
    if (mouse.x != this.x) {
      this.x -= dx / 30
    }
    if (mouse.y != this.y) {
      this.y -= dy / 30
    }
  }

  draw() {
    if (mouse.click) {
      ctx.lineWidth = 0.2
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(mouse.x, mouse.y)
      ctx.strokeStyle = 'white'
      ctx.stroke()
    }
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.fillRect(this.x, this.y, this.radius, 10)

    ctx.drawImage(
      playerImg,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.spriteWidth / 4,
      this.spriteHeight / 4
    )
    // console.log(
    //   playerImg,
    //   this.frameX * this.spriteWidth,
    //   this.frameY * this.spriteHeight,
    //   this.spriteWidth,
    //   this.spriteHeight,
    //   this.x,
    //   this.y,
    //   this.spriteWidth / 4,
    //   this.spriteHeight / 4
    // )
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
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  player.draw()
  monster.draw()
  ctx.font = '30px Georgia'
  ctx.fillStyle = 'black'
  ctx.fillText('TewCan Game', 300, 50)

  requestAnimationFrame(animate)
}

animate()
