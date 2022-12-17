import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { CreateListingDto } from "../../types/items";
import { httpClient } from "../../utils/httpClient";

export default function ListingModal() {
  const qc = useQueryClient();
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const createAccom = useMutation(
    (data: CreateListingDto) => {
      return httpClient.post("/accomodation/create", data);
    },
    {
      onSuccess: () => {
        qc.invalidateQueries("userAccom");
      },
    }
  );

  const submitHandler = () => {
    createAccom.mutate({ name, location, price });
  };

  return (
    <>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">Add New Listing</h3>
          <div className="form-control w-full mt-4">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full mb-4"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered w-full mb-4"
              onChange={(e) => setLocation(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full mb-4"
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <div className="w-full flex">
              <button className="btn btn-white ml-auto" onClick={submitHandler}>
                Submit
              </button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}
