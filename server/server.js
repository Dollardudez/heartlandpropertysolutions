const port = process.env.PORT || 3000;

// Create the server
const app = require('./app');

// Start listening for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});