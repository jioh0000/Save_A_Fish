const fishTank = document.getElementById("fish-tank")
const fishColors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]
const fishSizes = [30, 40, 50]

function createFishSVG(color, size) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("width", size)
  svg.setAttribute("height", size)
  svg.setAttribute("viewBox", "0 0 100 100")

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path.setAttribute("d", "M10,50 Q30,35 50,50 Q70,65 90,50 L75,70 Q50,85 25,70 Z")
  path.setAttribute("fill", color)

  const eye = document.createElementNS("http://www.w3.org/2000/svg", "circle")
  eye.setAttribute("cx", "75")
  eye.setAttribute("cy", "45")
  eye.setAttribute("r", "5")
  eye.setAttribute("fill", "black")

  svg.appendChild(path)
  svg.appendChild(eye)
  return svg
}

function addFish(x, y) {
  const fish = document.createElement("div")
  fish.className = "fish"
  const color = fishColors[Math.floor(Math.random() * fishColors.length)]
  const size = fishSizes[Math.floor(Math.random() * fishSizes.length)]

  fish.appendChild(createFishSVG(color, size))
  fish.style.left = `${x}px`
  fish.style.top = `${y}px`

  fishTank.appendChild(fish)
  animateFish(fish)
}

function animateFish(fish) {
  const tankWidth = fishTank.clientWidth
  const tankHeight = fishTank.clientHeight

  function swim() {
    const x = Math.random() * (tankWidth - fish.clientWidth)
    const y = Math.random() * (tankHeight - fish.clientHeight)
    fish.style.transform = `translate(${x}px, ${y}px) scaleX(${Math.random() < 0.5 ? -1 : 1})`
    setTimeout(swim, Math.random() * 3000 + 2000)
  }

  swim()
}

fishTank.addEventListener("click", (event) => {
  const rect = fishTank.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  addFish(x, y)
})

// Add initial fish
for (let i = 0; i < 5; i++) {
  addFish(Math.random() * fishTank.clientWidth, Math.random() * fishTank.clientHeight)
}

