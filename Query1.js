const { MongoClient } = require('mongodb');

async function main() {
  const client = new MongoClient('mongodb://127.0.0.1:27017');
  try {
    await client.connect();
    const db = client.db('ieeevisTweets');
    const count = await db.collection('tweet').countDocuments({
      retweeted_status: { $exists: false },
      in_reply_to_status_id: null
    });
    console.log(count);
  } finally {
    await client.close();
  }
}
main();
