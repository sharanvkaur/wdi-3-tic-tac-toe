var grid = [null, null, null, null, null, null, null, null, null]
var player = 1

makeListeners()

function makeListeners () {
  grid.forEach(function (ele, index, arr) {
    $('#' + index).on('click', function () {
      if (playTurn(index) === true) {
        if (player === 1) {
          $(this).addClass('player1chosen')
          $(this).text('O')
        } else {
          $(this).addClass('player2chosen')
          $(this).text('X')
        }
        console.log(grid)
        console.log('winner is ' + whoWon())
      }
      setTimeout(winAlert, 500)
    })
  })
  $('.restart').on('click', restart)
}

function winAlert() {
  if (whoWon() === 1) {
    alert('Game over - Player 1 wins!')
  }
  if (whoWon() === 2) {
    alert('Game over - Player 2 wins!')
  }
  if (whoWon() === 3) {
    alert('Game over - It\'s a draw!')
  }
}

function playTurn (index) {
  if (grid[index] || isGameOver()) {
    return false
  } else {
    grid[index] = player
    if (player === 1) player = 2
    else player = 1
    return true
  }
}

function isGameOver () {
  if (whoWon() !== 0) {
    return true
  }
  return false
}

function whoWon () {
  if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
  if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
  if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
  if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
  if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
  if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
  if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
  if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
  if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
    grid[5] && grid[6] && grid[7] && grid[8]) return 3
  return 0
}

function restart () {
  grid = [null, null, null, null, null, null, null, null, null]
  player = 1
  $('.spots').removeClass('player1chosen')
  $('.spots').removeClass('player2chosen')
  $('.spots').text('.')
  console.log('=======')
}
