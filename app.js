

const navbar1=document.querySelectorAll('.navbar-1')
const navbar2=document.querySelectorAll('.navbar-2')

for (let i=0;i<navbar1.length;i++){
     navbar1[i].addEventListener('mouseover',evt=>{
        navbar1[i].style.color='black';
        navbar2[i].style.color='black';
        navbar2[i].style.background='none';
    })
}

const btn1=document.querySelector('.learn-more')

    btn1.addEventListener('click',evt=>{
        btn1.style.background='white'
        btn1.style.color='black'
    })
