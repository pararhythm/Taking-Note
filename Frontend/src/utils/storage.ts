import type { NoteItem } from "../types/note";

const STORAGE_KEY = "taking_note";

export const getNotes = (): NoteItem[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data) as NoteItem[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getNoteById = (id: number): NoteItem | undefined => {
  const notes = getNotes();
  return notes.find((item) => item.id === id);
};

export const createNote = (title: string, content: string): NoteItem => {
  const notes = getNotes();
  const newNote: NoteItem = {
    id: Date.now(),
    title: title.trim() || "Ghi chú không tiêu đề",
    content: content.trim(),
    createdAt: new Date().toISOString(),
  };
  const updatedNotes = [newNote, ...notes];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
  return newNote;
};

export const updateNote = (
  id: number,
  title: string,
  content: string,
): boolean => {
  const notes = getNotes();
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) return false;

  notes[index] = {
    ...notes[index],
    title: title.trim() || "Ghi chú không tiêu đề",
    content: content,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  return true;
};

export const deleteNote = (id: number): void => {
  const notes = getNotes();
  const filtered = notes.filter((n) => n.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};
