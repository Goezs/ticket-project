import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./EventDetails.css";

interface SingleEvent {
  id?: number;
  name?: string;
  description?: string;
  sellingDate?: Date;
  startHour?: Date;
  place?: string;
  maximumPersonCapacity?: number;
  category?: string;
  author?: string;
  imageUrl?: string;
}

function EventDetails() {
  const params = useParams();
  const [event, setEvent] = useState<SingleEvent>({});

  console.log(event);

  useEffect(() => {
    // files in the public folder are served relative to the root URL

    fetch("/events.json")
      .then((res) => res.json())
      .then((data: any[]) => {
        const mapped = data
          .filter((item) => item.id === Number(params.id))
          .map((item) => ({
            ...item,
            sellingDate: new Date(item.sellingDate), // Convert to JS Date Object
            startHour: new Date(item.startHour),
          }));
        setEvent(mapped[0]);
      })
      .catch((err) => console.error("Error loading JSON: ", err));
  }, []);


  // Function to read images
  const getImageUrl = (name?: string) => {
    return new URL(`../assets/events_photos/${name}`, import.meta.url).href;
  };

  return (
    <main className="flex flex-col md:flex-row max-w-2x1 bg-white dark:bg-slate-">
      {/* Image container */}
      <div className="relative w-full md:w-full h-full object-cover">
        <img
          className="absolute inset-0 w-full md:w-2/5 h-48 md:h-auto min-h-[180px]"
          src={getImageUrl(event.imageUrl)}
          alt={event.name}
          loading="lazy"
        />
      </div>

      {/* Content container */}
      <div className="flex flex-col justify-between p-6 md:w-3/5">
        <div className="space-y-2">
          {/* Name/Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            {event.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relax line-clamp-4">
            {event.description}
          </p>
        </div>
      </div>
    </main>
  );
}
export default EventDetails;
