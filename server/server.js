const express = require('express');
const app = express();

app.listen(process.env.PORT, () => console.log(`app is listening running on port ${process.env.PORT}`));
