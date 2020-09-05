const filtroNombre = document.querySelector('#filtro');
const tarjetas = document.getElementsByClassName('product');
const filtroRating = document.getElementsByClassName('review-filter');
const checkboxes = document.querySelectorAll(".review-filter")
const botonLimpiar = document.querySelector("button")


// cuando se escriba algo en el input
filtroNombre.oninput = () => {
  // recorro una a una cada tarjeta
  for (let tarjeta of tarjetas) {
    // me fijo el nombre de la tarjeta y qué buscó el usuario
    const titulo = tarjeta.dataset.nombre;
    const busqueda = filtroNombre.value;
    // si el titulo incluye lo que buscó el usuario...
    if (titulo.includes(busqueda)) {
      // le quito la clase "hidden" a la tarjeta
      tarjeta.classList.remove('hidden');
    } else {
      // se la agrego
      tarjeta.classList.add('hidden');
    }
  }
};

for (let checkbox of filtroRating) {
  checkbox.onclick = () => {
    filtrarTarjetas();
  };
}

const hayCheckboxSeleccionado = () => {
  for (let checkbox of filtroRating) {
    if (checkbox.checked) {
      return true;
    }
  }
};

const coincidenCheckboxYTarjeta = tarjeta => {
  const rating = tarjeta.dataset.rating;
  for (let checkbox of filtroRating) {
    if (checkbox.value === rating && checkbox.checked) {
      return true;
    }
  }
};

const filtrarTarjetas = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add('hidden');
    if (hayCheckboxSeleccionado()) {
      if (coincidenCheckboxYTarjeta(tarjeta)) {
        tarjeta.classList.remove('hidden');
      }
    }
    else {
      tarjeta.classList.remove('hidden')
    }
  }
};



botonLimpiar.onclick = () => {
  filtroNombre.value = ""
  for (let checkbox of checkboxes) {
    checkbox.checked = false 
  }
  tarjeta.classList.remove('hidden')
}

