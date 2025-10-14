'use client';

import React from "react";
import { useSearchParams } from "next/navigation";
import BookingEngine from "../../../components/pages/7_booking_engine/BookingEngine";

const Page = () => {
  const searchParams = useSearchParams();

  const arrivalDate = searchParams.get("arrivalDate");
  const departureDate = searchParams.get("departureDate");
  const personsCount = searchParams.get("personsCount");

  const baseUrl = "https://be.guestsage.com/pl/048bbae8-1844-4bfc-b70c-15b2b9762c80";

  // Jeśli są wszystkie parametry — składamy URL z ofertami
  let bookingUrl: string;

  if (arrivalDate && departureDate && personsCount) {
    bookingUrl = `${baseUrl}/offers?arrivalDate=${arrivalDate}&departureDate=${departureDate}&personsCount=${personsCount}`;
  } else {
    // Jeśli parametrów brak, pokazujemy domyślną stronę
    bookingUrl = baseUrl;
  }

  return <BookingEngine url={bookingUrl} />;
};

export default Page;
