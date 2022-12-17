import { useCookie } from "next-cookie";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AuthDto } from "../../types/auth";
import { httpClient } from "../../utils/httpClient";

export default function AuthModal() {
  const queryClient = useQueryClient();
  const cookie = useCookie();
  const router = useRouter();

  const [type, setType] = useState<string>("LOGIN");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegisterClick = (t: string): void => {
    setType(t);
  };

  const loginHandler = useMutation(
    (data: AuthDto) => {
      return httpClient.post("/auth/login", data);
    },
    {
      onSuccess: (res) => {
        if (res.data.status === 200) {
          queryClient.setQueryData("token", res.data.data);
          cookie.set("token", res.data.data.token);
          setInterval(() => router.reload(), 1500);
        } else {
          toast.error(res.data.error[0]);
        }
      },
    }
  );

  const registerHandler = useMutation(
    (data: AuthDto) => {
      return httpClient.post("/auth/register", data);
    },
    {
      onSuccess: (res) => {
        if (res.data.status === 200) {
          toast.success("registration complete");
          setInterval(() => router.reload(), 1500);
        } else {
          toast.error(res.data.error[0]);
        }
      },
    }
  );

  const submitHandler = () => {
    if (type === "LOGIN") {
      loginHandler.mutate({ username, password });
    } else {
      registerHandler.mutate({ username, password });
    }
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
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full mb-4"
              onChange={(e) => setPassword(e.target.value)}
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
              <button className="btn btn-white ml-auto" onClick={submitHandler}>
                {type === "LOGIN" ? "Login" : "Register"}
              </button>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}
