/*jshint esversion: 6 */

const app = express();
const port = 8000;

const messages = [];

app.get('/', (req, res) => {
  res.send(JSON.stringify(messages));//more about the send property
});



app.listen(port)
