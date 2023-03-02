import express from 'express';
import cors from 'cors';
import booklist from './books.js';
import path from 'path';
/**
 * Initial steps: 
 * go into folder on command line, do npm init, npm install express, npm install nodemon --save-dev
 * 
 * Code to get a simple server running
 * source: https://dev.to/miku86/nodejs-how-to-create-a-simple-server-using-express-1n9d#:~:text=Write%20a%20simple%20script&text=%2F%2F%20import%20express%20(after%20npm,res)%20%3D%3E%20%7B%20res.
 */

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = 5001;

app.use(cors(PORT));
app.use(express.json());

// create a route for the app
app.get('/', (request, response) => {
  return response.send('Hello. This is the default home page!');
});

// create a route to books for the app 
app.get('/books/', (request, response) => {
    return response.json(booklist);
});

// get method by isbn 
app.get('/books/:ID', (request, response) => {
    // store isbn in a variable 
    let bookISBN = request.params.ID;
    
    //iterate through booklist to find the book with the matching isbn 
    for(let i = 0; i < booklist.length; i++) {
        if(booklist[i]['isbn'] == bookISBN) {
            return response.send(`Book Title: ${booklist[i].title} 
            ISBN Code: ${booklist[i].isbn}
            Author: ${booklist[i].author}
            Publisher: ${booklist[i].publisher}`);
        }
    }
    // the book was not found message 
    return response.status(400).send(`The Book ISBN (${bookISBN}) you tried looking for was not found`);
});

app.post('/books/', (request, response) => {
    // store request body in variable
    let body = request.body; 

    const newBookObj = {
        "title": body.title,
        "isbn": body.isbn,
        "author": body.author,
        "publisher": body.publisher
    }
    booklist.push(newBookObj);
    return response.json(booklist);
});

app.put('/books/:ID', (request, response) => {
    // store isbn in variable 
    let bookISBN = request.params.ID;
        
    // store request body in variable
    let body = request.body; 
    
    //iterate through booklist to find the book with the matching isbn 
    for(let i = 0; i < booklist.length; i++) {
        // find the book to update
        if(booklist[i]['isbn'] == bookISBN) {
            console.log("i am in here");
            booklist[i]['title'] = body.title;
            booklist[i]['isbn'] = body.isbn;
            booklist[i]['author'] = body.author,
            booklist[i]['publisher'] = body.publisher
            return response.json(booklist);
        }
    }
    
    // the book was not found message 
    return response.status(400).send(`The Book ISBN (${bookISBN}) you tried looking for was not found`);
});

app.delete('/books/:ID', (request, response) => {
    // store isbn in a variable 
    let bookISBN = request.params.ID;

    //iterate through booklist to find the book with the matching isbn 
    for(let i = 0; i < booklist.length; i++) {
        if(booklist[i].isbn == bookISBN) {
            let deletedBook = booklist[i];
            booklist.splice(i, 1);
            // response.json(booklist); 
            return response.send(`The book that was deleted was: ${deletedBook.title} by ${deletedBook.author}.`);
        }
    }
    return response.status(400).send(`The Book ISBN (${bookISBN}) you tried looking for was not found`);
})

app.use((request, response) =>{
    response.status(404).sendFile(("/Users/rubymarroquin/techtonica-assignments/rest-api-project/client/404.html")); 
})

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});