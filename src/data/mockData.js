export const shipmentTimeline = [
  { id: 1, status: 'Booked', time: '09:30 AM', active: true },
  { id: 2, status: 'Picked Up', time: '11:45 AM', active: true },
  { id: 3, status: 'In Transit', time: '01:20 PM', active: true },
  { id: 4, status: 'Arrived at Hub', time: 'Tomorrow', active: false },
  { id: 5, status: 'Out for Delivery', time: 'Pending', active: false },
  { id: 6, status: 'Delivered', time: 'Pending', active: false },
];

export const activeShipments = [
  { id: 'SICC-2341', destination: 'Dubai, UAE', date: '12 Aug 2026', status: 'In Transit', color: '#3FA9F5', value: 'AED 620' },
  { id: 'SICC-8904', destination: 'Manchester, UK', date: '18 Aug 2026', status: 'Picked Up', color: '#2FB673', value: 'GBP 280' },
];

export const deliveredShipments = [
  { id: 'SICC-5531', destination: 'New York, USA', date: '02 Aug 2026', status: 'Delivered', color: '#2FB673', value: 'USD 430' },
];

export const cancelledShipments = [
  { id: 'SICC-1198', destination: 'Kuala Lumpur, MY', date: '28 Jul 2026', status: 'Cancelled', color: '#E55F5F', value: 'MYR 180' },
];

export const notifications = [
  { id: 1, title: 'Booking Confirmed', text: 'Your pickup has been scheduled for tomorrow.', time: '2m ago', type: 'success' },
  { id: 2, title: 'Pickup Notification', text: 'Courier partner en route to collect your parcel.', time: '16m ago', type: 'info' },
  { id: 3, title: 'Shipment Update', text: 'Your parcel is now in transit to the nearest hub.', time: '1h ago', type: 'info' },
  { id: 4, title: 'Delivered', text: 'Package delivered successfully to the recipient.', time: 'Yesterday', type: 'success' },
];

export const adminMetrics = [
  { label: 'Customers', value: '18.4K' },
  { label: 'Bookings', value: '2,943' },
  { label: 'Shipments', value: '8,190' },
  { label: 'Revenue', value: '$142K' },
];

export const quickActions = [
  { id: 1, title: 'Book a Courier', icon: 'cube-outline', route: 'Booking' },
  { id: 2, title: 'Track Shipment', icon: 'location-outline', route: 'Tracking' },
  { id: 3, title: 'My Shipments', icon: 'document-text-outline', route: 'Shipments' },
  { id: 4, title: 'Get Quote', icon: 'calculator-outline', route: 'Quote' },
];
