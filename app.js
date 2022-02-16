const depositBtn = document.getElementById('deposit-btn')
const buyBtc = document.getElementById('buy-btc')
const buyEth = document.getElementById('buy-eth')
const balanceField = document.getElementById('balance-field')
const btcField = document.getElementById('btc-field')
const ethField = document.getElementById('eth-field')

// Get value from Input box
function getInputValue(boxID) {
  let inputBox = document.getElementById(boxID)
  let inputAmount = parseFloat(inputBox.value)
  if (isNaN(inputAmount) || inputAmount < 0) {
    inputBox.value = ''
    return alert('Please input valid amount of money in number format')
  }
  inputBox.value = ''
  return inputAmount
}

// Update Balance
depositBtn.addEventListener('click', function (event) {
  event.preventDefault()
  let availableAmount = parseFloat(balanceField.innerText)
  let inputAmount = getInputValue('deposit-box')
  if (inputAmount > 0) {
    balanceField.innerText = inputAmount + availableAmount
  }
})

// depositBtn.addEventListener('click', function (event) {
//   event.preventDefault()
//   let depositBox = document.getElementById('deposit-box')
//   let availableBalance = parseFloat(balanceField.innerText)
//   let inputAmount = parseFloat(depositBox.value)
//   if (isNaN(inputAmount) || inputAmount < 0) {
//     depositBox.value = ''
//     return alert('Please input valid amount of money in number format')
//   }
//   balanceField.innerText = inputAmount + availableBalance
//   depositBox.value = ''
// })

// Buy Coins
buyBtc.addEventListener('click', function () {
  updatePortfolio('btc-box')
})

buyEth.addEventListener('click', function () {
  updatePortfolio('eth-box')
})

// Update portfolio
function updatePortfolio(boxId) {
  let availableAmount = parseFloat(balanceField.innerText)
  let coinAmount = getInputValue(boxId)

  if (coinAmount > 0) {
    let totalExpense
    if (boxId == 'btc-box') {
      totalExpense = 10 * coinAmount
      if (totalExpense > availableAmount) {
        return alert('Not enough balance')
      }
      btcField.innerText = coinAmount
    } else if (boxId == 'eth-box') {
      totalExpense = 5 * coinAmount
      if (totalExpense > availableAmount) {
        return alert('Not enough balance')
      }
      ethField.innerText = coinAmount
    }
    balanceField.innerText = availableAmount - totalExpense
  }
}
