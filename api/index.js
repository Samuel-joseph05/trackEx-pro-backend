import app from "../app.js";
import connectDB from "../config/db.js";

const handler = async (req, res) => {
  await connectDB();
  return app(req, res);
};

app.get("/", (req, res) => {
  res.send("Welcome to TrackEx API");
});

export default handler;