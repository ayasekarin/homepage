
const introMovie = document.getElementById('introMovie');
const entryButton = document.getElementById('entryButton');

//--------------------------------------------------------------
// 開幕動画の再生
//--------------------------------------------------------------
introMovie.addEventListener('ended', () => {
  introMovie.loop = true;
  introMovie.play();
  entryButton.style.display = 'block';
});

function enterSite() {
  document.getElementById('intro-video').style.display = 'none';

  window.scrollTo(0, 0);

  // AOSをここで初期化
  setTimeout(() => {
    AOS.init({
      once: true, 
    });
  }, 100);

}
