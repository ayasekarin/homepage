//--------------------------------------------------------------
// 開幕動画の再生
//--------------------------------------------------------------
const introMovie = document.getElementById('introMovie');
const entryButton = document.getElementById('entryButton');

introMovie.addEventListener('ended', () => {
  introMovie.loop = true;
  introMovie.play();
  entryButton.style.display = 'block';
});

function enterSite() {
  document.getElementById('intro-video').style.display = 'none';

  window.scrollTo(0, 0);

  setTimeout(() => {
    AOS.init({
      once: false,
    });
  }, 100);

}

//--------------------------------------------------------------
// 流れ星 フィルター
//--------------------------------------------------------------
(function () {
  const canvas = document.getElementById('meteorCanvas');
  const ctx = canvas.getContext('2d');
  // 流れ星定義
  let meteors = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // 流れ星作成
  function createMeteor() {
    // const size = Math.random() * 2 + 1;
    return {
      x: Math.random() * canvas.width,
      y: -20,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 5 + 1,
      // 角度:45
      angle: Math.PI / 4,
      // 透明かどうか
      alpha: Math.random() * 0.6 + 0.3,
      size: Math.random() * 2 + 1
    };
  }

  // 動的作成
  function drawMeteor(m) {
    const xEnd = m.x + m.length * Math.cos(m.angle);
    const yEnd = m.y + m.length * Math.sin(m.angle);
    const gradient = ctx.createLinearGradient(m.x, m.y, xEnd, yEnd);
    gradient.addColorStop(0, `rgba(255,255,255,${m.alpha})`);
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(xEnd, yEnd);
    ctx.strokeStyle = gradient;
    ctx.lineWidth = m.size;
    ctx.stroke();
  }

  function update() {
    // クリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 頻繫にでないようにいったん8設定
    if (meteors.length < 8 && Math.random() < 0.2) {
      meteors.push(createMeteor());
    }
    meteors = meteors.filter(m => m.y < canvas.height);
    meteors.forEach(m => {
      drawMeteor(m);
      m.x += m.speed * Math.cos(m.angle);
      m.y += m.speed * Math.sin(m.angle);
    });
    requestAnimationFrame(update);
  }

  update();
})();
