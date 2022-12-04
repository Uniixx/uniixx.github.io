const streamers = [
    "gizmoqcvr",
    "ashleywhiskey",
    "d4rkyeti",
    "kweany",
    "queen_pogo",
    "i2evard",
    "vertekz_tv",
    "waffleinatoaster",
    "bloodhuntqc",
    "lionnely",
    "lunasky__",
    "nioxby",
    "papapous",
    "shortcast",
    "thepolicefan",
    "sar0ck",
    "dead_killer_qc"
];

let streamerCarousel = $('.owl-carousel-streamer').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    smartSpeed: 500,
    autoplay: 6000,
    items: 3,
    autoWidth:true,
    navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ]
})

const CLIENT_ID = 'qxoxj2d3ng03381ked8tlmbcpwf078';
const CLIENT_SECRET = '1o7lw5sg2gydngt1scy4871tsnw5qx';

async function GetBearerToken() {
    axios.post(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`)
        .then(function (response) {
            if (response.access_token) {
                for (let i = 0; i < streamers.length; i++) {
                    isStreamerLive(streamers[i], response.access_token)
                }
            }
        })
}

function createElement(data) {
    console.log(data);
    const galleryItem = document.createElement("div");
    galleryItem.classList = "gallery-item col-lg-4 col-md-6 col-sm-12 wow fadeInLeft animated";
    galleryItem["data-wow-delay"] = "0ms";
    galleryItem.style = "visibility: visible; animation-delay: 0ms; animation-name: fadeInLeft;";

    const innerBox = document.createElement("div");
    innerBox.classList = "inner-box";

    const figure = document.createElement("figure");
    figure.src = data.profile_image_url;
    figure.alt = `image de ${data.display_name}`;

    const image = document.createElement("img");
    image.src = data.profile_image_url;

    const overlayBox = document.createElement("div");
    overlayBox.classList = "overlay-box";

    const overlayInner = document.createElement("div");
    overlayInner.classList = "overlay-inner";

    const content = document.createElement("div");
    content.classList = "content";

    const iconA = document.createElement("a");
    iconA.href = `https://twitch.tv/${data.display_name}`;
    iconA.classList = "link";

    const spanIcon = document.createElement("span");
    spanIcon.innerText = data.display_name;

    const aImage = document.createElement("a");
    aImage.href = data.profile_image_url;
    aImage["data-fancybox"] = "gallery-2";
    aImage["data-caption"] = data.display_name;
    aImage.classList = "link";

    iconA.append(spanIcon);
    content.append(aImage);
    content.append(iconA);
    overlayInner.append(content);
    overlayBox.append(overlayInner);

    figure.append(image)
    figure.append(overlayBox);
    innerBox.append(figure);
    galleryItem.append(innerBox);

    createCarouselItem(galleryItem);
}

function createCarouselItem(div) {
    const itemDiv = document.createElement("div");

    itemDiv.append(div);
    itemDiv.classList = "slide-item";

    streamerCarousel.trigger('add.owl.carousel', [itemDiv])
        .trigger('refresh.owl.carousel');

}

async function isStreamerLive(username, token) {
    axios.get(`https://api.twitch.tv/helix/users?login=${username}`, {
        headers: {
            'Client-Id': CLIENT_ID,
            'Authorization': `Bearer ${token}`
        }
    })
        .then(function (response) {
            if (response.data && response) {
                createElement(response.data[0]);
            }
        })
}


// for(let i = 0; i < streamers.length; i++) {
//     console.log(isStreamerLive(streamers[i]));
// }
{/* <div class="gallery-item col-lg-4 col-md-6 col-sm-12 wow fadeInLeft animated" data-wow-delay="300ms" style="visibility: visible; animation-delay: 300ms; animation-name: fadeInLeft;">
                    <div class="inner-box">
                        <figure class="image-box">
                            <img src="images/gallery/18.jpg" alt="">
                            <!--Overlay Box-->
                            <div class="overlay-box">
                                <div class="overlay-inner">
                                    <div class="content">
                                        <a href="#" class="link"><span class="icon flaticon-unlink"></span></a>
                                        <a href="images/gallery/18.jpg" data-fancybox="gallery-2" data-caption="" class="link"><span class="icon flaticon-add"></span></a>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    </div>
                </div> */}
GetBearerToken();