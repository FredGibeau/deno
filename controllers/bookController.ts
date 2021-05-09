import { RouterContext } from "https://deno.land/x/oak@v7.4.0/mod.ts";
import Book from "../models/book.ts";

const books: Array<Book> = [{
  id: "1",
  title: "The Road to React",
}, {
  id: "2",
  title: "You Don't Know JS: Scope & Closures",
}, {
  id: "3",
  title: "Mastering Bitcoin",
}];

export const getBooks = (routerContext: RouterContext) => {
  routerContext.response.body = books;
};
