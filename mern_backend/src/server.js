import config from "./config/config";
import app from "./express";

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }

  console.info("Server started on port %s.", config.port);
});

import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully..."))
  .catch(() => console.log(`Error connecting to MongoDB ${config.mongoUrl}`));
  