export interface SignalItem {
  text: string;
  source: string;
}

export interface IntelligenceCard {
  title: string;
  icon: string;
  borderColor: string;
  bgColor: string;
  signals: SignalItem[];
}

export interface EmailSection {
  label: string;
  content: string;
}

export interface EmailVariant {
  id: string;
  tab: string;
  icon: string;
  subject: string;
  sections: EmailSection[];
}

export interface RecentProspect {
  name: string;
  company: string;
  title: string;
}

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
      signals: [
        {
          text: "Q3 earnings: Digital marketing spend up 34% YoY — CEO cited 'customer experience transformation' as top priority",
          source: "Q3 Earnings Call",
        },
        {
          text: "Headcount growth: 120 marketing hires in last 6 months — signals active buildout of digital capabilities",
          source: "LinkedIn",
        },
        {
          text: "Recently acquired Peakon for $700M — integrating employee experience data into customer journey",
          source: "Press Release",
        },
        {
          text: "CFO flagged 'marketing technology consolidation' as a 2024 cost initiative",
          source: "Investor Day",
        },
      ],
    },
    {
      title: "Behavioral Signals — Jennifer Walsh",
      icon: "👤",
      borderColor: "border-teal-500",
      bgColor: "bg-teal-50",
      headerTextColor: "text-teal-700",
      signals: [
        {
          text: "Posted 3 days ago: 'Struggling to connect our campaign data across 6 different tools — anyone solved this at scale?'",
          source: "LinkedIn Post",
        },
        {
          text: "Engaged with 2 articles on Customer Data Platforms in last 30 days",
          source: "LinkedIn Activity",
        },
        {
          text: "Promoted to VP role 8 months ago — likely evaluating inherited tech stack",
          source: "LinkedIn Profile",
        },
        {
          text: "Mutual connection: Sarah Chen, Adobe Enterprise Sales",
          source: "LinkedIn Network",
        },
      ],
    },
    {
      title: "Tech Stack Signals",
      icon: "🔧",
      borderColor: "border-purple-500",
      bgColor: "bg-purple-50",
      headerTextColor: "text-purple-700",
      signals: [
        {
          text: "Current stack: Marketo, Salesforce, Google Analytics, Sprinklr, Tableau",
          source: "BuiltWith",
        },
        {
          text: "No CDP layer identified — significant gap for unified customer profile use case",
          source: "Tech Analysis",
        },
        {
          text: "Marketo contract likely up for renewal Q1 2025 based on typical 2-year cycle",
          source: "Contract Intelligence",
        },
        {
          text: "Adobe Experience Platform directly displaces 3 tools in current stack",
          source: "Competitive Analysis",
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
    { name: "Marcus Chen", company: "Salesforce", title: "VP Ops" },
    { name: "Diana Park", company: "ServiceNow", title: "CMO" },
    { name: "Tom Walsh", company: "SAP", title: "Dir. Marketing" },
    { name: "Priya Sharma", company: "Oracle", title: "VP Digital" },
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
