interface NoteProps {
  title: string;
  content: string;
}

export default function Note({ title, content }: NoteProps) {
  <div className="border-[#6D6D6D]">
    <h2>{title}</h2>
    <textarea name="content" id="content">
      {content}
    </textarea>
  </div>;
}
