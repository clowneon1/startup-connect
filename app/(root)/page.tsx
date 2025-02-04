import React from "react";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 100,
      author: { _id: 1, name: "John Doe" },
      _id: "1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies",
      image: "https://i.imgur.com/hUQNULl.jpeg",
      category: "Tech",
      title: "Tech Fest",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br /> Connect With Community
        </h1>
        <p className="sub-heading !max-w-3xl">
          Pitch, Connect, and Grow—Turn Ideas Into Opportunities!
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <div className="no-results"> No Startups Found</div>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
