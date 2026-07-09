import PipelineColumn from "./PipelineColumn";

const pipeline = [
  {
    title: "New Lead",
    count: 3,
    value: "$45K",
    deals: [
      {
        initials: "VG",
        color: "bg-violet-500/20 text-violet-400",
        company: "Vertex Growth",
        organization: "Vertex Inc.",
        value: "$14K",
        source: "Referral",
        days: "2d in stage",
      },
      {
        initials: "ML",
        color: "bg-cyan-500/20 text-cyan-400",
        company: "Mondrian Labs",
        organization: "Mondrian",
        value: "$23K",
        source: "Inbound",
        days: "5d in stage",
      },
      {
        initials: "HD",
        color: "bg-orange-500/20 text-orange-400",
        company: "Helix Digital",
        organization: "Helix Co.",
        value: "$9K",
        source: "LinkedIn",
        days: "1d in stage",
      },
    ],
  },

  {
    title: "Qualified",
    count: 2,
    value: "$50K",
    deals: [
      {
        initials: "EM",
        color: "bg-emerald-500/20 text-emerald-400",
        company: "Epoch Media",
        organization: "Epoch Inc.",
        value: "$31K",
        source: "Referral",
        days: "9d in stage",
      },
      {
        initials: "CB",
        color: "bg-pink-500/20 text-pink-400",
        company: "Crest Brands",
        organization: "Crest Corp.",
        value: "$19K",
        source: "Demo",
        days: "14d in stage",
      },
    ],
  },

  {
    title: "Proposal",
    count: 2,
    value: "$73K",
    deals: [
      {
        initials: "FS",
        color: "bg-violet-500/20 text-violet-400",
        company: "Flux Systems",
        organization: "Flux Ltd.",
        value: "$45K",
        source: "Conference",
        days: "21d in stage",
      },
      {
        initials: "NC",
        color: "bg-blue-500/20 text-blue-400",
        company: "Nimbus Cloud",
        organization: "Nimbus",
        value: "$28K",
        source: "Referral",
        days: "18d in stage",
      },
    ],
  },

  {
    title: "Negotiation",
    count: 1,
    value: "$62K",
    deals: [
      {
        initials: "AD",
        color: "bg-yellow-500/20 text-yellow-400",
        company: "Axiom Digital",
        organization: "Axiom Corp.",
        value: "$62K",
        source: "Outbound",
        days: "31d in stage",
      },
    ],
  },

  {
    title: "Closed Won",
    count: 2,
    value: "$58K",
    deals: [
      {
        initials: "SM",
        color: "bg-green-500/20 text-green-400",
        company: "Stratos Media",
        organization: "Stratos",
        value: "$20K",
        source: "Inbound",
        days: "45d in stage",
      },
      {
        initials: "ZL",
        color: "bg-purple-500/20 text-purple-400",
        company: "Zenith Labs",
        organization: "Zenith Inc.",
        value: "$38K",
        source: "Referral",
        days: "52d in stage",
      },
    ],
  },
];

export default function PipelineBoard() {
  return (
    <div className="overflow-x-auto scrollbar-hide pb-2">
    <div className="flex gap-4 w-max min-w-full">
        {pipeline.map((column, index) => (
          <PipelineColumn
            key={index}
            title={column.title}
            count={column.count}
            value={column.value}
            deals={column.deals}
          />
        ))}
      </div>
    </div>
  );
}