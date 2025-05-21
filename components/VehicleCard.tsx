import React from 'react';
import { Vehicle } from '../types';
import Button from './Button';
import { PencilIcon, TrashIcon } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelect: (vehicle: Vehicle) => void;
  onEdit: (vehicle: Vehicle) => void;
  onDelete: (vehicleId: string) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelect, onEdit, onDelete }) => {
  const { t, dir } = useLanguage();
  const upcomingMaintenanceCount = vehicle.maintenanceRecords.filter(r => r.status === 'Upcoming').length;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-200 ease-in-out">
      <img 
        src={vehicle.imageUrl || `https://picsum.photos/seed/${vehicle.id}/400/200`} 
        alt={`${vehicle.make} ${vehicle.model}`} 
        className="w-full h-48 object-cover"
      />
      <div className={`p-6 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{vehicle.make} {vehicle.model}</h3>
        <p className="text-gray-600 text-sm mb-1">{t('vehicleYear', {year: vehicle.year})}</p>
        {vehicle.licensePlate && <p className="text-gray-600 text-sm mb-1">{t('vehiclePlate', {plate: vehicle.licensePlate})}</p>}
        {upcomingMaintenanceCount > 0 && (
          <p className="text-sm text-yellow-600 font-semibold mt-2">
            {t('upcomingMaintenance', { count: upcomingMaintenanceCount })}
          </p>
        )}
         {vehicle.maintenanceRecords.length === 0 && (
          <p className="text-sm text-gray-500 mt-2">{t('noMaintenanceRecordsYet')}</p>
        )}
        <div className="mt-6 flex justify-between items-center space-x-2">
          <Button onClick={() => onSelect(vehicle)} variant="primary" size="sm" className="flex-1">
            {t('viewDetails')}
          </Button>
          <div className="flex space-x-2">
            <Button onClick={(e) => { e.stopPropagation(); onEdit(vehicle); }} variant="ghost" size="sm" aria-label={t('editVehicle')}>
              <PencilIcon />
            </Button>
            <Button 
              onClick={(e) => { e.stopPropagation(); onDelete(vehicle.id); }} 
              variant="ghost" 
              size="sm" 
              className="text-red-500 hover:bg-red-100" 
              aria-label={t('deleteVehicle')}
            >
              <TrashIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;