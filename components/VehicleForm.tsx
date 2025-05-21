import React, { useState, useEffect } from 'react';
import { Vehicle } from '../types';
import Input from './Input';
import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';

interface VehicleFormProps {
  onSubmit: (vehicle: Omit<Vehicle, 'id' | 'maintenanceRecords' | 'imageUrl'> | Vehicle) => void;
  initialData?: Vehicle;
}

const VehicleForm: React.FC<VehicleFormProps> = ({ onSubmit, initialData }) => {
  const { t } = useLanguage();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState<number | ''>('');
  const [vin, setVin] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [color, setColor] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialData) {
      setMake(initialData.make);
      setModel(initialData.model);
      setYear(initialData.year);
      setVin(initialData.vin || '');
      setLicensePlate(initialData.licensePlate || '');
      setColor(initialData.color || '');
      setNotes(initialData.notes || '');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!make || !model || !year) {
      alert(t('requiredFields', { field1: t('vehicleMake'), field2: t('vehicleModel'), field3: t('vehicleYear')}));
      return;
    }
    const vehicleData = {
      make,
      model,
      year: Number(year),
      vin: vin || undefined,
      licensePlate: licensePlate || undefined,
      color: color || undefined,
      notes: notes || undefined,
    };

    if (initialData) {
      onSubmit({ ...initialData, ...vehicleData });
    } else {
      onSubmit(vehicleData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input label={t('vehicleMake')} value={make} onChange={(e) => setMake(e.target.value)} required placeholder={t('exampleToyota')} />
      <Input label={t('vehicleModel')} value={model} onChange={(e) => setModel(e.target.value)} required placeholder={t('exampleCamry')} />
      <Input label={t('vehicleYear')} type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value) || '')} required placeholder={t('example2020')} min="1900" max={new Date().getFullYear() + 1} />
      <Input label={t('vinOptional')} value={vin} onChange={(e) => setVin(e.target.value)} placeholder={t('exampleVin')} />
      <Input label={t('licensePlateOptional')} value={licensePlate} onChange={(e) => setLicensePlate(e.target.value)} placeholder={t('examplePlate')} />
      <Input label={t('colorOptional')} value={color} onChange={(e) => setColor(e.target.value)} placeholder={t('exampleBlue')} />
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder={t('notesOptional')}
        aria-label={t('notesOptional')}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
        rows={3}
      />
      <div className="flex justify-end pt-2">
        <Button type="submit" variant="primary">
          {initialData ? t('saveChanges') : t('addVehicle')}
        </Button>
      </div>
    </form>
  );
};

export default VehicleForm;