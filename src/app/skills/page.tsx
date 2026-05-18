import SkillCard from "@/components/skills/SkillCard";
import AchievementCard from "@/components/skills/AchievementCard";

export default function SkillsPage() {
  const skills = [
    { name: "Python (Pandas)", category: "Data / AI", level: 95 },
    { name: "React / Next.js", category: "Frontend", level: 90 },
    { name: "Java", category: "Languages", level: 80 },
    { name: "C++ (OOP)", category: "Languages", level: 85 },
    { name: "AWS / Cloud", category: "Infrastructure", level: 75 },
    { name: "Docker / DevOps", category: "Infrastructure", level: 85 },
    { name: "HTML / CSS", category: "Frontend", level: 95 },
    { name: "Git / Terminal", category: "Tools", level: 90 },
  ];

  const achievements = [
    {
      title: "Young Professional Certificate",
      organization: "TCS iON Career Edge",
      date: "DEC 2024",
      colSpan: 2 as const
    },
    {
      title: "Modernize Infrastructure Applications",
      organization: "Google Cloud",
      date: "DEC 2024",
      colSpan: 2 as const
    },
    {
      title: "Gates Foundation Case Competition",
      organization: "Finalist",
      date: "NOV 2024",
      colSpan: 2 as const
    },
    {
      title: "Bidding War Winner",
      organization: "Ecell Event",
      date: "NOV 2024",
      colSpan: 2 as const
    }
  ];

  return (
    <div className="min-h-[calc(100vh-72px)] py-3xl px-base max-w-7xl mx-auto w-full">
      <div className="text-center mb-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-md">Skills & Achievements</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          The building blocks of my symmetrical chaos. A curated grid of technical proficiencies and milestones.
        </p>
      </div>

      <div className="mb-2xl">
        <h3 className="text-2xl font-bold mb-lg border-b border-white/10 pb-sm inline-block">Technical Arsenal</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-base">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-lg border-b border-white/10 pb-sm inline-block">Milestones & Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-base">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} {...achievement} />
          ))}
        </div>
      </div>
    </div>
  );
}
