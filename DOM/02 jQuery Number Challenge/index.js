//create random number
const number = Math.ceil(Math.random() * 20)
console.log(number)
























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
