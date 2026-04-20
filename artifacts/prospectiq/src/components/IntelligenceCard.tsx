import { RefreshCw } from "lucide-react";

interface SignalItem {
  text: string;
  source: string;
}

interface IntelligenceCardProps {
  title: string;
  icon: string;
  borderColor: string;
  bgColor: string;
  headerTextColor: string;
  signals: SignalItem[];
}

export function IntelligenceCard({
  title,
  icon,
  borderColor,
  bgColor,
  headerTextColor,
  signals,
}: IntelligenceCardProps) {
  return (
    <div className={`bg-white rounded-lg border border-border shadow-xs overflow-hidden border-l-4 ${borderColor}`}>
      <div className={`px-4 py-3 ${bgColor} border-b border-border`}>
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className={`text-xs font-semibold uppercase tracking-wider ${headerTextColor}`}>
            {title}
          </span>
        </div>
      </div>
      <div className="px-4 py-3 space-y-3">
        {signals.map((signal, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-gray-700 leading-relaxed">{signal.text}</p>
              <span className="inline-flex items-center mt-1 px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-500 border border-gray-200">
                {signal.source}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
