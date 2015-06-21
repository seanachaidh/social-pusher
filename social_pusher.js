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

var TwitterApi = require('twitter-node-client').Twitter;

var success = function(data) {
	console.log("Error: [%s]", data);
};

var error = function(data) {
	console.log("Data: [%s]", data);
};

var config = [
	"consumerKey": "XXX",
	"consumerSecret": "XXX",
	"accessToken": "XXX",
	"accessTokenSecret": "XXX",
	"callBackUrl": "XXX"
];

var twitter = new TwitterApi(config);

twitter.getUserTimeline({screen_name: "Seanachaidh", count: '10'}, error, success);
