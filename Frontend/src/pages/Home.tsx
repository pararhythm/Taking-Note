import Header from "../components/Header";

import Note from "../components/Note";

const Notes = [
  { id: 1, title: "Recipes", content: "Pepper, meat, noodles" },
  { id: 2, title: "Hello", content: "Hello world" },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <Header />
      <div className="flex gap-5 items-center justify-start p-5">
        {Notes.map((note) => (
          <Note key={note.id} title={note.title} content={note.content} />
        ))}
      </div>
    </main>
  );
}
