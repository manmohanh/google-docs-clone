import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Button variant={"destructive"}>Click Me</Button>
    </div>
  );
}
