//Definicion de constantes//
const URL_BASE = "https://jsonplaceholder.typicode.com/posts";
const button = document.getElementById("button");
const postsContainer = document.getElementById("list");
//----------Solicitar la API -----------------//
//Funcion asincrona para consultar la API, await quiere decir que espera la disponibilidad de respuesta de la API antes de continuar con el código, mientras que try/catch se utiliza para manejar los posibles errores y asi poder realizar alguna acciones o mostrar el error//
const searchPost = async () => {
  try {
    const apiData = await fetch(URL_BASE);
    //Convierte la respuesta de la API a json y espera (await) a que esta se complete//
    const data = await apiData.json();

    if (!apiData.ok) {
      // ***Manejo de errores esta parte no se si esta correcta!!!!!!***//
      if (apiData.status === 404) {
        throw new Error("Error 404: Recurso no encontrado");
      } else {
        throw new Error("Error:");
      }
    }
//-----------Mostrar la Información en el HTML-----------//
    let postsHTML = "Aqui esta la lista de Posts solicitada";
    data.forEach((post) => {
      postsHTML += `
            <li>
              <h3>${post.title}</h3> 
              <p>${post.body}</p> 
            </li>
        `;
    });

    postsContainer.innerHTML = postsHTML;
    
  } catch (error) {
    console.log("Ha ocurrido un error", error);
    //El error es un objeto que viene con la propiedad message//
    alert(error.message);

  }
};
//Se agrega un evento al dar click en el boton//
button.addEventListener("click", searchPost);

