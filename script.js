// Canvas Properties
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500

let score = 0
let gameFrame = 0

// Keyboard Functionality
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowUp':
      console.log('up key')
      player.frameY = 0
      break
    case 'ArrowRight':
      console.log('right key')
      player.frameY = 1
      break
    case 'ArrowDown':
      console.log('down key')
      player.frameY = 2
      break
    case 'ArrowLeft':
      console.log('left key')
      player.frameY = 3
      break

  }
})

// Player
const playerImg = new Image()
playerImg.src = 'assets/sprites/walk-animation.png'

class Player {
  constructor() {
    this.x = 200
    this.y = 200
    this.radius = 20
    this.frameX = 0
    this.frameY = 0
    this.gameFrame = 0
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
      this.x,
      this.y,
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
