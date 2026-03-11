import Sidebar from "../components/Sidebar";
import Project from "../components/Project";

function Home() {

  const projects = [
    {
      title: "Detect Non-negative Airline Tweets: BERT for Sentiment Analysis",
      description:
        "Fine-tuned BERT model for sentiment classification using airline tweets."
    },
    {
      title: "Detect Food Trends from Facebook Posts",
      description:
        "Used co-occurrence matrix, lift and PPMI to detect trending ingredients."
    }
  ];

  return (

    <div className="grid grid-cols-4">

      <Sidebar/>

      <div className="col-span-3 p-10">

        {projects.map((p, i) => (
          <Project
            key={i}
            title={p.title}
            description={p.description}
          />
        ))}

      </div>

    </div>

  );
}

export default Home;