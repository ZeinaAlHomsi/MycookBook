const SESSION_KEY = "cookbook_session";
const API_BASE = "http://localhost/cookbook-api";

const safeJson = async (res) => {
  try { return await res.json(); } catch { return {}; }
};

export const signUp = async (name, email, password) => {
  const res = await fetch(`${API_BASE}/signup.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: String(name || "").trim(),
      email: String(email || "").trim().toLowerCase(),
      password: String(password || "")
    }),
  });

  const data = await safeJson(res);
  if (!res.ok) return { ok: false, message: data.message || "Signup failed" };

  localStorage.setItem(SESSION_KEY, JSON.stringify(data.user));
  return { ok: true, user: data.user };
};

export const logIn = async (email, password) => {
  const res = await fetch(`${API_BASE}/login.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: String(email || "").trim().toLowerCase(),
      password: String(password || "")
    }),
  });

  const data = await safeJson(res);
  if (!res.ok) return { ok: false, message: data.message || "Login failed" };

  localStorage.setItem(SESSION_KEY, JSON.stringify(data.user));
  return { ok: true, user: data.user };
};

export const getSession = () => {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); }
  catch { return null; }
};

export const logOut = () => localStorage.removeItem(SESSION_KEY);
