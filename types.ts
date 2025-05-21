
export enum Language {
  EN = 'en',
  AR = 'ar',
}

export enum MaintenanceType {
  OilChange = 'Oil Change',
  TireRotation = 'Tire Rotation',
  BrakeInspection = 'Brake Inspection',
  BatteryCheck = 'Battery Check',
  AirFilterReplacement = 'Air Filter Replacement',
  CoolantFlush = 'Coolant Flush',
  SparkPlugs = 'Spark Plugs Replacement',
  TimingBelt = 'Timing Belt Replacement',
  WiperBlades = 'Wiper Blades Replacement',
  Other = 'Other',
}

export enum MaintenanceStatus {
  Upcoming = 'Upcoming',
  Completed = 'Completed',
  Overdue = 'Overdue', // Will be manually set for now
}

export interface MaintenanceRecord {
  id: string;
  vehicleId: string;
  type: MaintenanceType;
  date: string; // YYYY-MM-DD
  mileage: number;
  notes?: string;
  cost?: number;
  status: MaintenanceStatus;
  nextDueDate?: string; // YYYY-MM-DD
  nextDueMileage?: number;
}

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  vin?: string;
  licensePlate?: string;
  color?: string;
  notes?: string;
  imageUrl?: string;
  maintenanceRecords: MaintenanceRecord[];
}