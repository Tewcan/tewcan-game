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
  mouse.x = event.x
  mouse.y = event.y
  console.log(canvasPosition)
})
