import { useParams } from "react-router-dom";
import NoteData from "../NoteData.ts";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NoteDetail() {
  const { id } = useParams<{ id: string }>();

  const note = NoteData.find((item) => item.id === Number(id));

  if (!note) {
    return <div className="p-5 text-white">Không tìm thấy ghi chú!</div>;
  }

  return (
    <div className="w-full flex flex-col gap-0.5">
      <div className="w-full border-b border-zinc-50 flex items-center justify-between px-4 pb-4 pt-4">
        <h1 className="text-[#FFFFFF] text-3xl font-bold flex-1 wrap-break-words pr-4">
          {note.title}
        </h1>
        <Link to={"/"} className="shrink-0">
          <ArrowLeft color="white" />
        </Link>
      </div>
      <textarea
        value={note.content}
        className="w-full bg-transparent text-[#FFFFFF] text-lg px-4 pt-2 resize-none focus:outline-none"
        rows={5}
      />
    </div>
  );
}
