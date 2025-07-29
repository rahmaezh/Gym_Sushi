//here goes all the code that was inside of the <script> label

const objetivos = {
      rahma: ['Creatina', 'Proteína', 'Omega-3', 'Omega-3'],
      daniel: ['Creatina', 'Proteína', 'Omega-3', 'Omega-3', 'Omega-3']
    };

    function toggle(btn) {
      btn.classList.toggle('active');
      verificarObjetivos();
    }

    function verificarObjetivos() {
      const rahmaBtns = document.querySelectorAll('#rahma .button');
      const danielBtns = document.querySelectorAll('#daniel .button');
      const statusRahma = document.getElementById('statusRahma');
      const statusDaniel = document.getElementById('statusDaniel');

      const rahmaOK = [...rahmaBtns].every(btn => btn.classList.contains('active'));
      const danielOK = [...danielBtns].every(btn => btn.classList.contains('active'));

      statusRahma.innerText = rahmaOK ? '¡Objetivo logrado! Nos vemos mañana.' : '';
      statusDaniel.innerText = danielOK ? '¡Objetivo logrado! Nos vemos mañana.' : '';
    }

    const estado = {
      entrenos: 0,
      sushis: 0
    };

    function registrarEntreno() {
      estado.entrenos++;
      if (estado.entrenos % 12 === 0) estado.sushis++;
      actualizarContadores();
    }

    function actualizarContadores() {
      const entrenosRestantes = 12 - (estado.entrenos % 12);
      document.getElementById('entrenosRestantes').innerText = entrenosRestantes;
      document.getElementById('entrenosTotales').innerText = estado.entrenos;
      document.getElementById('sushisGanados').innerText = estado.sushis;
    }

    function reiniciarDiario() {
      document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));
      document.getElementById('statusRahma').innerText = '';
      document.getElementById('statusDaniel').innerText = '';
    }

    function checkDailyReset() {
      const lastDate = localStorage.getItem('lastDate');
      const today = new Date().toLocaleDateString();
      if (lastDate !== today) {
        reiniciarDiario();
        localStorage.setItem('lastDate', today);
      }
    }

    checkDailyReset();
    actualizarContadores();