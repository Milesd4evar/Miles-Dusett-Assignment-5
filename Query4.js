const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  try {
    await client.connect();
    const db = client.db('ieeevisTweets');

    await db.collection('tweet').aggregate([
      { $group: { _id: "$user.id", user: { $first: "$user" } } },
      { $replaceRoot: { newRoot: "$user" } },
      { $out: "Users" }
    ]).toArray();

    await db.collection('tweet').aggregate([
      { $project: {
          user_id: "$user.id",
          text: 1,
          created_at: 1,
          retweet_count: 1,
          favorite_count: 1,
          entities: 1
      } },
      { $out: "Tweets_Only" }
    ]).toArray();

    console.log("Success");
  } finally {
    await client.close();
  }
}
main();