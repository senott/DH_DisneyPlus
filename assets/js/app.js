window.onscroll = () => {
  let navbar = document.getElementById('navbar');
  let currentScrollPos = window.pageYOffset;

  console.log(currentScrollPos);

  if (currentScrollPos > 540) {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
  }
};