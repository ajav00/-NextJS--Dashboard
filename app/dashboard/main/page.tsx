import { WidgetGrid } from "@/components";

export const metadata = {
    title: "Dashboard",
    description: "SEO Description",
}

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
      <span className="text-sm text-gray-500">General Information</span>
      <WidgetGrid />
    </div>
  );
}