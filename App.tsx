import React, { useState } from 'react';
import { Vehicle, MaintenanceRecord } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import Modal from './components/Modal';
import VehicleForm from './components/VehicleForm';
import MaintenanceRecordForm from './components/MaintenanceRecordForm';
import VehicleCard from './components/VehicleCard';
import MaintenanceListItem from './components/MaintenanceListItem';
import { PlusIcon, ChevronLeftIcon, CarIcon, WrenchScrewdriverIcon, PencilIcon } from './constants';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const { t, dir } = useLanguage();
  const [vehicles, setVehicles] = useLocalStorage<Vehicle[]>('vehicles', []);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [editingVehicle, setEditingVehicle] = useState<Vehicle | null>(null);

  const [isMaintenanceModalOpen, setIsMaintenanceModalOpen] = useState(false);
  const [editingMaintenance, setEditingMaintenance] = useState<MaintenanceRecord | null>(null);
  const [currentVehicleForMaintenance, setCurrentVehicleForMaintenance] = useState<string | null>(null);


  // Vehicle Operations
  const handleAddOrUpdateVehicle = (vehicleData: Omit<Vehicle, 'id' | 'maintenanceRecords' | 'imageUrl'> | Vehicle) => {
    if ('id' in vehicleData) { // Editing existing vehicle
      setVehicles(prev => prev.map(v => v.id === vehicleData.id ? { ...v, ...vehicleData } : v));
      if (selectedVehicle && selectedVehicle.id === vehicleData.id) {
        setSelectedVehicle(prev => prev ? { ...prev, ...vehicleData } : null);
      }
    } else { // Adding new vehicle
      const newVehicle: Vehicle = {
        ...vehicleData,
        id: crypto.randomUUID(),
        maintenanceRecords: [],
        imageUrl: `https://picsum.photos/seed/${crypto.randomUUID()}/400/200`
      };
      setVehicles(prev => [...prev, newVehicle]);
    }
    closeVehicleModal();
  };

  const handleDeleteVehicle = (vehicleId: string) => {
    if (window.confirm(t('deleteVehicleConfirm'))) {
      setVehicles(prev => prev.filter(v => v.id !== vehicleId));
      if (selectedVehicle && selectedVehicle.id === vehicleId) {
        setSelectedVehicle(null);
      }
    }
  };

  const openVehicleModal = (vehicle?: Vehicle) => {
    setEditingVehicle(vehicle || null);
    setIsVehicleModalOpen(true);
  };
  const closeVehicleModal = () => {
    setIsVehicleModalOpen(false);
    setEditingVehicle(null);
  };

  // Maintenance Record Operations
  const handleAddOrUpdateMaintenanceRecord = (recordData: Omit<MaintenanceRecord, 'id' | 'vehicleId'> | MaintenanceRecord) => {
    const targetVehicleId = 'vehicleId' in recordData ? recordData.vehicleId : currentVehicleForMaintenance;
    if (!targetVehicleId) {
      console.error("Vehicle ID missing for maintenance record operation");
      return;
    }

    setVehicles(prevVehicles => prevVehicles.map(v => {
      if (v.id === targetVehicleId) {
        let updatedRecords;
        if ('id' in recordData) { 
          updatedRecords = v.maintenanceRecords.map(r => r.id === recordData.id ? recordData : r);
        } else { 
          const newRecord: MaintenanceRecord = { ...recordData, id: crypto.randomUUID(), vehicleId: targetVehicleId };
          updatedRecords = [...v.maintenanceRecords, newRecord];
        }
        updatedRecords.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        const updatedVehicle = { ...v, maintenanceRecords: updatedRecords };
        if (selectedVehicle && selectedVehicle.id === targetVehicleId) {
          setSelectedVehicle(updatedVehicle);
        }
        return updatedVehicle;
      }
      return v;
    }));
    closeMaintenanceModal();
  };
  
  const handleDeleteMaintenanceRecord = (recordId: string, vehicleId: string) => {
     if (window.confirm(t('deleteRecordConfirm'))) {
      setVehicles(prevVehicles => prevVehicles.map(v => {
        if (v.id === vehicleId) {
          const updatedRecords = v.maintenanceRecords.filter(r => r.id !== recordId);
          const updatedVehicle = { ...v, maintenanceRecords: updatedRecords };
           if (selectedVehicle && selectedVehicle.id === vehicleId) {
            setSelectedVehicle(updatedVehicle);
          }
          return updatedVehicle;
        }
        return v;
      }));
    }
  };

  const openMaintenanceModal = (vehicleId: string, record?: MaintenanceRecord) => {
    setCurrentVehicleForMaintenance(vehicleId);
    setEditingMaintenance(record || null);
    setIsMaintenanceModalOpen(true);
  };
  const closeMaintenanceModal = () => {
    setIsMaintenanceModalOpen(false);
    setEditingMaintenance(null);
    setCurrentVehicleForMaintenance(null);
  };
  
  const sortedMaintenanceRecords = selectedVehicle?.maintenanceRecords.slice().sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime()) || [];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-light">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        {!selectedVehicle ? (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">{t('myVehicles')}</h1>
              <Button onClick={() => openVehicleModal()} variant="primary" leftIcon={<PlusIcon />}>
                {t('addVehicle')}
              </Button>
            </div>
            {vehicles.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <CarIcon />
                <h2 className="text-2xl font-semibold text-gray-700 mt-4">{t('noVehiclesYet')}</h2>
                <p className="text-gray-500 mt-2">{t('noVehiclesMessage')}</p>
                <Button onClick={() => openVehicleModal()} variant="primary" className="mt-6">
                  {t('addYourFirstVehicle')}
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {vehicles.map(vehicle => (
                  <VehicleCard 
                    key={vehicle.id} 
                    vehicle={vehicle}
                    onSelect={setSelectedVehicle}
                    onEdit={() => openVehicleModal(vehicle)}
                    onDelete={() => handleDeleteVehicle(vehicle.id)}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          // Vehicle Details View
          <div>
            <Button 
              onClick={() => setSelectedVehicle(null)} 
              variant="ghost" 
              leftIcon={dir === 'ltr' ? <ChevronLeftIcon /> : undefined}
              rightIcon={dir === 'rtl' ? <ChevronLeftIcon /> : undefined}
              className="mb-6 text-primary hover:bg-primary-light/20"
            >
              {t('backToVehicleList')}
            </Button>
            <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <div className={`text-start`}>
                  <h1 className="text-4xl font-bold text-gray-800">{selectedVehicle.make} {selectedVehicle.model}</h1>
                  <p className="text-gray-600 text-lg">{selectedVehicle.year}</p>
                </div>
                <Button onClick={() => openVehicleModal(selectedVehicle)} variant="secondary" leftIcon={<PencilIcon />} size="sm" className="mt-4 md:mt-0">
                  {t('editVehicleInfo')}
                </Button>
              </div>
              {selectedVehicle.vin && <p className={`text-sm text-gray-500 mb-1 text-start`}>{t('vehicleVin', { vin: selectedVehicle.vin })}</p>}
              {selectedVehicle.licensePlate && <p className={`text-sm text-gray-500 mb-1 text-start`}>{t('vehiclePlate', { plate: selectedVehicle.licensePlate })}</p>}
              {selectedVehicle.color && <p className={`text-sm text-gray-500 mb-1 text-start`}>{t('vehicleColor', { color: selectedVehicle.color })}</p>}
              {selectedVehicle.notes && <p className={`text-sm text-gray-500 mt-2 italic text-start`}>{t('vehicleNotes', { notes: selectedVehicle.notes })}</p>}
            </div>

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">{t('maintenanceHistory')}</h2>
              <Button onClick={() => openMaintenanceModal(selectedVehicle.id)} variant="primary" leftIcon={<PlusIcon />}>
                {t('addRecord')}
              </Button>
            </div>
            {sortedMaintenanceRecords.length === 0 ? (
              <div className="text-center py-10 bg-white rounded-lg shadow">
                <WrenchScrewdriverIcon />
                <p className="text-gray-600 mt-4 text-lg">{t('noMaintenanceRecordsForVehicle')}</p>
                 <Button onClick={() => openMaintenanceModal(selectedVehicle.id)} variant="primary" className="mt-6">
                  {t('addFirstRecord')}
                </Button>
              </div>
            ) : (
              <ul className="space-y-4">
                {sortedMaintenanceRecords.map(record => (
                  <MaintenanceListItem 
                    key={record.id} 
                    record={record}
                    onEdit={() => openMaintenanceModal(selectedVehicle.id, record)}
                    onDelete={() => handleDeleteMaintenanceRecord(record.id, selectedVehicle.id)}
                  />
                ))}
              </ul>
            )}
          </div>
        )}
      </main>
      <Footer />

      <Modal 
        isOpen={isVehicleModalOpen} 
        onClose={closeVehicleModal} 
        title={editingVehicle ? t('editVehicle') : t('addNewVehicle')}
      >
        <VehicleForm onSubmit={handleAddOrUpdateVehicle} initialData={editingVehicle || undefined} />
      </Modal>

      <Modal 
        isOpen={isMaintenanceModalOpen} 
        onClose={closeMaintenanceModal} 
        title={editingMaintenance ? t('editMaintenanceRecord') : t('addMaintenanceRecord')}
      >
        {currentVehicleForMaintenance && (
          <MaintenanceRecordForm 
            onSubmit={handleAddOrUpdateMaintenanceRecord} 
            vehicleId={currentVehicleForMaintenance}
            initialData={editingMaintenance || undefined} 
          />
        )}
      </Modal>
    </div>
  );
};

export default App;
