import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getNoteById } from "../utils/storage.ts";

export default function NoteDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isNew = !id || id === "new";

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!isNew && id) {
      const note = getNoteById(Number(id));
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      } else {
        alert("Không tìm thấy ghi chú");
        navigate("/");
      }
    }
  }, [id, isNew, navigate]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="w-full border-b border-zinc-50 flex items-center justify-between px-4 pb-4 pt-4">
        <input
          type="text"
          placeholder="Tiêu đề..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-[#FFFFFF] text-3xl font-bold flex-1 wrap-break-words pr-4"
        />

        <Link to={"/"} className="shrink-0">
          <ArrowLeft color="white" />
        </Link>
      </div>
      <textarea
        value={content}
        placeholder="Bắt đầu nhập ghi chú"
        onChange={(e) => setContent(e.target.value)}
        className="w-full bg-transparent text-[#FFFFFF] text-lg px-4 pt-2 resize-none focus:outline-none"
        rows={5}
      />
    </div>
  );
}
