const buttonColors = ["red", "blue", "green", "yellow"]
const gamePattern = []
let userClickedPattern = []
let level = 0

const nextSequence = () => {
    //clear user pattern
    userClickedPattern = []
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
    userClickedPattern.push(userColor)
    //add animation to button
    addAnimation(userColor)
    //add sound
    playSound(userColor)
    //check answer
    checkAnswer(userClickedPattern.length-1)
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
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log('correct')
        //if user finish all of the pattern
    if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
            nextSequence()
            console.log(gamePattern)
        }, 1000)
    }
    } else {
        console.log('wrong')
        playSound('wrong')
        $('body').addClass('game-over')
        $('#level-title').text('Game Over, Press Any Key to Restart')
        setTimeout(function(){
            $('body').removeClass('game-over')
        },2000)
    }
}