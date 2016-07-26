$('.submit').click( function searchPokemon (event){
	event.preventDefault();

	var pokemon = $('#pokemonName').val();

		$.ajax({
			
			type: 'GET',
			
			url: 'http://pokeapi.co/api/v2/pokemon/' + pokemon,
			
			success: function (response) {
				console.log(response);
				$('.name').append('<span>' + response.name + '</span>');
				// $('.description').text(response.name);
				$('.type').empty();
				response.types.forEach(function (types) {
					var pokemonType = types.type.name
					$('.type').append('<span>' + pokemonType + '  </span>');		
					}
			)},


			error: function error () {
				console.log('cacafuti');
			}
			
		}) //ajax 1	

			$.ajax({
			
			type: 'GET',
			
			url: 'http://pokeapi.co/api/v2/pokemon-species/' + pokemon,
			
			success: function (response) {

				console.log(response);
				$('.description').append('<span>' + response.flavor_text_entries[3].flavor_text + '</span>');
			},


			error: function error () {
				console.log('cacafuti');
			}
			
		}) //ajax 2

}) // fin submit searchPokemon

/////////////////////// ITINERATION 2 /////////////////////////////////
$('.typebutton').click( function searchType (event){
	event.preventDefault();

	var listType = $('#searchType').val();
	var request = $.get('http://pokeapi.co/api/v2/type/' + listType)

	request.done(getTypeList);
  	request.fail(error);
})

//a partir de aquí!!! A darle caña!
//necesito pedir pokemon.name del request y que me lo meta en tags html
function getTypeList (request) {
	console.log(request);
	$('.description').append('<span>' + request.pokemon[1].name + '</span>');
}

function error () {
	console.log('cacafuti');
}