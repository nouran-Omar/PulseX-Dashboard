import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// --- Layouts ---
import PatientLayout from './layouts/PatientLayout';
import DoctorLayout from './layouts/DoctorLayout';
import AdminLayout from './layouts/AdminLayout'; 
// 👈 استيراد
// --- Patient Pages ---
import Dashboard from './pages/patient/Dashboard';

// 👇 التعديل هنا: كتبنا اسم الملف الحقيقي (MedicalRecords)
import Records from './pages/patient/MedicalRecords'; 

// 👇 التعديل هنا: كتبنا اسم الملف الحقيقي (HeartRiskAssessment)
import RiskAssessment from './pages/patient/HeartRiskAssessment'; 

// 👇 التعديل هنا: كتبنا اسم الملف الحقيقي (QRCode)
import QRCodePage from './pages/patient/QRCode'; 

import DoctorList from './pages/patient/DoctorList';
import BookingPage from './pages/patient/BookingPage';
import PaymentPage from './pages/patient/PaymentPage';
import Appointments from './pages/patient/Appointments';
import Messages from './pages/patient/Messages';
import Stories from './pages/patient/Stories';
import StoryDetails from './pages/patient/StoryDetails';
import WriteStory from './pages/patient/WriteStory';
import Settings from './pages/patient/Settings';

// --- Doctor Pages ---
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import PatientList from './pages/doctor/PatientList';
import PatientDetails from './pages/doctor/PatientDetails'; // 👈 استيراد الملف الجديد
import DoctorAppointments from './pages/doctor/DoctorAppointments';
import DoctorMessages from './pages/doctor/DoctorMessages';
import PatientStories from './pages/doctor/PatientStories';
import DoctorSettings from './pages/doctor/DoctorSettings';

// 👈 استيراد
import AdminDashboard from './pages/admin/AdminDashboard';
import DoctorManagement from './pages/admin/DoctorManagement';
import PatientManagement from './pages/admin/PatientManagement';
import StoriesManagement from './pages/admin/StoriesManagement';
import ActivityLogs from './pages/admin/ActivityLogs';
import AdminSettings from './pages/admin/AdminSettings';
// صفحة مؤقتة لسه هنبنيها
const Placeholder = ({ title }) => (
  <div className="p-10 text-center">
    <h2 className="text-2xl font-bold text-gray-400">{title} Page Coming Soon...</h2>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* توجيه تلقائي للصفحة الرئيسية */}
        <Route path="/" element={<Navigate to="/patient/dashboard" replace />} />

        {/* ================= PATIENT ROUTES ================= */}
        <Route path="/patient" element={<PatientLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="records" element={<Records />} />
          <Route path="risk" element={<RiskAssessment />} />
          <Route path="qr" element={<QRCodePage />} />
          <Route path="doctors" element={<DoctorList />} />
          <Route path="book/:id" element={<BookingPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="messages" element={<Messages />} />
          <Route path="stories" element={<Stories />} />
          <Route path="stories/:id" element={<StoryDetails />} />
          <Route path="stories/new" element={<WriteStory />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* ================= DOCTOR ROUTES ================= */}
        <Route path="/doctor" element={<DoctorLayout />}>
          <Route path="dashboard" element={<DoctorDashboard />} />
          
          <Route path="patients" element={<PatientList />} />
      
<Route path="patients/:id" element={<PatientDetails />} />
         <Route path="appointments" element={<DoctorAppointments />} />
          <Route path="reports" element={<Placeholder title="Reports" />} />
     
          <Route path="messages" element={<DoctorMessages />} />
          <Route path="stories" element={<PatientStories />} />



<Route path="settings" element={<DoctorSettings />} />

        </Route>
{/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
     
        <Route path="doctors" element={<DoctorManagement />} /> 
       
        <Route path="patients" element={<PatientManagement />} /> 
        <Route path="stories" element={<StoriesManagement />} />
        <Route path="logs" element={<ActivityLogs />} />
      <Route path="settings" element={<AdminSettings />} />
       </Route>
        {/* صفحة 404 */}
        <Route path="*" element={<div className="flex h-screen items-center justify-center text-xl">404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;