import Items from "../components/home/items";
import ListingModal from "../components/listing/modal";

export default function Listing() {
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
          <Items isListing={false} />
          <Items isListing={false} />
          <Items isListing={false} />
          <Items isListing={false} />
        </div>
      </div>
    </>
  );
}
