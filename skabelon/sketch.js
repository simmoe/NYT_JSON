/*
Hvordan er deet nu jeg husker hvad jeg kan gøre med p5? JO: https://p5js.org/reference/#/libraries/p5.dom
*/

let inp;
let result, col;

function setup() {

    //Først en variabel til din api-key
    var apiKey = "g6R76FJJwgaLM8lQCROIJBHQY8BH3Brx";
    //Så en hemmelighed, som vi måske skal bruge
    var secret = "schyy";
    //Og nu til den base url der giver adgang til api'et 
    var url = "http://api.nytimes.com/svc/books/v3/reviews.json";
    //Dernæst bygger du den query du vil udføre
    var query = "?author=Jonathan+Safran+Foer";
    query += "&noget=nogetandet";



    createElement("h1", "Spørg New York Times API");
        
    inp = createElement("input").changed(function () {
        query = "?author=" + inp.value();
        loadJSON(url + query + "&api-key=" + apiKey, gotData);
    });

    result = createElement("div")
        .addClass("row");
        
    function gotData(data) {
        result.html("");
        col = createElement("div")
            .addClass("col s12 m6")
            .parent(result);
        console.log(data);
        createElement("h5", data.copyright)
            .parent(col);
        data.results.forEach(function (e) {
            let card = createElement("div")
            .addClass("card blue-grey darken-1")
            .parent(col);
            let cardContent = createElement("div")
                .addClass("card-content white-text")
                .parent(card);

            createElement("h5", e.book_title)
                .addClass("card-title")
                .parent(cardContent);

            createElement("p", e.summary)
                .parent(cardContent);

            createElement("div")
                .addClass("card-action")
                .parent(card)
                .child(
                    createA(e.url, "Læs anmeldelsen på NYT her")
                )
        });
    }
}
