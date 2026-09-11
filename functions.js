/**
 * SkyWings Flight Reservation Portal - Interactive JavaScript Engine
 */

// ================= AIRLINE BRAND STYLES =================
const AIRLINE_STYLES = {
  "IndiGo": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200", badge: "bg-blue-100 text-blue-800" },
  "Air India": { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200", badge: "bg-rose-100 text-rose-800" },
  "Vistara": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200", badge: "bg-purple-100 text-purple-800" },
  "Akasa Air": { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200", badge: "bg-amber-100 text-amber-800" },
  "SpiceJet": { bg: "bg-red-50", text: "text-red-700", border: "border-red-200", badge: "bg-red-100 text-red-800" },
  "Emirates": { bg: "bg-amber-50", text: "text-amber-800", border: "border-amber-300", badge: "bg-amber-100 text-amber-900" },
  "Singapore Airlines": { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200", badge: "bg-sky-100 text-sky-800" }
};

// ================= 1. FLIGHT SCHEDULES (60+ FLIGHTS - MORNING & EVENING) =================
const flightMasterList = [
  // 1. Delhi (DEL) to Mumbai (BOM) [8 Flights]
  { id: 101, airline: "IndiGo", code: "6E-204", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", departure: "06:00 AM", arrival: "08:15 AM", timeCategory: "MORNING", duration: "2h 15m", price: 4200, seats: 14, terminal: "T2" },
  { id: 102, airline: "Air India", code: "AI-805", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", departure: "08:30 AM", arrival: "10:45 AM", timeCategory: "MORNING", duration: "2h 15m", price: 4850, seats: 8, terminal: "T3" },
  { id: 103, airline: "Vistara", code: "UK-995", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", departure: "11:15 AM", arrival: "01:30 PM", timeCategory: "MORNING", duration: "2h 15m", price: 5400, seats: 6, terminal: "T3" },
  { id: 104, airline: "Akasa Air", code: "QP-130", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", departure: "01:00 PM", arrival: "03:15 PM", timeCategory: "EVENING", duration: "2h 15m", price: 3950, seats: 19, terminal: "T2" },
  { id: 105, airline: "SpiceJet", code: "SG-816", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", departure: "03:45 PM", arrival: "06:00 PM", timeCategory: "EVENING", duration: "2h 15m", price: 4100, seats: 11, terminal: "T1" },
  { id: 106, airline: "IndiGo", code: "6E-512", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", departure: "06:30 PM", arrival: "08:45 PM", timeCategory: "EVENING", duration: "2h 15m", price: 4350, seats: 9, terminal: "T2" },
  { id: 107, airline: "Air India", code: "AI-660", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", departure: "08:45 PM", arrival: "11:05 PM", timeCategory: "EVENING", duration: "2h 20m", price: 4700, seats: 15, terminal: "T3" },
  { id: 108, airline: "Vistara", code: "UK-975", origin: "Delhi (DEL)", destination: "Mumbai (BOM)", departure: "10:15 PM", arrival: "12:30 AM", timeCategory: "EVENING", duration: "2h 15m", price: 5200, seats: 5, terminal: "T3" },

  // 2. Mumbai (BOM) to Delhi (DEL) [6 Flights]
  { id: 109, airline: "IndiGo", code: "6E-601", origin: "Mumbai (BOM)", destination: "Delhi (DEL)", departure: "07:00 AM", arrival: "09:15 AM", timeCategory: "MORNING", duration: "2h 15m", price: 4300, seats: 12, terminal: "T2" },
  { id: 110, airline: "Air India", code: "AI-806", origin: "Mumbai (BOM)", destination: "Delhi (DEL)", departure: "09:45 AM", arrival: "12:00 PM", timeCategory: "MORNING", duration: "2h 15m", price: 4900, seats: 7, terminal: "T2" },
  { id: 111, airline: "Vistara", code: "UK-960", origin: "Mumbai (BOM)", destination: "Delhi (DEL)", departure: "02:30 PM", arrival: "04:45 PM", timeCategory: "EVENING", duration: "2h 15m", price: 5350, seats: 14, terminal: "T2" },
  { id: 112, airline: "Akasa Air", code: "QP-131", origin: "Mumbai (BOM)", destination: "Delhi (DEL)", departure: "05:00 PM", arrival: "07:15 PM", timeCategory: "EVENING", duration: "2h 15m", price: 4050, seats: 18, terminal: "T2" },
  { id: 113, airline: "IndiGo", code: "6E-608", origin: "Mumbai (BOM)", destination: "Delhi (DEL)", departure: "08:00 PM", arrival: "10:15 PM", timeCategory: "EVENING", duration: "2h 15m", price: 4400, seats: 10, terminal: "T2" },
  { id: 114, airline: "Air India", code: "AI-810", origin: "Mumbai (BOM)", destination: "Delhi (DEL)", departure: "10:30 PM", arrival: "12:45 AM", timeCategory: "EVENING", duration: "2h 15m", price: 4600, seats: 8, terminal: "T2" },

  // 3. Delhi (DEL) to Bangalore (BLR) [6 Flights]
  { id: 115, airline: "IndiGo", code: "6E-213", origin: "Delhi (DEL)", destination: "Bangalore (BLR)", departure: "06:15 AM", arrival: "09:00 AM", timeCategory: "MORNING", duration: "2h 45m", price: 5200, seats: 10, terminal: "T1" },
  { id: 116, airline: "Air India", code: "AI-504", origin: "Delhi (DEL)", destination: "Bangalore (BLR)", departure: "10:00 AM", arrival: "12:50 PM", timeCategory: "MORNING", duration: "2h 50m", price: 5800, seats: 6, terminal: "T3" },
  { id: 117, airline: "Vistara", code: "UK-811", origin: "Delhi (DEL)", destination: "Bangalore (BLR)", departure: "01:15 PM", arrival: "04:00 PM", timeCategory: "EVENING", duration: "2h 45m", price: 6200, seats: 4, terminal: "T3" },
  { id: 118, airline: "Akasa Air", code: "QP-145", origin: "Delhi (DEL)", destination: "Bangalore (BLR)", departure: "04:40 PM", arrival: "07:30 PM", timeCategory: "EVENING", duration: "2h 50m", price: 4900, seats: 21, terminal: "T2" },
  { id: 119, airline: "IndiGo", code: "6E-219", origin: "Delhi (DEL)", destination: "Bangalore (BLR)", departure: "07:30 PM", arrival: "10:15 PM", timeCategory: "EVENING", duration: "2h 45m", price: 5350, seats: 13, terminal: "T1" },
  { id: 120, airline: "Air India", code: "AI-508", origin: "Delhi (DEL)", destination: "Bangalore (BLR)", departure: "09:45 PM", arrival: "12:35 AM", timeCategory: "EVENING", duration: "2h 50m", price: 5600, seats: 11, terminal: "T3" },

  // 4. Bangalore (BLR) to Delhi (DEL) [5 Flights]
  { id: 121, airline: "IndiGo", code: "6E-214", origin: "Bangalore (BLR)", destination: "Delhi (DEL)", departure: "07:30 AM", arrival: "10:15 AM", timeCategory: "MORNING", duration: "2h 45m", price: 5100, seats: 16, terminal: "T1" },
  { id: 122, airline: "Vistara", code: "UK-812", origin: "Bangalore (BLR)", destination: "Delhi (DEL)", departure: "11:30 AM", arrival: "02:15 PM", timeCategory: "MORNING", duration: "2h 45m", price: 6100, seats: 5, terminal: "T2" },
  { id: 123, airline: "Air India", code: "AI-505", origin: "Bangalore (BLR)", destination: "Delhi (DEL)", departure: "03:15 PM", arrival: "06:05 PM", timeCategory: "EVENING", duration: "2h 50m", price: 5750, seats: 9, terminal: "T2" },
  { id: 124, airline: "Akasa Air", code: "QP-146", origin: "Bangalore (BLR)", destination: "Delhi (DEL)", departure: "06:45 PM", arrival: "09:35 PM", timeCategory: "EVENING", duration: "2h 50m", price: 4950, seats: 17, terminal: "T1" },
  { id: 125, airline: "IndiGo", code: "6E-220", origin: "Bangalore (BLR)", destination: "Delhi (DEL)", departure: "09:30 PM", arrival: "12:15 AM", timeCategory: "EVENING", duration: "2h 45m", price: 5250, seats: 12, terminal: "T1" },

  // 5. Mumbai (BOM) to Goa (GOI) [6 Flights]
  { id: 126, airline: "IndiGo", code: "6E-442", origin: "Mumbai (BOM)", destination: "Goa (GOI)", departure: "06:00 AM", arrival: "07:15 AM", timeCategory: "MORNING", duration: "1h 15m", price: 2800, seats: 18, terminal: "T1" },
  { id: 127, airline: "Air India", code: "AI-521", origin: "Mumbai (BOM)", destination: "Goa (GOI)", departure: "09:30 AM", arrival: "10:50 AM", timeCategory: "MORNING", duration: "1h 20m", price: 3300, seats: 8, terminal: "T2" },
  { id: 128, airline: "Akasa Air", code: "QP-156", origin: "Mumbai (BOM)", destination: "Goa (GOI)", departure: "01:15 PM", arrival: "02:30 PM", timeCategory: "EVENING", duration: "1h 15m", price: 2950, seats: 24, terminal: "T1" },
  { id: 129, airline: "SpiceJet", code: "SG-301", origin: "Mumbai (BOM)", destination: "Goa (GOI)", departure: "04:30 PM", arrival: "05:45 PM", timeCategory: "EVENING", duration: "1h 15m", price: 2750, seats: 12, terminal: "T1" },
  { id: 130, airline: "IndiGo", code: "6E-448", origin: "Mumbai (BOM)", destination: "Goa (GOI)", departure: "07:45 PM", arrival: "09:00 PM", timeCategory: "EVENING", duration: "1h 15m", price: 3100, seats: 15, terminal: "T1" },
  { id: 131, airline: "Vistara", code: "UK-855", origin: "Mumbai (BOM)", destination: "Goa (GOI)", departure: "09:15 PM", arrival: "10:30 PM", timeCategory: "EVENING", duration: "1h 15m", price: 3600, seats: 9, terminal: "T2" },

  // 6. Goa (GOI) to Mumbai (BOM) [4 Flights]
  { id: 132, airline: "IndiGo", code: "6E-443", origin: "Goa (GOI)", destination: "Mumbai (BOM)", departure: "08:00 AM", arrival: "09:15 AM", timeCategory: "MORNING", duration: "1h 15m", price: 2850, seats: 14, terminal: "T1" },
  { id: 133, airline: "Akasa Air", code: "QP-157", origin: "Goa (GOI)", destination: "Mumbai (BOM)", departure: "03:15 PM", arrival: "04:30 PM", timeCategory: "EVENING", duration: "1h 15m", price: 3000, seats: 20, terminal: "T1" },
  { id: 134, airline: "Air India", code: "AI-522", origin: "Goa (GOI)", destination: "Mumbai (BOM)", departure: "06:30 PM", arrival: "07:50 PM", timeCategory: "EVENING", duration: "1h 20m", price: 3400, seats: 10, terminal: "T2" },
  { id: 135, airline: "IndiGo", code: "6E-449", origin: "Goa (GOI)", destination: "Mumbai (BOM)", departure: "09:45 PM", arrival: "11:00 PM", timeCategory: "EVENING", duration: "1h 15m", price: 2900, seats: 16, terminal: "T1" },

  // 7. Delhi (DEL) to Goa (GOI) [4 Flights]
  { id: 136, airline: "IndiGo", code: "6E-632", origin: "Delhi (DEL)", destination: "Goa (GOI)", departure: "07:15 AM", arrival: "09:50 AM", timeCategory: "MORNING", duration: "2h 35m", price: 5900, seats: 7, terminal: "T2" },
  { id: 137, airline: "SpiceJet", code: "SG-144", origin: "Delhi (DEL)", destination: "Goa (GOI)", departure: "12:30 PM", arrival: "03:10 PM", timeCategory: "EVENING", duration: "2h 40m", price: 5400, seats: 15, terminal: "T1" },
  { id: 138, airline: "Vistara", code: "UK-881", origin: "Delhi (DEL)", destination: "Goa (GOI)", departure: "04:15 PM", arrival: "06:55 PM", timeCategory: "EVENING", duration: "2h 40m", price: 6800, seats: 9, terminal: "T3" },
  { id: 139, airline: "Air India", code: "AI-883", origin: "Delhi (DEL)", destination: "Goa (GOI)", departure: "08:15 PM", arrival: "10:55 PM", timeCategory: "EVENING", duration: "2h 40m", price: 6100, seats: 11, terminal: "T3" },

  // 8. Mumbai (BOM) to Bangalore (BLR) [5 Flights]
  { id: 140, airline: "IndiGo", code: "6E-344", origin: "Mumbai (BOM)", destination: "Bangalore (BLR)", departure: "06:40 AM", arrival: "08:25 AM", timeCategory: "MORNING", duration: "1h 45m", price: 3400, seats: 12, terminal: "T2" },
  { id: 141, airline: "Akasa Air", code: "QP-112", origin: "Mumbai (BOM)", destination: "Bangalore (BLR)", departure: "11:00 AM", arrival: "12:45 PM", timeCategory: "MORNING", duration: "1h 45m", price: 3150, seats: 25, terminal: "T1" },
  { id: 142, airline: "Air India", code: "AI-639", origin: "Mumbai (BOM)", destination: "Bangalore (BLR)", departure: "02:15 PM", arrival: "04:05 PM", timeCategory: "EVENING", duration: "1h 50m", price: 3800, seats: 8, terminal: "T2" },
  { id: 143, airline: "Vistara", code: "UK-851", origin: "Mumbai (BOM)", destination: "Bangalore (BLR)", departure: "05:30 PM", arrival: "07:15 PM", timeCategory: "EVENING", duration: "1h 45m", price: 4200, seats: 14, terminal: "T2" },
  { id: 144, airline: "IndiGo", code: "6E-348", origin: "Mumbai (BOM)", destination: "Bangalore (BLR)", departure: "09:00 PM", arrival: "10:45 PM", timeCategory: "EVENING", duration: "1h 45m", price: 3500, seats: 17, terminal: "T2" },

  // 9. Delhi (DEL) to Hyderabad (HYD) [4 Flights]
  { id: 145, airline: "IndiGo", code: "6E-551", origin: "Delhi (DEL)", destination: "Hyderabad (HYD)", departure: "08:15 AM", arrival: "10:30 AM", timeCategory: "MORNING", duration: "2h 15m", price: 4700, seats: 13, terminal: "T2" },
  { id: 146, airline: "Air India", code: "AI-544", origin: "Delhi (DEL)", destination: "Hyderabad (HYD)", departure: "01:10 PM", arrival: "03:25 PM", timeCategory: "EVENING", duration: "2h 15m", price: 5100, seats: 8, terminal: "T3" },
  { id: 147, airline: "Vistara", code: "UK-873", origin: "Delhi (DEL)", destination: "Hyderabad (HYD)", departure: "06:00 PM", arrival: "08:20 PM", timeCategory: "EVENING", duration: "2h 20m", price: 5500, seats: 17, terminal: "T3" },
  { id: 148, airline: "IndiGo", code: "6E-559", origin: "Delhi (DEL)", destination: "Hyderabad (HYD)", departure: "09:30 PM", arrival: "11:45 PM", timeCategory: "EVENING", duration: "2h 15m", price: 4600, seats: 15, terminal: "T2" },

  // 10. Delhi (DEL) to Kolkata (CCU) [4 Flights]
  { id: 149, airline: "IndiGo", code: "6E-207", origin: "Delhi (DEL)", destination: "Kolkata (CCU)", departure: "07:00 AM", arrival: "09:10 AM", timeCategory: "MORNING", duration: "2h 10m", price: 4800, seats: 15, terminal: "T2" },
  { id: 150, airline: "Air India", code: "AI-701", origin: "Delhi (DEL)", destination: "Kolkata (CCU)", departure: "02:30 PM", arrival: "04:45 PM", timeCategory: "EVENING", duration: "2h 15m", price: 5250, seats: 7, terminal: "T3" },
  { id: 151, airline: "SpiceJet", code: "SG-273", origin: "Delhi (DEL)", destination: "Kolkata (CCU)", departure: "06:45 PM", arrival: "09:00 PM", timeCategory: "EVENING", duration: "2h 15m", price: 4500, seats: 21, terminal: "T1" },
  { id: 152, airline: "IndiGo", code: "6E-211", origin: "Delhi (DEL)", destination: "Kolkata (CCU)", departure: "09:15 PM", arrival: "11:25 PM", timeCategory: "EVENING", duration: "2h 10m", price: 4650, seats: 10, terminal: "T2" },

  // 11. Bangalore (BLR) to Chennai (MAA) [3 Flights]
  { id: 153, airline: "IndiGo", code: "6E-419", origin: "Bangalore (BLR)", destination: "Chennai (MAA)", departure: "06:50 AM", arrival: "07:45 AM", timeCategory: "MORNING", duration: "0h 55m", price: 2400, seats: 20, terminal: "T1" },
  { id: 154, airline: "Akasa Air", code: "QP-177", origin: "Bangalore (BLR)", destination: "Chennai (MAA)", departure: "03:15 PM", arrival: "04:10 PM", timeCategory: "EVENING", duration: "0h 55m", price: 2150, seats: 18, terminal: "T1" },
  { id: 155, airline: "Air India", code: "AI-573", origin: "Bangalore (BLR)", destination: "Chennai (MAA)", departure: "07:40 PM", arrival: "08:35 PM", timeCategory: "EVENING", duration: "0h 55m", price: 2600, seats: 14, terminal: "T2" },

  // 12. Ahmedabad (AMD) & Jaipur (JAI) routes [4 Flights]
  { id: 156, airline: "IndiGo", code: "6E-188", origin: "Ahmedabad (AMD)", destination: "Mumbai (BOM)", departure: "07:15 AM", arrival: "08:30 AM", timeCategory: "MORNING", duration: "1h 15m", price: 2900, seats: 16, terminal: "T1" },
  { id: 157, airline: "SpiceJet", code: "SG-321", origin: "Ahmedabad (AMD)", destination: "Delhi (DEL)", departure: "12:45 PM", arrival: "02:20 PM", timeCategory: "EVENING", duration: "1h 35m", price: 3400, seats: 8, terminal: "T1" },
  { id: 158, airline: "IndiGo", code: "6E-241", origin: "Jaipur (JAI)", destination: "Mumbai (BOM)", departure: "08:45 AM", arrival: "10:40 AM", timeCategory: "MORNING", duration: "1h 55m", price: 3600, seats: 22, terminal: "T1" },
  { id: 159, airline: "Air India", code: "AI-491", origin: "Delhi (DEL)", destination: "Jaipur (JAI)", departure: "03:30 PM", arrival: "04:30 PM", timeCategory: "EVENING", duration: "1h 00m", price: 2600, seats: 13, terminal: "T3" },

  // 13. International Routes (Dubai, Singapore, London) [8 Flights]
  { id: 160, airline: "Emirates", code: "EK-511", origin: "Delhi (DEL)", destination: "Dubai (DXB)", departure: "10:30 AM", arrival: "01:00 PM", timeCategory: "MORNING", duration: "4h 00m", price: 16500, seats: 24, terminal: "T3" },
  { id: 161, airline: "Air India", code: "AI-995", origin: "Delhi (DEL)", destination: "Dubai (DXB)", departure: "02:45 PM", arrival: "05:15 PM", timeCategory: "EVENING", duration: "4h 00m", price: 13900, seats: 11, terminal: "T3" },
  { id: 162, airline: "IndiGo", code: "6E-1401", origin: "Mumbai (BOM)", destination: "Dubai (DXB)", departure: "07:30 PM", arrival: "09:40 PM", timeCategory: "EVENING", duration: "3h 40m", price: 12500, seats: 15, terminal: "T2" },
  { id: 163, airline: "Singapore Airlines", code: "SQ-403", origin: "Delhi (DEL)", destination: "Singapore (SIN)", departure: "09:50 AM", arrival: "06:05 PM", timeCategory: "MORNING", duration: "5h 45m", price: 21500, seats: 18, terminal: "T3" },
  { id: 164, airline: "IndiGo", code: "6E-1005", origin: "Bangalore (BLR)", destination: "Singapore (SIN)", departure: "11:10 PM", arrival: "06:10 AM", timeCategory: "EVENING", duration: "4h 30m", price: 15800, seats: 9, terminal: "T2" },
  { id: 165, airline: "Air India", code: "AI-111", origin: "Delhi (DEL)", destination: "London (LHR)", departure: "06:45 AM", arrival: "11:30 AM", timeCategory: "MORNING", duration: "9h 15m", price: 48500, seats: 16, terminal: "T3" },
  { id: 166, airline: "Vistara", code: "UK-015", origin: "Mumbai (BOM)", destination: "London (LHR)", departure: "01:30 PM", arrival: "06:45 PM", timeCategory: "EVENING", duration: "9h 45m", price: 52000, seats: 12, terminal: "T2" },
  { id: 167, airline: "Emirates", code: "EK-512", origin: "Dubai (DXB)", destination: "Delhi (DEL)", departure: "08:15 PM", arrival: "01:05 AM", timeCategory: "EVENING", duration: "3h 20m", price: 14500, seats: 14, terminal: "T3" }
];

// ================= STATE VARIABLES =================
let currentSearchResults = [];
let activeCategory = 'ALL';
let currentSortOrder = 'price-low';
let pendingBooking = null;
let ticketToCancel = null;

// ================= USER SESSION ENGINE (LOCALSTORAGE) =================
function getLoggedInUser() {
  try {
    const raw = localStorage.getItem("skywings_current_session");
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function renderAuthNavbar() {
  const container = document.getElementById("navbar-auth-container");
  if (!container) return;

  const user = getLoggedInUser();

  if (user && user.name) {
    container.innerHTML = `
      <div class="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-xl text-xs">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span class="font-bold text-white">${user.name.split(' ')[0]}</span>
        <button onclick="logoutUser()" class="text-slate-400 hover:text-rose-400 font-bold ml-1 cursor-pointer transition text-[11px]" title="Sign Out">✕</button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <a href="login.html" class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition shadow flex items-center gap-1.5 active:scale-95 cursor-pointer">
        <span>👤 Sign In</span>
      </a>
    `;
  }
}

function logoutUser() {
  localStorage.removeItem("skywings_current_session");
  renderAuthNavbar();
  showToast("Signed out successfully!", "👋");
}

// ================= TOAST NOTIFICATION ENGINE =================
function showToast(message, icon = "✨") {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toast-msg");
  const iconEl = document.getElementById("toast-icon");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  toast.classList.remove("-translate-y-24", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");

  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("-translate-y-24", "opacity-0");
  }, 3200);
}

// ================= STORAGE REPOSITORY =================
function getStoredBookings() {
  try {
    const raw = localStorage.getItem("skywings_tickets_repo");
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveBookings(bookings) {
  localStorage.setItem("skywings_tickets_repo", JSON.stringify(bookings));
}

// ================= NAVIGATION & SEARCH =================
function showInitialState() {
  document.getElementById("initial-prompt-card").classList.remove("hidden");
  document.getElementById("results-wrapper").classList.add("hidden");
  document.getElementById("loading-spinner-state").classList.add("hidden");
  document.getElementById("from-city").value = "";
  document.getElementById("to-city").value = "";
  currentSearchResults = [];
}

function swapCities() {
  const from = document.getElementById("from-city");
  const to = document.getElementById("to-city");
  if (from && to) {
    const temp = from.value;
    from.value = to.value;
    to.value = temp;
    showToast("Swapped origin and destination!", "⇄");
  }
}

function setQuickRoute(from, to) {
  const fromEl = document.getElementById("from-city");
  const toEl = document.getElementById("to-city");
  if (fromEl) fromEl.value = from;
  if (toEl) toEl.value = to;

  handleSearch();
}

function handleSearch(e) {
  if (e) e.preventDefault();

  const from = document.getElementById("from-city")?.value;
  const to = document.getElementById("to-city")?.value;
  const errorBox = document.getElementById("route-error");
  const initialCard = document.getElementById("initial-prompt-card");
  const resultsWrapper = document.getElementById("results-wrapper");
  const loadingSpinner = document.getElementById("loading-spinner-state");
  const titleEl = document.getElementById("search-route-title");
  const subtitleEl = document.getElementById("search-route-subtitle");
  const travelDate = document.getElementById("travel-date")?.value;

  if (from && to && from === to) {
    if (errorBox) errorBox.classList.remove("hidden");
    return;
  }
  if (errorBox) errorBox.classList.add("hidden");

  // Show loading state
  if (initialCard) initialCard.classList.add("hidden");
  if (resultsWrapper) resultsWrapper.classList.add("hidden");
  if (loadingSpinner) loadingSpinner.classList.remove("hidden");

  const searchBtnIcon = document.getElementById("search-btn-icon");
  const searchBtnText = document.getElementById("search-btn-text");
  if (searchBtnIcon) searchBtnIcon.textContent = "⏳";
  if (searchBtnText) searchBtnText.textContent = "Searching...";

  setTimeout(() => {
    if (loadingSpinner) loadingSpinner.classList.add("hidden");
    if (resultsWrapper) resultsWrapper.classList.remove("hidden");

    if (searchBtnIcon) searchBtnIcon.textContent = "🔍";
    if (searchBtnText) searchBtnText.textContent = "Find Flights";

    let matches = flightMasterList.filter(f => {
      let matchFrom = from ? f.origin === from : true;
      let matchTo = to ? f.destination === to : true;
      return matchFrom && matchTo;
    });

    if (matches.length === 0 && (from || to)) {
      matches = flightMasterList.filter(f => (from && f.origin === from) || (to && f.destination === to));
    }

    currentSearchResults = matches;

    if (titleEl) {
      titleEl.textContent = from && to ? `${from.split(' ')[0]} ➔ ${to.split(' ')[0]} Scheduled Flights` : "Available Flight Schedules";
    }
    if (subtitleEl) {
      subtitleEl.textContent = travelDate ? `Departure Date: ${travelDate} • Filter by timing or sort below` : "Select timing category or sort below";
    }

    selectCategory('ALL');
    showToast(`Found ${currentSearchResults.length} available flights!`, "🛫");

    resultsWrapper.scrollIntoView({ behavior: 'smooth' });
  }, 400);
}

// ================= CATEGORY & SORT HANDLING =================
function selectCategory(category) {
  activeCategory = category;

  const tabs = {
    'ALL': 'cat-all',
    'MORNING': 'cat-morning',
    'EVENING': 'cat-evening'
  };

  Object.entries(tabs).forEach(([catKey, elId]) => {
    const btn = document.getElementById(elId);
    if (btn) {
      if (catKey === category) {
        btn.className = "px-3.5 py-2 rounded-xl bg-blue-600 text-white transition shadow-sm font-bold";
      } else {
        btn.className = "px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition font-semibold";
      }
    }
  });

  filterAndRender();
}

function handleSort(sortType) {
  currentSortOrder = sortType;
  filterAndRender();
}

function filterAndRender() {
  let list = [...currentSearchResults];

  if (activeCategory !== 'ALL') {
    list = list.filter(f => f.timeCategory === activeCategory);
  }

  if (currentSortOrder === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSortOrder === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSortOrder === 'duration') {
    list.sort((a, b) => a.duration.localeCompare(b.duration));
  } else if (currentSortOrder === 'departure') {
    list.sort((a, b) => a.departure.localeCompare(b.departure));
  }

  renderFlightCards(list);
}

// ================= 2. RENDER FLIGHT CARDS =================
function renderFlightCards(flights) {
  const container = document.getElementById("flight-cards-list");
  const emptyBox = document.getElementById("empty-results-box");
  const countBadge = document.getElementById("flight-count-badge");

  if (!container) return;

  if (countBadge) {
    countBadge.textContent = `${flights.length} Flight${flights.length === 1 ? '' : 's'} Available`;
  }

  if (flights.length === 0) {
    container.innerHTML = "";
    if (emptyBox) emptyBox.classList.remove("hidden");
    return;
  }

  if (emptyBox) emptyBox.classList.add("hidden");

  container.innerHTML = flights.map(f => {
    const style = AIRLINE_STYLES[f.airline] || { bg: "bg-slate-50", text: "text-slate-700", border: "border-slate-200", badge: "bg-slate-100 text-slate-800" };

    return `
      <div class="bg-white rounded-3xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
        
        <!-- Airline Identity & Timing Badge -->
        <div class="sm:w-1/4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl ${style.bg} ${style.text} flex items-center justify-center font-bold text-sm border ${style.border} shadow-xs">
              ✈
            </div>
            <div>
              <h3 class="font-display font-extrabold text-slate-900 text-sm leading-tight">${f.airline}</h3>
              <span class="text-[11px] text-slate-400 font-mono font-semibold">${f.code} • ${f.terminal || 'T3'}</span>
            </div>
          </div>
          <div class="mt-2.5 flex items-center gap-1.5">
            <span class="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${f.timeCategory === 'MORNING' ? 'bg-amber-50 text-amber-800 border border-amber-200' : 'bg-indigo-50 text-indigo-800 border border-indigo-200'}">
              ${f.timeCategory === 'MORNING' ? '🌅 Morning' : '🌙 Evening'}
            </span>
            <span class="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200">
              Available
            </span>
          </div>
        </div>

        <!-- Schedule & Flight Timeline -->
        <div class="sm:w-2/4 flex items-center justify-between text-center gap-3">
          <div class="text-left">
            <span class="font-display font-black text-slate-900 text-lg sm:text-xl block tracking-tight">${f.departure}</span>
            <span class="text-xs font-extrabold text-blue-600">${f.origin.split(' ')[0]}</span>
          </div>

          <div class="flex-1 px-3">
            <span class="text-[11px] font-extrabold text-slate-500">${f.duration}</span>
            <div class="w-full h-[2px] bg-slate-200 relative my-1.5">
              <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-blue-600 transform">✈</span>
            </div>
            <span class="text-[10px] font-bold text-emerald-600">Non-Stop</span>
          </div>

          <div class="text-right">
            <span class="font-display font-black text-slate-900 text-lg sm:text-xl block tracking-tight">${f.arrival}</span>
            <span class="text-xs font-extrabold text-slate-700">${f.destination.split(' ')[0]}</span>
          </div>
        </div>

        <!-- Fare & Booking Action Button -->
        <div class="sm:w-1/4 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
          <div class="text-left sm:text-right">
            <span class="text-xl font-display font-black text-slate-900">₹${f.price.toLocaleString()}</span>
            <p class="text-[10px] text-slate-400 font-medium">Per passenger</p>
          </div>
          <button onclick="openBookingModal(${f.id})" class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-md shadow-blue-600/20 transition cursor-pointer">
            Book Flight
          </button>
        </div>

      </div>
    `;
  }).join("");
}

// ================= 3. MODAL & FARE CALCULATION =================
function updateLiveModalFare() {
  if (!pendingBooking) return 0;
  const total = pendingBooking.price;
  const fareText = document.getElementById("modal-total-fare-text");
  if (fareText) fareText.textContent = `₹${total.toLocaleString()}`;
  return total;
}

function openBookingModal(flightId) {
  const flight = flightMasterList.find(f => f.id === flightId);
  if (!flight) return;

  const travelDate = document.getElementById("travel-date")?.value || new Date().toISOString().split("T")[0];
  pendingBooking = { ...flight, travelDate };

  const modal = document.getElementById("booking-modal");
  const banner = document.getElementById("modal-flight-banner");

  if (banner) {
    banner.innerHTML = `
      <div class="flex items-center gap-2.5">
        <span class="text-xl">✈</span>
        <div>
          <p class="font-bold text-slate-900">${flight.airline} (${flight.code})</p>
          <p class="text-slate-500">${flight.origin} ➔ ${flight.destination} on ${travelDate}</p>
        </div>
      </div>
      <div class="text-right">
        <span class="font-display font-black text-blue-700 text-base">₹${flight.price.toLocaleString()}</span>
        <p class="text-[10px] text-slate-400">Total Fare</p>
      </div>
    `;
  }

  // Auto-fill logged-in user details from LocalStorage if available
  const loggedInUser = getLoggedInUser();
  const nameInput = document.getElementById("pass-name");
  const phoneInput = document.getElementById("pass-phone");

  if (loggedInUser) {
    if (nameInput) nameInput.value = loggedInUser.name || "";
    if (phoneInput) phoneInput.value = loggedInUser.phone || "";
  }

  updateLiveModalFare();

  if (modal) modal.classList.remove("hidden");
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (modal) modal.classList.add("hidden");
  pendingBooking = null;
}

function handleBookingSubmit(e) {
  e.preventDefault();
  if (!pendingBooking) return;

  const name = document.getElementById("pass-name")?.value;
  const age = document.getElementById("pass-age")?.value;
  const gender = document.getElementById("pass-gender")?.value;
  const phone = document.getElementById("pass-phone")?.value;
  const finalPrice = pendingBooking.price;

  const ticketNumber = "SKW" + Math.floor(100000 + Math.random() * 900000);

  const ticket = {
    ticketId: ticketNumber,
    flightCode: pendingBooking.code,
    airline: pendingBooking.airline,
    origin: pendingBooking.origin,
    destination: pendingBooking.destination,
    departure: pendingBooking.departure,
    arrival: pendingBooking.arrival,
    duration: pendingBooking.duration,
    terminal: pendingBooking.terminal || "T3",
    date: pendingBooking.travelDate,
    price: finalPrice,
    passengerName: name,
    passengerAge: age,
    passengerGender: gender,
    passengerPhone: phone,
    bookedAt: new Date().toLocaleDateString('en-GB')
  };

  const bookings = getStoredBookings();
  bookings.unshift(ticket);
  saveBookings(bookings);

  // Decrement flight availability
  const match = flightMasterList.find(f => f.id === pendingBooking.id);
  if (match && match.seats > 0) match.seats -= 1;

  closeBookingModal();
  document.getElementById("passenger-modal-form")?.reset();

  filterAndRender();
  renderMyBookings();

  showToast(`Ticket Confirmed! Ref: ${ticketNumber}`, "🎉");

  setTimeout(() => {
    document.getElementById("bookings-container")?.scrollIntoView({ behavior: 'smooth' });
  }, 350);
}

// ================= 4. MY BOOKINGS & CANCELLATION =================
function renderMyBookings() {
  const container = document.getElementById("my-bookings-list");
  const badge = document.getElementById("booking-badge");
  const navCount = document.getElementById("nav-count");

  const bookings = getStoredBookings();

  if (badge) badge.textContent = `${bookings.length} Booking${bookings.length === 1 ? '' : 's'}`;
  if (navCount) navCount.textContent = bookings.length;

  if (!container) return;

  if (bookings.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-400 text-xs bg-slate-50 rounded-2xl border border-dashed border-slate-200">
        <p class="font-bold text-slate-600 text-sm">No booked tickets found</p>
        <p class="text-[11px] text-slate-400 mt-1">Search and book your flights above to see your bookings here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = bookings.map(b => {
    return `
      <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
        
        <!-- Ticket Information -->
        <div class="space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="font-display font-extrabold text-slate-900 text-sm">${b.airline} (${b.flightCode})</span>
            <span class="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full text-[10px] font-black">${b.ticketId}</span>
          </div>
          <p class="text-slate-800 font-extrabold text-sm">${b.origin} ➔ ${b.destination}</p>
          <p class="text-slate-500 text-[11px]">Departure: <strong class="text-slate-700">${b.departure}</strong> | Travel Date: <strong class="text-slate-700">${b.date}</strong></p>
          <p class="text-slate-500 text-[11px]">Passenger: <strong class="text-slate-700">${b.passengerName}</strong> (${b.passengerAge} yrs, ${b.passengerGender || 'Passenger'}) • Contact: <strong class="text-slate-700">${b.passengerPhone || 'N/A'}</strong> • Terminal: <strong class="text-slate-700">${b.terminal || 'T3'}</strong></p>
        </div>

        <!-- Price & Action Button -->
        <div class="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2.5 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200">
          <span class="text-base font-display font-black text-slate-900">₹${b.price.toLocaleString()}</span>
          <div>
            <button onclick="openCancelModal('${b.ticketId}')" class="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 font-bold px-4 py-2 rounded-xl text-xs transition active:scale-95 cursor-pointer">
              Cancel Ticket
            </button>
          </div>
        </div>

      </div>
    `;
  }).join("");
}

function openCancelModal(ticketId) {
  ticketToCancel = ticketId;
  const modal = document.getElementById("cancel-modal");
  const msg = document.getElementById("cancel-modal-msg");
  if (msg) msg.textContent = `Are you sure you want to cancel ticket #${ticketId}? A full refund will be initiated back to your original payment method.`;
  if (modal) modal.classList.remove("hidden");
}

function closeCancelModal() {
  const modal = document.getElementById("cancel-modal");
  if (modal) modal.classList.add("hidden");
  ticketToCancel = null;
}

function executeCancellation() {
  if (!ticketToCancel) return;

  let bookings = getStoredBookings();
  bookings = bookings.filter(b => b.ticketId !== ticketToCancel);
  saveBookings(bookings);

  closeCancelModal();
  renderMyBookings();
  showToast("Ticket Cancelled. Refund initiated.", "ℹ️");
}

// ================= 5. EVENT INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
  const travelDateInput = document.getElementById("travel-date");
  if (travelDateInput) {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    travelDateInput.value = d.toISOString().split("T")[0];
    travelDateInput.min = new Date().toISOString().split("T")[0];
  }

  const searchForm = document.getElementById("flight-search-form");
  if (searchForm) searchForm.onsubmit = handleSearch;

  const passengerForm = document.getElementById("passenger-modal-form");
  if (passengerForm) passengerForm.onsubmit = handleBookingSubmit;

  const closeBtn = document.getElementById("close-booking-modal");
  if (closeBtn) closeBtn.onclick = closeBookingModal;

  const confirmCancelBtn = document.getElementById("confirm-cancel-action-btn");
  if (confirmCancelBtn) confirmCancelBtn.onclick = executeCancellation;

  renderAuthNavbar();
  renderMyBookings();
});
