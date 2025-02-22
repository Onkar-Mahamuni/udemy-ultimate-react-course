import Spinner from "@/app/_components/Spinner";

// This loader component will get rendered when the server component is loading data
export default function Loading() {
  return (
    <div>
      <Spinner />
    </div>
  );
}
