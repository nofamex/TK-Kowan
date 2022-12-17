import { useQuery } from "react-query";
import Items from "../components/home/items";
import { httpClient } from "../utils/httpClient";

export default function Booking() {
  const { data } = useQuery("userBooking", () => {
    return httpClient.get("/booking/user-booking");
  });

  const booking = data?.data.data || [];
  return (
    <div className="flex flex-col justify-start items-center min-h-screen h-auto">
      <div className="w-full h-auto border grid grid-cols-4 gap-12 justify-between border-none mt-12">
        {booking.map((data: any) => {
          return (
            <Items
              key={data.id}
              isListing={false}
              name={data.accomodation.name}
              location={data.accomodation.location}
              price={data.accomodation.price}
              id={data.accomodation.id}
            />
          );
        })}
      </div>
    </div>
  );
}
