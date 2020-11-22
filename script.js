// create namespace object
const app = {}

// this hides the error message + description pop-up until its called on in the if conditional statement
$('#error-results').hide();
$('#description-box').hide();

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
    "princess mononoke": "./assets/mononoke.jpg",
    "my neighbors the yamadas": "./assets/yamadas.jfif",
    "spirited away": "./assets/spirited.jfif",
    "the cat returns": "./assets/cat.jpg",
    "howl's moving castle": "./assets/howl.jfif",
    "tales from earthsea": "./assets/earthsea.jfif",
    "ponyo": "./assets/ponyo.jpg",
    "arrietty": "./assets/arrietty.jfif",
    "from up on poppy hill": "./assets/poppy.jpg",
    "the wind rises": "./assets/wind.jpg",
    "the tale of the princess kaguya": "./assets/kaguya.jfif",
    "when marnie was there": "./assets/marnie.jfif"
}

// define a method  on our app object which will make a asynchronous request for our API films
// create .then to call app

app.getGhibli = (topic) => {
    $.ajax({
        url: `https://ghibliapi.herokuapp.com/${topic}`,
        method: 'GET',
        dataType: 'json',
    }).then((ghibiliInfo) => {
        app.showGhibli(ghibiliInfo);
        app.showGhibliDescription(ghibiliInfo);
    })
}



// create an event listener, when the user clicks on the search button the value of the input[type:text].val will be stored in a variable userInput

// userInput will be used as an argument in a method that searches through the getGhibli array
// create a method that will take the user's input and search for it through the API's title and description

