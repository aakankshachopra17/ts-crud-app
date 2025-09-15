import express, { Request, Response } from "express";

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory "database"
let items: { id: number; name: string }[] = [];
let nextId = 1;

// CREATE
app.post("/items", (req: Request, res: Response) => {
  const { name } = req.body;
  const newItem = { id: nextId++, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ ALL
app.get("/items", (req: Request, res: Response) => {
  res.json(items);
});

// READ ONE
app.get("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

// UPDATE
app.put("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const item = items.find((i) => i.id === id);
  if (!item) return res.status(404).json({ message: "Item not found" });

  item.name = req.body.name || item.name;
  res.json(item);
});

// DELETE
app.delete("/items/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  items = items.filter((i) => i.id !== id);
  res.status(204).send();
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
