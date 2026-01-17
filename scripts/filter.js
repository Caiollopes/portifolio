const filterButtons = document.querySelectorAll(".btn-filter")
const projectCards = document.querySelectorAll(".projects-card")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Removendo o active de quem ja esta selecionado
    filterButtons.forEach((btn) => {
      if (btn !== button) {
        btn.classList.remove("active")
      }
    })

    // Se clicar no que já está ativo, ele desativa.
    // Se clicar em um novo, ele ativa.
    button.classList.toggle("active")

    const btnFilter = button.getAttribute("data-filter")

    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category")

      // Se o botão não estiver ativo após o toggle, mostramos "todos"
      const toogleAll = button.classList.contains("active")

      if (!toogleAll || btnFilter === "todos" || cardCategory.includes(btnFilter)) {
        card.style.display = "block" // Mostra o projeto
      } else {
        card.style.display = "none" // Esconde o projeto
      }
    })
  })
})
