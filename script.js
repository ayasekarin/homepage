AOS.init();

// 短片播放结束后显示ENTRY按钮
const introMovie = document.getElementById('introMovie');
const entryButton = document.getElementById('entryButton');

introMovie.addEventListener('ended', () => {
  introMovie.loop = true; // 结束后设置循环播放
  introMovie.play();
  entryButton.style.display = 'block'; // 显示ENTRY按钮
});

// 点击ENTRY按钮，隐藏intro-video，显示主页
function enterSite() {
  document.getElementById('intro-video').style.display = 'none';
}
