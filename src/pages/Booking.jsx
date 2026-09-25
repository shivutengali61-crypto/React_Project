import { useState } from "react";
import { supabase } from "../supabase";

function Booking() {
    const [name, setName] = useState("");
    const [tickets, setTickets] = useState("");
    const [stand, setStand] = useState("");
    const [venue, setVenue] = useState("");

    async function handleBooking() {
        // Check if all fields are filled
        if (!name || !tickets || !stand || !venue) {
            alert("Please fill all the details");
            return;
        }

        // Insert booking into Supabase
        const { data, error } = await supabase
            .from("bookings")
            .insert([
                {
                    name: name,
                    tickets: Number(tickets),
                    stand: stand,
                    venue: venue
                }
            ]);

        // Check for error
        if (error) {
    console.error("SUPABASE ERROR:", error);
    alert("Booking failed: " + error.message);
    return;
}

        // Booking successful
        alert("Ticket booked successfully!");

        // Clear form
        setName("");
        setTickets("");
        setStand("");
        setVenue("");
    }

    return (
        <main className="booking-page">

            <h1>Book Your Ticket</h1>

            <div className="booking-form">

                {/* Name */}
                <label htmlFor="name">
                    Name
                </label>

                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />

                {/* Number of Tickets */}
                <label htmlFor="tickets">
                    Number of Tickets
                </label>

                <input
                    id="tickets"
                    type="number"
                    min="1"
                    value={tickets}
                    onChange={(e) => setTickets(e.target.value)}
                    placeholder="Enter number of tickets"
                />

                {/* Stand */}
                <label htmlFor="stand">
                    Select Stand
                </label>

                <select
                    id="stand"
                    value={stand}
                    onChange={(e) => setStand(e.target.value)}
                >
                    <option value="">
                        -- Select Stand --
                    </option>

                    <option value="General Stand">
                        General Stand
                    </option>

                    <option value="VIP Stand">
                        VIP Stand
                    </option>
                </select>

                {/* Venue */}
                <label htmlFor="venue">
                    Select Venue
                </label>

                <select
                    id="venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                >
                    <option value="">
                        -- Select Venue --
                    </option>

                    <option value="Wankhede Stadium">
                        Wankhede Stadium
                    </option>

                    <option value="M. Chinnaswamy Stadium">
                        M. Chinnaswamy Stadium
                    </option>
                </select>

                {/* Book Button */}
                <button onClick={handleBooking}>
                    Book Ticket
                </button>

            </div>

            {/* Booking Details */}
            <section className="booking-details">

                <h3>Booking Details</h3>

                <p>
                    Name: <strong>{name || "-"}</strong>
                </p>

                <p>
                    Tickets: <strong>{tickets || "-"}</strong>
                </p>

                <p>
                    Stand: <strong>{stand || "-"}</strong>
                </p>

                <p>
                    Venue: <strong>{venue || "-"}</strong>
                </p>

            </section>

        </main>
    );
}

export default Booking;