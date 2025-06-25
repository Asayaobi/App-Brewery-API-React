const buttonColors = ["red", "blue", "green", "yellow"]
const gamePattern = []

const nextSequence = () => {
    //get new color
    const randomNum = Math.ceil(Math.random() * 4)
    const randomColor = buttonColors[randomNum]
    gamePattern.push(randomColor)

}