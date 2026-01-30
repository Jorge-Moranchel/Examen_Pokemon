const btnGetDatos = document.getElementById("btnGetDatos");
const contentData = document.getElementById("contentData");
const inputBuscar = document.getElementById("inputBuscar");

const obtenerDatos = async () => {
    const id = inputBuscar.value;

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/{id}`
    );

    console.log(response);

    const data = await response.json();
    console.log(data);

    contentData.innerHTML = "<h2>Resultados</h2>";

    data.sprites.forEach(element => {
        const divX = document.createElement("div");
        divX.classList.add("col-md-4");

        divX.innerHTML = `
        <div class="card mb-3">
            <img src="${element.}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${element.}</h5>
            </div>
        </div>
        `;

        contentData.appendChild(divX);
    });
};

btnGetDatos.addEventListener("click", obtenerDatos);
