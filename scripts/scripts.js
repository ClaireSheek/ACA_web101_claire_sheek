const viewResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
    viewResults.append(`${name} : ${value}`)
    viewResults.append(document.createElement("br"))
  })