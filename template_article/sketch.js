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
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    //Dernæst bygger du den query du vil udføre
    var query = "";
    query += "&noget=nogetandet";



    createElement("h1", "Spørg New York Times API");

    inp = createElement("input").changed(function () {
        query = "?q=" + inp.value();
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
        data.response.docs.forEach(function (e) {
            let card = createElement("div")
                .addClass("card blue-grey darken-1 waves-effect waves-block waves-light")
                .parent(col);
            let cardContent = createElement("div")
                .addClass("card-content white-text")
                .parent(card);

            createElement("h5", e.headline.main + "<i class='material-icons right'>more_vert</i>")
                .addClass("card-title activator")
                .parent(cardContent);
            
            createElement("div")
                .addClass("card-action")
                .parent(card)
                .child(
                    createA(e.web_url, "Læs artikel på NYT her")
                )

            let reveal = createElement("div").addClass("card-reveal").parent(card)
            createElement("span", "<i class='material-icons' right>close</i>").addClass("card-title").parent(reveal);
            createElement("span", e.snippet).parent(reveal)
        });
    }
}
