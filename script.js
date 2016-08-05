function playSomeSound(genre) {
	SC.get('/playlists', {
		
	}, function(playlists) {
		var random = Math.floor(Math.random() * 49) + 1; 
		SC.oEmbed(playlists[random].uri, {auto_play: true}, document.getElementById('results'));
	});
}


window.onload = function() {
	SC.initialize({
  client_id: '989cfa7e3693983ddfdb23ce3dafe4fa'
});
	var menuLinks = document.getElementsByClassName('genre');
	for(var i = 0; i < menuLinks.length; i++) {
		var menuLink = menuLinks[i];
		menuLink.onclick = function(e) {
			e.preventDefault();
			playSomeSound(menuLink.innerHTML);
		};
	}
};



// SC.initialize({
//   client_id: '989cfa7e3693983ddfdb23ce3dafe4fa'
// });

// $(document).ready(function() {
//   SC.get('/tracks', { genres: 'rap'},function(tracks) {
//     $(tracks).each(function(index, track) {
//       $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre + ' - ' + ' - ' + track.permalink_url + track.duration));
//     });
//   });
// });