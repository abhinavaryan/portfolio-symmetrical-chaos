export const creditRiskDiagram = `
graph TD
    A[User Input] --> B[Data Collector Agent]
    B --> C[Risk Assessment Node]
    C --> D{Decision Engine}
    D -->|Approve| E[Approval Workflow]
    D -->|Reject| F[Rejection Notice]
    D -->|Review| G[Human in Loop]
    C -.-> H[(ChromaDB Policies)]
    classDef default fill:#1e1e24,stroke:#6366f1,stroke-width:2px,color:#f1f5f9;
`;

export const diseasePredictionDiagram = `
graph LR
    A[Patient Data] --> B(Symptom Analysis Agent)
    B --> C(Diagnostic Agent)
    C --> D(Treatment Rec Agent)
    D --> E[Final Report]
    classDef default fill:#1e1e24,stroke:#8b5cf6,stroke-width:2px,color:#f1f5f9;
`;