app.showGhibli = (ghibiliInfo) => {

    $('#search').on('click', (e) => {

        //prevent default functionality aka the page reloading on click. 

        e.preventDefault();

        // clear the results section on click from previous results displayed
        $('#results-container').html('');

        let noResults = 0

        // create a variable that will hold the value of the word the user inputs and transform it to lowercase
        const keyword = $('#user-input').val().toLowerCase();

        // a for loop that will search through the API content (arrays) 

        for (let i = 0; i < ghibiliInfo.length; i++) {

            // create variables for the values of the titles and descriptions of each movie in the array object
            const filmTitle = ghibiliInfo[i].title.toLowerCase();
            const filmDescription = ghibiliInfo[i].description.toLowerCase();

            // Error proofing: create a conditional that states if nothing (an empty string) is entered into the search bar, the error pop-up menu is triggered.
            if (keyword === '' || keyword === '!') {

                $('#error-results').show();
=======
// userInput will be used as a argument in a method that searches through the getGhibli array

// create a method that will take the user's input and search for it through the API's title and description
app.showGhibli = (ghibiliInfo) => {
    $('#search').on('click', (e) => {
        e.preventDefault();
        // clear the results section on click from previous results displayed
        $('#results-container').html('');
        noResults = 0
        const keyword = $('#user-input').val().toLowerCase();
        for (let i=0;i<ghibiliInfo.length;i++) {
            
            // create variables for the values of the titles and descriptions of each movie in the array object
            const filmTitle = ghibiliInfo[i].title.toLowerCase();
            const filmDescription = ghibiliInfo[i].description.toLowerCase();
            
            // Error proofing: create a conditional that states if nothing (an empty string) is entered into the search bar, the error pop-up menu is triggered.

            if (keyword === '' || keyword === '!') { 
                $('#error-results').show();
                
                // create a conditional stating if the film title or description values match the keyword variable that was inputed by the user, display the film title, poster, rotten tomatoe score and year filmed

            }  else if (filmTitle.includes(keyword) || filmDescription.includes(keyword)) {
                let ghibiliResults = `
                        <li>
                        <figure><img src=${ghibliPosters[filmTitle]} alt="${filmTitle} poster"></figure>
                            <div class ="film-title">
                                <h2>${filmTitle}</h2>
                                <p>Rotten Tomatoes: ${ghibiliInfo[i].rt_score}</p>
                                <p>Release Date: ${ghibiliInfo[i].release_date}</p>
                            </div>
                        </li>
                    `
                // append elements to the results section
                $("#results-container").append(ghibiliResults);
            
                // If no results are found, error pop-up is triggered.  

            } else {
                noResults = noResults + 1
                if (noResults === ghibiliInfo.length){
                    $('#error-results').show();
                }
            }
        
        }
    
        $('html').animate({
            scrollTop: $('#results-container').offset().top
        }, 1000);
    })
}

app.showGhibliDescription = (ghibiliInfo) => { 
    console.log(ghibiliInfo);
// create event listener on image ul that triggers film description pop-up 
    $('#results-container').on('click', 'li', function(){
        
        let descriptionFilmTitle = $(this).find("h2").text();

            for (let i = 0; i < ghibiliInfo.length; i++) {

                const filmTitle = ghibiliInfo[i].title.toLowerCase();

            if (filmTitle.includes(descriptionFilmTitle)) {

                let insertDescription = `
                    <div>
                        <h2>${ghibiliInfo[i].title}</h2>
                        <p>"${ghibiliInfo[i].description}"</p>
                        <button id="thanks" class="thanks">Thanks!</button>
                    </div>
                `
                $('#description-box').html(insertDescription)
            }

        }

        $('#description-box').show();

    })
}
    
        // Create event listener that hides the film description pop-up when clicked
        $('#description-box').on('click', "#thanks", function () {

                // create a conditional stating if the film title or description values match the keyword variable that was inputed by the user, display the film title, poster, rotten tomato score and year filmed
            } else if (filmTitle.includes(keyword) || filmDescription.includes(keyword)) {
                let ghibiliResults = `
                        <li>
                        <figure><img src=${ghibliPosters[filmTitle]} alt="${filmTitle} poster"></figure>
                            <div class ="film-title">
                                <h2>${filmTitle}</h2>
                                <p>Rotten Tomatoes: ${ghibiliInfo[i].rt_score}</p>
                                <p>Release Date: ${ghibiliInfo[i].release_date}</p>
                            </div>
                        </li>
                    `
                // append elements to the results section
                $("#results-container").append(ghibiliResults);

                // If no results are found, error pop-up is triggered.  
            } else {
                noResults = noResults + 1
                if (noResults === ghibiliInfo.length) {
                    $('#error-results').show();
                }
            }
        }
        $('html').animate({
            scrollTop: $('#results-container').offset().top
        }, 1000);
    })
}


app.showGhibliDescription = (ghibiliInfo) => {
    console.log(ghibiliInfo);

    // create event listener on image ul that triggers film description pop-up 
    $('#results-container').on('click', 'li', function () {
        let descriptionFilmTitle = $(this).find("h2").text();
        for (let i = 0; i < ghibiliInfo.length; i++) {
            const filmTitle = ghibiliInfo[i].title.toLowerCase();
            if (filmTitle.includes(descriptionFilmTitle)) {
                let insertDescription = `
                    <div>
                        <h2>${ghibiliInfo[i].title}</h2>
                        <p>"${ghibiliInfo[i].description}"</p>
                        <button id="thanks" class="thanks">Thanks!</button>
                    </div>
                `
                $('#description-box').html(insertDescription)
            }
        }
        $('#description-box').show();
    })
}

// Create event listener that hides the film description pop-up when clicked
$('#description-box').on('click', "#thanks", function () {
    $('#description-box').hide();
})

// create event listener that hides the error pop-up when clicked
$('#agree').on('click', function () {
    $('#error-results').hide();
})

app.init = function () {
    app.getGhibli('films');
}

$(function () {
    app.init();
});

            $('#description-box').hide();
        })

        // create event listener that hides the error pop-up when clicked
        $('#agree').on('click', function () {
            $('#error-results').hide();
        })


    app.init = function() {
        app.getGhibli('films');
    }

$(function() {
    app.init();
});


