const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  try {
    await client.connect();
    const db = client.db('ieeevisTweets');
    const result = await db.collection('tweet').aggregate([
      { $group: { _id: "$user.screen_name", tweetCount: { $sum: 1 } } },
      { $sort: { tweetCount: -1 } },
      { $limit: 1 }
    ]).toArray();
    console.log(result[0]);
  } finally {
    await client.close();
  }
}
main();