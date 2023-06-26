function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light") // toogle: alterna entre as classes, para adicionar e remover elemento;

  /*if(html.classList.contains('light')) {
    html.classList.remove('light');           // pode adicionar ou remover uma classe;
  } else {
    html.classList.add('light');
  };*/

  //  pegar o tag img.
  const img = document.querySelector("#profile img")

  //  substituir a imagem.
  if (html.classList.contains("light")) {
    //  se tiver light mode, adicionar a imagem light.
    img.setAttribute("src", "/assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo de óculos preto, e fundo colorido"
    )
  } else {
    //  se tiver sem light mode, manter a imagem normal.
    img.setAttribute("src", "/assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo de óculos, barba e fundo amarelo"
    )
  }
}
