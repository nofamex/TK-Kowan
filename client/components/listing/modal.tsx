export default function ListingModal() {
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
            />
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered w-full mb-4"
            />
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full mb-4"
            />
            <div className="w-full flex">
              <button className="btn btn-white ml-auto">Submit</button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}
