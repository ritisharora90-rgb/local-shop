"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", { ...form, redirect: false });
    if (res.error) setError("Invalid email or password");
    else router.push("/");           // ← goes to homepage after login
  };

  return (
    <div className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}>
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "420px" }}>


        <h3 className="text-center mb-1 fw-bold">Welcome  to Login page</h3>
        <p className="text-center text-muted mb-4" style={{ fontSize: "14px" }}>
          Login to your LocalShop account
        </p>



        {error && <div className="alert alert-danger py-2">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label fw-bold">Email address</label>
            <input type="email" className="form-control" placeholder="you@email.com"
              onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Password</label>
            <input type="password" className="form-control" placeholder="Enter password"
              onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Login
          </button>
        </form>

        <div className="text-center text-muted mb-3" style={{ fontSize: "13px" }}>
          ── or continue with ──
        </div>

        {/* Google Login */}
        <button className="btn btn-outline-danger w-100 mb-3"
          onClick={() => signIn("google", { callbackUrl: "/" })}>
          <i className="bi bi-google me-2"></i>Continue with Google
        </button>

        <p className="text-center mb-0" style={{ fontSize: "14px" }}>
          Do not have an account?{" "}
          <Link href="/register" className="text-primary">Register here</Link>
        </p>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <h5 className="border-rounded fst-italic text-white bg bg-primary p-1 mt-2 w-100 text-center " >IF YOU ARE AN ADMIN </h5>
          <a
            href="https://local-shop-admin.onrender.com/admin/login"
          >
            <button className="btn btn-dark ">
              Admin Panel
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}