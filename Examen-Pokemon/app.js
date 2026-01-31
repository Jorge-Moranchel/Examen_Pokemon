const btnGetDatos = document.getElementById("btnGetDatos");
const contentData = document.getElementById("contentData");
const inputBuscar = document.getElementById("inputBuscar");

const obtenerDatos = async () => {
    const id = inputBuscar.value.toLowerCase();

    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    if (!response.ok) {
        contentData.innerHTML = "<p>Pokémon no encontrado</p>";
        return;
    }

    const data = await response.json();

    contentData.innerHTML = `
        <div class="col-md-4">
            <div class="card mb-3">
                <img src="${data.sprites.front_default}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-capitalize">${data.name}</h5>
                </div>
            </div>
        </div>
    `;
};

btnGetDatos.addEventListener("click", obtenerDatos);
