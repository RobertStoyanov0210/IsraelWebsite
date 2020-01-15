// Home JS
window.addEventListener('scroll', function(){
  var navbar =  document.getElementById('navbar');
  var logo =  document.getElementById('logo');
  if (window.scrollY > 100){
      navbar.style.opacity = 0.9;
      if (window.innerWidth < 769){
        logo.style.position = "absolute";
        logo.style.top = -100+'px';
      }
  } else {
      navbar.style.opacity = 1;
      if(this.innerWidth < 769) {
        logo.style.position = 'sticky';
        logo.style.top = 0+'px';
      }
  }
});

// Timeline JS
const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
