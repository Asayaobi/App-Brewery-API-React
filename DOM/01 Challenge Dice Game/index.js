//create random number
const diceNumber = () => Math.ceil(Math.random() * 6)

const user1 = diceNumber()
const user2 = diceNumber()

//add dice images
document.querySelector('.img1').setAttribute('src', 'images/dice'+ user1 +'.png')
document.querySelector('.img2').setAttribute('src', 'images/dice'+ user2 +'.png')

//winner display
if (user1 === user2){
    document.querySelector('h1').innerHTML = 'Draw!'
} else if ( user1 > user2){
    document.querySelector('h1').innerHTML = 'Player 1 wins!'
} else {
    document.querySelector('h1').innerHTML = 'Player 2 wins!'
}