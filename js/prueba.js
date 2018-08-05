$(document).ready(function() {
    /*dir = "https://pokeapi.co/api/v2/pokedex/1?limit=806" //Obteniendo data de la url para todos los Pokemones

    $.ajax({
        url: dir,
        onError: function(err) {
            alert("No se ha podido cargar la informacion");
        },

    }).done(function(data) {
        //console.log(data);

        let arrayPokemon = data.pokemon_entries; //Entrando al array y obteniendo los datos necesarios

        arrayPokemon.forEach(function(element) {
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
*/
    let txtName = $("#txtName").val();
    $("#searching-Pokemon").click(function() { //Fincion para buscar por cada Pokemon

        dir = "https://pokeapi.co/api/v2/pokemon/"

        $.ajax({
            url: dir,
            onError: function(err) {
                alert("No se ha podido cargar la informacion");
            },

        }).done(function(data) {
            //console.log(data);
            let namePok = data.name;
            let abilitiePok = data.abilities;
            let weightPok = data.weight;

            $("#poke").removeClass("hiden");

            if ($("#txtName").val() !== namePok) {
                alert("Pokemon no localizado")


            } else {
                $('#poke').append(`
                <p><img src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png'><p>           
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

            }

        })

    })

})