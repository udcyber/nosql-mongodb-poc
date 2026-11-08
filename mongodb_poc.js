// POC MongoDB — Document Database
// Projet NoSQL pour le dossier professionnel RNCP 5
// Démarrage : docker run -d -p 27017:27017 --name mongodb mongo:7

const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connecté à MongoDB');

    const db = client.db('buybye_logs');
    const collection = db.collection('user_activities');

    // 1. INSERT
    const activity = {
      userId: 'user_123',
      action: 'login',
      timestamp: new Date(),
      metadata: {
        ip: '192.168.1.10',
        userAgent: 'Mozilla/5.0',
        success: true
      },
      tags: ['auth', 'security']
    };

    const insertResult = await collection.insertOne(activity);
    console.log('Document inséré :', insertResult.insertedId);

    // 2. FIND
    const found = await collection.findOne({ userId: 'user_123' });
    console.log('Document trouvé :', found);

    // 3. UPDATE
    await collection.updateOne(
      { _id: insertResult.insertedId },
      { $set: { 'metadata.success': false, note: 'Tentative échouée' } }
    );
    console.log('Document mis à jour');

    // 4. Feature distinctive : requête sur document imbriqué
    const nestedQuery = await collection.find({
      'metadata.ip': '192.168.1.10'
    }).toArray();
    console.log('Requête sur champ imbriqué :', nestedQuery.length, 'résultat(s)');

    // 5. DELETE
    await collection.deleteOne({ _id: insertResult.insertedId });
    console.log('Document supprimé');

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
