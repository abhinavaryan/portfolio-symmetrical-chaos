import TimelineCard from "@/components/journey/TimelineCard";

export default function JourneyPage() {
  const journeyData = [
    {
      date: "2023 - Present",
      title: "Computer Science at GGSIPU",
      body: "Embarking on a journey into algorithms, AI, and structured thinking. A period of learning foundational principles while navigating the chaos of finding my true passion in technology.",
    },
    {
      date: "Nov 2024",
      title: "Gates Foundation Case Competition Finalist",
      body: "A profound moment of validation. Proving that my skills could tackle real-world, high-impact problems. This sparked my drive to build systems that matter.",
    },
    {
      date: "Feb 2025 – July 2025",
      title: "Frontend Developer at Devliqly",
      body: "Translating logic into visual experiences. Learning to balance state, performance, and user psychology. It taught me patience and the art of pixel-perfect execution.",
    },
    {
      date: "Mar 2025 – Apr 2025",
      title: "DevOps Engineer at Techno Hacks",
      body: "Diving into the infrastructure. Containerization and pipelines taught me how to bring order to chaotic systems, building resilience both in code and in mindset.",
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-72px)] bg-[#121212] overflow-hidden py-3xl px-base">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-900/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-md">The Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Growth is rarely linear. It's a symmetrical chaos of breakthroughs, setbacks, and continuous evolution.
          </p>
        </div>

        <div className="relative wrap overflow-hidden p-10 h-full">
          {/* Vertical line */}
          <div className="absolute border-opacity-20 border-white h-full border-l-2 left-[20px] md:left-1/2 rounded" />
          
          {journeyData.map((item, index) => (
            <TimelineCard 
              key={index}
              date={item.date}
              title={item.title}
              body={item.body}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
