let btn = document.getElementById('btn');
let clickCount = 0;

function handler() {
  clickCount += 1;
  if (clickCount === 1) {
    btn.innerHTML = 'بیشتر تلاش کن :)';
  } else if (clickCount === 2) {
    btn.innerHTML = 'آفرین یبار دیگه :)';
  } else if (clickCount === 3) {
    btn.innerHTML = 'تلاش کن تو میتونی :)';
  } else if (clickCount === 4) {
    btn.innerHTML = 'خیلی نزدیک شدی :)';
  } else if (clickCount === 5) {
    window.location.replace('./../../soon.html');
  }
}

function menu(x) {
  x.classList.toggle('change');
  let nav = document.getElementById('navbar');
  if (x.classList.contains('change')) {
    nav.style.display = 'flex';
    nav.classList.add('navAnimation');
  } else {
    nav.style.display = 'none';
  }
}
