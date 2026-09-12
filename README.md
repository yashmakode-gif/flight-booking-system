# ⚠️ DEMO & PORTFOLIO DISCLAIMER

> **IMPORTANT NOTICE:**
> - **Educational Project Only**: This repository is a fictional student/portfolio demo built for learning frontend web development.
> - **Zero Server Communication**: The application makes **zero network requests** to any backend or external server for user data. It does NOT collect, transmit, or harvest any passwords, email addresses, payment data, or personal details.
> - **100% Client-Side Simulation**: All mock user sessions and booking states are stored strictly in the user's local browser storage (`window.localStorage`).
> - **Fictional Branding**: All airline names (`DemoJet`, `CloudHopper`, `AeroMock`, `PixelAir`, `SwiftDemo`), flight numbers, and prices are entirely simulated mock data with no affiliation to any real-world airline or commercial service.
> - **No Real Transactions**: There are no real tickets, flights, or payment gateways.

---

# AeroDemo - Flight Search & Reservation Sandbox

A clean, responsive, and interactive educational Flight Search & Booking web application developed using pure HTML5, CSS (TailwindCSS CDN), and Vanilla JavaScript.

## 🚀 Features
- **Simulated Flight Search**: Search mock flights between simulated domestic and international routes (Delhi, Mumbai, Bangalore, Goa, Hyderabad, etc.).
- **Timing Categories**: Filter flights by Morning (6 AM - 12 PM) and Evening & Night schedules.
- **Dynamic Sorting**: Sort results by Lowest Price, Highest Price, Fastest Duration, and Earliest Departure.
- **Client-Side Auth Sandbox**: Mock user authentication and profile simulation stored purely in browser `localStorage`.
- **Booking Management**: Confirm simulated reservations with auto-generated reference codes and manage client-side cancellations.
- **Fully Responsive**: Mobile-friendly layout styled with TailwindCSS.

## 📂 Project Structure
```
├── index.html       # Main Flight Search & Booking Sandbox Portal
├── login.html       # Client-side Demo Profile / Auth Sandbox
├── functions.js     # Core JavaScript logic & Mock Flight Database (Client-Side)
├── .gitignore       # Standard git ignore rules
└── README.md        # Project documentation & Safety Disclaimer
```

## 🔒 Security & Privacy Audit
- **Network Calls**:
  - `https://cdn.tailwindcss.com` (Official CDN script for styling)
  - `https://fonts.googleapis.com` & `https://fonts.gstatic.com` (Google Fonts typography)
- **External Data Transfer**: None (`0` fetch/axios/XHR calls, `0` server form actions).
- **Storage**: Client-side `window.localStorage` only.

## 🛠️ Getting Started
Simply open `index.html` or `login.html` directly in any modern web browser. No build tools or backend servers are needed!
