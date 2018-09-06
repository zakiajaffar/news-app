$.ajax({
	url: "https://newsapi.org/v2/top-headlines?sources=football-italia&apiKey=14a531983ea6412da67cf3e9d803c5a0",
	success: function(data){

		
		for(let i =1; i<=9; i++){

			document.querySelector(".main").innerHTML+=`
			<div class="card" id="news">
			<div class="card-img-top img" style="background-image: url(${data.articles[i].urlToImage})"></div>
			<div class="card-body">
			<h3 class="card-title author">${data.articles[i].author}</h3>
			
			<a href="${data.articles[i].url}" target="_blank"> <p class="card-text des">${data.articles[i].title}</p></a>
			<p class="para">It's all about Sports</p>		
			</div>
			</div>

			`
		}
		
		

	},

	error: function(error){
		console.log(error);
	}

})


