import React from 'react';

export const NoteCard = ({ note, onEdit, onDelete, onTogglePin }) => {
  return (
    <div className={`note-card ${note.isPinned ? 'pinned' : ''}`}>
      <div className="note-card__header">
        <span className="note-card__category">{note.category}</span>
        <button className={`pin-btn ${note.isPinned ? 'active' : ''}`} onClick={() => onTogglePin(note)}>
          📌
        </button>
      </div>
      <h3 className="note-card__title">{note.title}</h3>
      <p className="note-card__content">{note.content}</p>
      <div className="note-card__footer">
        <span className="date">{new Date(note.createdAt).toLocaleDateString('uk-UA')}</span>
        <div className="actions">
          <button onClick={() => onEdit(note)}>Редагувати</button>
          <button onClick={() => onDelete(note.id)}>Видалити</button>
        </div>
      </div>
    </div>
  );
};
