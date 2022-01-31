function generate(){
    var quotes = {
        "-Albert Camus" : '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
        "Ronald Reagan" : '"The most terrifying words in the English language"',

    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}