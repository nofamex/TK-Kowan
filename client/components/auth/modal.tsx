import { useState } from "react";

export default function AuthModal() {
  const [type, setType] = useState<string>("LOGIN");

  console.log(type);

  const handleRegisterClick = (t: string): void => {
    setType(t);
  };

  return (
    <>
      <input type="checkbox" id="auth-modal" className="modal-toggle" />
      <label htmlFor="auth-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">
            {type === "LOGIN" ? "Login" : "Register"}
          </h3>
          <div className="form-control w-full mt-4">
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full mb-4"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-4"
            />
            {type === "LOGIN" && (
              <div
                className="cursor-pointer hover:underline"
                onClick={() => handleRegisterClick("REGISTER")}
              >
                Dont have an account? register
              </div>
            )}
            <div className="w-full flex">
              <button className="btn btn-white ml-auto">
                {type === "LOGIN" ? "Login" : "Register"}
              </button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}
