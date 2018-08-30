// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
    {quote: 'You know you\'re in love when you can\’t fall asleep because reality is finally better than your dreams.', source: 'Dr.Suess', },
    {quote: 'Get busy living or get busy dying.', source: 'Stephen King', },         
    {quote: 'Great mind discuss ideas; average minds discuss events; small minds discuss people.', source: 'Elanore Roosevelt', },
    {quote: 'Love is a serious mental disease.', source: 'Plato', },
    {quote: 'I say to you today, my friends, that in spite of the difficulties and fustrations of the moment, I stil have a dream.', source: 'Marin Luther King, Jr.', citation: '(I Have A Dream Speech)', },
    {quote: 'Only I can change my ife. No one can do it for me', source: 'Carol Burnett', },
    {quote: 'Set your goals high, and don\'t stop till you get there.', source: 'Bo Jackson', },
    {quote: 'If you dream it, you can do it.', source: 'Walt Disney', }
]

console.log(quotes);

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array){
    return quotes[Math.floor(Math.random() * quotes.length)];
}


// Create the printQuote funtion and name it printQuote
function printQuote(){
    var randomQuote = getRandomQuote(quotes); 
    message = "<p class='quote'>"+ result.quote + "</p>";
    message+= "<p class = 'source'>"+ result.author + "</p";
    message+= "<span class='citation'> "+'<i>'+ result.citation+'</i>' + "</span>"
    message+="<span class='year'> "+ result.year + "</span>"
    document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);