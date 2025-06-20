//create random number
const diceNumber = () => Math.ceil(Math.random() * 6)

const user1 = diceNumber()
const user2 = diceNumber()

document.querySelector('.img1').setAttribute('src', 'images/dice'+ user1 +'.png')
document.querySelector('.img2').setAttribute('src', 'images/dice'+ user2 +'.png')