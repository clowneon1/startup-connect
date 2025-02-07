import React from "react";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_BY_ID_QUERY } from "@/sanity/lib/queries";
import { formatViews } from "@/lib/utils";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_BY_ID_QUERY, { id });

  //TODO: Update the view count on page visit

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">{formatViews(totalViews)}</span>
      </p>
    </div>
  );
};

export default View;
