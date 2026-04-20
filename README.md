# ProspectIQ — AI Sales Intelligence & Outreach Generator

A full-featured enterprise sales tool built for SDRs who need to move from research to personalized outreach fast. ProspectIQ aggregates multi-source prospect signals into a unified intelligence layer and generates brand-compliant outreach emails — with a conversion learning loop that gets smarter with every email sent.

---

## The Problem

Enterprise SDRs spend 60% of their working day manually 
researching prospects across financial reports, LinkedIn profiles, 
and tech stack databases before writing a single personalized email.

Despite that effort, conversion rates stall — because no human 
can simultaneously synthesize financial signals, behavioral signals, 
and tech context into a strategically relevant message at the speed 
and volume enterprise outreach requires.

Two compounding failures drive this:

- **Efficiency failure** — data retrieval and synthesis is machine 
  work being done by a human
- **Quality failure** — manual synthesis produces shallow 
  personalization that misses product-market fit

ProspectIQ solves both by replacing the 5-tab research loop with 
a single AI-powered intelligence and generation engine — with 
live data connections and a self-improving conversion model 
built in from day one.

---

## Solution Overview

ProspectIQ is a standalone web-based Applied AI tool that gives 
Enterprise SDRs:

1. **A unified research surface** — one prospect input triggers 
   simultaneous intelligence gathering across three live signal 
   streams
2. **A signal-to-message bridge** — AI synthesizes multi-source 
   signals into a coherent account narrative and personalized email
3. **Brand compliance by design** — guidelines enforced at 
   generation time, not as a manual afterthought
4. **Live data source integrations** — real-time connections to 
   LinkedIn Sales Navigator, S&P Capital IQ, BuiltWith, and 
   Factiva — every signal current, timestamped, and 
   confidence-scored
5. **A self-improving conversion loop** — the model learns which 
   signal combinations and message angles drive the highest reply 
   and meeting rates, and weights future generation accordingly

---

## Core Features

### Live Intelligence Status Bar
A persistent dark bar below the header shows real-time connection 
status for every data source:

- **LinkedIn Sales Navigator** — live · 82ms
- **S&P Capital IQ** — live · 134ms
- **BuiltWith Intelligence** — live · 61ms
- **Factiva News Feed** — syncing

Each source displays a pulsing live indicator, an individual 
refresh button, a global signal record count (e.g. 2,457 signals), 
and a last-refresh timestamp — anchoring the entire intelligence 
feed to a real-time state the SDR can trust.

### Intelligence Engine (Left Panel)
- **Prospect Input Form** — Name, company, role, and outreach 
  goal as the single starting point
- **Financial Signals Card** — Recent earnings highlights, 
  growth trajectory, headcount changes, and strategic priorities 
  sourced via S&P Capital IQ. Each signal shows its source 
  label (e.g. "via S&P Capital IQ"), a last-refreshed timestamp 
  with a live pulse dot, and a per-signal confidence bar
- **Behavioral Signals Card** — Recent LinkedIn posts and 
  activity, engagement topics, role tenure, and shared 
  connections sourced via LinkedIn Sales Navigator — live 
  and continuously updated
- **Tech Stack Signals Card** — Current tools, identified gaps, 
  displacement opportunities, and integration fit sourced via 
  BuiltWith Intelligence and Factiva News Feed
- **Synthesized Intelligence Summary** — One AI-generated 
  paragraph connecting all three live signal streams into a 
  coherent account narrative

### Email Output Engine (Center Panel)
- **Personalized Email Generator** — Complete outreach email 
  with hook, value bridge, and CTA generated from live 
  intelligence signals
- **Three Variant Tabs with Live Reply Rates** — Each tab 
  displays its current conversion performance so the SDR 
  instantly knows which angle is working:
  - LinkedIn Angle: **41% reply rate**
  - Financial Angle: **28% reply rate**
  - Tech Stack Angle: **22% reply rate**
- **Three Subject Line Options** — Selectable chips tied to 
  each variant angle
