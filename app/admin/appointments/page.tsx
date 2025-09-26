'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Plus,
  Filter,
  Search,
  MoreHorizontal,
  CheckCircle,
  XCircle,
  AlertCircle,
  Edit,
  Trash2
} from 'lucide-react';
import { LuxuryCard } from '@/components/ui/luxury-card';
import { LuxuryButton } from '@/components/ui/luxury-button';

// Mock appointment data
const appointments = [
  {
    id: 1,
    patient: { name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+44 7700 900123' },
    date: '2024-09-05',
    time: '09:00',
    duration: 30,
    treatment: 'Consultation',
    practitioner: 'Dr. Marina',
    status: 'confirmed',
    notes: 'New patient consultation for veneers',
    isNewPatient: true,
  },
  {
    id: 2,
    patient: { name: 'Michael Brown', email: 'michael.b@email.com', phone: '+44 7700 900124' },
    date: '2024-09-05',
    time: '10:30',
    duration: 60,
    treatment: 'Dental Cleaning',
    practitioner: 'Dr. Marina',
    status: 'in-progress',
    notes: 'Regular 6-month cleaning',
    isNewPatient: false,
  },
  {
    id: 3,
    patient: { name: 'Emma Wilson', email: 'emma.w@email.com', phone: '+44 7700 900125' },
    date: '2024-09-05',
    time: '11:00',
    duration: 120,
    treatment: '3D Printed Veneers',
    practitioner: 'Dr. Marina',
    status: 'waiting',
    notes: 'Same-day veneer treatment',
    isNewPatient: false,
  },
  {
    id: 4,
    patient: { name: 'David Miller', email: 'david.m@email.com', phone: '+44 7700 900126' },
    date: '2024-09-05',
    time: '14:00',
    duration: 90,
    treatment: 'Implant Consultation',
    practitioner: 'Dr. Marina',
    status: 'confirmed',
    notes: 'Implant planning with 3D imaging',
    isNewPatient: false,
  },
  {
    id: 5,
    patient: { name: 'Lisa Garcia', email: 'lisa.g@email.com', phone: '+44 7700 900127' },
    date: '2024-09-05',
    time: '15:30',
    duration: 30,
    treatment: 'Emergency',
    practitioner: 'Dr. Marina',
    status: 'urgent',
    notes: 'Severe tooth pain, urgent care needed',
    isNewPatient: true,
  },
];

const statusColors = {
  confirmed: 'bg-green-100 text-green-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  waiting: 'bg-yellow-100 text-yellow-800',
  urgent: 'bg-red-100 text-red-800',
  completed: 'bg-gray-100 text-gray-800',
  cancelled: 'bg-red-100 text-red-800',
};

const statusIcons = {
  confirmed: CheckCircle,
  'in-progress': Clock,
  waiting: AlertCircle,
  urgent: AlertCircle,
  completed: CheckCircle,
  cancelled: XCircle,
};

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState('2024-09-05');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAppointments = appointments.filter(appointment => {
    const matchesDate = appointment.date === selectedDate;
    const matchesStatus = filterStatus === 'all' || appointment.status === filterStatus;
    const matchesSearch = appointment.patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.treatment.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDate && matchesStatus && matchesSearch;
  });

  const getTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        if (hour === 12 && minute < 60) continue; // Lunch break
        
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const appointment = filteredAppointments.find(apt => apt.time === time);
        
        slots.push({
          time,
          appointment,
          available: !appointment,
        });
      }
    }
    return slots;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-text">Appointments</h1>
          <p className="text-gray-600 mt-1">Manage patient appointments and scheduling</p>
        </div>
        <LuxuryButton variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          New Appointment
        </LuxuryButton>
      </div>

      {/* Filters and Search */}
      <LuxuryCard className="p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Date Picker */}
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-400" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="confirmed">Confirmed</option>
              <option value="in-progress">In Progress</option>
              <option value="waiting">Waiting</option>
              <option value="urgent">Urgent</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search patients or treatments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-turquoise focus:border-transparent"
            />
          </div>
        </div>
      </LuxuryCard>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-1">
          <LuxuryCard className="p-6">
            <h3 className="text-lg font-semibold text-brand-text mb-4">Daily Schedule</h3>
            <div className="space-y-2">
              {getTimeSlots().map((slot) => (
                <div
                  key={slot.time}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    slot.appointment
                      ? 'border-brand-turquoise bg-brand-turquoise/5'
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-brand-text">{slot.time}</span>
                    {slot.appointment ? (
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        statusColors[slot.appointment.status as keyof typeof statusColors]
                      }`}>
                        {slot.appointment.status}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500">Available</span>
                    )}
                  </div>
                  {slot.appointment && (
                    <div className="mt-2">
                      <p className="text-sm font-medium text-brand-text">
                        {slot.appointment.patient.name}
                      </p>
                      <p className="text-xs text-gray-600">
                        {slot.appointment.treatment}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </LuxuryCard>
        </div>

        {/* Appointments List */}
        <div className="lg:col-span-2">
          <LuxuryCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-brand-text">
                Appointments ({filteredAppointments.length})
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  {new Date(selectedDate).toLocaleDateString('en-GB', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {filteredAppointments.map((appointment, index) => {
                const StatusIcon = statusIcons[appointment.status as keyof typeof statusIcons];
                
                return (
                  <motion.div
                    key={appointment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="text-center min-w-[60px]">
                          <div className="text-lg font-bold text-brand-text">{appointment.time}</div>
                          <div className="text-xs text-gray-500">{appointment.duration}min</div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-brand-text">{appointment.patient.name}</h4>
                            {appointment.isNewPatient && (
                              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                New Patient
                              </span>
                            )}
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              statusColors[appointment.status as keyof typeof statusColors]
                            }`}>
                              <StatusIcon className="w-3 h-3 inline mr-1" />
                              {appointment.status}
                            </span>
                          </div>
                          
                          <p className="text-sm text-gray-600 mb-2">{appointment.treatment}</p>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <User className="w-3 h-3" />
                              {appointment.practitioner}
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {appointment.patient.phone}
                            </div>
                            <div className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              {appointment.patient.email}
                            </div>
                          </div>
                          
                          {appointment.notes && (
                            <p className="text-sm text-gray-600 mt-2 italic">
                              "{appointment.notes}"
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <LuxuryButton variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </LuxuryButton>
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              
              {filteredAppointments.length === 0 && (
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No appointments found</h3>
                  <p className="text-gray-500 mb-4">
                    {searchTerm || filterStatus !== 'all' 
                      ? 'Try adjusting your filters or search terms'
                      : 'No appointments scheduled for this date'
                    }
                  </p>
                  <LuxuryButton variant="primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Schedule New Appointment
                  </LuxuryButton>
                </div>
              )}
            </div>
          </LuxuryCard>
        </div>
      </div>
    </div>
  );
}

