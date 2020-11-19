// create namespace object

const app = {}

// store our api key in our app object

// store end point in app object

app.appUrl = "https://ghibliapi.herokuapp.com"

// define a method  on our app object which will make a asynchronous request for our API films
// create .then to call app

app.apiUrl = 'https://ghibliapi.herokuapp.com';

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
            const keyword = $('#user-input').val().toLowerCase();
            console.log(keyword)
            for (let i=0;i<ghibiliInfo.length;i++) {
                const filmTitle = ghibiliInfo[i].title.toLowerCase();
            
                if(filmTitle.includes(keyword)){

                    console.log(ghibiliInfo[i])

                    // ghibiliInfo[i].forEach((film) => { 
                    //     let ghibiliResults = `
                    //         <li>
                    //             <h2>${film.title}</h2>
                    //             <div class ="film-title">
    
                    //                 <p>${film.rt_score}</p>
                    //                 <p>${film.release_date}</p>
    
                    //             </div>
                    //         </li>
                    //     `
                        // $("#results-container").append(ghibiliResults);
    
                        // console.log(ghibiliInfo[i])
                        

                    // })
                    
                } else {
                    console.log("Boooo")
                }
                
            }
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