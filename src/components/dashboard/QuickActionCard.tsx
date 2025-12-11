import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface QuickActionCardProps {
    label: string;
    icon: LucideIcon;
    path: string;
    color?: string;
    description?: string;
}

export const QuickActionCard = ({
    label,
    icon: Icon,
    path,
    color = "bg-primary/10 text-primary",
    description
}: QuickActionCardProps) => {
    return (
        <Link to={path} className="block group">
            <Card className="h-full p-6 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm group-hover:bg-card">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className={cn(
                        "p-4 rounded-2xl transition-transform duration-300 group-hover:scale-110",
                        color
                    )}>
                        <Icon className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {label}
                        </h3>
                        {description && (
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </Card>
        </Link>
    );
};
