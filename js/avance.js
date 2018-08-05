$(document).ready(function() {
    dir = "https://pokeapi.co/api/v2/pokedex/1?limit=806" //Obteniendo data de la url para todos los Pokemones

    $.ajax({
        url: dir,
        onError: function(err) {
            alert(err);
        },

    }).done(function(data) {
        console.log(data);

        let arrayPokemons = data.pokemon_entries; //Entrando al array y obteniendo los datos necesarios

        arrayPokemons.forEach(function(element) {
            let name = element.pokemon_species.name;
            let number = element.entry_number;
            let photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;

            $("#response-container").append(template(name, photo)); //Asignando la dtaa al contenedor

        });

    });
    const template = function(name, photo) { //Colocando en el template los resultados
        const templatePok = `<tr>
                <td><img src="${photo}"></td>
                <td>${name}</td>
                </tr>`
        return templatePok;

    }

    $("#searching-Pokemon").click(function() { //Fincion para buscar por cada Pokemon

        dir = "https://pokeapi.co/api/v2/pokemon/?limit=806"

        $.ajax({
            url: dir,
            onError: function(err) {
                alert(err);
            },

        }).done(function(data) {
            //console.log(data);
            let resultsPok = data.results;
            let weightPok = data.weight;
            let photoPok = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
            //console.log(resultsPok);

            resultsPok.forEach(function(element) {
                let namePok = element.name;
                let urlPok = element.url;
                let abilitiePok = data.abilities;
                $("#poke").removeClass("hiden");
                console.log(namePok);
                //console.log(urlPok);


                /*&& (urlPok !== photoPok))*/

                if (namePok === $("#txtName").val()) {

                    $('#poke').append(`
                    <p><img src="${photoPok}"><p>           
                    <h5>Nombre:  ${namePok}</h5>
                    <h5 class="perfil">Perfil</h5>
                    <h6>Peso:  ${weightPok}</h6>
                    <h6>Abilidades:</h6>
                    `);

                    abilitiePok.forEach(function(ability) {
                        let nameAbility = ability.ability.name;

                        $('#poke').append(`
                      <ul>   
                          <li>${nameAbility}</li>
                      </ul>`);
                        $('#poke').removeClass('.hiden');

                    })
                } else {
                    alert("Pokemon no encontrado")



                }



            })


        })
    })

})