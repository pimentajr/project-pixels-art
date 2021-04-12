windows.onload = function () {
  document.getElementById("black").classList.add("selected");
}

function setColorAll (event) {
  let aux = document.querySelectorAll(".selected");
  for (let index = 0; index < aux.length; index +=1) {
    aux[index].classlist.remove("selected");
      
  }
  event.target.classList.add("selected");
}
