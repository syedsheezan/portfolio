import React from "react";

export default function Portfolio() {
  const phoneNumber = "+919685783325";
  const email = "hifzan56@gmail.com";

  const handlePhoneClick = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert("Phone number copied to clipboard!");
    } catch (err) {
      console.log("Clipboard copy failed");
    }

    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(
      "Regarding AI/ML Opportunity"
    );

    const body = encodeURIComponent(
      "Hi Syed,\n\nI visited your portfolio and would like to connect with you."
    );

    window.open(
      `mailto:${email}?subject=${subject}&body=${body}`,
      "_blank"
    );
  };
  const skills = {
    "AI / ML & LLMs": [
      "Generative AI",
      "LLMs",
      "RAG",
      "Agentic AI",
      "LangChain",
      "LangGraph",
      "Prompt Engineering",
      "Embeddings",
      "Fine-Tuning",
      "Model Evaluation",
    ],

    "Backend & APIs": [
      "Django REST Framework",
      "JWT Authentication",
      "REST APIs",
      "OAuth2",
      "Microservices",
      "System Design",
    ],

    "Databases & Vector Stores": [
      "PostgreSQL",
      "MySQL",
      "Neo4j",
      "FAISS",
      "Pinecone",
      "ChromaDB",
      "AstraDB",
    ],

    "Cloud & AI Platforms": [
      "OpenAI API",
      "AWS Bedrock",
      "AWS SageMaker",
      "Groq",
      "Ollama",
      "Google AI Studio",
      "Hugging Face",
    ],

    Programming: ["Python", "C", "C++", "C#"],
  };

  const projects = [
    {
      title: "AI Tutor",
      link: "https://aitutor1.streamlit.app/",
      description:
        "Deployed AI tutoring platform with contextual memory, streaming LLM responses, and adaptive learning workflows.",
      tech: ["Streamlit", "LLMs", "LangChain", "AI Memory"],
    },

    {
      title: "RAG-Based Document Q&A System",
      description:
        "Built a full Retrieval-Augmented Generation pipeline with semantic chunking, embeddings, and vector similarity search.",
      tech: ["LangChain", "FAISS", "Pinecone", "ChromaDB"],
    },

    {
      title: "Agentic AI Chatbot",
      description:
        "Engineered a multi-turn conversational AI system with persistent memory and LangGraph orchestration.",
      tech: ["LangGraph", "Agents", "Context Memory", "LLMs"],
    },

    {
      title: "Natural Language to SQL Assistant",
      description:
        "Developed an AI-powered NL-to-SQL engine with schema-aware prompt engineering and query validation.",
      tech: ["LLMs", "SQL", "Prompt Engineering", "Validation"],
    },

    {
      title: "Backend API System",
      description:
        "Architected scalable DRF backend with JWT auth, UUID-based models, middleware, and optimized APIs.",
      tech: ["DRF", "JWT", "PostgreSQL", "REST APIs"],
    },
  ];

  const experience = [
    {
      role: "Backend & AI Developer Intern",
      company: "Affy Cloud Solutions",
      duration: "Jul 2025 – Present",

      points: [
        "Built production-grade DRF APIs with JWT authentication and RBAC.",
        "Developed RAG pipelines integrating LangChain, FAISS, ChromaDB, OpenAI, and Groq.",
        "Integrated Canva REST API with OAuth2 token refresh workflows.",
        "Designed optimized MySQL schemas improving backend efficiency and reliability.",
      ],
    },

    {
      role: "Customer Service Executive",
      company: "Amazon",
      duration: "2019 – Jun 2025",

      points: [
        "Handled high-volume technical support operations with SLA compliance.",
        "Strengthened analytical problem-solving through root-cause issue resolution.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 md:px-16">
      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-gray-400 mb-4">
              AI/ML Engineer • Backend Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Syed Mohd Sheezan
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Results-driven AI/ML Developer specializing in Generative AI,
              Large Language Models, RAG systems, Agentic AI workflows, and
              scalable backend architecture.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={handlePhoneClick}
                className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
              >
                Contact Me
              </button>

              <a
                href="https://github.com/syedsheezan"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl border border-gray-700 hover:bg-gray-900 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/syed-sheezan-488655255"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-2xl border border-gray-700 hover:bg-gray-900 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-6">
              Professional Summary
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Experienced in architecting AI pipelines using OpenAI, AWS
              Bedrock, Groq, Ollama, LangChain, and vector databases. Skilled
              in building scalable Django REST Framework backends with JWT
              authentication, semantic search systems, and production-ready AI
              applications.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-black/40 rounded-2xl p-4 border border-gray-700">
                <h3 className="text-3xl font-bold">5+</h3>

                <p className="text-gray-400">
                  Client Modules Delivered
                </p>
              </div>

              <div className="bg-black/40 rounded-2xl p-4 border border-gray-700">
                <h3 className="text-3xl font-bold">AI</h3>

                <p className="text-gray-400">
                  LLM & RAG Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section className="max-w-7xl mx-auto mt-24">
        <h2 className="text-4xl font-bold mb-10">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-900 rounded-3xl p-6 border border-gray-800 hover:border-gray-600 transition"
            >
              <h3 className="text-xl font-semibold mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 rounded-full bg-black border border-gray-700 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}

      <section className="max-w-7xl mx-auto mt-24">
        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:translate-y-[-4px] transition"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm border border-gray-700 px-4 py-2 rounded-full hover:bg-black"
                  >
                    Live Demo
                  </a>
                )}
              </div>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-2 rounded-full bg-black border border-gray-700 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}

      <section className="max-w-7xl mx-auto mt-24">
        <h2 className="text-4xl font-bold mb-10">
          Work Experience
        </h2>

        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={job.role}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {job.role}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {job.company}
                  </p>
                </div>

                <span className="text-gray-500">
                  {job.duration}
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-gray-300">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span>•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="max-w-7xl mx-auto mt-24">
        <h2 className="text-4xl font-bold mb-10">
          Contact Information
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Phone Number
            </h3>

            <p className="text-gray-400 mb-6">
              Click below to call directly. Number will also
              be copied automatically.
            </p>

            <button
              onClick={handlePhoneClick}
              className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              +91 96857 83325
            </button>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Email Address
            </h3>

            <p className="text-gray-400 mb-6">
              Opens Gmail, Outlook, Apple Mail, or default
              email client automatically.
            </p>

            <a
              href={`mailto:${email}?subject=Regarding AI/ML Opportunity`}
              className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition inline-block"
            >
              {email}
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="max-w-7xl mx-auto mt-24">
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-3xl p-10 text-center">
          <h2 className="text-4xl font-bold">
            Let’s Build AI Systems That Scale
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Interested in AI-powered applications, scalable backend
            systems, RAG pipelines, or LLM integrations? Let’s connect.
          </p>

          <div className="flex justify-center gap-4 flex-wrap mt-8">
            <a
              href={`mailto:${email}?subject=Regarding AI/ML Opportunity`}
              className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
            >
              Send Email
            </a>

            <a
              href="https://github.com/syedsheezan"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl border border-gray-700"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="text-center text-gray-500 mt-20 pb-6">
        © 2026 Syed Mohd Sheezan — AI/ML & Backend Developer
      </footer>
    </div>
  );
}