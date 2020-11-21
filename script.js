// create namespace object

const app = {}

// this hides the error message until its called on in the if conditional statement
$('#error-results').hide();

let counter = 0

// Poster object containing all of the posters of the Ghibli films 

const ghibliPosters = {
    "castle in the sky": "./assets/castle.jpg",
    "grave of the fireflies": "./assets/grave.jpg",
    "my neighbor totoro": "./assets/totoro.jpg",
    "kiki's delivery service": "./assets/kiki.jpg",
    "only yesterday": "./assets/yesterday.jpg",
    "porco rosso": "./assets/porco.jpg",
    "pom poko": "./assets/poko.jpg",
    "whisper of the heart": "./assets/whisper.jpg",
    "princess mononoke": "./assets/mononoke.jfif",
    "my neighbors the yamadas": "./assets/yamadas.jfif",
    "spirited away": "./assets/spirited.jfif",
    "the cat returns": "./assets/cat.jpg",
    "howl's moving castle": "./assets/howl.jfif",
    "tales from earthsea": "./assets/earthsea.jfif",
    "ponyo": "./assets/ponyo.jpg",
    "arrietty": "./assets/arrietty.jfif",
    "from up on poppy hill":"./assets/poppy.jpg",
    "the wind rises": "./assets/wind.jpg",
    "the tale of the princess kaguya": "./assets/kaguya.jfif",
    "when marnie was there": "./assets/marnie.jfif"
}


// store end point in app object
// app.appUrl = "https://ghibliapi.herokuapp.com"

// // define a method  on our app object which will make a asynchronous request for our API films
// // create .then to call app
app.getGhibli = (topic) => {
    $.ajax({
        url: `https://ghibliapi.herokuapp.com/${topic}`,
        method: 'GET',
        dataType: 'json',
    }).then((ghibiliInfo) => {
        app.showGhibli(ghibiliInfo);
    })
}

// create an event listener, when the user clicks on the search button the value of the input[type:text].val will be stored in a variable userInput
// userInput will be used as a argument in a method that searches through the getGhibli array


// create a method that will take the user's input and search for it through the API's title and description
app.showGhibli = (ghibiliInfo) => {
    console.log(ghibiliInfo);
        $('#search').on('click', (e) => {
            e.preventDefault();
            console.log('click');
            // clear the results section on click from previous results displayed
            $("#results-container").html('');
            counter = 0
            const keyword = $('#user-input').val().toLowerCase();
            console.log(keyword)


            for (let i=0;i<ghibiliInfo.length;i++) {
                
                // create variables for the values of the titles and descriptions of each movie in the array object
                const filmTitle = ghibiliInfo[i].title.toLowerCase();
                const filmDescription = ghibiliInfo[i].description.toLowerCase();
                // create a conditional stating if the film title or description values match the keyword variable that was inputed by the user, display the film title, poster, rotten tomatoe score and year filmed
                if(filmTitle.includes(keyword) || filmDescription.includes(keyword)) {
                    let ghibiliResults = `
                            <li>
                                <h2>${filmTitle}</h2>
                                <div class ="film-title">
                                    <figure><img src=${ghibliPosters[filmTitle]} alt="${filmTitle} poster"></figure>
                                    <p>${ghibiliInfo[i].rt_score}</p>
                                    <p>${ghibiliInfo[i].release_date}</p>
                                </div>
                            </li>
                        `
                        // append elements to the results section
                        
                        $("#results-container").append(ghibiliResults);
                } else {
                    counter = counter + 1
                    console.log(counter);
                    if (counter===20){
                        $('#error-results').show();
                    }
                }
                
            }
        
            $('html').animate({
                scrollTop: $('#results-container').offset().top
            }, 1000);
        })
        // create event listener that hides the error-pop when clicked
        $('#agree').on('click', function() {
            $('#error-results').hide();
        })
}



app.init = function() {
    console.log('App is inititalized!')
}


$(function() {
    console.log('document is ready')
    app.init();
    app.getGhibli('films');
});

// create a app that will store the 











// landing page with a header, and some studio ghibili related animations
//  a p tag directing users to input keywords to search through the studio ghibili library

// A search bar that takes user's input and will parse through a studio ghibili API to locate movies based on movie titles and descriptions. 
// Add a button called search

// The search button will trigger an event listener, which will look through our API's film endpoint and search the objects title, description

// If the user's input matches a keyword in  the APi's movie title or description, display that movie below the search bar with the movie poster, description, release date, rotten tomatoe score.

// If the user's input doesn't match anything in the API,  create pop-up that indicates the user's input was not found, and recommend them keywords that we know will be recognized by the API. Have a button to exit the pop-up menu

// stretch goals
// To add a gallery that randomly displays 3 movies from the API list (use Math.Random)
// A secondary search/category app