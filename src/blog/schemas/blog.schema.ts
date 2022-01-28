/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const BlogSchema = new mongoose.Schema({
  // eslint-disable-next-line prettier/prettier
  title: String,
  description: String,
  body: String,
  author: String,
  date_posted: String,
});
