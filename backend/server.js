import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/data', async (req, res) => {
  const url = 'https://dogapi.dog/api/v1/facts?number=5';

  const response = await fetch(url);
  const data = await response.json();

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});