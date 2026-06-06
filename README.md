<div align="center">
  
# 🏢 VendorBridge

[✨ Features](#-features)  • [🎭 Demo Credentials](#-demo-credentials) • [📸 Screens](#-application-screens) •

</div>
## ✨ Features

### 🔐 Authentication & Role Management
- **Multi-role Login System** — Procurement Officer, Manager/Approver, Vendor, and Admin
- **Signup Flow** — New vendors can self-register with full company profile (GST, phone, address, category)
- **Forgot Password** — Security token dispatch simulation
- **Role Switcher** — Evaluator-friendly quick-switch between roles without re-logging in

### 📊 Smart Dashboard
- Real-time KPI cards: Active RFQs, Total Vendors, Pending Approvals, Monthly Spend
- Role-aware content display (each role sees relevant data)
- Recent activity feed and procurement status summaries

### 🏭 Vendor Management
- Vendor registration with full corporate profiles
- Status workflow: `Pending Verification → Active → Suspended`
- Vendor performance tracking: ratings, orders completed, success rate, on-time delivery

### 📋 RFQ (Request For Quotation) Creation
- Dynamic item/line-item builder with quantities and specifications
- Vendor assignment from the verified vendor pool
- Deadline management and RFQ broadcasting

### 💼 Quotation Submission (Vendor Portal)
- Vendors see and respond to their assigned RFQs
- Itemized quote submission with unit price and remarks
- Edit/update submitted quotes before deadline

### ✅ Approval Workflow
- Manager-level sign-off on shortlisted bids
- Approve with remarks or Reject and send back to comparison
- Full audit trail of approval decisions


### 📈 Reports & Analytics
- Spend analysis charts and vendor performance dashboards
- Category-wise procurement breakdowns
- Historical procurement trend data

---
## 🎭 Demo Credentials

The application ships with pre-seeded mock data for easy evaluation. Use the following credentials on the login screen:

| Role | Email | Password |
|------|-------|----------|
| 🧑‍💼 **Procurement Officer** | `officer@vendorbridge.com` | `officer123` |
| 👔 **Manager / Approver** | `manager@vendorbridge.com` | `manager123` |
| 🏭 **Vendor** | `vendor1@vendorbridge.com` | `vendor123` |

> 💡 **Tip:** Use the **Role Switcher** dropdown in the top navigation bar to instantly switch between roles and explore the full procurement lifecycle without logging out.## 📸 Application Screens

| Screen | Description |
|--------|-------------|
| **Login / Signup** | Secure role-based authentication with sandbox credentials |
| **Dashboard** | Role-aware KPI cards, RFQ status overview, recent activity |
| **Vendor Management** | Vendor directory with verification workflow |
| **RFQ Creation** | Dynamic multi-item RFQ builder with vendor assignment |
| **Quotation Submission** | Vendor portal for bid submission & updates |
| **Approval Workflow** | Manager sign-off interface with remarks & rejection |
| **Reports & Analytics** | Procurement analytics and vendor performance metrics |
---

## 🏗️ Architecture Highlights

- **Single-Page Application (SPA)** with client-side routing via state
- **In-memory Mock Database** (`mockData.js`) synced to `localStorage` for session persistence
- **Role-based Access Control (RBAC)** — UI conditionally renders based on `currentUser.role`
- **Prop-drilling Architecture** — centralized state in `App.jsx`, passed down to feature components
- **Event-driven State Updates** — all CRUD operations propagate through handler functions
- **No Backend Required** — fully self-contained, runs entirely in the browser

---

## 📋 Future Enhancements

- [ ] 🔗 REST API integration with Node.js / Express backend
- [ ] 🗄️ PostgreSQL / MongoDB database for persistent storage
- [ ] 📧 Email notification system for approval workflows
- [ ] 📱 Mobile-responsive design improvements
- [ ] 🧪 Unit & integration test suite (Jest + React Testing Library)
- [ ] 🔒 JWT-based authentication with refresh tokens
- [ ] 📊 Advanced analytics with Chart.js or Recharts

---
