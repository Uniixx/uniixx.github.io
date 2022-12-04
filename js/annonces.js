const mainannoncesDiv = document.getElementById("mainannonces");

function mainAnnonces() {
    axios.get("http://localhost:8080/api/annonces").then(
        response => {
            if (response && response.length) {
                for(let i = 0; i < response.length; i++) {
                    const el = createElement(response[i]);
                    addAnnounce(el);
                }
            } else {
                mainannoncesDiv.innerHTML = "<div style='width: 100%; text-align: center;'><h2>Aucune annonces disponible</h2></div>";
            }
        }
    )
}

function createElement(data) {
    const newsBlock = `
    <div class="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
					<div class="inner-box hvr-bob">
						<div class="image">
							<a href="blog-single.html"><img src="images/resource/news-1.jpg" alt=""></a>
						</div>
						<div class="lower-content">
							<div class="post-date">${moment(data.createdAt, 'YYYY-MM-DD').format("LL")}</div>
							<h3><a href="blog-single.html">${data.titre}</a></h3>
						</div>
					</div>
				</div>`
    return newsBlock;
}

function addAnnounce(el) {
    mainannoncesDiv.innerHTML += el;
}


mainAnnonces();