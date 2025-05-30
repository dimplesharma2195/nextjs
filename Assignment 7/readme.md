# Answers

## Video 26 – Next.js API Routes
1. **How are these API routes different from page routes? Will they also be rendered?**  
   - API routes live under `pages/api/...` and are treated as serverless functions, returning data (JSON, text, etc.) instead of HTML.  
   - They are not statically generated or client-side rendered like page routes—they run on the server when invoked via an HTTP request.

2. **What are the arguments of the handler function?**  
   - `req`: an enhanced `http.IncomingMessage` object containing request data.  
   - `res`: an enhanced `http.ServerResponse` object for sending back a response.

3. **What does `req.method` give?**  
   - A string with the HTTP method of the request (e.g. `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`).

4. **What does `req.body` give?**  
   - The parsed request body payload (e.g. the JSON sent in a POST). For GET requests, it will typically be empty or undefined.

---

## Video 27 – MongoDB Basics
1. **What is MongoDB?**  
   - A NoSQL document database that stores records in flexible, JSON-like documents rather than fixed tables.

2. **Why should we not expose MongoDB credentials to the client side?**  
   - Exposing credentials allows anyone to connect to and manipulate your database, leading to data breaches or unauthorized data modifications.

3. **How to insert data into MongoDB (server-side)?**  
   ```js
   import { MongoClient } from 'mongodb';

   const client = await MongoClient.connect('YOUR_MONGO_URI');
   const db = client.db();
   const collection = db.collection('meetups');
   const result = await collection.insertOne(meetupData);
   client.close();
   ```

---

## Video 28 – Calling the Backend from the Frontend
1. **How can we call the backend we just created? What is the route?**  
   - Call the API route you created, e.g. `fetch('/api/meetups')`.

2. **How to do a POST request with `fetch`?**  
   ```js
   fetch('/api/meetups', {
     method: 'POST',
     body: JSON.stringify(meetupData),
     headers: { 'Content-Type': 'application/json' }
   });
   ```

3. **What is the body which is sent from the frontend?**  
   - A JSON-stringified object containing the new meetup details, for example:
     ```json
     {
       "title": "My Meetup",
       "image": "https://example.com/img.jpg",
       "address": "123 Main St",
       "description": "A cool event"
     }
     ```
