import ProjectCard from "@/components/projects/ProjectCard";
import { creditRiskDiagram, diseasePredictionDiagram } from "@/lib/mermaidDefs";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Multi-Agent Credit Risk & Loan Approval",
      description: "Engineered a collaborative AI system using LangGraph where specialized agents automate credit risk assessment and loan approvals. Integrated RAG via ChromaDB to ensure real-time adherence to 2026 lending policies. Developed Reasoning Trace for XAI.",
      tags: ["LangGraph", "Python", "ChromaDB", "Streamlit"],
      colSpan: 2 as const,
      hasArchitecture: true,
      chartDef: creditRiskDiagram,
    },
    {
      title: "Disease Prediction",
      description: "Advanced disease prediction modeling utilizing CrewAI agents for complex diagnostic workflows.",
      tags: ["CrewAI", "Python", "Machine Learning"],
      colSpan: 1 as const,
      hasArchitecture: true,
      chartDef: diseasePredictionDiagram,
    },
    {
      title: "Blockchain Voting System",
      description: "Web3 application ensuring secure, immutable voting. Leveraged Solidity and Truffle for smart contracts, and MetaMask for decentralized authentication.",
      tags: ["Web3", "Solidity", "Truffle", "MetaMask"],
      colSpan: 1 as const,
    },
    {
      title: "Sugar Truth",
      description: "Data-driven application tracking and visualizing hidden sugars in common food products to promote healthier dietary choices.",
      tags: ["React", "Data Visualization", "API"],
      colSpan: 1 as const,
    },
    {
      title: "Open Source Hackathon Monitor",
      description: "Automated aggregation and tracking system for open source hackathons. Provides real-time notifications and team matchmaking capabilities.",
      tags: ["Next.js", "Web Scraping", "Automation"],
      colSpan: 1 as const,
    }
  ];

  return (
    <div className="min-h-[calc(100vh-72px)] py-3xl px-base max-w-7xl mx-auto w-full">
      <div className="text-center mb-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-md">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A showcase of intelligent systems, decentralized applications, and data-driven solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg auto-rows-fr">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
            colSpan={project.colSpan}
          />
        ))}
      </div>
    </div>
  );
}
