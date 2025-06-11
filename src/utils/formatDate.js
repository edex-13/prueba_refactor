// utils/formatDate.js
export const formatDate = (dateString) => {
  if (!dateString || dateString === "No registra") return "No registra";
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
