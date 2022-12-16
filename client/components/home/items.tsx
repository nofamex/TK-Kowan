import Image from "next/image";
import { ItemProps } from "../../types/items";

export default function Items({ isListing }: ItemProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl cursor-pointer hover:scale-110">
      <figure>
        <Image src="/hotel.jpg" alt="hotel" width={300} height={300} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Accomodation Name</h2>
        <p>Rika Riku, Bali</p>
        <p>Rp. 200.000</p>
        <div className="card-actions justify-end">
          {isListing && <button className="btn btn-white">Reserve</button>}
        </div>
      </div>
    </div>
  );
}
