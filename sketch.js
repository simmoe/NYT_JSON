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
    let searchInput, resultDiv;

    //Testing
    loadJSON(url + query + "&api-key=" + apiKey, gotData);
    
    
    
    createElement("h1", "Spørg New York Times forfatter API");

    searchInput = createElement("input")
        .attribute("placeholder", "Skriv forfatternavn og tryk ENTER")
        .addClass("searchInput")
        .changed(function(){
            query = "?author=" + searchInput.value();
            loadJSON(url + query + "&api-key=" + apiKey, gotData);
        });
    
    resultDiv = createElement("section");
    
    function gotData(data) {
        console.log(data);
        resultDiv.html("");
        createElement("h3", "<br><hr/>Søgning på: " + searchInput.value())
            .parent(resultDiv);
        createElement("h4", data.copyright + "<hr/><br/>").parent(resultDiv);
        let row = createElement("div").addClass("row").parent(resultDiv);
        data.results.forEach(function(e){
            let card = createElement("div")
                .addClass("card")
                .parent(row);
            card.child(createElement("h3", e.book_title)
                .addClass("section dark"));
            card.child(createElement("p", "Published: " + e.publication_dt));
            card.child(createElement("p", e.summary));
            card.child(createA(e.url, "Read review"));
        });
    }
}