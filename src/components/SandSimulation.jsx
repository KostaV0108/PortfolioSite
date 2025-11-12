import React, { useRef, useEffect, useState, useCallback } from 'react'

const SandSimulation = ({ isOpen, onClose }) => {
  const canvasRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [sandColor, setSandColor] = useState('#f4a460')
  const animationFrameRef = useRef(null)

  const GRID_WIDTH = 180
  const GRID_HEIGHT = 120
  const CELL_SIZE = 4

  // Map colors to numbers for storage
  const colorMap = {
    '#f4a460': 1, // Sand
    '#8B4513': 2, // Brown
    '#FFD700': 3, // Gold
    '#FF6347': 4, // Red
    '#4169E1': 5  // Blue
  }

  // Reverse map: number to color
  const numberToColor = {
    1: '#f4a460',
    2: '#8B4513',
    3: '#FFD700',
    4: '#FF6347',
    5: '#4169E1'
  }

  const gridRef = useRef(Array(GRID_HEIGHT).fill(null).map(() => Array(GRID_WIDTH).fill(0)))
  const nextGridRef = useRef(Array(GRID_HEIGHT).fill(null).map(() => Array(GRID_WIDTH).fill(0)))

  const getColor = (value) => {
    if (value === 0) return '#0a0a0a'
    return numberToColor[value] || '#f4a460'
  }

  const updateSand = useCallback(() => {
    const grid = gridRef.current
    const nextGrid = nextGridRef.current

    // Copy current grid to next grid
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        nextGrid[y][x] = grid[y][x]
      }
    }

    // Update sand physics (bottom to top for proper falling)
    for (let y = GRID_HEIGHT - 2; y >= 0; y--) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        if (grid[y][x] > 0) {
          // Check if can fall down
          if (y + 1 < GRID_HEIGHT && grid[y + 1][x] === 0) {
            nextGrid[y + 1][x] = grid[y][x]
            nextGrid[y][x] = 0
          }
          // Check if can fall diagonally left
          else if (y + 1 < GRID_HEIGHT && x - 1 >= 0 && grid[y + 1][x - 1] === 0) {
            nextGrid[y + 1][x - 1] = grid[y][x]
            nextGrid[y][x] = 0
          }
          // Check if can fall diagonally right
          else if (y + 1 < GRID_HEIGHT && x + 1 < GRID_WIDTH && grid[y + 1][x + 1] === 0) {
            nextGrid[y + 1][x + 1] = grid[y][x]
            nextGrid[y][x] = 0
          }
        }
      }
    }

    // Swap grids
    const temp = gridRef.current
    gridRef.current = nextGridRef.current
    nextGridRef.current = temp
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const grid = gridRef.current
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        if (grid[y][x] > 0) {
          ctx.fillStyle = getColor(grid[y][x])
          ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
        }
      }
    }
  }, [])

  const getGridPos = (e) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: -1, y: -1 }

    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((e.clientX - rect.left) / CELL_SIZE)
    const y = Math.floor((e.clientY - rect.top) / CELL_SIZE)
    return { x, y }
  }

  const addSand = (e) => {
    const { x, y } = getGridPos(e)
    if (x >= 0 && x < GRID_WIDTH && y >= 0 && y < GRID_HEIGHT) {
      const colorNumber = colorMap[sandColor] || 1
      // Add sand in a small radius
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          const nx = x + dx
          const ny = y + dy
          if (nx >= 0 && nx < GRID_WIDTH && ny >= 0 && ny < GRID_HEIGHT) {
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < 2 && Math.random() > 0.3) {
              gridRef.current[ny][nx] = colorNumber
            }
          }
        }
      }
    }
  }

  const handleMouseDown = (e) => {
    setIsDrawing(true)
    addSand(e)
  }

  const handleMouseMove = (e) => {
    if (isDrawing) {
      addSand(e)
    }
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  const clearCanvas = () => {
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        gridRef.current[y][x] = 0
      }
    }
  }

  useEffect(() => {
    if (!isOpen) return

    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = GRID_WIDTH * CELL_SIZE
    canvas.height = GRID_HEIGHT * CELL_SIZE

    const animate = () => {
      updateSand()
      draw()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isOpen, updateSand, draw])

  if (!isOpen) return null

  return (
    <div className="sand-modal-overlay" onClick={onClose}>
      <div className="sand-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="sand-modal-header">
          <h2>Sand Falling Simulation</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="sand-controls">
          <button onClick={clearCanvas} className="control-button">Clear</button>
          <div className="color-picker">
            <span>Color:</span>
            <button 
              className={`color-btn ${sandColor === '#f4a460' ? 'active' : ''}`}
              onClick={() => setSandColor('#f4a460')}
              style={{ backgroundColor: '#f4a460' }}
            ></button>
            <button 
              className={`color-btn ${sandColor === '#8B4513' ? 'active' : ''}`}
              onClick={() => setSandColor('#8B4513')}
              style={{ backgroundColor: '#8B4513' }}
            ></button>
            <button 
              className={`color-btn ${sandColor === '#FFD700' ? 'active' : ''}`}
              onClick={() => setSandColor('#FFD700')}
              style={{ backgroundColor: '#FFD700' }}
            ></button>
            <button 
              className={`color-btn ${sandColor === '#FF6347' ? 'active' : ''}`}
              onClick={() => setSandColor('#FF6347')}
              style={{ backgroundColor: '#FF6347' }}
            ></button>
            <button 
              className={`color-btn ${sandColor === '#4169E1' ? 'active' : ''}`}
              onClick={() => setSandColor('#4169E1')}
              style={{ backgroundColor: '#4169E1' }}
            ></button>
          </div>
        </div>
        <canvas
          ref={canvasRef}
          className="sand-canvas"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
        <p className="sand-instructions">Click and drag to add sand particles!</p>
      </div>
    </div>
  )
}

export default SandSimulation
