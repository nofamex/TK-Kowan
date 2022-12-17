import Image from "next/image";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { BookingDto, ItemProps } from "../../types/items";
import { httpClient } from "../../utils/httpClient";

export default function Items({
  isListing,
  name,
  location,
  price,
  id,
}: ItemProps) {
  const handleReserve = useMutation(
    (data: BookingDto) => {
      return httpClient.post("/booking/create", data);
    },
    {
      onSuccess: (res) => {
        if (res.data.status === 200) {
          toast.success(`you have booked ${name}`);
        } else {
          toast.error(res.data.error[0]);
        }
      },
    }
  );

  return (
    <div className="card w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-110">
      <figure>
        <Image src="/hotel.jpg" alt="hotel" width={300} height={300} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{location}</p>
        <p>{price}</p>
        <div className="card-actions justify-end">
          {isListing && (
            <button
              className="btn btn-white"
              onClick={() => handleReserve.mutate({ accomodationId: id })}
            >
              Reserve
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
