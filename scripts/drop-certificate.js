const btnCertificates = document.querySelectorAll(".view-certificate")
const dropCertificates = document.querySelectorAll(".drop-certificate")

// Percorre cada botão encontrado
btnCertificates.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const currentDrop = dropCertificates[index]
    const currentArrow = btn.querySelector(".arrow")

    currentDrop.classList.toggle("active")
    currentArrow.classList.toggle("rotate")
  })
})
