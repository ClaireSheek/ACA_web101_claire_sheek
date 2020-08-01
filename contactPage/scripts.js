const placeForResults = document.getElementById("results")

new URLSearchParams(window.location.search).forEach((value, name) => {
    placeForResults.append(`${name} : ${value}`)
    placeForResults.append(document.createElement("br"))
  })