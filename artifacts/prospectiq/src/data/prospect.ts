export interface SignalItem {
  text: string;
  source: string;
  confidence: number;
  freshness: string;
}

export interface IntelligenceCard {
  title: string;
  icon: string;
  borderColor: string;
  bgColor: string;
  headerTextColor: string;
  dataSource: string;
  lastRefreshed: string;
  signals: SignalItem[];
}

export interface EmailSection {
  label: string;
  content: string;
}

export interface ConversionStats {
  replyRate: number;
  meetingRate: number;
  bestFor: string;
  sampleSize: number;
  aiWeight: number;
  trend: "up" | "down" | "flat";
}

export interface EmailVariant {
  id: string;
  tab: string;
  icon: string;
  subject: string;
  sections: EmailSection[];
  conversionStats: ConversionStats;
}

export interface RecentProspect {
  name: string;
  company: string;
  title: string;
  outcome?: "replied" | "meeting" | "no_response";
  sentDate?: string;
}

export interface DataSource {
  id: string;
  name: string;
  shortName: string;
  status: "live" | "syncing" | "degraded";
  latency: string;
  recordsFetched: number;
  icon: string;
  color: string;
}

export const DATA_SOURCES: DataSource[] = [
  {
    id: "linkedin",
    name: "LinkedIn Sales Navigator",
    shortName: "LinkedIn SN",
    status: "live",
    latency: "82ms",
    recordsFetched: 1247,
    icon: "in",
    color: "#0077B5",
  },
  {
    id: "financial",
    name: "S&P Capital IQ",
    shortName: "Capital IQ",
    status: "live",
    latency: "134ms",
    recordsFetched: 318,
    icon: "fi",
    color: "#1E6FBA",
  },
  {
    id: "techstack",
    name: "BuiltWith Intelligence",
    shortName: "BuiltWith",
    status: "live",
    latency: "61ms",
    recordsFetched: 892,
    icon: "bw",
    color: "#7C3AED",
  },
  {
    id: "news",
    name: "Factiva News Feed",
    shortName: "Factiva",
    status: "syncing",
    latency: "—",
    recordsFetched: 0,
    icon: "nw",
    color: "#0F6B75",
  },
];

