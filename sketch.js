function setup() {

    //Først en variabel til din api-key
    var apiKey = "schyy";    
    //Så en hemmelighed, som vi måske skal bruge
    var secret = "schyy";
    //Og nu til den base url der giver adgang til api'et 
    var url = "http://api.nytimes.com/svc/books/v3/reviews.json";
    //Dernæst bygger du den query du vil udføre
    var query = "?author=Jonathan+Safran+Foer";
        query += "&noget=nogetandet";
    
    
    
    createElement("h1", "Spørg New York Times API");
    
    
    
    loadJSON(url + query + "&api-key=" + apiKey, gotData);
    
    function gotData(data) {
        console.log(data);
        createElement("h5", data.copyright);
        data.results.forEach(function(e){
            createElement("h5", e.book_title);
        });
    }
}