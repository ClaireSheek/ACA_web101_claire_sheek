// user click: add fade to name

function fadeOnClick(element) {
    console.log("this should be my name", element);
    element.className += "animate__animated animate__fadeIn"
}

function hideOnHover(element) {
    console.log("this should be photo", element)
    element.className += "animate__animated animate__fadeOut"
}


function revealPostHover(element) {
    element.className += "animate__animated animate__fadeIn"
}

function revealNum() { 
    const x = document.getElementById("phoneNum"); 
    if (x.style.display === "none") { 
        x.style.display = "block"; } 
    else { x.style.display = "none"; 
    } 
}
