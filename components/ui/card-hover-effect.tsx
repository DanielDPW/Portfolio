import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    text: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => {
        const Icon = item.Icon;
        return (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
          >
            <div
              className="rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-2 ring-red-500 transition-all duration-500"
            >
              <div className="py-10 space-y-5">
                <Icon className="w-8 h-8 mx-auto" />
                <p className="text-2xl font-bold text-center text-gray-300">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
