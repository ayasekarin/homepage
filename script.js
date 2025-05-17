AOS.init();

const introMovie = document.getElementById('introMovie');
const entryButton = document.getElementById('entryButton');

introMovie.addEventListener('ended', () => {
  introMovie.loop = true;
  introMovie.play();
  entryButton.style.display = 'block';
});

function enterSite() {
  document.getElementById('intro-video').style.display = 'none';
}
