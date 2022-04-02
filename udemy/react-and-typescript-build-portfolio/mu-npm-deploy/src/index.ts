#!/usr/bin/env node

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('HI THERE');
});

app.listen(3005, () => {
  console.log('LISTENING ON PORT 3005');
});
