function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const light = html.classList.contains("light")
  const cards = document.getElementById("cards")
  const profile = document.getElementById("profile")

  if (cards) {
    const imgprofile1 = cards.querySelector("img.profile_1")
    const imgprofile2 = cards.querySelector("img.profile_2")
    if (light) {
      imgprofile1.setAttribute("src", "../assets/avatar-light.png")
      imgprofile1.setAttribute(
        "alt",
        "Foto do Mayk Brito usando óculos escuros, camisa preta e jaqueta, em um fundo azulado."
      )
      imgprofile2.setAttribute("src", "../assets/avatar-light-2.png")
      imgprofile2.setAttribute(
        "alt",
        "Foto da Cíntia Segóvia de óculos escuros e de cabelo solto, com a Casa Branca ao fundo."
      )
    } else {
      imgprofile1.setAttribute("src", "../assets/avatar.png")
      imgprofile1.setAttribute(
        "alt",
        "Foto do Mayk Brito usando óculos e camisa preta, em um fundo amarelo."
      )
      imgprofile2.setAttribute("src", "../assets/avatar-2.png")
      imgprofile2.setAttribute(
        "alt",
        "Foto da Cíntia Segóvia sorrindo e de cabelo solto, em um fundo branco."
      )
    }
  }

  if (profile) {
    const img1 = profile.querySelector("img.profile_1")
    const img2 = profile.querySelector("img.profile_2")
    if (light) {
      img1
        ? (img1.setAttribute("src", "../assets/avatar-light.png"),
          img1.setAttribute(
            "alt",
            "Foto do Mayk Brito usando óculos escuros, camisa preta e jaqueta, em um fundo azulado."
          ))
        : (img2.setAttribute("src", "../assets/avatar-light-2.png"),
          img2.setAttribute(
            "alt",
            "Foto da Cíntia Segóvia de óculos escuros e de cabelo solto, com a Casa Branca ao fundo."
          ))
    } else {
      img1
        ? (img1.setAttribute("src", "../assets/avatar.png"),
          img1.setAttribute(
            "alt",
            "Foto do Mayk Brito usando óculos e camisa preta, em um fundo amarelo."
          ))
        : (img2.setAttribute("src", "../assets/avatar-2.png"),
          img2.setAttribute(
            "alt",
            "Foto da Cíntia Segóvia sorrindo e de cabelo solto, em um fundo branco."
          ))
    }
  }
}

function goToPage(path) {
  window.location.pathname = "tradelinks/" + path
}
