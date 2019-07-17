const slides = document.querySelectorAll(".slide")
const next = document.querySelector("#next")
const prev = document.querySelector("#prev")

const interval=5000;
const auto=true;
let slideInterval

next.addEventListener('click',nextSlide)
prev.addEventListener('click',prevSlide)

function nextSlide(){

   const current=document.querySelector('.current')
   if(auto){
      clearInterval(slideInterval)
      slideInterval=setInterval(()=>nextSlide(),interval)
   }
   
   if(current.nextElementSibling){
      current.nextElementSibling.classList.add("current")
   }else{
      slides[0].classList.add('current')
   }

   setTimeout(()=>current.classList.remove('current'))
}

function prevSlide(){
   const current=document.querySelector('.current')
   if(auto){
      clearInterval(slideInterval)
      slideInterval=setInterval(()=>nextSlide(),interval)
   }

   if(current.previousElementSibling){

      current.previousElementSibling.classList.add('current')
   }else{

      slides[slides.length - 1].classList.add('current')
   }
   setTimeout(()=>current.classList.remove('current'))

}

if(auto){
   slideInterval=setInterval(()=>nextSlide(),interval)
}