export const PROSPECT_DATA = {
  name: "Jennifer Walsh",
  company: "Workday",
  role: "VP of Digital Marketing",
  goal: "Product Demo",

  intelligenceCards: [
    {
      title: "Financial Signals",
      icon: "📊",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      headerTextColor: "text-blue-700",
      dataSource: "S&P Capital IQ",
      lastRefreshed: "2 min ago",
      signals: [
        {
          text: "Q3 earnings: Digital marketing spend up 34% YoY — CEO cited 'customer experience transformation' as top priority",
          source: "Q3 Earnings Call",
          confidence: 97,
          freshness: "3h ago",
        },
        {
          text: "Headcount growth: 120 marketing hires in last 6 months — signals active buildout of digital capabilities",
          source: "LinkedIn",
          confidence: 94,
          freshness: "1h ago",
        },
        {
          text: "Recently acquired Peakon for $700M — integrating employee experience data into customer journey",
          source: "Press Release",
          confidence: 99,
          freshness: "14d ago",
        },
        {
          text: "CFO flagged 'marketing technology consolidation' as a 2024 cost initiative",
          source: "Investor Day",
          confidence: 96,
          freshness: "6d ago",
        },
      ],
    },
    {
      title: "Behavioral Signals — Jennifer Walsh",
      icon: "👤",
      borderColor: "border-teal-500",
      bgColor: "bg-teal-50",
      headerTextColor: "text-teal-700",
      dataSource: "LinkedIn Sales Navigator",
      lastRefreshed: "4 min ago",
      signals: [
        {
          text: "Posted 3 days ago: 'Struggling to connect our campaign data across 6 different tools — anyone solved this at scale?'",
          source: "LinkedIn Post",
          confidence: 99,
          freshness: "3d ago",
        },
        {
          text: "Engaged with 2 articles on Customer Data Platforms in last 30 days",
          source: "LinkedIn Activity",
          confidence: 91,
          freshness: "11d ago",
        },
        {
          text: "Promoted to VP role 8 months ago — likely evaluating inherited tech stack",
          source: "LinkedIn Profile",
          confidence: 99,
          freshness: "8mo ago",
        },
        {
          text: "Mutual connection: Sarah Chen, Adobe Enterprise Sales",
          source: "LinkedIn Network",
          confidence: 99,
          freshness: "Live",
        },
      ],
    },
    {
      title: "Tech Stack Signals",
      icon: "🔧",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50",
      headerTextColor: "text-purple-700",
      dataSource: "BuiltWith Intelligence",
      lastRefreshed: "7 min ago",
      signals: [
        {
          text: "Current stack: Marketo, Salesforce, Google Analytics, Sprinklr, Tableau",
          source: "BuiltWith",
          confidence: 95,
          freshness: "2d ago",
        },
        {
          text: "No CDP layer identified — significant gap for unified customer profile use case",
          source: "Tech Analysis",
          confidence: 88,
          freshness: "2d ago",
        },
        {
          text: "Marketo contract likely up for renewal Q1 2025 based on typical 2-year cycle",
          source: "Contract Intelligence",
          confidence: 82,
          freshness: "Estimated",
        },
        {
          text: "Adobe Experience Platform directly displaces 3 tools in current stack",
          source: "Competitive Analysis",
          confidence: 93,
          freshness: "Live",
        },
      ],
    },
  ] as (IntelligenceCard & { headerTextColor: string; bgColor: string })[],

  summary:
    "Jennifer Walsh is 8 months into her VP role at Workday, inheriting a fragmented 6-tool marketing stack at a moment when Workday's leadership has explicitly prioritized customer experience transformation. Her recent LinkedIn post signals active pain around campaign data unification — a direct product-market fit for Adobe Experience Platform's CDP capability. With Marketo renewal approaching and 3 stack overlap opportunities identified, timing and fit are both strong for an AEP demo conversation.",

  emailVariants: [
    {
      id: "financial",
      tab: "Financial Angle",
      icon: "📊",
      subject: "Workday's Q3 commitment to CX — what this means for your stack",
      conversionStats: {
        replyRate: 28,
        meetingRate: 11,
        bestFor: "CFO-aligned VPs at post-earnings accounts",
        sampleSize: 143,
        aiWeight: 72,
        trend: "up",
      },
      sections: [
        {
          label: "Hook",
          content:
            "Hi Jennifer — Workday's Q3 earnings made it clear: digital marketing transformation isn't a roadmap item anymore, it's a board-level mandate. With your leadership explicitly calling out 'customer experience transformation' as the top priority, the question shifts from whether to unify your marketing data — to how fast you can do it.",
        },
        {
          label: "Value Bridge",
          content:
            "With 120 new marketing hires this year and a CFO-flagged initiative to consolidate your tech stack, the timing is unusually clear. Adobe Experience Platform gives you the unified customer profile layer that ties together your existing tools while eliminating the redundancy your CFO is targeting — built specifically for Workday-scale enterprise environments.",
        },
        {
          label: "CTA",
          content:
            "Would a 30-minute demo make sense this month? I can walk you through how other enterprise marketing orgs at Workday's scale have used AEP to hit consolidation targets while accelerating CX delivery. Happy to work around your calendar.",
        },
      ],
    },
    {
      id: "linkedin",
      tab: "LinkedIn Angle",
      icon: "👤",
      subject: "Jennifer — solving the 6-tool fragmentation problem at Workday",
      conversionStats: {
        replyRate: 41,
        meetingRate: 18,
        bestFor: "Recently promoted VPs who've posted about pain points",
        sampleSize: 89,
        aiWeight: 91,
        trend: "up",
      },
      sections: [
        {
          label: "Hook",
          content:
            "Hi Jennifer — saw your post about connecting campaign data across 6 tools. That exact challenge is what I hear from every VP of Marketing I speak with at Workday's scale, and it's exactly what we built Adobe Experience Platform to solve.",
        },
        {
          label: "Value Bridge",
          content:
            "With Workday's Q3 commitment to customer experience transformation and your team's rapid growth (120 marketing hires this year), having a unified customer profile layer isn't just a nice-to-have — it becomes the foundation everything else runs on. AEP gives you a single real-time profile across every touchpoint, replacing 3 of the tools currently in your stack.",
        },
        {
          label: "CTA",
          content:
            "Would a 30-minute demo make sense this month? I can show you specifically how Workday-scale teams are using AEP to unify their campaign data — and what a consolidation path looks like from your current setup. Happy to work around your calendar.",
        },
      ],
    },
    {
      id: "tech",
      tab: "Tech Angle",
      icon: "🔧",
      subject: "Your Marketo renewal window — and what comes next",
      conversionStats: {
        replyRate: 22,
        meetingRate: 9,
        bestFor: "Ops-minded buyers evaluating stack consolidation",
        sampleSize: 201,
        aiWeight: 58,
        trend: "flat",
      },
      sections: [
        {
          label: "Hook",
          content:
            "Hi Jennifer — with Marketo's renewal window approaching in Q1 2025, now is exactly the right time to pressure-test whether your current stack is the right architecture for where Workday is going — especially given the 6-tool fragmentation you called out recently on LinkedIn.",
        },
        {
          label: "Value Bridge",
          content:
            "Adobe Experience Platform directly displaces 3 tools in your current stack — Marketo, one of your analytics layers, and your fragmented data connectors — while adding the CDP capability your stack is currently missing. The consolidation math is compelling, and the renewal timing creates a natural evaluation window.",
        },
        {
          label: "CTA",
          content:
            "I'd love to walk you through a side-by-side view of your current architecture versus what an AEP-centered stack would look like at Workday's scale — including what a realistic migration path looks like. Would 30 minutes work before end of month?",
        },
      ],
    },
  ] as EmailVariant[],

  recentProspects: [
    { name: "Marcus Chen", company: "Salesforce", title: "VP Ops", outcome: "meeting", sentDate: "Apr 17" },
    { name: "Diana Park", company: "ServiceNow", title: "CMO", outcome: "replied", sentDate: "Apr 15" },
    { name: "Tom Walsh", company: "SAP", title: "Dir. Marketing", outcome: "no_response", sentDate: "Apr 12" },
    { name: "Priya Sharma", company: "Oracle", title: "VP Digital", outcome: "replied", sentDate: "Apr 10" },
  ] as RecentProspect[],
};

export const OUTREACH_GOALS = [
  "Intro Call",
  "Product Demo",
  "Executive Briefing",
  "Event Invitation",
  "Partnership Discussion",
];

export const COMPLIANCE_RULES = [
  "No unverified performance claims",
  "Adobe brand voice guidelines",
  "Required legal disclaimer",
  "Approved product naming only",
  "No competitor disparagement",
];

export const LEARNING_STATS = {
  totalEmailsSent: 1847,
  totalReplies: 612,
  totalMeetings: 203,
  overallReplyRate: 33,
  overallMeetingRate: 11,
  modelVersion: "v4.2",
  lastTrained: "Apr 18, 2026",
  topSignalCombinations: [
    { signals: "Recent LinkedIn post + VP role change < 12mo", liftPct: 68, sampleSize: 47 },
    { signals: "Earnings mention + CFO cost initiative", liftPct: 44, sampleSize: 92 },
    { signals: "Stack gap identified + renewal < 6mo", liftPct: 51, sampleSize: 63 },
  ],
};
