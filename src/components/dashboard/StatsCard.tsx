import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
    label: string;
    value: string;
    change?: string;
    trend?: 'up' | 'down' | 'neutral';
    icon?: LucideIcon;
    description?: string;
    className?: string;
}

export const StatsCard = ({
    label,
    value,
    change,
    trend,
    icon: Icon,
    description,
    className
}: StatsCardProps) => {
    return (
        <Card className={cn(
            "overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-border/50",
            className
        )}>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <p className="text-sm font-medium text-muted-foreground">{label}</p>
                    {Icon && (
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Icon className="h-4 w-4 text-primary" />
                        </div>
                    )}
                </div>

                <div className="flex items-baseline space-x-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">{value}</h3>
                    {change && (
                        <span className={cn(
                            "flex items-center text-xs font-medium px-2 py-0.5 rounded-full",
                            trend === 'up'
                                ? "text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/30"
                                : trend === 'down'
                                    ? "text-rose-700 bg-rose-50 dark:text-rose-400 dark:bg-rose-950/30"
                                    : "text-gray-600 bg-gray-100"
                        )}>
                            {trend === 'up' && <ArrowUpRight className="h-3 w-3 mr-1" />}
                            {trend === 'down' && <ArrowDownRight className="h-3 w-3 mr-1" />}
                            {change}
                        </span>
                    )}
                </div>

                {description && (
                    <p className="mt-2 text-xs text-muted-foreground">
                        {description}
                    </p>
                )}
            </CardContent>
        </Card>
    );
};
