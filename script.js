const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
  const widthratio = Math.floor(window.innerWidth / 300);
  let clickCounter = 0;
  const imageItem = movieLists[index].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthratio) >= 0) {
      movieLists[index].style.transform = `translateX(${
        movieLists[index].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

/* Dark mode baslangic */

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".conteiner, .navbar, .movie-list-title, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select "
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
  console.log(items);
});

/* Dark mode bitis */
