import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardCompactProps {
  title: string;
  description: string;
  className?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

const CardCompact = ({
  title,
  className,
  description,
  footer,
  children,
}: CardCompactProps) => {
  return (
    <Card className={`w-full ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};
export default CardCompact;
