let inputFeild = document.querySelector('.input-feild')
let submitBtn = document.querySelector('.submit-btn')

let list = document.querySelector('.list')

let clearBtn = document.querySelector('.clr-btn')


let itemCount = 1; 

submitBtn.addEventListener('click',function(){
    let value = inputFeild.value
    console.log(value)
    let newListItem = document.createElement('li')

    newListItem.textContent = `${itemCount}.${value}`

    list.prepend(newListItem)

    inputFeild.value = ""
    itemCount++;
})

clearBtn.addEventListener('click',function(){
    list.innerHTML = ""
})