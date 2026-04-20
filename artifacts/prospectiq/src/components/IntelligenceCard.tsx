import { useState } from "react";
import { RefreshCw } from "lucide-react";

interface SignalItem {
  text: string;
  source: string;
  confidence: number;
  freshness: string;
}

interface IntelligenceCardProps {
  title: string;
  icon: string;
  borderColor: string;
  bgColor: string;
  headerTextColor: string;
  dataSource: string;
  lastRefreshed: string;
  signals: SignalItem[];
}

function ConfidenceBar({ value }: { value: number }) {
  const color =
    value >= 95 ? "bg-green-500" : value >= 85 ? "bg-blue-500" : "bg-amber-500";
  return (
    <div className="flex items-center gap-1.5 mt-1">
      <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-[9px] font-semibold text-gray-400 w-6 text-right">{value}%</span>
    </div>
  );
}

export function IntelligenceCard({
  title,
  icon,
  borderColor,
  bgColor,
  headerTextColor,
  dataSource,
  lastRefreshed,
  signals,
}: IntelligenceCardProps) {
  const [refreshing, setRefreshing] = useState(false);
  const [refreshedAt, setRefreshedAt] = useState(lastRefreshed);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setRefreshedAt("Just now");
    }, 1400);
  };

  return (
    <div className={`bg-white rounded-lg border border-border shadow-xs overflow-hidden border-l-4 ${borderColor}`}>
      <div className={`px-3 py-2.5 ${bgColor} border-b border-border`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm">{icon}</span>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${headerTextColor}`}>
              {title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="relative flex h-1.5 w-1.5">
                {!refreshing && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                )}
                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${refreshing ? "bg-amber-400" : "bg-green-500"}`} />
              </span>
              <span className="text-[9px] text-gray-400 font-medium">
                {refreshing ? "Fetching…" : refreshedAt}
              </span>
            </div>
            <button
              onClick={handleRefresh}
              className="p-1 rounded hover:bg-white/60 transition-colors"
              title={`Refresh from ${dataSource}`}
            >
              <RefreshCw
                size={10}
                className={`text-gray-400 hover:text-gray-600 ${refreshing ? "animate-spin" : ""}`}
              />
            </button>
          </div>
        </div>
        <div className="mt-1">
          <span className="text-[9px] text-gray-400 font-medium">via {dataSource}</span>
        </div>
      </div>

      <div className="px-3 py-3 space-y-3">
        {signals.map((signal, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-[11px] text-gray-700 leading-relaxed">{signal.text}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-medium bg-gray-100 text-gray-500 border border-gray-200">
                  {signal.source}
                </span>
                <span className="text-[9px] text-gray-400">{signal.freshness}</span>
              </div>
              <ConfidenceBar value={signal.confidence} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
