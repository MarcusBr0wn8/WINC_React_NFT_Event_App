import React, { useEffect } from "react";
import { Filter } from "../components/Filter";
import { useLoaderData } from "react-router-dom";
import { Header } from "../components/Header";

export const loader = async () => {
  try {
    const event = await (
      await fetch(
        // "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/events"
        "https://my-json-server.typicode.com/MarcusBr0wn8/WINC_React_NFT_Event_App/events"
      )
    ).json();
    const categories = await (
      await fetch(
        // "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/categories/"
        "https://my-json-server.typicode.com/MarcusBr0wn8/WINC_React_NFT_Event_App/categories"
      )
    ).json();
    const users = await (
      await fetch(
        // "https://my-json-server.typicode.com/MarcusBr0wn8/event-db/users"
        "https://my-json-server.typicode.com/MarcusBr0wn8/WINC_React_NFT_Event_App/users"
      )
    ).json();

    // Added an error-handler
    return [event, categories, users];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const EventsPage = () => {
  const [event, categories] = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title={"Browse NFT events"} />
      <Filter events={event} category={categories} />
    </>
  );
};
