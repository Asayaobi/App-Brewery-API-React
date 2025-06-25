const buttonColors = ["red", "blue", "green", "yellow"]
const gamePattern = []
const userClickedPattern = []

const nextSequence = () => {
    //get new color
    const randomNum = Math.floor(Math.random() * 4)
    const randomColor = buttonColors[randomNum]
    gamePattern.push(randomColor)
    //add animation to button
    addAnimation(randomColor)
    //add sound
    playSound(randomColor)
}

//when user chooses color
$('.btn').click(function(){
    const userColor = $(this).attr("id")
    userClickedPattern.push(userColor)
    console.log(userClickedPattern)
    //add animation to button
    addAnimation(userColor)
    //add sound
    playSound(userColor)
})

//play sound
const playSound = (color) => {
    const sound = new Audio(`sounds/${color}.mp3`)
    sound.play()
}

//add animation
const addAnimation = (color) => $(`#${color}`).fadeOut(100).fadeIn(100)