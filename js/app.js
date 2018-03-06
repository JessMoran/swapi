const $moviesContainer = $("#movies-container");

$.ajax({
  url: 'https://swapi.co/api/films/?format=json',
}).done(dataMovies);

function dataMovies (data){
  console.log(data);
  for(let i = 0; i<= data.results.length; i++){
    drawMovie(data.results);

  }
}

function drawMovie(data) {

	data.forEach(function(elem) {
    let title = elem.title;
    let episode = elem.episode_id;
    let characters = elem.characters;

    let $containerRow = $('<div class = "row element"></div>');
	  let $containerMovie = $('<div class = "col-lg-12 white-background"></div>');
    let $title = $(`<h1> Name: ${title}</h1>`);
		let $episode  = $(`<p> Episode id: ${episode}</p>`);
    let $charactersTitle = $('<p> Characters:</p>');

    $moviesContainer.append($containerRow);
    $containerRow.append($containerMovie);
    $containerMovie.append($title);
    $containerMovie.append($episode);
    $containerMovie.append($charactersTitle);


    characters.forEach(function(characterElem) {
      $pCharacterElement = $(`<p>${characterElem}</p>`);
      $charactersTitle.append($pCharacterElement);
      $pCharacterElement.click(function(characterElem) {
      console.log(characterElem);
      });
    });

		});

}

function openModal(characterElem) {
  console.log(characterElem);
}
