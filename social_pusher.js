/*
 * Prints all the tweets from the list.
 */

/*
Code of Elias Schroons

var tweets = [
  "To be or not to be. -- Sharekspeare",
  "Ship it -- some programmer",
  "Very few have succeeded -- Elias"
];

for(var i=0; i<tweets.length; i++) {
  console.log(tweets[i]);
}
*/
var Twitter = require('twitter');

var client = new Twitter({
	consumer_key : "igjbvR3gz4PHN6Pp12HXSEhuq",
	consumer_secret : '2DYm9rW36W2wl05iAhTmUaIgFxKMTwKU8I6B4NdOyDhvs1y55r',
	access_token_key : '380539574-SP19JHbxIokEoeHTlTUMmtVwIQ8wD4JICBwaEQaA',
	access_token_secret : 'fWNs7Xy5RVH4Wr3WyVNKJUyEslNzsSAbo8vPflNyGcmDN'
});


var params = {screen_name: 'seanachaidh'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
	if(!error) {
		console.log(tweets);
	}
});

