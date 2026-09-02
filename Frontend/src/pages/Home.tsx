import Header from "../components/Header";
import Note from "../components/Note";
import { Link } from "react-router-dom";
import NoteData from "../NoteData.ts";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-center  p-4">
        {NoteData.map((note) => (
          <Link to={`/note/${note.id}`} key={note.id}>
            <Note title={note.title} content={note.content} />
          </Link>
        ))}
      </div>
      <Plus className="bg-amber-50 absolute bottom-20 right-10 rounded-4xl w-16 h-16" />
    </main>
  );
}
