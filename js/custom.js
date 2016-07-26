$('.submit').click( function searchPokemon (event){
	event.preventDefault();
	$('.name').empty();
	$('.type').empty();
	$('.description').empty();

	var pokemon = $('input').val();

		$.ajax({
			
			type: 'GET',
			
			url: 'http://pokeapi.co/api/v2/pokemon/' + pokemon,
			
			success: function (response) {
				console.log(response);
				
				$('.name').append('<span>' + response.name + '</span>');
				// $('.description').text(response.name);
				
				response.types.forEach(function (types) {
					var pokemonType = types.type.name
					$('.type').append('<span>' + pokemonType + '  </span>');		
					}
			)},
			// Error is somehow triggered unnecesarily, reason why it appears in the console even though the request solved ok
			error: error()
			
		}) //ajax request 1	end

		$.ajax({
			
			type: 'GET',
			
			url: 'http://pokeapi.co/api/v2/pokemon-species/' + pokemon,
			
			success: function (response) {

				console.log(response);
				
				$('.description').append('<span>' + response.flavor_text_entries[3].flavor_text + '</span>');
			},

			error: error()
			
		}) //ajax request 2 end

}) // end submit searchPokemon

$('.type').click( function searchType (event){
	event.preventDefault();

	var listType = $('input').val();
	var request = $.get('http://pokeapi.co/api/v2/type' + listType)

	request.done(getTypeList);
  	request.fail(error);
})

function error () {
	console.log('Oops! This is an error');
}