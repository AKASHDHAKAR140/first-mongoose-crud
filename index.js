const express = require("express");
require("./db/connection");
const UserList1 = require("./models/signup2");
const router = require("./service");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3080;
app.use(cors())
app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
