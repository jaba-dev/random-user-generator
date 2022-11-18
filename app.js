const userContainer = document.querySelector(".user-container");
const addBtn = document.querySelector(".add-user");

let userCount = 0

addBtn.addEventListener("click", (e) => {
  e.target.disabled = true
  userCount++
  let paragraph = document.createElement("p")
  let h2 = document.createElement("h2")
  let firstNameSpan = document.createElement("span")
  let lastNameSpan = document.createElement("span")
  let phoneNumberspan = document.createElement("span")
  let emailSpan = document.createElement("span")
  return randomUser()
    .then(newUser => {
      h2.innerText = `user ${userCount}`
      firstNameSpan.innerText = `Firstname: ${newUser.name.first}; `
      lastNameSpan.innerText = `Lastname: ${newUser.name.last}; `
      phoneNumberspan.innerText = `Phone number: ${newUser.phone}; `
      emailSpan.innerText = `Email address: ${newUser.email}.`
      paragraph.appendChild(h2)
      paragraph.appendChild(firstNameSpan)
      paragraph.appendChild(lastNameSpan)
      paragraph.appendChild(phoneNumberspan)
      paragraph.appendChild(emailSpan)
      userContainer.appendChild(paragraph)
      e.target.disabled = false
    })
})

