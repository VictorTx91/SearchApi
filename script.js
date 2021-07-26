const buscar = document.getElementById("buscar"),
      submit = document.getElementById("submit"),
      resultados = document.getElementById("resultado"),
      refeicao = document.getElementById("refeicao"),
      mealsElme = document.getElementById("meals");
      

function buscaRefeicao(e) {
  e.preventDefault();

  refeicao.innerHTML = "";
  const texto = buscar.value;
  // console.log(texto);

  if (texto.trim()) {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${texto}`)
      .then((resposta) => resposta.json())
      .then((data) => {
        // console.log(data);

        if (data.meals === null) {

          resultados.innerHTML = `<h3>Não à refeição com esse nome</h3>`;

        } else {
          mealsElme.innerHTML = data.meals.map((meal) => `
            <div class="meal">
               
                <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>Nome da Refeição: ${meal.strMeal}</h3>
                <h3>Categoria: ${meal.strCategory}</h3>
                <h3>Area: ${meal.strArea}</h3>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                <h3>Instruções: ${meal.strInstructions}</h3>
                </div>
            </div>`
            ).join("");
        }
      });
      buscar.value = "";
  } else {
    alert("Escreva alguma refeição");
  }
}


submit.addEventListener("submit", buscaRefeicao);

