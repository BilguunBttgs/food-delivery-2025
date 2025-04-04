import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type DynamicCardHeaderProps = {
  title: string;
  description?: string;
};

export const DynamicCardHeader = ({
  title,
  description,
}: DynamicCardHeaderProps) => {
  return (
    <CardHeader className="p-0">
      <CardTitle className="text-2xl">{title}</CardTitle>
      <CardDescription className="text-base">{description}</CardDescription>
    </CardHeader>
  );
};
