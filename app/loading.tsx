export default function Loading() {
  return (
    <div className="container-page py-16 sm:py-24">
      <div className="skeleton h-10 w-2/3 max-w-md" />
      <div className="skeleton mt-4 h-4 w-full max-w-lg" />
      <div className="skeleton mt-2 h-4 w-5/6 max-w-lg" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        <div className="skeleton h-40 rounded-2xl" />
        <div className="skeleton h-40 rounded-2xl" />
        <div className="skeleton h-40 rounded-2xl" />
      </div>
    </div>
  );
}
