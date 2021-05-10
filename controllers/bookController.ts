import { RouterContext } from "https://deno.land/x/oak@v7.4.0/mod.ts";
import Book from "../models/book.ts";
import MongoClient from "../mongoClient.ts";

const bookCollection = MongoClient.collection("books");

export const getBooks = async (ctx: RouterContext) => {
  const rooms = await bookCollection.find();
  ctx.response.body = rooms;
};

export const createBooks = async (ctx: RouterContext) => {
  const { title } = await ctx.request.body().value;

  const book: Book = {
    id: title,
    title,
  };

  await bookCollection.insertOne(book);
  ctx.response.status = 201;
  ctx.response.body = book;
};