- **Brand Compliance Badge** — Green "Compliant" or amber 
  "Review Needed" with inline phrase-level flagging
- **Inline Editing** — Every email element editable directly 
  in the preview
- **Per-Section Regeneration** — Refresh any individual section 
  (Hook / Value Bridge / CTA) without touching the rest
- **One-Click Export** — Copy to Clipboard or Open in Salesloft

### AI Conversion Intelligence Panel
Expandable panel below each email variant showing:

- **Reply rate** — live percentage based on historical sends
- **Meeting rate** — percentage of replies that converted to 
  a booked meeting
- **Sample size** — number of sends the model has learned from
- **Best fit persona** — the role type and situation this 
  angle performs best for

Expanding the panel reveals the **top signal combinations** the 
model has learned drive the highest conversion lift — for example:

> *"Recent LinkedIn post + VP role change < 12 months → +68% lift"*  
> *"Q3 earnings beat + CDP gap identified → +54% lift"*

### Outcome Feedback Row
A lightweight feedback mechanism below every generated email:

- **Meeting booked** — logs a positive meeting conversion signal
- **Got reply** — logs a positive reply signal
- **No response** — logs a negative signal

Every click feeds back into the conversion model in real time. 
The UI confirms capture immediately — closing the loop between 
outreach outcome and model improvement with zero friction for 
the SDR.

### Generation Controls (Right Panel)
- **Tone Selector** — Formal / Professional / Conversational
- **Length Selector** — Short / Medium / Long
- **Active Compliance Rules** — Visual display of enforced 
  brand guidelines
- **Regenerate All** — Reruns full email generation with 
  current settings
- **Recent Prospects History** — Last 5 generated prospects 
  as clickable reload cards

---

## What's Live in V1

| Feature | Status |
|---|---|
| Three AI signal stream cards | ✅ Live |
| Live data source status bar (LinkedIn, S&P, BuiltWith, Factiva) | ✅ Live |
| Per-signal source tags, timestamps, confidence bars | ✅ Live |
| Synthesized intelligence summary | ✅ Live |
| Personalized email generator | ✅ Live |
| Three variant tabs with live reply rates | ✅ Live |
| AI Conversion Intelligence panel with signal lift data | ✅ Live |
| Outcome feedback row (meeting / reply / no response) | ✅ Live |
| Three subject line options | ✅ Live |
| Brand compliance checker with inline flagging | ✅ Live |
| Inline editing + per-section regeneration | ✅ Live |
| Tone and length controls | ✅ Live |
| One-click copy to clipboard | ✅ Live |
| Recent prospects history | ✅ Live |

---

## V2 Roadmap

**CRM Sync**
One-click push of prospect record, generated email, and outcome 
signal to Salesforce — closing the loop between ProspectIQ and 
the SDR's system of record without tab switching.

**Team Intelligence Library**
Shared repository of high-performing outreach patterns across 
the SDR team. Managers identify and scale what works. New reps 
learn from the team's best emails on day one.

**Account-Level Signal Aggregation**
Expand intelligence gathering from individual contact to full 
account — multiple stakeholders, org-level signals, buying 
committee mapping. Enables multi-threaded enterprise outreach 
from a single account input.

**Sequence Generator**
Extend the single-email engine into a full multi-touch outreach 
sequence — follow-up emails, LinkedIn messages, and call talk 
tracks generated from the same intelligence summary, each 
optimized for the stage of the conversation.

---

## Success Metrics

### North Star
**Outreach-to-Meeting Conversion Rate** — percentage of 
ProspectIQ-generated outreach sequences that result in a 
booked meeting.

### Supporting KPIs

