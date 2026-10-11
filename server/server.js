const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let notes = [
  { id: '1', title: 'Підготувати звіт з практики Ч.3', content: 'Оформити титульний аркуш та лістинги.', category: 'Навчання', tags: ['практика','react'], isPinned: true, createdAt: '2026-03-12T10:00:00Z' },
  { id: '2', title: 'Налаштувати Dependency Injection', content: 'Створити ServiceContainer.', category: 'Розробка', tags: ['react','di'], isPinned: false, createdAt: '2026-03-15T12:00:00Z' },
  { id: '3', title: 'Купити підручник з алгоритмів', content: 'Замовити книгу Томаса Кормена.', category: 'Особисте', tags: ['книги'], isPinned: false, createdAt: '2026-03-18T09:00:00Z' }
];

app.get('/api/notes', (req, res) => res.json(notes));
app.post('/api/notes', (req, res) => {
  const newNote = { id: Date.now().toString(), ...req.body, createdAt: new Date().toISOString() };
  notes.unshift(newNote);
  res.status(201).json(newNote);
});
app.put('/api/notes/:id', (req, res) => {
  const idx = notes.findIndex(n => n.id === req.params.id);
  if (idx !== -1) notes[idx] = { ...notes[idx], ...req.body };
  res.json(notes[idx] || {});
});
app.delete('/api/notes/:id', (req, res) => {
  notes = notes.filter(n => n.id !== req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
