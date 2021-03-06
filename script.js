// Canvas Properties
const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500

// Keyboard Functionality
document.addEventListener('keydown', (e) => {
  if (player.attacking == true) return
  player.frameX > 3 ? player.frameX = 0 : player.frameX += 1

  switch (e.key) {
    case 'ArrowUp':
      player.frameY = 0
      if (player.y > 0) player.y -= 30
      break
    case 'ArrowRight':
      player.frameY = 1
      if (player.x + player.spriteWidth < canvas.width) player.x += 30
      break
    case 'ArrowDown':
      player.frameY = 2
      if (player.y + player.spriteHeight < canvas.height) player.y += 30
      break
    case 'ArrowLeft':
      player.frameY = 3
      if (player.x > 0) player.x -= 30
      break
    case 'a':
      player.attacking = true
      player.frameX = 0
      break
  }
})

// Player
class Player {
  constructor() {
    this.x = 200
    this.y = 200
    this.radius = 25
    this.frameX = 0
    this.frameY = 0
    this.spriteWidth = 72
    this.spriteHeight = 72
    this.frameCount = 0
    this.attacking = false
  }

  draw() {
    if (this.attacking == false) {
      ctx.drawImage(
        playerImg,
        this.spriteWidth * this.frameX,
        this.spriteHeight * this.frameY,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        150,
        150
      )
    } else {
      ctx.drawImage(
        attackImg,
        this.spriteWidth * this.frameX,
        this.spriteHeight * this.frameY,
        this.spriteWidth,
        this.spriteHeight,
        this.x,
        this.y,
        150,
        150
      )
      this.frameCount += 1
      if (this.frameCount % 5 == 0) this.frameX += 1
      if (this.frameX == 4) {
        this.frameX = 0
        this.attacking = false

      }

    }

  }
}

class Monster {
  constructor() {
    this.x = 150
    this.y = 150
    this.radius = 25
    this.spriteWidth = 70
    this.spriteHeight = 70
    this.frameX = 0
    this.frameCount = 0
  }

  draw() {
    ctx.drawImage(
      monsterImg,
      32 * this.frameX,
      0,
      32,
      50,
      this.x,
      this.y,
      this.spriteWidth,
      this.spriteHeight
    )

    this.frameCount += 1
    if (this.frameCount % 10 == 0) this.frameX += 1
    if (this.frameX == 4) this.frameX = 0
  }
}

const playerImg = new Image()
playerImg.src = 'assets/sprites/walk.png'
const attackImg = new Image()
attackImg.src = 'assets/sprites/attack.png'
const monsterImg = new Image()
monsterImg.src = 'assets/sprites/demon.png'

const player = new Player()
const monster = new Monster()

// Animation Loop
const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'rgb(50, 50, 50)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = 'rgb(10, 10, 10)'
  ctx.fillRect(0, 0, canvas.width, 75)
  ctx.font = '30px Georgia'
  ctx.fillStyle = 'white'
  ctx.fillText('TewCan Game', 300, 50)
  monster.draw()
  player.draw()

  requestAnimationFrame(animate)
}

animate()
