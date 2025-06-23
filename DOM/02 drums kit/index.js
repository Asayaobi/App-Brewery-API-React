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
document.querySelectorAll('.drum').forEach(b => b.addEventListener('click', function () {
    const audio = new Audio('sounds/tom-1.mp3')
    audio.play()}))
