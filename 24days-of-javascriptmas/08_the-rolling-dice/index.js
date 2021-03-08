// dice 点击的时候会生成随机数
const dice = document.querySelector('.dice');
// 选择下面全部的 div
const dots = dice.querySelectorAll('div');

dice.addEventListener('click', function () {
  const random = Math.floor(Math.random() * 6) + 1;
  console.log(random)
  // 清空样式
  dots.forEach((item) => (item.classList = []));
  switch (random) {
    case 1:
      dots[4].classList.add('dot');
      break;
    case 2:
      dots[0].classList.add('dot');
      dots[8].classList.add('dot');
      break;
    case 3:
      dots[0].classList.add('dot');
      dots[4].classList.add('dot');
      dots[8].classList.add('dot');
      break;
    case 4:
      dots[0].classList.add('dot');
      dots[2].classList.add('dot');
      dots[6].classList.add('dot');
      dots[8].classList.add('dot');
      break;
    case 5:
      dots[0].classList.add('dot');
      dots[2].classList.add('dot');
      dots[4].classList.add('dot');
      dots[6].classList.add('dot');
      dots[8].classList.add('dot');
      break;
    case 6:
      dots[0].classList.add('dot');
      dots[8].classList.add('dot');
      break;
    default:
      return new Error('something wrong');
  }
});
