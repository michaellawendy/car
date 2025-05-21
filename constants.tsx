import React from 'react';
import { MaintenanceType } from './types';

// Heroicon SVGs (Outline style)
export const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);

export const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.56 0c1.153 0 2.243.032 3.223.094M7.5 8.25c0-1.065.865-1.92 1.92-1.92h5.16c1.055 0 1.92.855 1.92 1.92v11.056c0 .51-.204.98-.564 1.326a1.85 1.85 0 0 1-1.356.544H9.42a1.85 1.85 0 0 1-1.356-.544 1.839 1.839 0 0 1-.564-1.326V8.25Z" />
  </svg>
);

export const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5h10.5m.075-4.5H5.625M3.375 15H4.5m12.75 0h1.125M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 2.625c.237.025.48.037.727.037H12m0 0c.247 0 .49-.012.727-.037m0 0c.237.025.48.037.727.037m-1.454 0H12m0 0c-.247 0-.49-.012-.727-.037m0 0c-.237.025-.48.037-.727.037m0 0H12m6.375-3.375V9.375M3.375 12.375V9.375m14.25 3V12m-14.25 0V12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 9.348-7.5 9.348s-7.5-2.206-7.5-9.348A7.5 7.5 0 0 1 12 3c4.142 0 7.5 3.358 7.5 7.5Z" /> {/* Simplified car body */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9H9" /> {/* Windshield */}
    <circle cx="7.5" cy="17.25" r="1.5" fill="currentColor" /> {/* Wheels */}
    <circle cx="16.5" cy="17.25" r="1.5" fill="currentColor" />
  </svg>
);

export const WrenchScrewdriverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17A3 3 0 0 1 6.75 12.75l-1.09-1.09a3.752 3.752 0 0 1 0-5.303l.53-.53c.623-.624 1.638-.624 2.262 0l1.06 1.06M6.75 12.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.713-5.713a8.967 8.967 0 0 0-2.312-6.022c1.733-.64 3.56-1.085 5.455-1.31M5.25 6.75c-.623-.623-.623-1.638 0-2.262l.53-.53c.624-.623 1.638-.623 2.262 0l1.06 1.06M5.25 6.75L3 9m3-3 .923-.923M11.42 15.17l-.09.09M11.42 15.17A2.25 2.25 0 0 1 12.75 13.5l1.09 1.09a2.25 2.25 0 0 1 0 3.182l-.53.53a2.25 2.25 0 0 1-3.182 0l-1.06-1.06M18.75 9l2.25-2.25" />
  </svg>
);

export const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
  </svg>
);

export const CalendarDaysIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-3.75h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
  </svg>
);

export const GaugeIcon: React.FC<{className?: string}> = ({className}) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.5H9M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m12 12.75 2.25-2.25" />
  </svg>
);


export const MAINTENANCE_TYPE_OPTIONS = Object.values(MaintenanceType).map(type => ({
  value: type,
  label: type, // These labels will be translated in the component where they are used.
}));

export const MAINTENANCE_TYPE_ICONS: Record<MaintenanceType, React.ReactNode> = {
  [MaintenanceType.OilChange]: <WrenchScrewdriverIcon />,
  [MaintenanceType.TireRotation]: <CarIcon />, 
  [MaintenanceType.BrakeInspection]: <WrenchScrewdriverIcon />,
  [MaintenanceType.BatteryCheck]: <WrenchScrewdriverIcon />,
  [MaintenanceType.AirFilterReplacement]: <WrenchScrewdriverIcon />,
  [MaintenanceType.CoolantFlush]: <WrenchScrewdriverIcon />,
  [MaintenanceType.SparkPlugs]: <WrenchScrewdriverIcon />,
  [MaintenanceType.TimingBelt]: <WrenchScrewdriverIcon />,
  [MaintenanceType.WiperBlades]: <WrenchScrewdriverIcon />,
  [MaintenanceType.Other]: <WrenchScrewdriverIcon />,
};
