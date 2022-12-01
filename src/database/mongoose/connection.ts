import mongoose, { ConnectOptions } from 'mongoose';
import { config } from '../../config';

const { db_url } = config;

console.log(db_url, 'db')

const connect = async (): Promise<any> => {
  const db = await mongoose.connection;

  mongoose.connection.on('open', () => {
    process.stdout.write('Connected to mongo server.\n');
  });

  await mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  } as ConnectOptions);
 
  return db;
};

const connection = connect();

export { connection, connect };

