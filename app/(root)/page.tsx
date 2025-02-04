import React from "react";
import SearchForm from "@/components/SearchForm";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      views: 100,
      author: "John Doe",
      _id: "1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies ultricies, nunc nisl ultricies",
      image:
        "https://images.unsplash.com/photo-1630480003494-4b3b3b3b3b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjIwNzN8MHwxfGFsbHwxf",
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
    </>
  );
};

export default Home;
