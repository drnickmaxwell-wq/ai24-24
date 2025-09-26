'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  TrendingUp, 
  Clock, 
  Phone, 
  Mail,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Activity
} from 'lucide-react';
import { LuxuryCard } from '@/components/ui/luxury-card';
import { LuxuryButton } from '@/components/ui/luxury-button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

// Mock data for dashboard
const todayStats = [
  { name: 'Today\'s Appointments', value: 12, icon: Calendar, color: 'text-blue-600', change: '+2 from yesterday' },
  { name: 'New Patients', value: 3, icon: Users, color: 'text-green-600', change: '+1 from yesterday' },
  { name: 'Revenue Today', value: '£2,450', icon: DollarSign, color: 'text-purple-600', change: '+15% from yesterday' },
  { name: 'Pending Calls', value: 5, icon: Phone, color: 'text-orange-600', change: '2 urgent' },
];

const weeklyRevenue = [
  { day: 'Mon', revenue: 1800, appointments: 8 },
  { day: 'Tue', revenue: 2200, appointments: 10 },
  { day: 'Wed', revenue: 1950, appointments: 9 },
  { day: 'Thu', revenue: 2450, appointments: 12 },
  { day: 'Fri', revenue: 2100, appointments: 11 },
  { day: 'Sat', revenue: 1600, appointments: 7 },
  { day: 'Sun', revenue: 0, appointments: 0 },
];

const treatmentTypes = [
  { name: 'Consultations', value: 35, color: '#C2185B' },
  { name: 'Cleanings', value: 25, color: '#40C4B4' },
  { name: 'Veneers', value: 20, color: '#D4AF37' },
  { name: 'Implants', value: 15, color: '#9C27B0' },
  { name: 'Emergency', value: 5, color: '#FF5722' },
];

const recentAppointments = [
  { id: 1, patient: 'Sarah Johnson', time: '09:00', treatment: 'Consultation', status: 'confirmed' },
  { id: 2, patient: 'Michael Brown', time: '10:30', treatment: 'Cleaning', status: 'in-progress' },
  { id: 3, patient: 'Emma Wilson', time: '11:00', treatment: 'Veneers', status: 'waiting' },
  { id: 4, patient: 'David Miller', time: '14:00', treatment: 'Implant', status: 'confirmed' },
  { id: 5, patient: 'Lisa Garcia', time: '15:30', treatment: 'Emergency', status: 'urgent' },
];

const alerts = [
  { id: 1, type: 'urgent', message: 'Emergency appointment request from John Smith', time: '5 min ago' },
  { id: 2, type: 'info', message: 'Equipment maintenance scheduled for tomorrow', time: '1 hour ago' },
  { id: 3, type: 'warning', message: 'Low inventory: Dental floss (5 units remaining)', time: '2 hours ago' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brand-text">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, Dr. Marina. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</span>
          <LuxuryButton variant="outline" size="sm">
            <Activity className="w-4 h-4 mr-2" />
            Refresh
          </LuxuryButton>
        </div>
      </div>

      {/* Today's Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {todayStats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <LuxuryCard className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-brand-text mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </LuxuryCard>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <LuxuryCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-brand-text">Weekly Revenue</h3>
            <LuxuryButton variant="outline" size="sm">View Details</LuxuryButton>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyRevenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#40C4B4" 
                strokeWidth={3}
                dot={{ fill: '#40C4B4', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </LuxuryCard>

        {/* Treatment Types */}
        <LuxuryCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-brand-text">Treatment Distribution</h3>
            <LuxuryButton variant="outline" size="sm">View All</LuxuryButton>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={treatmentTypes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {treatmentTypes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {treatmentTypes.map((type) => (
              <div key={type.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: type.color }}
                />
                <span className="text-sm text-gray-600">{type.name}</span>
                <span className="text-sm font-medium text-brand-text ml-auto">{type.value}%</span>
              </div>
            ))}
          </div>
        </LuxuryCard>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Appointments */}
        <div className="lg:col-span-2">
          <LuxuryCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-brand-text">Today's Appointments</h3>
              <LuxuryButton variant="primary" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Add New
              </LuxuryButton>
            </div>
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-sm font-medium text-brand-text min-w-[60px]">
                      {appointment.time}
                    </div>
                    <div>
                      <p className="font-medium text-brand-text">{appointment.patient}</p>
                      <p className="text-sm text-gray-600">{appointment.treatment}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      appointment.status === 'waiting' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {appointment.status}
                    </span>
                    <LuxuryButton variant="outline" size="sm">View</LuxuryButton>
                  </div>
                </div>
              ))}
            </div>
          </LuxuryCard>
        </div>

        {/* Alerts & Notifications */}
        <LuxuryCard className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-brand-text">Alerts</h3>
            <span className="text-sm text-gray-500">{alerts.length} active</span>
          </div>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex gap-3 p-3 rounded-lg bg-gray-50">
                <div className={`mt-0.5 ${
                  alert.type === 'urgent' ? 'text-red-500' :
                  alert.type === 'warning' ? 'text-yellow-500' :
                  'text-blue-500'
                }`}>
                  {alert.type === 'urgent' ? <AlertCircle className="w-4 h-4" /> :
                   alert.type === 'warning' ? <Clock className="w-4 h-4" /> :
                   <CheckCircle className="w-4 h-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-brand-text">{alert.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
          <LuxuryButton variant="outline" size="sm" className="w-full mt-4">
            View All Alerts
          </LuxuryButton>
        </LuxuryCard>
      </div>
    </div>
  );
}

