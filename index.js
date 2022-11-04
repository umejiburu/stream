const arrows = document.querySelectorAll(".arrow")
const movielists = document.querySelectorAll(".movie-list")

arrows.forEach((arrow, index) => {
  const itemNumber = movielists[index].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click",()=>{
    const ratio = Math.floor(window.innerWidth / 270)
    clickCounter++
    if(itemNumber - (4 + clickCounter) + (4 -ratio) >= 0) {
      movielists[index].style.transform = `translateX(${
        movielists[index].computedStyleMap().get("transform")[0].x.value -300
       }px)`
    }else{
      movielists[index].style.transform = "translateX(0)"
      clickCounter = 0
    }

 });

});

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.side-bar,.left-menu-icon,.toggle")

ball.addEventListener("click",()=>{
  items.forEach(item => {
    item.classList.toggle("active")
  })
  ball.classList.toggle("active")
})