import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from "@/components/ui/scroll-area";

interface ActivityItem {
    icon: LucideIcon;
    text: string;
    time: string;
    highlight?: boolean;
}

interface ActivityFeedProps {
    title?: string;
    items: ActivityItem[];
    className?: string;
}

export const ActivityFeed = ({
    title = "Recent Activity",
    items,
    className
}: ActivityFeedProps) => {
    return (
        <div className={cn("space-y-4", className)}>
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground tracking-tight">
                    {title}
                </h3>
            </div>

            <ScrollArea className="h-[300px] w-full pr-4">
                <div className="space-y-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                            <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors",
                                item.highlight
                                    ? "bg-primary/20 text-primary"
                                    : "bg-muted text-muted-foreground group-hover:bg-background group-hover:text-primary"
                            )}>
                                <item.icon className="w-5 h-5" />
                            </div>

                            <div className="flex-1 min-w-0 pt-1">
                                <p className="text-sm font-medium text-foreground leading-none mb-1.5">
                                    {item.text}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {item.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
};
