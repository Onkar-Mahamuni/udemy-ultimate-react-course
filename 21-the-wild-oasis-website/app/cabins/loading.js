import Spinner from "@/app/_components/Spinner";

//This loading.js will be applied specifically to the cabins page.
export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}
