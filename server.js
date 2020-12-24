require("dotenv").config();

const express = require("express");
const path = require("path");
const { dbConnect } = require("./lib/database");
const {
  createObject,
  getObjects,
  getUserById,
  updateUserById,
  getItemsByCategory,
  getItemById,
} = require("./lib/api");

const app = express();
app.use(express.json());
const port = process.env.PORT || 3600;

const allowedCollections = ["users", "members", "items", "orders", "customers"];
allowedCollections.forEach((collection) => {
  app
    .route(`/api/${collection}`)
    .get(async (req, res) => {
      try {
        const collectionObjects = await getObjects(`${collection}`);
        res.send(collectionObjects);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .send("An unexpected error occured. Please try again later!");
      }
    })
    .post(async (req, res) => {
      try {
        await createObject(req, collection);
        res.send(`Successfully updated collection: ${collection}`);
      } catch (error) {
        console.error(error);
        res
          .status(500)
          .send("An unexpected error occured. Please try again later!");
      }
    });
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const users = await getUserById(id);
      res.send(users);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("An unexpected error occured. Please try again later!");
    }
  })
  .put(async (req, res) => {
    const { id } = req.params;
    try {
      await updateUserById(req.body, id);
      res.send(`Successfully updated userId: ${id}`);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("An unexpected error occured. Please try again later!");
    }
  });

app.route("/api/category/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const users = await getItemsByCategory(id);
    res.send(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An unexpected error occured. Please try again later!");
  }
});

app.route("/api/items/:id").get(async (req, res) => {
  const { id } = req.params;
  try {
    const users = await getItemById(id);
    res.send(users);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("An unexpected error occured. Please try again later!");
  }
});

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(
  "/storybook",
  express.static(path.join(__dirname, "client/storybook-static"))
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

async function runDatabase() {
  try {
    await dbConnect(process.env.DB_URI, process.env.DB_NAME);
    console.log("Connecting to database ...");
    console.log("Connected to database");
    console.log(`API listening at http://localhost:${port}`);
  } catch (error) {
    console.error(error);
  }
}
runDatabase();
