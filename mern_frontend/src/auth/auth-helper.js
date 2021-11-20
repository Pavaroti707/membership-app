function authenticate(token, callback) {
  if (typeof window !== "undefined")
    sessionStorage.setItem("token", JSON.stringify(token));

  callback();
}

function isAuthenticated() {
  if (typeof window == "undefined") return false;

  if (!sessionStorage.getItem("token")) return false;

  return JSON.parse(sessionStorage.getItem("token"));
}

function clearToken(callback) {
  if (typeof window !== "undefined") sessionStorage.removeItem("token");

  callback();
}

export default { authenticate, isAuthenticated, clearToken };
