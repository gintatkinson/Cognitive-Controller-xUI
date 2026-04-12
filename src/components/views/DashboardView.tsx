
import React from 'react';
import { 
  Activity, 
  Server, 
  Share2, 
  Layers, 
  ArrowUpRight, 
  ArrowDownRight,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { MOCK_DEVICES, MOCK_SERVICES, MOCK_SLICES, MOCK_LINKS } from '@/lib/mock-data';

const data = [
  { time: '00:00', traffic: 45, latency: 12 },
  { time: '04:00', traffic: 32, latency: 15 },
  { time: '08:00', traffic: 85, latency: 10 },
  { time: '12:00', traffic: 65, latency: 14 },
  { time: '16:00', traffic: 92, latency: 11 },
  { time: '20:00', traffic: 78, latency: 13 },
  { time: '23:59', traffic: 55, latency: 12 },
];

interface DashboardViewProps {
  onNavigate: (id: string, type: 'device' | 'link' | 'service' | 'slice') => void;
}

export function DashboardView({ onNavigate }: DashboardViewProps) {
  const stats = [
    { label: 'Total Devices', value: MOCK_DEVICES.length, icon: Server, color: 'text-blue-500', trend: '+2', trendType: 'up' },
    { label: 'Active Services', value: MOCK_SERVICES.filter(s => s.status === 'ACTIVE').length, icon: Activity, color: 'text-emerald-500', trend: '+1', trendType: 'up' },
    { label: 'Network Links', value: MOCK_LINKS.length, icon: Share2, color: 'text-purple-500', trend: '0', trendType: 'neutral' },
    { label: 'Slices', value: MOCK_SLICES.length, icon: Layers, color: 'text-orange-500', trend: '+1', trendType: 'up' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">Network Overview</h2>
          <p className="text-zinc-500 text-sm">Real-time status of your SDN infrastructure</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md">
          <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-mono text-zinc-300">SYSTEM STATUS: OPTIMAL</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-zinc-950 border-zinc-800 shadow-none">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </CardTitle>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-zinc-100">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {stat.trendType === 'up' && <ArrowUpRight className="w-3 h-3 text-emerald-500" />}
                {stat.trendType === 'down' && <ArrowDownRight className="w-3 h-3 text-rose-500" />}
                <span className={`text-[10px] font-medium ${stat.trendType === 'up' ? 'text-emerald-500' : stat.trendType === 'down' ? 'text-rose-500' : 'text-zinc-500'}`}>
                  {stat.trend} from last period
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-zinc-950 border-zinc-800 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-zinc-400">Network Traffic (Gbps)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  stroke="#52525b" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#52525b" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value}G`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', fontSize: '12px' }}
                  itemStyle={{ color: '#e4e4e7' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="traffic" 
                  stroke="#2563eb" 
                  fillOpacity={1} 
                  fill="url(#colorTraffic)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-zinc-950 border-zinc-800 shadow-none">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-zinc-400">Average Latency (ms)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis 
                  dataKey="time" 
                  stroke="#52525b" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="#52525b" 
                  fontSize={10} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value}ms`}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', border: '1px solid #27272a', fontSize: '12px' }}
                  itemStyle={{ color: '#e4e4e7' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="latency" 
                  stroke="#8b5cf6" 
                  strokeWidth={2} 
                  dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
