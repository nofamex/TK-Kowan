import Items from "../components/home/items";

export default function Booking() {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen h-auto">
      <div className="w-full h-auto border grid grid-cols-4 gap-12 justify-between border-none mt-12">
        <Items isListing={false} />
        <Items isListing={false} />
        <Items isListing={false} />
        <Items isListing={false} />
      </div>
    </div>
  );
}
