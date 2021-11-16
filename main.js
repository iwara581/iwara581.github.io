const panel = document.querySelector('.card')
const img = document.querySelector('img')
const btnYes = document.querySelector('#yes')
const btnNo = document.querySelector('#no')
const btnNext = document.querySelector('#next')
const audio = document.querySelector('audio')
const source = document.querySelector('#sour')

const laugh = ['m1.mp3', 'm2.mp3']

document.addEventListener('DOMContentLoaded', () => {
  btnYes.onclick = () => {
    panel.innerHTML = '<i class="fas fa-spinner"></i>'
    panel.classList.add('curve')
    img.src = 'https://i.ibb.co/6Hk9QQQ/294-2945500-yo-mamma-brody-foxx-by-araghenxd-brody-yo-mama-removebg-preview.png'
    document.body.style.backgroundColor = '#d6601c'
    const animeUp = setTimeout(() => {
      panel.classList.add('animate__fadeOutUpBig')
      clearTimeout(animeUp)
    }, 2000)
    
    jokesBoard()
    nextBtn()
  }
  
  btnNo.onclick = () => {
    img.src = 'https://i.ibb.co/TvsX0PZ/latest.png'
    panel.classList.add('no')
    panel.innerHTML = '<a href="https://imgbb.com/"><img src="https://i.ibb.co/qFLY0cC/giphy.webp" alt="giphy" border="0"></a><small>reload to see yo mama jokes.</small> '
  }
})

function jokesBoard() {
  setTimeout(() => {
    panel.classList.remove('animate__fadeOutUpBig')
    panel.classList.add('animate__fadeInUpBig')
    img.src = 'https://i.ibb.co/StVrh0t/131-1313227-yo-mama-mugen-yo-mama-fat-mama-removebg-preview.png" alt="131-1313227-yo-mama-mugen-yo-mama-fat-mama-removebg-preview'
      fetchJokes()
      btnNext.style.display = 'flex'
      
      setTimeout(function() {
        const randomA = Math.floor(Math.random() * laugh.length)
        audio.src = laugh[randomA]
        audio.play()
      }, 3100);
    }, 3000)
}

function board(msg) {
  panel.classList.remove('curve')
  panel.innerHTML = msg
}

function fetchJokes() {
  const jokes = ["Yo mama's so fat, when she fell I didn't laugh, but the sidewalk cracked up.","Yo mama's so fat, when she skips a meal, the stock market drops.","Yo mama's so fat, it took me two buses and a train to get to her good side.","Yo mama's so fat, when she goes camping, the bears hide their food.","Yo mama's so fat, if she buys a fur coat, a whole species will become extinct.","Yo mama's so fat, she stepped on a scale and it said: 'To be continued.'","Yo mama's so fat, I swerved to miss her in my car and ran out of gas.","Yo mama's so fat, when she wears high heels, she strikes oil.","Yo mama's so fat, she was overthrown by a small militia group, and now she's known as the Republic of Yo Mama.","Yo mama's so fat, when she sits around the house, she SITS AROUND the house.","Yo mama's so fat, her car has stretch marks.","Yo mama's so fat, she can't even jump to a conclusion.","Yo mama's so fat, her blood type is Ragu.","Yo mama's so fat, if she was a Star Wars character, her name would be Admiral Snackbar.","Yo mama's so fat, she brought a spoon to the Super Bowl.","Yo mama's so poor, the ducks throw bread at her.","Yo mama's so poor, she chases the garbage truck with a grocery list.","Yo mama's cooking so nasty, she flys got together and fixed the hole in the window screen.","Yo mama's so depressing, blues singers come to visit her when they've got writer's block.","Yo mama's so short, you can see her feet on her driver's license.","Yo mama's so poor, she can't even afford to pay attention.","Yo mama so big, her belt size is 'equator.'","Yo mama's so classless, she's a Marxist utopia.","Yo mama so short, she went to see Santa and he told her to get back to work.","Yo mama so scary, the government moved Halloween to her birthday.","Yo mama's so nasty, they used to call them jumpolines 'til yo mama bounced on one.","Yo mama's teeth so yellow, I can't believe it's not butter.","Yo mama's so poor, Nigerian princes wire her money.","Yo mama so dumb, she went to the eye doctor to get an iPhone.","Yo mama's so lazy, she stuck her nose out the window and let the wind blow it."
]

  nextBtn(jokes)

  const random = Math.floor(Math.random() * jokes.length)
  board(jokes[random])
}

function nextBtn(jokes) {
  btnNext.onclick = () => {
    const random = Math.floor(Math.random() * jokes.length)
    
    const randomA = Math.floor(Math.random() * laugh.length)
    
    board(jokes[random])
    setTimeout(() => {
      audio.src = laugh[randomA]
      audio.play()
    }, 2000)
  }
}
