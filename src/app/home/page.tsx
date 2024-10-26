const paras = [
  {
    title: "Problem",
    content: `Access to legal help is expensive and often inaccessible for low-income individuals and marginalized groups.`,
  },
  {
    title: "Solution",
    content: `Develop an agentic LLM app that helps individuals with legal issues, such as housing disputes, worker rights, or immigration concerns. The app could provide guidance on filling out legal forms, draft documents, or suggest next steps for users based on their situation. It could also integrate with local legal resources or non-profits to connect users to free or low-cost legal assistance.`,
  },
  {
    title: "Impact",
    content: `Democratize access to justice, helping people navigate complex legal systems autonomously.`,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-4xl font-bold">AI Based Legal Aid</h1>
        <p>Welcome to the Legal Aid Dashboard</p>
      </div>
      <img src="/assets/main.png" alt="Logo" className="w-80 h-80" />
      <div className="flex flex-col gap-8 md:w-[70%] mx-auto items-center">
        {paras.map((para, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 sm:items-center sm:text-center ">
            <h2 className="text-xl font-bold">{para.title}</h2>
            <p className="text-sm">{para.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

