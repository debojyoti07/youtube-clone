const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/videos", require("./routes/videoRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));
app.use("/api/channels", require("./routes/channelRoutes"));

app.get("/", (req, res) => {
  res.send("YouTube Clone API Running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
