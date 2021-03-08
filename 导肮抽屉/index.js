const btn = document.querySelector('.btn');
const container = document.querySelector('.nav-container');
const list = document.querySelector('.nav-list')
const titles = document.querySelectorAll('.title');
const left = document.querySelector(".left")
const right = document.querySelector(".right")
btn.addEventListener('click', function () {
  // titles.forEach((title) => {
  //   title.classList.toggle('hide');
  // });
  // container.classList.toggle('unlimit');
  list.classList.toggle("unlimit")
  left.classList.toggle('hide');
  right.classList.toggle('hide');
});
