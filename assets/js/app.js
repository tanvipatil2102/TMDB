let cl = console.log;

let movieContainer = document.getElementById("movieContainer");

let ratingColor = (rating)=>{
    if(rating < 5){
        return "bg-danger"
    }else if(rating <= 7){
        return "bg-warning"
    }else if(rating > 7){
       return "bg-success"
    }
};

let result= '';

movieArray.forEach((movie)=>{
    result += `

  <div class="col-md-4 mb-4">
  <div class="card">
    <figure class="cardImage">
      <img src="https://image.tmdb.org/t/p/w1280//${movie.poster_path}" alt="Card image">
        <figcaption>
          <div class="row">
            <div class="col-10">
              <h3 class="cardTitle">
              ${movie.title}
              </h3>
            </div>
            <div class="col-2">
              <span class="rating ${ratingColor(movie.vote_average)}">${movie.vote_average}</span>
            </div>
          </div>
        </figcaption>
    </figure>
    <div class="movie-overview">
      <h4>
        <em>Overview</em>
      </h4>
      <p>${movie.overview}</p>
    </div>
  </div>
</div>`
})
movieContainer.innerHTML = result;