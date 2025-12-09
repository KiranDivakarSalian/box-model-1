const model=document.querySelector('.modal')
// console.log(document.querySelector('.modal'))
const overlay=document.querySelector('.overlay')
const btnCloseModel=document.querySelector('.close-modal')
const btnShowModel=document.querySelectorAll('.show-modal')
console.log(btnShowModel)

const openModel=function(){
    model.classList.remove('hidden')
        overlay.classList.remove('hidden')
}
const closeModel=function(){
    model.classList.add('hidden')
    overlay.classList.add('hidden')
}

for(let i=0;i<btnShowModel.length;i++)
{
    // btnShowModel[i].addEventListener('click',function(){
    //     model.classList.remove('hidden')
    //     overlay.classList.remove('hidden')
    btnShowModel[i].addEventListener('click',openModel)
    
    // btnCloseModel.addEventListener('click',function(){
    //     model.classList.add('hidden')
    //     overlay.classList.add('hidden')
    // })
    btnCloseModel.addEventListener('click',closeModel)
    
    // overlay.addEventListener('click',function(){
    //     model.classList.add('hidden')
    //     overlay.classList.add('hidden')
    // })
    overlay.addEventListener('click',closeModel)

    document.addEventListener('keydown',function(e){
        console.log(e.key)
        if(e.key==='Escape'&& !model.classList.contains('hidden'))
        {
            model.classList.add('hidden')
            overlay.classList.add('hidden')  
        }
    })
}

