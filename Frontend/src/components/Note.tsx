import { Trash } from "lucide-react";

interface NoteProps {
  title: string;
  content: string;
  onDelete: () => void;
}

export default function Note({ title, content, onDelete }: NoteProps) {
  return (
    <div className="relative group border border-[#6D6D6D] rounded-lg w-64 h-56 p-4 flex flex-col justify-between hover:border-[#D3D3D3] transition-colors bg-zinc-900">
      <h2 className="text-[#FFFFFF] font-bold text-xl line-clamp-1 mb-2">
        {title}
      </h2>
      <p className="text-zinc-400 text-sm line-clamp-6 whitespace-pre-wrap">
        {content}
      </p>
      {onDelete && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation;
            onDelete();
          }}
          className="self-end text-zinc-500 hover:text-red-400 p-1.5 transition-colors cursor-pointer"
        >
          <Trash color="white" />
        </button>
      )}
    </div>
  );
}
