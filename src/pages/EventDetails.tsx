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
interface Ticket {
  id: number;
  eventId: number;
  type: string;
  price: number;
  available: number;

}

function EventDetails() {
  const params = useParams();
  const [event, setEvent] = useState<SingleEvent>({});
  const [tickets, setTickets] = useState<Ticket[]>([]);

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

  useEffect(()=>{
    fetch("/tickets.json")
    .then((res) => res.json())
    .then((data: Ticket[]) =>{
      setTickets(data);
    })
    .catch((err) => console.error("Error loading tickets: ", err));
  }, []);

  const eventTickets = tickets.filter(
    (ticket) => ticket.eventId === Number(params.id)

  );



  // Function to read images
  const getImageUrl = (name?: string) => {
    return new URL(`../assets/events_photos/${name}`, import.meta.url).href;
  };

  return (
    <main className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6" >
      <div className="flex max-w-2x1 ">
        {/* Image container */}
        <div className="w-full md:w-full h-full object-cover justify-center">
          <img
            className="min-h-[180px] rounded-2xl"
            src={getImageUrl(event.imageUrl)}
            alt={event.name}
            loading="lazy"
          />
        </div>

        {/* Content container */}
        <div className="flex justify-left p-4 ">
          <div className="space-y-2">
            {/* Name/Title */}
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              {event.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relax line-clamp-4">
              {event.description}
            </p>

            {/* Genre */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relax line-clamp-4 pt-6">
              {event.category}
            </p>

            {/* Place */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relax line-clamp-4 pt-3">
              {event.place}
            </p>

            {/* Author */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relax line-clamp-4 pt-3">
              {event.author}
            </p>

            {/* Date */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relax line-clamp-4 pt-3">
              Selling date: {event.sellingDate?.toString()}
            </p>

            {/* Start hour */}
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relax line-clamp-4 pt-3">
              Start hour: {event.startHour?.toTimeString()}
            </p>



          </div>
        </div>
      </div>
      
      <section className="tickets-section">
        <h2>Available Tickets</h2>
        <p>
          Choose the ticket type you want to purchase
        </p>
        {eventTickets.map((ticket)=>(
        <div key={ticket.id} className="ticket-card">
          <h3>{ticket.type} Ticket</h3>
          <p>Price: ${ticket.price}</p>
          <p>Available: {ticket.available}</p>
          <button>Buy Ticket</button>
        </div>
        ))}
      </section>
    </main>
  );
}
export default EventDetails;
