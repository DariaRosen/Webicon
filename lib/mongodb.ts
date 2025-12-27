import { MongoClient, Db } from 'mongodb';

// Support both MONGODB_URI and MONGO_URL for flexibility
const uri: string | undefined = process.env.MONGODB_URI || process.env.MONGO_URL;
const options = {};

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

if (uri) {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    let globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
} else {
  console.warn('MONGODB_URI or MONGO_URL is not set. MongoDB features will be disabled.');
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

// Helper function to get the database
export async function getDatabase(): Promise<Db | null> {
  if (!clientPromise) {
    console.warn('MongoDB is not configured. Returning null.');
    return null;
  }
  try {
    const client = await clientPromise;
    // Support both MONGODB_DB_NAME and MONGO_DB_NAME
    const dbName = process.env.MONGODB_DB_NAME || process.env.MONGO_DB_NAME || 'webicon';
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return null;
  }
}

