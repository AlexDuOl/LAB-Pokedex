$(document).ready(function(){
        dir = "https://pokeapi.co/api/v2/pokedex/1?limit=806"
   
       $.ajax({
           url:dir,
           onError:function (err) {
               alert("No se ha podido cargar la informacion");            
           },
   
       }).done(function (data){
           console.log(data);
           
           let arrayPokemon = data.pokemon_entries;
            
               arrayPokemon.forEach(function(element){
               let name = element.pokemon_species.name;
               let number = element.entry_number;
               let photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
               
               $("#response-container").append(template(name, photo));
   
           });
               
       });
       const template = function (name, photo) {
           const templatePok = `<tr>
                       <td><img src="${photo}"></td>
                       <td>${name}</td>
                       </tr>`             
           return templatePok; 
              
       }

          
        $("#searching-Pokemon").click(function() {

            dir = "https://pokeapi.co/api/v2/pokemon/1/"
   
       $.ajax({
           url:dir,
           onError:function (err) {
               alert("No se ha podido cargar la informacion");            
           },

   
       }).done(function (data){
           let namePok = data.name;
           let abilitiePok = data.abilities;
           let weightPok = data.weight;
           $( "#poke" ).removeClass( "hiden" )
           console.log(data);

           $('#poke').append(`
           <img src= 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png'>
           <p>${namePok}</p>
           <p>${weightPok}</p>`);

           abilitiePok.forEach(function(ability){
             let slot = ability.slot;
             let is_hidden = ability.is_hidden;
             let nameAbility = ability.ability.name;
*******POner nombres en LI Y ULL********************
           
           $('#poke').append(`
           <p>${nameAbility}</p>
           <ul>   
                <li>${slot}</li>
                <li>${is_hidden}</li>                
            </ul>`);
           $('#poke').removeClass('.hiden');
        })


    })
})

})