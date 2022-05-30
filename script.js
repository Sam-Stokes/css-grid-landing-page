document.querySelector('#arrow-down-img').addEventListener('click', function() {
    document.querySelector('#grid-container').scrollIntoView({
      behavior: 'smooth'
    });
  });

const menu = document.querySelector('.hamburger');
menu.addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('toggle');
});

menu.onclick = function() {
    this.classList.toggle('active');
};
