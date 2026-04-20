import { useState, useEffect } from "react";
import { RefreshCw, Wifi, WifiOff, Activity } from "lucide-react";
import { DATA_SOURCES, type DataSource } from "@/data/prospect";

function StatusDot({ status }: { status: DataSource["status"] }) {
  if (status === "live") {
    return (
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
    );
  }
  if (status === "syncing") {
    return (
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
      </span>
    );
  }
  return <span className="inline-flex rounded-full h-2 w-2 bg-gray-300" />;
}

export function DataSourcesBar() {
  const [refreshing, setRefreshing] = useState<string | null>(null);
  const [lastGlobal, setLastGlobal] = useState("Just now");

  const handleRefresh = (id: string) => {
    setRefreshing(id);
    setTimeout(() => {
      setRefreshing(null);
      setLastGlobal("Just now");
    }, 1800);
  };

  return (
    <div className="bg-[#0f1623] border-b border-[#1e2a3a] px-4 py-2 flex items-center gap-4 flex-shrink-0">
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <Activity size={11} className="text-green-400" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live Sources</span>
      </div>

      <div className="flex items-center gap-3 flex-1 overflow-x-auto">
        {DATA_SOURCES.map((src) => (
          <div
            key={src.id}
            className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex-shrink-0"
          >
            <StatusDot status={refreshing === src.id ? "syncing" : src.status} />
            <span className="text-[10px] font-semibold text-gray-200">{src.shortName}</span>
            {src.status === "live" && (
              <span className="text-[9px] text-gray-500 font-mono">{src.latency}</span>
            )}
            {src.status === "syncing" && (
              <span className="text-[9px] text-amber-400 font-medium">syncing…</span>
            )}
            <button
              onClick={() => handleRefresh(src.id)}
              className="ml-0.5 p-0.5 rounded hover:bg-white/10 transition-colors"
            >
              <RefreshCw
                size={9}
                className={`text-gray-500 hover:text-gray-300 ${refreshing === src.id ? "animate-spin" : ""}`}
              />
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1.5 flex-shrink-0 text-[10px] text-gray-500">
        <span className="text-gray-600">All signals refreshed</span>
        <span className="text-gray-400 font-medium">{lastGlobal}</span>
        <span className="text-gray-600">·</span>
        <span className="text-green-400 font-semibold">2,457 records</span>
      </div>
    </div>
  );
}
