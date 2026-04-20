import { useState, useCallback } from "react";
import { RefreshCw, Copy, ExternalLink, BookmarkPlus, Check, TrendingUp } from "lucide-react";
import { IntelligenceCard } from "@/components/IntelligenceCard";
import { EmailSection } from "@/components/EmailSection";
import { DataSourcesBar } from "@/components/DataSourcesBar";
import { ConversionPanel } from "@/components/ConversionPanel";
import { PROSPECT_DATA, OUTREACH_GOALS, COMPLIANCE_RULES } from "@/data/prospect";
import type { RecentProspect } from "@/data/prospect";

function outcomeLabel(outcome: RecentProspect["outcome"]) {
  if (outcome === "meeting") return { label: "Meeting", cls: "bg-green-100 text-green-700 border-green-200" };
  if (outcome === "replied") return { label: "Replied", cls: "bg-blue-100 text-blue-700 border-blue-200" };
  return { label: "Sent", cls: "bg-gray-100 text-gray-500 border-gray-200" };
}

export default function ProspectIQ() {
  const [activeVariant, setActiveVariant] = useState("linkedin");
  const [tone, setTone] = useState("professional");
  const [length, setLength] = useState("medium");
  const [complianceOpen, setComplianceOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const [feedbackMap, setFeedbackMap] = useState<Record<string, string | null>>({});
  const [form, setForm] = useState({
    name: PROSPECT_DATA.name,
    company: PROSPECT_DATA.company,
    role: PROSPECT_DATA.role,
    goal: PROSPECT_DATA.goal,
  });

  const currentVariant = PROSPECT_DATA.emailVariants.find((v) => v.id === activeVariant)!;

  const handleCopy = () => {
    const text = [
      `Subject: ${currentVariant.subject}`,
      "",
      ...currentVariant.sections.map((s) => s.content),
      "",
      "[SDR Name] | Adobe Enterprise Sales | [phone] | [email]",
    ].join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFeedback = useCallback((type: "replied" | "meeting" | "no_response") => {
    setFeedbackMap((prev) => ({ ...prev, [activeVariant]: type }));
  }, [activeVariant]);

  return (
    <div className="flex flex-col h-screen bg-[#f5f6f8] overflow-hidden">
      {/* Top Bar */}
      <header className="bg-white border-b border-border px-5 py-2.5 flex items-center justify-between flex-shrink-0 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#E02020] flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">ProspectIQ</span>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#E02020]/10 text-[#E02020] border border-[#E02020]/20">v2</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-500 font-medium">AI Sales Intelligence & Outreach Generator</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
            <TrendingUp size={11} className="text-green-500" />
            <span className="font-semibold text-green-600">33%</span>
            <span>global reply rate</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-400">Adobe Enterprise Sales</span>
          <div className="w-7 h-7 rounded-full bg-[#E02020] flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">SD</span>
          </div>
        </div>
      </header>

      {/* Live Data Sources Bar */}
      <DataSourcesBar />

      {/* Three Panel Layout */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT PANEL — 35% */}
        <div className="w-[35%] flex flex-col border-r border-border bg-white overflow-hidden">
          {/* Prospect Input Form */}
          <div className="p-4 border-b border-border flex-shrink-0">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Prospect Input</h2>
            <div className="space-y-2.5">
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Prospect Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-1.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#E02020]/20 focus:border-[#E02020] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Company</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full px-3 py-1.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#E02020]/20 focus:border-[#E02020] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Role / Title</label>
                <input
                  type="text"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-3 py-1.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#E02020]/20 focus:border-[#E02020] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-600 mb-1">Outreach Goal</label>
                <select
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className="w-full px-3 py-1.5 text-sm border border-border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#E02020]/20 focus:border-[#E02020] transition-colors"
                >
                  {OUTREACH_GOALS.map((g) => (
                    <option key={g}>{g}</option>
                  ))}
                </select>
              </div>
              <button className="w-full py-2 bg-[#E02020] hover:bg-[#c41b1b] text-white text-sm font-semibold rounded-md transition-colors shadow-xs mt-1">
                Generate Intelligence
              </button>
            </div>
          </div>

          {/* Intelligence Stream Cards */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {PROSPECT_DATA.intelligenceCards.map((card) => (
              <IntelligenceCard
                key={card.title}
                title={card.title}
                icon={card.icon}
                borderColor={card.borderColor}
                bgColor={card.bgColor}
                headerTextColor={card.headerTextColor}
                dataSource={card.dataSource}
                lastRefreshed={card.lastRefreshed}
                signals={card.signals}
              />
            ))}

            {/* Synthesized Intelligence Summary */}
            <div className="bg-gray-50 border border-border rounded-lg p-3.5">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0F6B75]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Synthesized Intelligence
                </span>
              </div>
              <p className="text-[11px] text-gray-600 leading-relaxed italic">
                {PROSPECT_DATA.summary}
              </p>
            </div>
          </div>
        </div>

        {/* CENTER PANEL — 40% */}
        <div className="flex-1 flex flex-col overflow-hidden bg-[#f5f6f8]">
          {/* Variant Tabs */}
          <div className="bg-white border-b border-border flex-shrink-0 px-4 pt-3 flex items-end justify-between">
            <div className="flex gap-0.5">
              {PROSPECT_DATA.emailVariants.map((v) => {
                const isActive = activeVariant === v.id;
                const weightColor =
                  v.conversionStats.aiWeight >= 85
                    ? "text-green-600"
                    : v.conversionStats.aiWeight >= 65
                    ? "text-blue-600"
                    : "text-amber-600";
                return (
                  <button
                    key={v.id}
                    onClick={() => setActiveVariant(v.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-t-md border-b-2 transition-colors ${
                      isActive
                        ? "border-[#E02020] text-[#E02020] bg-red-50/50"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span>{v.icon}</span>
                    <span>{v.tab}</span>
                    <span className={`text-[9px] font-bold ${isActive ? "text-[#E02020]" : weightColor}`}>
                      {v.conversionStats.replyRate}%
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E02020]" />
                    )}
                  </button>
                );
              })}
            </div>
            <div className="pb-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-[10px] font-semibold">
                <Check size={10} />
                Brand Compliant
              </span>
            </div>
          </div>

          {/* Email Preview */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="bg-white rounded-lg border border-border shadow-sm overflow-hidden">
              {/* Subject Line */}
              <div className="px-5 py-3 border-b border-border bg-gray-50/80">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex-shrink-0">
                    Subject
                  </span>
                  <input
                    type="text"
                    defaultValue={currentVariant.subject}
                    key={currentVariant.id}
                    className="flex-1 text-sm font-medium text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 min-w-0"
                  />
                  <button className="flex-shrink-0 p-1 rounded hover:bg-gray-200 transition-colors">
                    <RefreshCw size={12} className="text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Email Body */}
              <div className="px-5 py-4 space-y-5">
                {currentVariant.sections.map((section) => (
                  <EmailSection
                    key={section.label}
                    label={section.label}
                    content={section.content}
                  />
                ))}

                {/* Signature */}
                <div className="border-t border-dashed border-gray-200 pt-4">
                  <div className="bg-gray-50 rounded px-3 py-2">
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      <span className="font-medium text-gray-500">[SDR Name]</span> | Adobe Enterprise Sales |{" "}
                      <span className="font-medium text-gray-500">[phone]</span> |{" "}
                      <span className="font-medium text-gray-500">[email]</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Conversion Panel */}
              <ConversionPanel
                variantId={activeVariant}
                stats={currentVariant.conversionStats}
                onFeedback={handleFeedback}
                lastFeedback={feedbackMap[activeVariant] ?? null}
              />
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="bg-white border-t border-border px-4 py-3 flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-[#E02020] hover:bg-[#c41b1b] text-white"
              }`}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold border border-border text-gray-700 hover:bg-gray-50 transition-colors">
              <ExternalLink size={14} />
              Open in Salesloft
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-colors">
              <BookmarkPlus size={14} />
              Save Prospect
            </button>
          </div>
        </div>

        {/* RIGHT PANEL — 25% */}
        <div className="w-[25%] border-l border-border bg-white flex flex-col overflow-hidden">
          <div className="p-4 border-b border-border flex-shrink-0">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Generation Controls</h2>

            {/* Tone Selector */}
            <div className="mb-4">
              <label className="block text-[11px] font-semibold text-gray-600 mb-2">Tone</label>
              <div className="space-y-1.5">
                {["formal", "professional", "conversational"].map((t) => (
                  <label key={t} className="flex items-center gap-2.5 cursor-pointer group">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        tone === t
                          ? "border-[#E02020] bg-[#E02020]"
                          : "border-gray-300 group-hover:border-gray-400"
                      }`}
                      onClick={() => setTone(t)}
                    >
                      {tone === t && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="text-xs text-gray-700 capitalize">{t}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Length Selector */}
            <div className="mb-4">
              <label className="block text-[11px] font-semibold text-gray-600 mb-2">Length</label>
              <div className="space-y-1.5">
                {[
                  { value: "short", label: "Short (3 sentences)" },
                  { value: "medium", label: "Medium (5 sentences)" },
                  { value: "long", label: "Long (8 sentences)" },
                ].map(({ value, label }) => (
                  <label key={value} className="flex items-center gap-2.5 cursor-pointer group">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        length === value
                          ? "border-[#E02020] bg-[#E02020]"
                          : "border-gray-300 group-hover:border-gray-400"
                      }`}
                      onClick={() => setLength(value)}
                    >
                      {length === value && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="text-xs text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brand Compliance */}
            <div>
              <button
                className="w-full flex items-center justify-between text-[11px] font-semibold text-gray-600 mb-2 hover:text-gray-800 transition-colors"
                onClick={() => setComplianceOpen(!complianceOpen)}
              >
                <span>Active Compliance Rules</span>
                <span className="text-gray-400 text-[10px]">{complianceOpen ? "▲" : "▼"}</span>
              </button>
              {complianceOpen && (
                <div className="space-y-1.5">
                  {COMPLIANCE_RULES.map((rule) => (
                    <div
                      key={rule}
                      className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-green-50 border border-green-100"
                    >
                      <Check size={10} className="text-green-600 flex-shrink-0" />
                      <span className="text-[11px] text-green-800 font-medium">{rule}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Regenerate */}
          <div className="px-4 py-3 border-b border-border flex-shrink-0">
            <button className="w-full py-2 border-2 border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-800 text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-1.5">
              <RefreshCw size={12} />
              Regenerate All
            </button>
          </div>

          {/* Recent Prospects */}
          <div className="flex-1 overflow-y-auto p-4">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">
              Recent Prospects
            </h3>
            <div className="space-y-1">
              {PROSPECT_DATA.recentProspects.map((prospect, i) => {
                const { label, cls } = outcomeLabel(prospect.outcome);
                return (
                  <button
                    key={i}
                    className="w-full text-left px-3 py-2.5 rounded-md hover:bg-gray-50 transition-colors group border border-transparent hover:border-border"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
                        <span className="text-[10px] font-bold text-gray-600">
                          {prospect.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold text-gray-700 group-hover:text-gray-900 truncate">
                            {prospect.name}
                          </p>
                          <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded border ${cls} flex-shrink-0 ml-1`}>
                            {label}
                          </span>
                        </div>
                        <p className="text-[10px] text-gray-400 truncate">
                          {prospect.company} · {prospect.title}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
