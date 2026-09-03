import { useState, useEffect } from "react";
import { getNotes, deleteNote } from "../utils/storage";
import Header from "../components/Header";
import Note from "../components/Note";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import type { NoteItem } from "../types/note.ts";

export default function Home() {
  const [notes, setNotes] = useState<NoteItem[]>([]);
  useEffect(() => {
    setNotes(getNotes());
  });

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có muốn xóa ghi chú này?")) {
      deleteNote(id);
      setNotes((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <main>
      <Header />
      {notes.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-zinc-400">
          <p className="text-lg">Chưa có ghi chú nào.</p>
          <p className="text-sm">Bấm dấu + ở góc dưới để tạo ghi chú mới!</p>
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-6 p-6 items-start">
          {notes.map((note) => (
            <Link to={`/note/${note.id}`} key={note.id}>
              <Note
                title={note.title}
                content={note.content}
                onDelete={() => handleDelete(note.id)}
              />
            </Link>
          ))}
        </div>
      )}
      <Link
        to="/note/new"
        className="fixed bottom-10 right-10 bg-[#FFFFFF] hover:bg-[#D3D3D3] text-zinc-950 p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center cursor-pointer"
      >
        <Plus />
      </Link>
    </main>
  );
}
