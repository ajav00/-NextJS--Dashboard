import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
      <span className="text-sm text-gray-500">General Information</span>
      <div className="flex flex-wrap p-2 justify-center align-center">
        <SimpleWidget />
      </div>
    </div>
  );
}