const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Error connecting to the MongoDB server');
  }
  console.log('Connected to MongoDB')
  const db = client.db('TodoApp');

  db.collection('Todos').find({
    _id: new ObjectID('5c6e32287ab6e40d5f854223')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => console.log('Unable to fetch todos', err));

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}` );
  }, (err) => console.log('Unable to fetch todos', err));

  db.collection('Users').find({name: 'Nick'}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => console.log('Unable to fetch todos', err));

  // client.close();
});
