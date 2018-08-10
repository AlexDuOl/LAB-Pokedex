$(document).ready(function() {
    dir = "https://pokeapi.co/api/v2/pokedex/1?limit=20" //Obteniendo data de la url para todos los Pokemones

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
        dir = `https://pokeapi.co/api/v2/pokemon/${$("#txtName").val()}`
        // Corrección de endpoint para que en la busqueda se obtenga la información de cada pokemón buscado.
        // Anteriormente solo se obtenía la información para el pokemon #1 Bulbasaur 
        $("#poke").html("")
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

            $('#poke').append(`
                <p><img src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png'><p>           
                <h5>Nombre:  ${namePok}</h5>
                <h5 class="perfil">Perfil</h5>
                <h6>Peso:  ${weightPok}</h6>
                <h6>Habilidades:</h6>
                `);
            //Correción de ortografía: Habilidades*  

            abilitiePok.forEach(function(ability) {
                let nameAbility = ability.ability.name;
                $('#poke').append(`
                      <ul>   
                          <li>${nameAbility}</li>
                      </ul>`);
                $('#poke').removeClass('.hiden');
            })

        })
    })
})