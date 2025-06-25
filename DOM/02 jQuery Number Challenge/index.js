//create random number
let number = Math.ceil(Math.random() * 20)
//set initial score
let score = 20
//highscore
let highscore = 0

//restart the game
const restart = () => {
    //reset number
    number = Math.ceil(Math.random() * 20)
    //clear input
    $('.guess').val('')
    //set initial score
    score = 20
    //set background
    $('body').css('background-color', 'black')
}

//check the guess number
const checkNumber = () => {
    let guessNumber = Number($('.guess').val())
//compare result
    if (number === guessNumber){
        $('body').css('background-color', 'green')
        $('.message').text('correct!')
        $('.score').text(score)
        highscore++
        $('.highscore').text(highscore)
    } else if (number > guessNumber) {
        $('.message').text('too low')
        score--
        $('.score').text(score)
    } else {
        $('.message').text('too high')
        score--
        $('.score').text(score)
    }
}

//addEventListener when clicked
$('.check').click(checkNumber)
//addEventListener when entered(13)
$('.guess').keypress(function(e){
    if(e.which === 13){
    checkNumber()
    }
})
$('.again').click(restart)


//jQuery note

//getting the value
// console.log($('h1').css('font-size')) //40px
// console.log($('h1').hasClass('guess')) //false

//setting the value
// $('h1').css('color', 'red')
// $('h1').addClass('guess label-score')
// $('h1').text('this is text')
// $('h1').html('<em>this is inner html</em>')
// $('a').attr('href','https://www.google.com')


//adding event listener
// $('h1').click(function(){
//     console.log('i got clicked')
// } )
// $('input').keypress(function(event){
//     console.log(event.key)
// })

// //when hover the mouse over, change the color
// $('h1').on('mouseover', function(){
//     $('h1').css('color', 'blue')
// })
// $('h1').on('click', function(){
//     $('h1').css('color', 'purple')
// })

// //adding and removing elements
// $('.highscore').before("<button>before</button>")
// $('.highscore').after("<button>after</button>")
// $('.message').prepend("<button>inside prepend</button>")
// $('.message').append("<button>inside append</button>")
// $('button').remove()
