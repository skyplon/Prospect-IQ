import { useState } from "react";
import { TrendingUp, TrendingDown, Minus, ThumbsUp, Calendar, BarChart2, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { LEARNING_STATS } from "@/data/prospect";
import type { ConversionStats } from "@/data/prospect";

interface ConversionPanelProps {
  variantId: string;
  stats: ConversionStats;
  onFeedback: (type: "replied" | "meeting" | "no_response") => void;
  lastFeedback: string | null;
}

function TrendIcon({ trend }: { trend: ConversionStats["trend"] }) {
  if (trend === "up") return <TrendingUp size={11} className="text-green-500" />;
  if (trend === "down") return <TrendingDown size={11} className="text-red-500" />;
  return <Minus size={11} className="text-gray-400" />;
}

function Gauge({ value, max = 100, color }: { value: number; max?: number; color: string }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className={`absolute left-0 top-0 h-full rounded-full transition-all duration-700 ${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function ConversionPanel({ variantId, stats, onFeedback, lastFeedback }: ConversionPanelProps) {
  const [expanded, setExpanded] = useState(false);
  const aiWeightColor =
    stats.aiWeight >= 85
      ? "text-green-600 bg-green-50 border-green-200"
      : stats.aiWeight >= 65
      ? "text-blue-600 bg-blue-50 border-blue-200"
      : "text-amber-600 bg-amber-50 border-amber-200";

  return (
    <div className="border-t border-border">
      {/* AI Weight Header */}
      <div className="px-5 py-3 bg-gradient-to-r from-gray-50 to-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap size={12} className="text-[#E02020]" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            AI Conversion Intelligence
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-bold ${aiWeightColor}`}>
            <Zap size={8} />
            {stats.aiWeight}% AI weight
          </span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-0.5 rounded hover:bg-gray-100 transition-colors"
          >
            {expanded ? <ChevronUp size={12} className="text-gray-400" /> : <ChevronDown size={12} className="text-gray-400" />}
          </button>
        </div>
      </div>

      {/* Compact stats — always visible */}
      <div className="px-5 pb-3 grid grid-cols-3 gap-3">
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wide">Reply Rate</span>
            <div className="flex items-center gap-0.5">
              <TrendIcon trend={stats.trend} />
              <span className="text-[10px] font-bold text-gray-700">{stats.replyRate}%</span>
            </div>
          </div>
          <Gauge value={stats.replyRate} max={60} color="bg-blue-500" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wide">Meeting</span>
            <span className="text-[10px] font-bold text-gray-700">{stats.meetingRate}%</span>
          </div>
          <Gauge value={stats.meetingRate} max={25} color="bg-[#E02020]" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-[9px] text-gray-400 font-semibold uppercase tracking-wide">Sample</span>
            <span className="text-[10px] font-bold text-gray-700">{stats.sampleSize}</span>
          </div>
          <div className="text-[9px] text-gray-400 mt-1">emails sent</div>
        </div>
      </div>

      {/* Expanded learning detail */}
      {expanded && (
        <div className="px-5 pb-4 space-y-3 border-t border-dashed border-gray-100 pt-3">
          <div>
            <p className="text-[10px] text-gray-500 font-semibold mb-1">Best performing for</p>
            <p className="text-[11px] text-gray-700 italic">{stats.bestFor}</p>
          </div>

          <div>
            <p className="text-[10px] text-gray-500 font-semibold mb-2 flex items-center gap-1">
              <BarChart2 size={10} />
              Top signal combinations (by conversion lift)
            </p>
            <div className="space-y-2">
              {LEARNING_STATS.topSignalCombinations.map((combo, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#E02020]/10 flex items-center justify-center">
                    <span className="text-[8px] font-bold text-[#E02020]">{i + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-gray-600 leading-relaxed">{combo.signals}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[9px] font-bold text-green-600">+{combo.liftPct}% lift</span>
                      <span className="text-[9px] text-gray-400">n={combo.sampleSize}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-md p-2.5 flex items-center justify-between">
            <div>
              <p className="text-[9px] text-gray-500 font-semibold">Model</p>
              <p className="text-[10px] text-gray-700 font-medium">{LEARNING_STATS.modelVersion} · trained {LEARNING_STATS.lastTrained}</p>
            </div>
            <div className="text-right">
              <p className="text-[9px] text-gray-500 font-semibold">Global stats</p>
              <p className="text-[10px] text-gray-700 font-medium">{LEARNING_STATS.totalEmailsSent.toLocaleString()} sent · {LEARNING_STATS.overallReplyRate}% reply</p>
            </div>
          </div>
        </div>
      )}

      {/* Feedback row */}
      <div className="px-5 py-2.5 bg-gray-50 border-t border-gray-100 flex items-center gap-3">
        <span className="text-[10px] text-gray-500 font-medium flex-shrink-0">Log outcome:</span>
        {lastFeedback ? (
          <span className="text-[10px] font-semibold text-green-600 flex items-center gap-1">
            ✓ {lastFeedback === "replied" ? "Reply logged" : lastFeedback === "meeting" ? "Meeting booked!" : "No response logged"} — model updating
          </span>
        ) : (
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onFeedback("meeting")}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-green-50 border border-green-200 text-green-700 hover:bg-green-100 transition-colors text-[10px] font-semibold"
            >
              <Calendar size={9} />
              Meeting booked
            </button>
            <button
              onClick={() => onFeedback("replied")}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 transition-colors text-[10px] font-semibold"
            >
              <ThumbsUp size={9} />
              Got reply
            </button>
            <button
              onClick={() => onFeedback("no_response")}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 border border-gray-200 text-gray-500 hover:bg-gray-200 transition-colors text-[10px] font-medium"
            >
              No response
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
