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
           console.log(arrayPokemon);
   
          
               arrayPokemon.forEach(function(element){
               let name = element.pokemon_species.name;
               let number = element.entry_number;
               let photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
               
               $("#response-container").append(template(name, photo));
            
   
           })
   
                
       })
       const template = function (name, photo) {
           const templatePok = `<tr>
                       <td><img src="${photo}"></td>
                       <td>${name}</td>
                       </tr>`             
           return templatePok; 
              
       }
})


