const connectDB = require('./startup/db')


connectDB()

app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port,() => {
  console.log(`Server started on port: ${port}`)

});