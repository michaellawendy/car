import { Language, MaintenanceType, MaintenanceStatus } from './types'; // Import Language from the shared types.ts

// Define a more specific type for the keys within each language's translations
// This will include the general app keys and the string values of the enums
export type AppTranslationKeys = {
  appName: string;
  myVehicles: string;
  addVehicle: string;
  editVehicle: string;
  deleteVehicle: string;
  deleteVehicleConfirm: string;
  viewDetails: string;
  vehicleYear: string;
  vehiclePlate: string;
  upcomingMaintenance: string;
  noMaintenanceRecordsYet: string;
  addYourFirstVehicle: string;
  noVehiclesYet: string;
  noVehiclesMessage: string;
  backToVehicleList: string;
  editVehicleInfo: string;
  vehicleVin: string;
  vehicleColor: string;
  vehicleNotes: string;
  maintenanceHistory: string;
  addRecord: string;
  noMaintenanceRecordsForVehicle: string;
  addFirstRecord: string;
  addNewVehicle: string;
  saveChanges: string;
  vehicleMake: string;
  vehicleModel: string;
  vinOptional: string;
  licensePlateOptional: string;
  colorOptional: string;
  notesOptional: string;
  maintenanceType: string;
  date: string;
  mileage: string;
  costOptional: string;
  status: string;
  nextDueDateOptional: string;
  nextDueMileageOptional: string;
  editMaintenanceRecord: string;
  addMaintenanceRecord: string;
  deleteRecordConfirm: string;
  close: string;
  footerRights: string;
  footerSlogan: string;
  languageEN: string;
  languageAR: string;
  requiredFields: string;
  cost: string;
  notesLabel: string;
  exampleToyota: string;
  exampleCamry: string;
  example2020: string;
  exampleVin: string;
  examplePlate: string;
  exampleBlue: string;
  example50000: string;
  example75_50: string;
  example60000: string;
  placeholderNotes: string;
} & {
  // Add MaintenanceType enum string values as keys
  [key in MaintenanceType]: string;
} & {
  // Add MaintenanceStatus enum string values as keys
  [key in MaintenanceStatus]: string;
};


type Translations = {
  [lang in Language]: AppTranslationKeys;
};

