const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  try {
    await client.connect();
    const db = client.db('ieeevisTweets');
    const results = await db.collection('tweet').aggregate([
      { $group: { _id: "$user.screen_name", followers: { $max: "$user.followers_count" } } },
      { $sort: { followers: -1 } },
      { $limit: 10 }
    ]).toArray();
    console.table(results);
  } finally {
    await client.close();
  }
}
main();
