"use client";

import { getProviders, signIn } from "next-auth/react";
import { useState } from "react";

export default function SignIn_Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <>
      <div className="hero">
        <div className="hero-content w-1/2">
          <div className="card bg-base-100 w-full shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-4">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <button
                    className="btn button-secondary-color text-xl py-4"

                    type="submit"
                  >
                    Login
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
