

  const targetDate = new Date("2025-10-04T00:00:00"); // Data do casamento

  function atualizarContagem() {
    const agora = new Date();
    const tempoRestante = targetDate - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((tempoRestante / (1000 * 60)) % 60);
    const segundos = Math.floor((tempoRestante / 1000) % 60);

    document.getElementById("dias").textContent = String(dias).padStart(3, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
  }

  setInterval(atualizarContagem, 1000);
  atualizarContagem(); 


  function mudouTamanho() {
    let menu = document.getElementById('menu')
    if (window.innerWidth = 768) {
      menu.style.display = 'block'
    } else {
      menu.style.display = 'none'
    }

  }

  function clicou()  {
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
    } else {
      menu.style.display = 'block'
    }
  } 

  function esconderMenu() {
    menu.style.display = 'none'
  }

  function rolou(){
    let menu = document.getElementById('menu')
    if (window.innerWidth == 768){
      menu.style.display = 'none'
    } else {
      menu.style.display = 'block'
    }
  }

  window.addEventListener('resize', mudouTamanho)
  window.addEventListener('onscroll', rolou)