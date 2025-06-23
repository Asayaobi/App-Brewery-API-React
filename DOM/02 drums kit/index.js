//addEventListener
const handleClick = () => alert('I got clicked!')
// document.querySelectorAll('.drum').forEach(b => b.addEventListener('click', handleClick))

// for (let i = 0; i < document.querySelectorAll('.drum').length; i++){
//     document.querySelectorAll('button')[i].addEventListener('click', function () {
//         alert('clicked!')
//     })
// }

//play sound
// document.querySelector('.w').addEventListener('click', function () {
//     const audio = new Audio('sounds/tom-1.mp3')
//     audio.play()
// })

// document.querySelectorAll('.drum').forEach(b => b.addEventListener('click', function () {
//     const audio = new Audio('sounds/tom-1.mp3')
//     audio.play()}
// ))

//see which button got click with this keyword
// document.querySelectorAll('.drum').forEach(button => button.addEventListener('click', function(){
//     console.log(this)
// }))

//modify css color with addEventListener
// document.querySelectorAll('.drum').forEach(button => button.addEventListener('click', function(){
//     console.log(this)
//     this.style.color = 'white'
// }))

//using switch case
document.querySelectorAll('.drum').forEach(button => button.addEventListener('click', function(){
    let buttonHTML = this.innerHTML
    switch(buttonHTML){
        case'w':
        const crash = new Audio('sounds/crash.mp3')
        crash.play()
        break

        case'a':
        const kick = new Audio('sounds/kick-bass.mp3')
        kick.play()
        break

        case's':
        const snare = new Audio('sounds/snare.mp3')
        snare.play()
        break

        case'd':
        const tom1 = new Audio('sounds/tom-1.mp3')
        tom1.play()
        break

        case'j':
        const tom2 = new Audio('sounds/tom-2.mp3')
        tom2.play()
        break

        case'k':
        const tom3 = new Audio('sounds/tom-3.mp3')
        tom3.play()
        break

        case'l':
        const tom4 = new Audio('sounds/tom-4.mp3')
        tom4.play()
        break

        default:
        console.log(buttonHTML) //else log this keyword
    }
}))