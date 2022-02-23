var mostrarLinks = false;

function manejador() {
  var nav = document.querySelector('nav');

  if (!mostrarLinks) {
    nav.classList.add('active');

    mostrarLinks = true;

    document.body.style.overflowY = 'hidden';
  } else {
    nav.classList.remove('active');

    mostrarLinks = false;

    document.body.style.overflowY = 'auto';
  }
}
