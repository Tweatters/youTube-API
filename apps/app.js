
$(function () { 
	
	function getVideos(searchTerm) {

		var parameters = {
			"part": "snippet",
			"key": "AIzaSyD3K3UVNrEICFDbdQAwNOsz1uzEeIzKH28",
			"q": searchTerm,
			"maxResults": 15,
			"nextPageToken": "string",
  			"prevPageToken": "string",
		};
		var url = "https://www.googleapis.com/youtube/v3/search";

		$.getJSON(url, parameters,
			
			function (data) {
				if (data.pageInfo.totalResults === 0) {
					alert("No results!");
				} //might need to reset the list results
				
				displayVideos(data.items);
			}
		);
	}

	
	function displayVideos(videos) {
		var html = "";
		$.each(videos, function (index, video) {
			
			console.log(video.snippet.title);
			console.log(video.snippet.thumbnails.high.url);

			html = html + "<li><p class='line-clamp'>" + video.snippet.title +
				"</p><a target='_blank' href='https://www.youtube.com/watch?v=" + video.id.videoId + "'><img src='" +  video.snippet.thumbnails.high.url + "'/></a></li>" ;
		});

		$("#search-results ul").html(html);
	}

$("#search-form").submit(function (event) { 
		event.preventDefault();
		getVideos($("#search").val());
	});
});



/*
$(function(){

	$('#search-tube').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);

	});


	function getRequest(searchTerm){
		var params = {
			part: 'snippet',
			key: 'AIzaSyD3K3UVNrEICFDbdQAwNOsz1uzEeIzKH28',
			q: searchTerm
		};
		url = 'https://www.googleapis.com/youtube/v3/search';

		$.getJSON(url, params, function(data){
		showResults(data.items);
		console.log(data.items);
		});
	};

	function showResults(results){
		var html = "";
		$.each(results, function(key,value){
			var thumb = value.snippet.thumbnails.medium.url;
			var title = value.id.videoId;
			console.log(thumbnails);
			output += '<ul><li><p>' +title+ ' - ' +videoId+ '<p><img src=""' +thumbnails+ '></li></ul>';

			$('#search-results').prepend(output);
			html += '<p>' +value.Title + '</p>';


		});
		$('#search-results').html(html);
		
	}
});
*/