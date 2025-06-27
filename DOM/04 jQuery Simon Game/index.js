const buttonColors = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userPattern = []
let level = 0

const nextSequence = () => {
    //clear user pattern
    userPattern = []
    //get new color
    const randomNum = Math.floor(Math.random() * 4)
    const randomColor = buttonColors[randomNum]
    gamePattern.push(randomColor)
    //add animation to button
    addAnimation(randomColor)
    //add sound
    playSound(randomColor)
    //add level
    level++
    $('#level-title').text(`Level ${level}`)
}

//when user chooses color
$('.btn').click(function(){
    const userColor = $(this).attr("id")
    userPattern.push(userColor)
    //add animation to button
    addAnimation(userColor)
    //add sound
    playSound(userColor)
    //check answer
    checkAnswer(userPattern.length-1)
})

//play sound
const playSound = (color) => {
    const sound = new Audio(`sounds/${color}.mp3`)
    sound.play()
}

//add animation
const addAnimation = (color) => $(`#${color}`).fadeOut(100).fadeIn(100)

//start the game
$(document).on('keydown', function(){
    //start sequence
    nextSequence()
})

//check the answer
const checkAnswer = (currentLevel) => {
    if (userPattern[currentLevel] === gamePattern[currentLevel]){
        // console.log('correct')
        //if user finish all of the pattern
    if (userPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence()
            // console.log(gamePattern)
        }, 1000)
    }
    } else {
        // console.log('wrong')
        playSound('wrong')
        $('body').addClass('game-over')
        $('#level-title').text('Game Over, Press Any Key to Restart')
        setTimeout(function(){
            $('body').removeClass('game-over')
        },1500)
        restart()
    }
}

//restart function to reset the value
const restart = () => {
    level = 0
    gamePattern = []
    userPattern = []
}