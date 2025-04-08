import React from 'react';
import { CheckCircle, XCircle, Clock, Bell } from 'lucide-react';

type Notification = {
  id: number;
  type: 'success' | 'cancelled' | 'changed';
  title: string;
  message: string;
  time: string;
  date: string; // format: 'YYYY-MM-DD'
};

const allNotifications: Notification[] = [
  {
    id: 1,
    type: 'success',
    title: 'Appointment Success',
    message: 'You have successfully booked your appointment with Dr. Emily Walker.',
    time: '1h',
    date: '2025-04-08'
  },
  {
    id: 2,
    type: 'cancelled',
    title: 'Appointment Cancelled',
    message: 'You have successfully cancelled your appointment with Dr. David Patel.',
    time: '2h',
    date: '2025-04-08'
  },
  {
    id: 3,
    type: 'changed',
    title: 'Schedule Changed',
    message: 'You have successfully changed your appointment with Dr. Jessica Turner.',
    time: '8h',
    date: '2025-04-07'
  },
  {
    id: 4,
    type: 'success',
    title: 'Appointment Success',
    message: 'You have successfully booked your appointment with Dr. David Patel.',
    time: '1d',
    date: '2025-04-06'
  },
];

const isToday = (date: Date): boolean => {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
};

const isYesterday = (date: Date): boolean => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();
};

const differenceInCalendarDays = (date1: Date, date2: Date): number => {
  const time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
  const diffTime = Math.abs(time1 - time2);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

const parseISO = (dateString: string): Date => {
  return new Date(dateString);
};

const groupNotifications = (notifications: Notification[]) => {
  const groups: { [key: string]: Notification[] } = {};

  notifications.forEach(notification => {
    const notificationDate = parseISO(notification.date);
    let groupLabel = '';

    if (isToday(notificationDate)) {
      groupLabel = 'Today';
    } else if (isYesterday(notificationDate)) {
      groupLabel = 'Yesterday';
    } else {
      const daysAgo = differenceInCalendarDays(new Date(), notificationDate);
      groupLabel = `${daysAgo} days ago`;
    }

    if (!groups[groupLabel]) {
      groups[groupLabel] = [];
    }
    groups[groupLabel].push(notification);
  });

  return groups;
};

const NotificationIcon = ({ type }: { type: Notification['type'] }) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'cancelled':
      return <XCircle className="w-5 h-5 text-red-500" />;
    case 'changed':
      return <Clock className="w-5 h-5 text-blue-500" />;
    default:
      return null;
  }
};

export default function UserNotification() {
  const grouped = groupNotifications(allNotifications);
  
  return (
    <div className="w-full max-w-md mx-auto bg-white">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-2">
          <Bell className="w-5 h-5 text-indigo-600" />
          <h2 className="text-lg font-semibold text-primary">Notifications</h2>
        </div>
        <span className="text-xs font-medium bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
          {allNotifications.length}
        </span>
      </div>

      <div className="divide-y divide-gray-200">
        {Object.entries(grouped).map(([label, items]) => (
          <div key={label} className="bg-white">
            <div className="px-4 py-2 bg-gray-50">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {items.map(notification => (
                <div key={notification.id} className="flex items-start p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex-shrink-0 mr-3">
                    <NotificationIcon type={notification.type} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                      <span className="text-xs text-gray-500 ml-2">{notification.time}</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">{notification.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {Object.keys(grouped).length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
          <Bell className="w-12 h-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No notifications</h3>
          <p className="mt-1 text-sm text-gray-500">You're all caught up!</p>
        </div>
      )}
    </div>
  );
}