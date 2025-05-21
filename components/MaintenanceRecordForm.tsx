import React, { useState, useEffect } from 'react';
import { MaintenanceRecord, MaintenanceType, MaintenanceStatus } from '../types';
import { MAINTENANCE_TYPE_OPTIONS } from '../constants';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import { useLanguage, Language } from '../contexts/LanguageContext';

interface MaintenanceRecordFormProps {
  onSubmit: (record: Omit<MaintenanceRecord, 'id' | 'vehicleId'> | MaintenanceRecord) => void;
  vehicleId: string;
  initialData?: MaintenanceRecord;
}

const MaintenanceRecordForm: React.FC<MaintenanceRecordFormProps> = ({ onSubmit, vehicleId, initialData }) => {
  const { t } = useLanguage();
  const [type, setType] = useState<MaintenanceType>(MaintenanceType.OilChange);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [mileage, setMileage] = useState<number | ''>('');
  const [cost, setCost] = useState<number | ''>('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<MaintenanceStatus>(MaintenanceStatus.Completed);
  const [nextDueDate, setNextDueDate] = useState('');
  const [nextDueMileage, setNextDueMileage] = useState<number | ''>('');

  useEffect(() => {
    if (initialData) {
      setType(initialData.type);
      setDate(initialData.date);
      setMileage(initialData.mileage);
      setCost(initialData.cost || '');
      setNotes(initialData.notes || '');
      setStatus(initialData.status);
      setNextDueDate(initialData.nextDueDate || '');
      setNextDueMileage(initialData.nextDueMileage || '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!type || !date || mileage === '') {
      alert(t('requiredFields', {field1: t('maintenanceType'), field2: t('date'), field3: t('mileage')}));
      return;
    }
    const recordData = {
      type,
      date,
      mileage: Number(mileage),
      cost: cost ? Number(cost) : undefined,
      notes: notes || undefined,
      status,
      nextDueDate: nextDueDate || undefined,
      nextDueMileage: nextDueMileage ? Number(nextDueMileage) : undefined,
    };

    if (initialData) {
      onSubmit({ ...initialData, ...recordData });
    } else {
      onSubmit(recordData);
    }
  };
  
  const translatedMaintenanceTypeOptions = MAINTENANCE_TYPE_OPTIONS.map(option => ({
    ...option,
    label: t(option.label as any), 
  }));

  const translatedStatusOptions = Object.values(MaintenanceStatus).map(s => ({ 
    value: s, 
    label: t(s as any) // Translate the status label
  }));


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select 
        label={t('maintenanceType')} 
        value={type} 
        onChange={(e) => setType(e.target.value as MaintenanceType)} 
        options={translatedMaintenanceTypeOptions} 
        required 
      />
      <Input 
        label={t('date')} 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />
      <Input 
        label={t('mileage')} 
        type="number" 
        value={mileage} 
        onChange={(e) => setMileage(parseInt(e.target.value) || '')} 
        required 
        placeholder={t('example50000')} 
      />
      <Input 
        label={t('costOptional')} 
        type="number" 
        value={cost} 
        onChange={(e) => setCost(parseFloat(e.target.value) || '')} 
        placeholder={t('example75_50')} 
        step="0.01" 
      />
      <Select 
        label={t('status')} 
        value={status} 
        onChange={(e) => setStatus(e.target.value as MaintenanceStatus)} 
        options={translatedStatusOptions} // Use translated status options
        required 
      />
      <Input 
        label={t('nextDueDateOptional')} 
        type="date" 
        value={nextDueDate} 
        onChange={(e) => setNextDueDate(e.target.value)} 
      />
      <Input 
        label={t('nextDueMileageOptional')} 
        type="number" 
        value={nextDueMileage} 
        onChange={(e) => setNextDueMileage(parseInt(e.target.value) || '')} 
        placeholder={t('example60000')} 
      />
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder={t('placeholderNotes')}
        aria-label={t('notesOptional')}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        rows={3}
      />
      <div className="flex justify-end pt-2">
        <Button type="submit" variant="primary">
          {initialData ? t('saveChanges') : t('addRecord')}
        </Button>
      </div>
    </form>
  );
};

export default MaintenanceRecordForm;
