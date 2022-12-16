import Items from "./items";

export default function Accomodation() {
  return (
    <div className="flex justify-center items-center" id="content">
      <div className="w-full h-5/6 border grid grid-cols-4 gap-12 justify-between border-none">
        <Items isListing />
        <Items isListing />
        <Items isListing />
        <Items isListing />
        <Items isListing />
        <Items isListing />
      </div>
    </div>
  );
}
