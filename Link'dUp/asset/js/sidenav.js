
const block = document.getElementById('block'),
    blockToggle = document.getElementById('block-toggle'),
    blockClose= document.getElementById('block-close')

if(blockToggle){
    blockToggle.addEventListener('click',()=>{
        block.classList.add('show-menu') 
    })
}

if(blockClose){
    blockClose.addEventListener('click',() =>{
        block.classList.remove('show-menu')
    })
}

const blockLink = document.getElementById('.blocknavigation')
