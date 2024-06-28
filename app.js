/*const sections  = document.querySelectorAll('.section');
const sectBtns  = document.querySelectorAll('.controlls');
const sectBtn  = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransition(){
  //button click active class.
  for(let i = 0 ; i < sectBtn.length ; i++){
    sectBtn[i].addEventListener('click' , function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('.active-btn','');
      this.className+= 'active-btn';
    });
  }

  //sections active class
  allSections.addEventListener('click' , (e) =>{
    const id = e.target.datset.id;
    if(id){
      //remove selected from other btns.
      sectBtns.forEach((btn) =>{
        btn.classList.remove('active')
      })
      e.target.classList.add('active')

      //ide other scetions.
      sections.forEach((section) =>{
        section.classList.remove('active')
      })
      const element = document.getElementsById(id);
      element.classList.add('active');
    }
  })
}

PageTransition();*/

(function () {
  [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
      })
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
  })
})();