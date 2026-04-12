
export type DeviceStatus = 'OPERATIONAL' | 'DISABLED' | 'ERROR';

export interface Device {
  id: string;
  name: string;
  type: string;
  status: DeviceStatus;
  endpoints: string[];
  drivers: string[];
}

export interface Link {
  id: string;
  source: string;
  target: string;
  source_endpoint: string;
  target_endpoint: string;
  capacity?: string;
  latency?: string;
}

export interface Service {
  id: string;
  name: string;
  type: string;
  status: 'ACTIVE' | 'PLANNED' | 'PENDING' | 'ERROR';
  context_id: string;
  endpoints: string[];
}

export interface Slice {
  id: string;
  name: string;
  status: 'ACTIVE' | 'PLANNED' | 'PENDING' | 'ERROR';
  context_id: string;
  service_ids: string[];
}

export interface Context {
  id: string;
  name: string;
  topology_ids: string[];
  service_ids: string[];
  slice_ids: string[];
}

export interface Topology {
  id: string;
  name: string;
  context_id: string;
  device_ids: string[];
  link_ids: string[];
}
