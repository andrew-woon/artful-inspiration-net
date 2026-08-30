export type Appointment = {
  id: string;
  time: string;
  customer: string;
  vehicle: string;
  kind: "Test drive" | "Viewing" | "Handover" | "Service";
  consultant: string;
};

export const APPOINTMENTS: Appointment[] = [
  { id: "a1", time: "09:30", customer: "Tan Wei Ming", vehicle: "Honda Civic 1.5 TC-P", kind: "Test drive", consultant: "Aisyah" },
  { id: "a2", time: "11:00", customer: "Nurul Huda", vehicle: "Toyota Vios 1.5 G", kind: "Viewing", consultant: "Ken" },
  { id: "a3", time: "13:15", customer: "Jason Lim", vehicle: "Mazda CX-5 2.0 High", kind: "Handover", consultant: "Aisyah" },
  { id: "a4", time: "15:00", customer: "Farid Rahman", vehicle: "Perodua Ativa AV", kind: "Service", consultant: "Workshop" },
  { id: "a5", time: "17:30", customer: "Chloe Ng", vehicle: "BMW 320i Sport", kind: "Test drive", consultant: "Ken" },
];

export type Enquiry = {
  id: string;
  name: string;
  source: "Carlist" | "Walk-in" | "WhatsApp" | "Website" | "Referral";
  vehicle: string;
  received: string;
  hot: boolean;
};

export const ENQUIRIES: Enquiry[] = [
  { id: "e1", name: "Sharifah A.", source: "WhatsApp", vehicle: "Honda City 1.5 E", received: "4m ago", hot: true },
  { id: "e2", name: "Marcus Teo", source: "Carlist", vehicle: "Mazda 3 2.0 SkyActiv", received: "22m ago", hot: true },
  { id: "e3", name: "Devi K.", source: "Website", vehicle: "Toyota Corolla Cross", received: "1h ago", hot: false },
  { id: "e4", name: "Hafiz Nordin", source: "Walk-in", vehicle: "Proton X50 Flagship", received: "2h ago", hot: false },
  { id: "e5", name: "Grace Wong", source: "Referral", vehicle: "Lexus UX 200", received: "3h ago", hot: false },
];

export type Delivery = {
  id: string;
  customer: string;
  vehicle: string;
  stage: string;
  progress: number;
  eta: string;
};

export const DELIVERIES: Delivery[] = [
  { id: "d1", customer: "Jason Lim", vehicle: "Mazda CX-5 2.0", stage: "Insurance pending", progress: 70, eta: "Today" },
  { id: "d2", customer: "Sarah Ismail", vehicle: "Honda HR-V 1.5 V", stage: "JPJ transfer", progress: 45, eta: "Tue" },
  { id: "d3", customer: "Kelvin Soh", vehicle: "Toyota Yaris 1.5 G", stage: "Detailing", progress: 85, eta: "Mon" },
  { id: "d4", customer: "Amirah Zain", vehicle: "Nissan Almera VLT", stage: "Loan disbursement", progress: 30, eta: "Thu" },
];

export type LoanApplication = {
  id: string;
  customer: string;
  bank: string;
  amount: string;
  status: "Approved" | "In review" | "Docs required" | "Rejected";
};

export const LOANS: LoanApplication[] = [
  { id: "l1", customer: "Sarah Ismail", bank: "Maybank", amount: "RM 92,000", status: "Approved" },
  { id: "l2", customer: "Amirah Zain", bank: "Public Bank", amount: "RM 68,500", status: "In review" },
  { id: "l3", customer: "Marcus Teo", bank: "DBS", amount: "SGD 41,200", status: "Docs required" },
  { id: "l4", customer: "Hafiz Nordin", bank: "CIMB", amount: "RM 105,000", status: "In review" },
  { id: "l5", customer: "Devi K.", bank: "RHB", amount: "RM 54,900", status: "Rejected" },
];

export type LeaderboardEntry = {
  id: string;
  name: string;
  role: string;
  units: number;
  revenue: string;
  target: number;
};

export const LEADERBOARD: LeaderboardEntry[] = [
  { id: "s1", name: "Aisyah Rahim", role: "Senior consultant", units: 11, revenue: "RM 1.02M", target: 92 },
  { id: "s2", name: "Ken Chua", role: "Sales consultant", units: 9, revenue: "RM 812K", target: 75 },
  { id: "s3", name: "Ravi Suppiah", role: "Sales consultant", units: 7, revenue: "RM 640K", target: 58 },
  { id: "s4", name: "Michelle Yap", role: "Junior consultant", units: 4, revenue: "RM 318K", target: 33 },
];

export type Activity = {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
};

export const ACTIVITIES: Activity[] = [
  { id: "ac1", actor: "Ken Chua", action: "closed a deal on", target: "Toyota Vios 1.5 G", time: "12m ago" },
  { id: "ac2", actor: "Workshop", action: "completed reconditioning for", target: "Proton X50 Flagship", time: "48m ago" },
  { id: "ac3", actor: "Aisyah Rahim", action: "added a new enquiry from", target: "Carlist", time: "1h ago" },
  { id: "ac4", actor: "Finance", action: "submitted a loan application to", target: "Public Bank", time: "2h ago" },
  { id: "ac5", actor: "Michelle Yap", action: "scheduled a test drive for", target: "BMW 320i Sport", time: "3h ago" },
  { id: "ac6", actor: "Admin", action: "published 6 new listings to", target: "Carlist & Mudah", time: "5h ago" },
];

export const REVENUE = {
  mtd: "RM 2.79M",
  delta: "+18.4%",
  target: 78,
  gross: "RM 412K",
  bars: [42, 55, 38, 64, 58, 76, 71, 84, 62, 90, 78, 96],
};

export const STATS = {
  stock: { value: 128, sub: "24 units aging > 90 days" },
  enquiries: { value: 37, sub: "12 unassigned" },
  deliveries: { value: 9, sub: "3 scheduled today" },
  appointments: { value: 5, sub: "2 test drives" },
};
