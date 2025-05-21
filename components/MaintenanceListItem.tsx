import React from 'react';
import { MaintenanceRecord, MaintenanceStatus, MaintenanceType } from '../types';
import { MAINTENANCE_TYPE_ICONS, PencilIcon, TrashIcon, CalendarDaysIcon, GaugeIcon } from '../constants';
import Button from './Button';
// Fix: Import Language enum and use 'language' from context for locale-specific formatting.
import { useLanguage, Language } from '../contexts/LanguageContext'; 
// Fix: Remove 'translations' import as it's no longer directly used for typeof after changing casts
// import { translations } from '../translations'; 

interface MaintenanceListItemProps {
  record: MaintenanceRecord;
  onEdit: (record: MaintenanceRecord) => void;
  onDelete: (recordId: string) => void;
}

const MaintenanceListItem: React.FC<MaintenanceListItemProps> = ({ record, onEdit, onDelete }) => {
  // Fix: Destructure language from useLanguage
  const { t, dir, language } = useLanguage();

  const getStatusColor = (status: MaintenanceStatus) => {
    switch (status) {
      case MaintenanceStatus.Completed: return 'bg-green-100 text-green-800';
      case MaintenanceStatus.Upcoming: return 'bg-yellow-100 text-yellow-800';
      case MaintenanceStatus.Overdue: return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Fix: Cast record.type to 'any' for 't' function, relying on its fallback.
  // Removed redundant '|| record.type' as 't' handles this.
  const translatedRecordType = t(record.type as any);

  return (
    <li className="bg-white shadow rounded-lg p-4 mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-3 sm:space-y-0">
      <div className="flex items-center">
        <span className={`text-primary hidden sm:block ${dir === 'rtl' ? 'ms-3' : 'me-3'}`}>{MAINTENANCE_TYPE_ICONS[record.type]}</span>
        <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
          <h4 className="text-lg font-semibold text-gray-800">{translatedRecordType}</h4>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <CalendarDaysIcon className={dir === 'rtl' ? 'ms-1' : 'me-1'}/>
            {/* Fix: Use 'language' for locale-specific date formatting */}
            <span>{new Date(record.date).toLocaleDateString(language === Language.AR ? 'ar-EG' : 'en-US')}</span>
            <span className="mx-2">|</span>
            <GaugeIcon className={dir === 'rtl' ? 'ms-1' : 'me-1'}/>
            {/* Fix: Use 'language' for locale-specific number formatting */}
            <span>{record.mileage.toLocaleString(language === Language.AR ? 'ar-EG' : 'en-US')} {t('mileage')}</span> 
          </div>
          {record.cost && <p className="text-sm text-gray-500">{t('cost')}: ${record.cost.toFixed(2)}</p>}
          {record.notes && <p className="text-xs text-gray-500 mt-1 italic">{t('notesLabel')}: {record.notes}</p>}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 sm:space-x-reverse w-full sm:w-auto">
        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(record.status)}`}>
          {/* Fix: Cast record.status to 'any' for 't' function, relying on its fallback. */}
          {t(record.status as any)}
        </span>
        <div className={`flex ${dir === 'rtl' ? 'space-x-reverse' : 'space-x-2'}`}>
          <Button onClick={() => onEdit(record)} variant="ghost" size="sm" aria-label={t('editMaintenanceRecord')}>
            <PencilIcon />
          </Button>
          <Button 
            onClick={() => onDelete(record.id)} 
            variant="ghost" 
            size="sm" 
            className="text-red-500 hover:bg-red-100" 
            aria-label={t('deleteRecordConfirm')}
          >
            <TrashIcon />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default MaintenanceListItem;