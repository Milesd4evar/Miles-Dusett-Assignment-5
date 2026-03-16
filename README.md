# Miles-Dusett-Assignment-5


## Overview
This project consists of Node.js scripts that query and manipulate a MongoDB database containing tweets from the 2020 IEEE VIS Conference.

## Data Loading Instructions
To load the dataset into MongoDB, ensure your database server is running and execute the following command in your terminal:

```bash
mongoimport -h localhost:27017 -d ieeevisTweets -c tweet --file ieeevis2020Tweets.dump
```

Setup
Clone this repository.

Install the required MongoDB driver:

Bash
npm install
##Execution
Each task is implemented in an individual script. Run them using the following commands:

#Query 1: node Query1.js

Count of tweets that are not retweets or replies.

#Query 2: node Query2.js

Top 10 screen names by number of followers.

#Query 3: node Query3.js

The person who posted the most tweets.

#Query 4: node Query4.js

Top 10 people with the highest average retweets (minimum of 3 tweets).

#Query 5: node Query5.js

Separates user information into a Users collection and references them in a Tweets_Only collection.

##Dependencies
Node.js
MongoDB
mongodb (npm package)
