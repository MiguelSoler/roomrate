function RatingValue({
  value,
  max = 5,
  emptyText = "Sin valoración",
  className = "",
}) {
  const hasValue = value !== null && value !== undefined && value !== "";

  if (!hasValue) {
    return <span className={className}>{emptyText}</span>;
  }

  return (
    <span
      className={`inline-flex items-baseline gap-0.5 ${className}`}
      aria-label={`Valoración ${value} sobre ${max}`}
      title={`Valoración ${value} sobre ${max}`}
    >
      <span>{value}</span>
      <span className="text-[0.75em] font-medium opacity-70">/{max}</span>
    </span>
  );
}

export default RatingValue;