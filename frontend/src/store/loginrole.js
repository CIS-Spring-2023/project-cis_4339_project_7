//taken from class discussing pinia

export function loginrole(u, p) {
  if (u === "editor" && p === "editor") return Promise.resolve({ isAllowed: true, name: "Editor" });
  if (p === "editor") return Promise.resolve({ isAllowed: false });
  if (u === "visitor" && p === "visitor") return Promise.resolve({ isAllowed: true, name: "Visitor" });
  if (p === "visitor") return Promise.resolve({ isAllowed: false });
  return Promise.reject(new Error("invalid credentials"));
}