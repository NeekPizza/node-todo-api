const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Error connecting to the MongoDB server');
  }
  console.log('Connected to MongoDB')
  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false,
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert Todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Users').insertOne({
    name: 'Nick',
    age: 28,
    location: 'Austin, Tx',
  }, (err, result) => {
    if (err) {
      return console.log('Error saving user', err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  })

  client.close();
});
