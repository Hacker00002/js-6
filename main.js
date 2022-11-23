const formT = document.querySelector('form')
const numT = document.querySelector('#num')
const btnT = document.querySelector('#btn')
const borderT = document.querySelector('.bag__cart')
const borderTwo = document.querySelector('.bag__itim')

formT.addEventListener('submit', function(e){
    e.preventDefault()
    
    if(numT.value < 10){
        borderT.style.border = ('1px solid red')
        borderTwo.style.border = ('none')
    }else if (numT.value > 9 && numT.value < 99){
        borderT.style.border = ('none')
        borderTwo.style.border = ('1px solid red')
    }else if (numT.value > 99){
        alert("Siz notogri qiymat kiritingiz 99 sonidan dan balan bolmasligi kerak!!!")
    }
})