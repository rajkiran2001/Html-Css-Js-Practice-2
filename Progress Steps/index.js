const progress=document.getElementById('progress')
const next=document.getElementById('next')
const prev=document.getElementById('prev')
const circles=document.querySelectorAll('.circle')

let curentactive=1;

next.addEventListener('click',()=>{
    curentactive++;
    if(curentactive>circles.length){
        curentactive=circles.length;
    }
    update();
})
prev.addEventListener('click',()=>{
    curentactive--;
    if(curentactive<1){
        curentactive=1;
    }
    update();
})

function update(){
    circles.forEach((circle,idx)=>{
      if(idx < curentactive){
        circle.classList.add('active')
      }  
      else{
        circle.classList.remove('active')
      }
    }
)
const actives= document.querySelectorAll('.active')
progress.style.width=(actives.length-1)/(circles.length-1)*100+'%'

if(curentactive===1){
    prev.disabled=true;
}
else if(curentactive===circles.length){
    next.disabled=true;
}
else{
    prev.disabled=false;
    next.disabled=false;
}
}

