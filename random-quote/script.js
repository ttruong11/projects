function generate(){
    var quotes = {
        "-Dave Cusack": '"2 plus 2 = 4 minus 1 = 3 quick maffs"',
        "-Robbie Butchart" : '"Okay, what resources do you need to get this done by tonight"',
        "-Jason Swanson" : '"Some irrelevant sports quote"',

    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;

}