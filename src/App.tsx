import React from "react";
import "./App.css";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  { title: "Feature 1", description: "Description of Feature 1", icon: "⚙️" },
  { title: "Feature 2", description: "Description of Feature 2", icon: "📈" },
  { title: "Feature 3", description: "Description of Feature 3", icon: "🔒" },
  { title: "Feature 4", description: "Description of Feature 4", icon: "🌐" },
  { title: "Feature 5", description: "Description of Feature 5", icon: "📂" },
  { title: "Feature 6", description: "Description of Feature 6", icon: "💡" },
];

const App: React.FC = () => {
  return (
    <div className="portal">
      <h1 className="portal-title">Welcome to the Portal</h1>
      <div className="card-container">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <div className="card-icon">{feature.icon}</div>
            <h2 className="card-title">{feature.title}</h2>
            <p className="card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
