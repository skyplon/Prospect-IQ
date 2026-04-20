import { RefreshCw } from "lucide-react";

interface EmailSectionProps {
  label: string;
  content: string;
  onRegenerate?: () => void;
}

export function EmailSection({ label, content, onRegenerate }: EmailSectionProps) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          {label}
        </span>
        <button
          onClick={onRegenerate}
          className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[10px] text-gray-400 hover:text-gray-600 px-1.5 py-0.5 rounded hover:bg-gray-100"
        >
          <RefreshCw size={9} />
          <span>Regenerate</span>
        </button>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}
