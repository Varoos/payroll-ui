// const handleLogin = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await fetch("https://localhost:7048/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!res.ok) {
//       const text = await res.text();
//       setMsg("Login failed: " + text);
//       return;
//     }

//     const data = await res.json();

//     localStorage.setItem("accessToken", data.accessToken);
//     localStorage.setItem("refreshToken", data.refreshToken);

//     setMsg("Login success ✅");
//   } catch (err) {
//     setMsg("Network error");
//     console.error(err);
//   }
// };
// export default Login;

import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("admin");
  const [msg, setMsg] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://localhost:7048/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const text = await res.text();
      setMsg("Login failed: " + text);
      return;
    }

    const data = await res.json();

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    setMsg("Login success ✅");
  } catch (err) {
    setMsg("Network error ❌");
    console.error(err);
  }
};


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}

export default Login;
