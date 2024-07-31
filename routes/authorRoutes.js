// importiamo sempre express nei file di rotte
import express from "express";

const route = express.Router();
const authors = [
  {
    name: "Mario",
    surname: "Rossi",
    email: "mario@rossi",
    bornAge: "1990",
    avatar: "https://picsum.photos/200/300",
  },

  {
    name: "Maria",
    surname: "Bianchi",
    email: "maria@bianchi",
    bornAge: "1993",
    avatar: "https://picsum.photos/200/300",
  },
  {
    name: "Marco",
    surname: "Verdi",
    email: "marco@verdi",
    bornAge: "1991",
    avatar: "https://picsum.photos/200/300",
  },
];

//metodo get,post,put,delete accettano 2 parametri (req, res)
route.get("/", (req, res) => {
  res.send(authors);
});

route.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(authors[id]);
});

route.post("/", (req, res) => {
  res.send(authors);
});

route.put("/:id", (req, res) => {
  const id = req.params.id;
  res.send(authors[id]);
});

route.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(authors[id]);
});
export default route;