export const translations: Translations = {
  [Language.EN]: {
    appName: "Car Maintenance Tracker",
    myVehicles: "My Vehicles",
    addVehicle: "Add Vehicle",
    editVehicle: "Edit Vehicle",
    deleteVehicle: "Delete Vehicle",
    deleteVehicleConfirm: "Are you sure you want to delete this vehicle and all its records?",
    viewDetails: "View Details",
    vehicleYear: "Year: {{year}}",
    vehiclePlate: "Plate: {{plate}}",
    upcomingMaintenance: "{{count}} upcoming maintenance item(s)",
    noMaintenanceRecordsYet: "No maintenance records yet.",
    addYourFirstVehicle: "Add Your First Vehicle",
    noVehiclesYet: "No vehicles yet!",
    noVehiclesMessage: "Add your first vehicle to start tracking maintenance.",
    backToVehicleList: "Back to Vehicle List",
    editVehicleInfo: "Edit Vehicle Info",
    vehicleVin: "VIN: {{vin}}",
    vehicleColor: "Color: {{color}}",
    vehicleNotes: "Notes: {{notes}}",
    maintenanceHistory: "Maintenance History",
    addRecord: "Add Record",
    noMaintenanceRecordsForVehicle: "No maintenance records for this vehicle yet.",
    addFirstRecord: "Add First Record",
    addNewVehicle: "Add New Vehicle",
    saveChanges: "Save Changes",
    vehicleMake: "Make",
    vehicleModel: "Model",
    vinOptional: "VIN (Optional)",
    licensePlateOptional: "License Plate (Optional)",
    colorOptional: "Color (Optional)",
    notesOptional: "Additional notes (optional)",
    maintenanceType: "Maintenance Type",
    date: "Date",
    mileage: "Mileage",
    costOptional: "Cost (Optional)",
    status: "Status",
    nextDueDateOptional: "Next Due Date (Optional)",
    nextDueMileageOptional: "Next Due Mileage (Optional)",
    editMaintenanceRecord: "Edit Maintenance Record",
    addMaintenanceRecord: "Add Maintenance Record",
    deleteRecordConfirm: "Are you sure you want to delete this maintenance record?",
    close: "Close",
    footerRights: `© ${new Date().getFullYear()} Car Maintenance Tracker. All rights reserved.`,
    footerSlogan: "Stay on top of your vehicle care!",
    languageEN: "English",
    languageAR: "العربية",
    requiredFields: "{{field1}}, {{field2}}, and {{field3}} are required.",
    cost: "Cost",
    notesLabel: "Notes",
    exampleToyota: "e.g., Toyota",
    exampleCamry: "e.g., Camry",
    example2020: "e.g., 2020",
    exampleVin: "Vehicle Identification Number",
    examplePlate: "e.g., ABC-123",
    exampleBlue: "e.g., Blue",
    example50000: "e.g., 50000",
    example75_50: "e.g., 75.50",
    example60000: "e.g., 60000",
    placeholderNotes: "Additional notes (optional)",

    // MaintenanceType Translations
    [MaintenanceType.OilChange]: "Oil Change",
    [MaintenanceType.TireRotation]: "Tire Rotation",
    [MaintenanceType.BrakeInspection]: "Brake Inspection",
    [MaintenanceType.BatteryCheck]: "Battery Check",
    [MaintenanceType.AirFilterReplacement]: "Air Filter Replacement",
    [MaintenanceType.CoolantFlush]: "Coolant Flush",
    [MaintenanceType.SparkPlugs]: "Spark Plugs Replacement",
    [MaintenanceType.TimingBelt]: "Timing Belt Replacement",
    [MaintenanceType.WiperBlades]: "Wiper Blades Replacement",
    [MaintenanceType.Other]: "Other",

    // MaintenanceStatus Translations
    [MaintenanceStatus.Upcoming]: "Upcoming",
    [MaintenanceStatus.Completed]: "Completed",
    [MaintenanceStatus.Overdue]: "Overdue",
  },
  [Language.AR]: {
    appName: "صيانة السيارات",
    myVehicles: "سياراتي",
    addVehicle: "إضافة سيارة",
    editVehicle: "تعديل السيارة",
    deleteVehicle: "حذف السيارة",
    deleteVehicleConfirm: "هل أنت متأكد أنك تريد حذف هذه السيارة وجميع سجلاتها؟",
    viewDetails: "عرض التفاصيل",
    vehicleYear: "السنة: {{year}}",
    vehiclePlate: "اللوحة: {{plate}}",
    upcomingMaintenance: "{{count}} عنصر صيانة قادم",
    noMaintenanceRecordsYet: "لا توجد سجلات صيانة حتى الآن.",
    addYourFirstVehicle: "أضف سيارتك الأولى",
    noVehiclesYet: "لا توجد سيارات بعد!",
    noVehiclesMessage: "أضف سيارتك الأولى لبدء تتبع الصيانة.",
    backToVehicleList: "العودة إلى قائمة السيارات",
    editVehicleInfo: "تعديل معلومات السيارة",
    vehicleVin: "رقم الهيكل: {{vin}}",
    vehicleColor: "اللون: {{color}}",
    vehicleNotes: "ملاحظات: {{notes}}",
    maintenanceHistory: "سجل الصيانة",
    addRecord: "إضافة سجل",
    noMaintenanceRecordsForVehicle: "لا توجد سجلات صيانة لهذه السيارة حتى الآن.",
    addFirstRecord: "إضافة السجل الأول",
    addNewVehicle: "إضافة سيارة جديدة",
    saveChanges: "حفظ التغييرات",
    vehicleMake: "الشركة المصنعة",
    vehicleModel: "الطراز",
    vinOptional: "رقم الهيكل (اختياري)",
    licensePlateOptional: "لوحة الترخيص (اختياري)",
    colorOptional: "اللون (اختياري)",
    notesOptional: "ملاحظات إضافية (اختياري)",
    maintenanceType: "نوع الصيانة",
    date: "التاريخ",
    mileage: "المسافة المقطوعة",
    costOptional: "التكلفة (اختياري)",
    status: "الحالة",
    nextDueDateOptional: "تاريخ الاستحقاق التالي (اختياري)",
    nextDueMileageOptional: "المسافة المقطوعة التالية (اختياري)",
    editMaintenanceRecord: "تعديل سجل الصيانة",
    addMaintenanceRecord: "إضافة سجل صيانة",
    deleteRecordConfirm: "هل أنت متأكد أنك تريد حذف سجل الصيانة هذا؟",
    close: "إغلاق",
    footerRights: `© ${new Date().getFullYear()} متتبع صيانة السيارات. جميع الحقوق محفوظة.`,
    footerSlogan: "ابق على اطلاع دائم على رعاية مركبتك!",
    languageEN: "English",
    languageAR: "العربية",
    requiredFields: "{{field1}}، {{field2}}، و {{field3}} مطلوبة.",
    cost: "التكلفة",
    notesLabel: "ملاحظات",
    exampleToyota: "مثال: تويوتا",
    exampleCamry: "مثال: كامري",
    example2020: "مثال: 2020",
    exampleVin: "رقم تعريف المركبة",
    examplePlate: "مثال: أ ب ج-١٢٣",
    exampleBlue: "مثال: أزرق",
    example50000: "مثال: 50000",
    example75_50: "مثال: 75.50",
    example60000: "مثال: 60000",
    placeholderNotes: "ملاحظات إضافية (اختياري)",

    // MaintenanceType Translations
    [MaintenanceType.OilChange]: "تغيير زيت الموتور",
    [MaintenanceType.TireRotation]: "الإطارات",
    [MaintenanceType.BrakeInspection]: "تيل الفرامل",
    [MaintenanceType.BatteryCheck]: "البطارية",
    [MaintenanceType.AirFilterReplacement]: "استبدال فلتر الهواء",
    [MaintenanceType.CoolantFlush]: "تغيير سائل التبريد",
    [MaintenanceType.SparkPlugs]: "استبدال البوجيهات",
    [MaintenanceType.TimingBelt]: "استبدال حزام التوقيت",
    [MaintenanceType.WiperBlades]: "استبدال المساحات",
    [MaintenanceType.Other]: "أخرى",

    // MaintenanceStatus Translations
    [MaintenanceStatus.Upcoming]: "قادم",
    [MaintenanceStatus.Completed]: "مكتمل",
    [MaintenanceStatus.Overdue]: "متأخر",
  },
};
