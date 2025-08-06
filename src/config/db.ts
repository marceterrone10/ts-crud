import mongoose from 'mongoose';
import { MONGO_URI } from './environments';

export const connection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB successfully');
    } catch ( error ) {
        console.log('Error connecting to MongoDB:', error);
    }
};