// var side,
//   movingRight,
//   max = 0,
//   parrot = document.getElementById('parroty');

// atBounds = () => {
//   if (movingRight) {
//     if (parrot.getBoundingClientRect().right >= max) {
//       return true;
//     }
//   } else {
//     if (parrot.getBoundingClientRect().left <= max) {
//       return true;
//     }
//   }
//   return false;
// }

// move = () => setTimeout(() => {
//   if (!atBounds()) {
//     parrot.style.left = String((parseInt(parrot.style.left) || 0) + side) + 'px';
//   }
//   if (side > 0) {
//     parrot.style.transform = 'rotateY(180deg)';
//     parrot.style.transformOrigin = '50% 50%';
//   } else {
//     parrot.style.transform = 'rotateY(0deg)';
//     parrot.style.transformOrigin = '0% 0%';
//   }
//   move();
// }, 10);

// document.onmousemove = e => {
//   // debugger;
//   movingRight = e.pageX > (window.innerWidth / 2);
//   max = e.pageX;

//   if (atBounds()) {
//     side = 0;
//     return;
//   }

//   side = e.pageX > (window.innerWidth / 2) ? 2 : -2;
// }

// move();

// $(document).on('mousemove', function (e) {
//   $('#cookie').css({
//     left: e.pageX,
//     top: e.pageY
//   });
// });


var side,
  movingRight,
  max = 0,
  parrot = document.getElementById('parroty'),
  specialArea = document.querySelector('.special-area'),
  cookie = document.getElementById('cookie');

atBounds = () => {
  if (movingRight) {
    if (parrot.getBoundingClientRect().right >= max) {
      return true;
    }
  } else {
    if (parrot.getBoundingClientRect().left <= max) {
      return true;
    }
  }
  return false;
}

move = () => setTimeout(() => {
  if (!atBounds()) {
    parrot.style.left = String((parseInt(parrot.style.left) || 0) + side) + 'px';
  }
  if (side > 0) {
    parrot.style.transform = 'rotateY(180deg)';
    parrot.style.transformOrigin = '50% 50%';
  } else {
    parrot.style.transform = 'rotateY(0deg)';
    parrot.style.transformOrigin = '0% 0%';
  }
  move();
}, 10);

document.onmousemove = e => {
  movingRight = e.pageX > (window.innerWidth / 2);
  max = e.pageX;

  if (atBounds()) {
    side = 0;
    return;
  }

  side = e.pageX > (window.innerWidth / 2) ? 2 : -2;
}

move();

$(document).on('mousemove', function (e) {
  if (specialArea) {
    var rect = specialArea.getBoundingClientRect();
    if (e.pageX >= rect.left && e.pageX <= rect.right && e.pageY >= rect.top && e.pageY <= rect.bottom) {
      $('#cookie').css({
        left: e.pageX,
        top: e.pageY,
         display: 'block'
      });
    } else {
      $('#cookie').css({
        display: 'none'
      });
    }
  }
});