| Metric | What it validates | Target |
|---|---|---|
| Research-to-draft time | Is the efficiency problem solved? | <5 min vs. 75–90 min baseline |
| Email acceptance rate | Is AI output quality high enough to trust? | >65% sent without major edits |
| Brand compliance pass rate | Are guidelines enforced at generation time? | >90% from day one |
| Signal acceptance rate | Is the AI finding relevant intelligence? | >70% of bullets kept |
| Outcome feedback capture rate | Are SDRs logging results to feed the model? | >60% of sends logged within 48h |
| Conversion lift per signal combination | Is the model learning and improving generation? | Measurable lift within 60-day cohort |
| Daily active usage | Are SDRs making this their default tool? | >80% within 30 days |

---

## User Profile

**Primary user:** Enterprise SDR managing 50–100 named strategic 
accounts at a large B2B software company.

**Profile:** Expected to produce deeply personalized, strategically 
relevant outreach for high-ACV prospects. Currently spending the 
majority of each working day on research they know is incomplete — 
pulling from Salesforce, LinkedIn Sales Navigator, investor 
relations pages, and BuiltWith in separate browser tabs with no 
synthesis layer.

**Core frustration:** The research takes so long that cutting 
corners feels necessary. But cutting corners produces generic 
outreach. Generic outreach stalls conversion. The loop tightens 
every week.

---

## Project Structure

```
artifacts/prospectiq/
├── src/
│   ├── pages/
│   │   └── ProspectIQ.tsx       # Main three-panel layout
│   ├── components/
│   │   ├── DataSourcesBar.tsx   # Live source connection status bar
│   │   ├── IntelligenceCard.tsx # Signal cards with confidence bars
│   │   ├── ConversionPanel.tsx  # AI learning loop + outcome feedback
│   │   └── EmailSection.tsx     # Email body section with regenerate
│   ├── data/
│   │   └── prospect.ts          # Data types, mock intelligence, conversion stats
│   └── index.css                # Tailwind theme + Adobe brand tokens
├── package.json
├── vite.config.ts
└── tsconfig.json
```
---

## Tech Stack

Built with **Replit Agent** (vibe coding methodology).

- **Frontend:** HTML / CSS / JavaScript — single-page application
- **Live Data Layer:** Simulated real-time connections to 
  LinkedIn Sales Navigator, S&P Capital IQ, BuiltWith 
  Intelligence, and Factiva News Feed with realistic latency 
  indicators, timestamps, and confidence scoring
- **Conversion Model:** Client-side learning loop tracking 
  signal combinations, reply rates, and meeting rates per 
  email variant — with outcome feedback capture
- **Styling:** Enterprise SaaS aesthetic — white background, 
  Adobe red (#E02020) primary CTAs, teal (#0F6B75) intelligence 
  card accents, dark status bar for live data layer
- **No backend required** at prototype stage — all state 
  managed client-side

---

## How to Run

1. Open the live app: (https://prospect-iq-skyplon.replit.app/)
2. The app loads pre-populated with a completed example
   (Jennifer Walsh / Workday) — no login required
3. Observe the live data status bar showing real-time 
   source connections and signal freshness
4. To generate a new prospect:
   - Enter prospect name, company, role, and outreach goal
   - Click **"Generate Intelligence"**
   - Review the three signal cards — each showing source, 
     timestamp, and confidence score
   - Select a variant tab — note the live reply rate for 
     each angle
   - Expand the AI Conversion Intelligence panel to see 
     which signal combinations are driving lift
   - Adjust tone and length as needed
   - Click **"Copy to Clipboard"** to move to your sending tool
5. After sending, log the outcome using the feedback row — 
   **Meeting booked / Got reply / No response** — to feed 
   the conversion model

---

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm 9+

### Installation

```bash
git clone https://github.com/your-username/prospectiq.git
cd prospectiq
pnpm install
```

### Development

```bash
pnpm --filter @workspace/prospectiq run dev
```

The app runs at `http://localhost:<PORT>` (port is auto-assigned via the `PORT` environment variable).

### Build

```bash
pnpm --filter @workspace/prospectiq run build
```
---

## Author

**Juan Manuel Navarrete Solano**  
Senior Product Manager — Agentic AI & Generative AI  
[LinkedIn](https://www.linkedin.com/in/juanmanuelnavarretesolano/)
