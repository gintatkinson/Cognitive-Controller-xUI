
import React from 'react';
import { 
  ArrowLeft, 
  Server, 
  Share2, 
  Activity, 
  Layers, 
  ExternalLink,
  Info,
  Settings as SettingsIcon,
  Cpu,
  Network
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MOCK_DEVICES, MOCK_SERVICES, MOCK_SLICES, MOCK_LINKS } from '@/lib/mock-data';

interface DetailViewProps {
  item: { id: string, type: 'device' | 'link' | 'service' | 'slice' };
  onNavigate: (id: string, type: 'device' | 'link' | 'service' | 'slice') => void;
  onBack: () => void;
}

export function DetailView({ item, onNavigate, onBack }: DetailViewProps) {
  const getDevice = (id: string) => MOCK_DEVICES.find(d => d.id === id);
  const getLink = (id: string) => MOCK_LINKS.find(l => l.id === id);
  const getService = (id: string) => MOCK_SERVICES.find(s => s.id === id);
  const getSlice = (id: string) => MOCK_SLICES.find(s => s.id === id);

  const renderDeviceDetail = (id: string) => {
    const device = getDevice(id);
    if (!device) return <div>Device not found</div>;

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-zinc-950 border-zinc-800 shadow-none col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                <Info className="w-4 h-4 text-blue-500" />
                Device Information
              </CardTitle>
              <Badge variant="outline" className={device.status === 'OPERATIONAL' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"}>
                {device.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Device ID</p>
                  <p className="text-sm font-mono text-zinc-300">{device.id}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Device Type</p>
                  <p className="text-sm text-zinc-300">{device.type}</p>
                </div>
              </div>
              <Separator className="bg-zinc-900" />
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mb-2">Drivers</p>
                <div className="flex gap-2">
                  {device.drivers.map(d => <Badge key={d} variant="secondary" className="bg-zinc-900 border-zinc-800">{d}</Badge>)}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-950 border-zinc-800 shadow-none">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-zinc-100 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-purple-500" />
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-500">Endpoints</span>
                  <span className="text-xs font-mono text-zinc-300">{device.endpoints.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-zinc-500">Active Services</span>
                  <span className="text-xs font-mono text-zinc-300">
                    {MOCK_SERVICES.filter(s => s.endpoints.some(e => e.startsWith(device.id))).length}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-zinc-950 border-zinc-800 shadow-none">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-zinc-100">Endpoints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {device.endpoints.map(ep => (
                <div key={ep} className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-md flex items-center justify-between group">
                  <span className="text-xs font-mono text-zinc-400">{ep}</span>
                  <Badge variant="outline" className="text-[8px] bg-emerald-500/10 text-emerald-500 border-emerald-500/20">UP</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderServiceDetail = (id: string) => {
    const service = getService(id);
    if (!service) return <div>Service not found</div>;

    return (
      <div className="space-y-6">
        <Card className="bg-zinc-950 border-zinc-800 shadow-none">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold text-zinc-100">Service Configuration</CardTitle>
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">{service.status}</Badge>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Type</p>
                <p className="text-sm text-zinc-300">{service.type}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Context</p>
                <p className="text-sm text-zinc-300">{service.context_id}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-950 border-zinc-800 shadow-none">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-zinc-100">Service Endpoints (Drill-down)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {service.endpoints.map(ep => {
                const deviceId = ep.split('/')[0];
                return (
                  <div key={ep} className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800 rounded-md hover:border-blue-500/50 transition-colors group cursor-pointer" onClick={() => onNavigate(deviceId, 'device')}>
                    <div className="flex items-center gap-3">
                      <Server className="w-4 h-4 text-zinc-500 group-hover:text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-zinc-200">{ep}</p>
                        <p className="text-[10px] text-zinc-500">Device: {deviceId}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-blue-500" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderSliceDetail = (id: string) => {
    const slice = getSlice(id);
    if (!slice) return <div>Slice not found</div>;

    return (
      <div className="space-y-6">
        <Card className="bg-zinc-950 border-zinc-800 shadow-none">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-zinc-100">Slice Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-zinc-400 mb-4">This slice isolates resources for specific network performance requirements.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mb-1">Status</p>
                <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30">{slice.status}</Badge>
              </div>
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono mb-1">Context</p>
                <p className="text-sm font-medium">{slice.context_id}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-950 border-zinc-800 shadow-none">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-zinc-100">Associated Services (Drill-down)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {slice.service_ids.map(svcId => {
                const service = getService(svcId);
                return (
                  <div key={svcId} className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 rounded-md hover:border-blue-500/50 transition-colors group cursor-pointer" onClick={() => onNavigate(svcId, 'service')}>
                    <div className="flex items-center gap-3">
                      <Activity className="w-4 h-4 text-zinc-500 group-hover:text-blue-500" />
                      <div>
                        <p className="text-sm font-medium text-zinc-200">{service?.name || svcId}</p>
                        <p className="text-[10px] text-zinc-500">ID: {svcId}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-[10px]">{service?.type}</Badge>
                      <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-blue-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const renderLinkDetail = (id: string) => {
    const link = getLink(id);
    if (!link) return <div>Link not found</div>;

    return (
      <div className="space-y-6">
        <Card className="bg-zinc-950 border-zinc-800 shadow-none">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-zinc-100">Link Properties</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Capacity</p>
                <p className="text-lg font-bold text-zinc-200">{link.capacity}</p>
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Latency</p>
                <p className="text-lg font-bold text-zinc-200">{link.latency}</p>
              </div>
            </div>
            <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg flex items-center justify-center">
              <Network className="w-12 h-12 text-zinc-800" />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-zinc-950 border-zinc-800 shadow-none cursor-pointer hover:border-blue-500/30 transition-colors" onClick={() => onNavigate(link.source, 'device')}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                <Server className="w-3 h-3" />
                Source Device
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-zinc-100">{link.source}</p>
              <p className="text-xs text-zinc-500 font-mono mt-1">Endpoint: {link.source_endpoint}</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-950 border-zinc-800 shadow-none cursor-pointer hover:border-blue-500/30 transition-colors" onClick={() => onNavigate(link.target, 'device')}>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-zinc-400 flex items-center gap-2">
                <Server className="w-3 h-3" />
                Target Device
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold text-zinc-100">{link.target}</p>
              <p className="text-xs text-zinc-500 font-mono mt-1">Endpoint: {link.target_endpoint}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  const getTitle = () => {
    switch (item.type) {
      case 'device': return getDevice(item.id)?.name || item.id;
      case 'link': return `Link: ${item.id}`;
      case 'service': return getService(item.id)?.name || item.id;
      case 'slice': return getSlice(item.id)?.name || item.id;
    }
  };

  const getIcon = () => {
    switch (item.type) {
      case 'device': return <Server className="w-6 h-6 text-blue-500" />;
      case 'link': return <Share2 className="w-6 h-6 text-purple-500" />;
      case 'service': return <Activity className="w-6 h-6 text-emerald-500" />;
      case 'slice': return <Layers className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-zinc-500 hover:text-zinc-200">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
              {getIcon()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">{getTitle()}</h2>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">{item.type} ID: {item.id}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-zinc-900 border-zinc-800 text-zinc-400">
            <SettingsIcon className="w-4 h-4 mr-2" />
            Configure
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            Edit Metadata
          </Button>
        </div>
      </div>

      <Separator className="bg-zinc-900" />

      {item.type === 'device' && renderDeviceDetail(item.id)}
      {item.type === 'service' && renderServiceDetail(item.id)}
      {item.type === 'slice' && renderSliceDetail(item.id)}
      {item.type === 'link' && renderLinkDetail(item.id)}
    </div>
  );
}
