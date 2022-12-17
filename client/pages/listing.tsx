import { useQuery } from "react-query";
import Items from "../components/home/items";
import ListingModal from "../components/listing/modal";
import { httpClient } from "../utils/httpClient";

export default function Listing() {
  const { data } = useQuery("userAccom", () => {
    return httpClient.get("/accomodation/user-accom");
  });

  const listing = data?.data.data || [];

  return (
    <>
      <ListingModal />
      <div className="w-full h-auto flex">
        <p className="font-semibold text-xl">My Listing</p>
        <label htmlFor="my-modal-4" className="btn ml-auto">
          Add Listing
        </label>
      </div>
      <div className="flex flex-col justify-start items-center min-h-screen h-auto">
        <div className="w-full h-auto border grid grid-cols-4 gap-12 justify-between border-none mt-12">
          {listing.map((data: any) => {
            return (
              <Items
                key={data.id}
                isListing={false}
                name={data.name}
                location={data.location}
                price={data.price}
                id={data.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
