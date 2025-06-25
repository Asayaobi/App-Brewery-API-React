const buttonColors = ["red", "blue", "green", "yellow"]
const gamePattern = []
const userClickedPattern = []

const nextSequence = () => {
    //get new color
    const randomNum = Math.floor(Math.random() * 4)
    const randomColor = buttonColors[randomNum]
    gamePattern.push(randomColor)
    //add animation to button
    $(`#${randomColor}`).fadeOut(100).fadeIn(100)
    //add sound
    const sound = new Audio(`sounds/${randomColor}.mp3`)
    sound.play()
}
nextSequence()

//when user chooses color
$('.btn').click(function(e){
    const userColor = e.target.id
    userClickedPattern.push(userColor)
    console.log(userClickedPattern)
})

