import { Link } from 'react-router-dom';
import {
  Scan, TrendingUp, ShoppingBag, CloudSun,
  Store, Heart, Leaf, Sprout, Tractor, LineChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUserProfile } from '@/hooks/use-user-profile';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { QuickActionCard } from '@/components/dashboard/QuickActionCard';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const farmerQuickActions = [
  { icon: Scan, label: 'Scan Crop', path: '/dashboard/disease-detection', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', description: 'Detect diseases early' },
  { icon: LineChart, label: 'View Prices', path: '/dashboard/market-prices', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', description: 'Real-time market data' },
  { icon: ShoppingBag, label: 'Marketplace', path: '/dashboard/marketplace', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', description: 'Sell your produce' },
  { icon: CloudSun, label: 'Weather', path: '/dashboard/weather', color: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400', description: '7-day forecast' },
];

const buyerQuickActions = [
  { icon: Store, label: 'Browse Products', path: '/dashboard/marketplace', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', description: 'Find fresh produce' },
  { icon: TrendingUp, label: 'Market Prices', path: '/dashboard/market-prices', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400', description: 'Track trends' },
  { icon: CloudSun, label: 'Weather', path: '/dashboard/weather', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', description: 'Check conditions' },
  { icon: Heart, label: 'Saved Items', path: '/dashboard/marketplace', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400', description: 'Your favorites' },
];

const farmerStats = [
  { label: 'Active Listings', value: '3', change: '+1 this week', trend: 'up' as const, icon: Leaf },
  { label: 'Buyer Inquiries', value: '5', change: '+2 new', trend: 'up' as const, icon: MessageCircleIcon },
  { label: 'Total Views', value: '28', change: '-5% vs last week', trend: 'down' as const, icon: EyeIcon },
  { label: 'Avg. Price/kg', value: 'KES 45', change: '+7% market trend', trend: 'up' as const, icon: BanknoteIcon },
];

const buyerStats = [
  { label: 'Orders Placed', value: '2', change: '1 in transit', trend: 'up' as const, icon: ShoppingCartIcon },
  { label: 'Saved Sellers', value: '8', change: '+3 new', trend: 'up' as const, icon: UserPlusIcon },
  { label: 'Products Viewed', value: '42', change: '+12 today', trend: 'up' as const, icon: SearchIcon },
  { label: 'Estimated Savings', value: '15%', change: 'vs retail prices', trend: 'up' as const, icon: PiggyBankIcon },
];

import { MessageSquare, Calendar, Package, Eye as EyeIcon, MessageCircle as MessageCircleIcon, Banknote as BanknoteIcon, ShoppingCart as ShoppingCartIcon, UserPlus as UserPlusIcon, Search as SearchIcon, PiggyBank as PiggyBankIcon } from 'lucide-react';

const farmerActivity = [
  { icon: MessageSquare, text: 'New message from Grace Wanjiku about your maize listing', time: '10 min ago', highlight: true },
  { icon: TrendingUp, text: 'Maize prices increased by 7% in Nakuru', time: '1 hour ago' },
  { icon: CloudSun, text: 'Weather alert: Heavy rain expected tomorrow', time: '2 hours ago', highlight: true },
  { icon: Calendar, text: 'Reminder: Harvest tomatoes this week', time: '5 hours ago' },
];

const buyerActivity = [
  { icon: Package, text: 'Your order from Kamau Farms is ready for pickup', time: '30 min ago', highlight: true },
  { icon: TrendingUp, text: 'Price drop on potatoes - now KES 35/kg', time: '1 hour ago' },
  { icon: Store, text: 'New products available from your saved sellers', time: '3 hours ago' },
  { icon: MessageSquare, text: 'Reply from Njeri Greens about bulk order', time: '5 hours ago' },
];

const DashboardHome = () => {
  const { profile, loading } = useUserProfile();

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground animate-pulse">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const userRole = profile?.role || 'farmer';
  const userName = profile?.full_name?.split(' ')[0] || 'User';
  const isBuyer = userRole === 'buyer';
  const quickActions = isBuyer ? buyerQuickActions : farmerQuickActions;
  const stats = isBuyer ? buyerStats : farmerStats;
  const recentActivity = isBuyer ? buyerActivity : farmerActivity;

  return (
    <div className="space-y-8 pb-8">
      {/* Welcome Section with Hero Gradient */}
      <div className="relative overflow-hidden rounded-3xl p-8 text-white shadow-elevated">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-0" />
        <div className="absolute inset-0 pattern-dots opacity-20 z-0" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Karibu, {userName}! 👋
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-xl">
              {isBuyer
                ? "Find the freshest produce directly from local farmers today."
                : "Manage your farm, track prices, and connect with buyers."
              }
            </p>
          </div>
          <Link to="/dashboard/marketplace">
            <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all">
              {isBuyer ? (
                <>
                  <Store className="w-5 h-5 mr-2" />
                  Start Shopping
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  New Listing
                </>
              )}
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4 px-1">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <StatsCard
              key={i}
              {...stat}
              className="animate-in"
              style={{ animationDelay: `${i * 100}ms` } as any}
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4 px-1">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, i) => (
            <QuickActionCard
              key={i}
              {...action}
            />
          ))}
        </div>
      </div>

      {/* Activity & Weather Wrapper */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card className="glass-card h-full border-none">
            <CardContent className="p-6">
              <ActivityFeed items={recentActivity} />
            </CardContent>
          </Card>
        </div>

        {/* Weather Widget (Enhanced) */}
        <div className="h-full">
          <Card className="glass-card h-full border-none overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <CloudSun className="w-32 h-32" />
            </div>

            <CardHeader>
              <CardTitle>Weather Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <div className="text-6xl mb-4 animate-float">⛅</div>
                <div className="space-y-1 mb-6">
                  <p className="text-5xl font-bold tracking-tighter">24°C</p>
                  <p className="text-muted-foreground font-medium">Nairobi, Kenya</p>
                  <p className="text-sm text-muted-foreground">Partly Cloudy</p>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mb-6">
                  <div className="bg-primary/5 p-3 rounded-2xl">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Humidity</p>
                    <p className="font-bold text-primary">65%</p>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-2xl">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Wind</p>
                    <p className="font-bold text-primary">12 km/h</p>
                  </div>
                </div>

                <Link to="/dashboard/weather" className="w-full">
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white transition-colors">
                    Full Forecast
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
