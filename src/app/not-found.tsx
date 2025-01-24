import { AlertTriangle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { homePath } from "@/constants/paths";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 animate-fade-down animate-duration-800 animate-delay-100 animate-ease-out">
      <AlertTriangle className="h-12 w-12 text-muted-foreground" />
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Button asChild variant="outline">
        <Link href={homePath}>Back Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
