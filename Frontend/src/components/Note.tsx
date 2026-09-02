interface NoteProps {
  title: string;
  content: string;
}

export default function Note({ title, content }: NoteProps) {
  return (
    <div className="border border-[#6D6D6D] rounded-sm w-2xs h-56 p-1">
      <h2 className="text-[#FFFFFF] font-bold text-2xl">{title}</h2>
      <p className="text-[#FFFFFF] w-2xs h-50">{content}</p>
    </div>
  );
}
