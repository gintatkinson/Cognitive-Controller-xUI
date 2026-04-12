
import { Device, Link, Service, Slice, Context, Topology } from '../types/tfs';

export const MOCK_CONTEXTS: Context[] = [
  { id: 'admin', name: 'Admin Context', topology_ids: ['admin-topo'], service_ids: ['svc-1', 'svc-2'], slice_ids: ['slice-1'] },
  { id: 'tenant-a', name: 'Tenant A', topology_ids: ['tenant-a-topo'], service_ids: [], slice_ids: [] },
];

export const MOCK_TOPOLOGIES: Topology[] = [
  { id: 'admin-topo', name: 'Core Topology', context_id: 'admin', device_ids: ['d1', 'd2', 'd3', 'd4'], link_ids: ['l1', 'l2', 'l3'] },
];

export const MOCK_DEVICES: Device[] = [
  { id: 'd1', name: 'R1-Core', type: 'ROUTER', status: 'OPERATIONAL', endpoints: ['eth0', 'eth1'], drivers: ['p4', 'openflow'] },
  { id: 'd2', name: 'R2-Core', type: 'ROUTER', status: 'OPERATIONAL', endpoints: ['eth0', 'eth1', 'eth2'], drivers: ['p4'] },
  { id: 'd3', name: 'SW1-Edge', type: 'SWITCH', status: 'OPERATIONAL', endpoints: ['p1', 'p2', 'p3'], drivers: ['openflow'] },
  { id: 'd4', name: 'SW2-Edge', type: 'SWITCH', status: 'DISABLED', endpoints: ['p1', 'p2'], drivers: ['openflow'] },
];

export const MOCK_LINKS: Link[] = [
  { id: 'l1', source: 'd1', target: 'd2', source_endpoint: 'eth0', target_endpoint: 'eth0', capacity: '100Gbps', latency: '2ms' },
  { id: 'l2', source: 'd2', target: 'd3', source_endpoint: 'eth1', target_endpoint: 'p1', capacity: '40Gbps', latency: '5ms' },
  { id: 'l3', source: 'd1', target: 'd3', source_endpoint: 'eth1', target_endpoint: 'p2', capacity: '40Gbps', latency: '6ms' },
];

export const MOCK_SERVICES: Service[] = [
  { id: 'svc-1', name: 'L3VPN-Enterprise', type: 'L3VPN', status: 'ACTIVE', context_id: 'admin', endpoints: ['d1/eth0', 'd3/p3'] },
  { id: 'svc-2', name: 'L2VPN-Backup', type: 'L2VPN', status: 'PENDING', context_id: 'admin', endpoints: ['d2/eth2', 'd3/p1'] },
];

export const MOCK_SLICES: Slice[] = [
  { id: 'slice-1', name: '5G-Enhanced-Mobile-Broadband', status: 'ACTIVE', context_id: 'admin', service_ids: ['svc-1'] },
];
