# Soar Task (Financial Dashboard)

This application provide you a financial dashboard application with multiple views for the user. The application have responsive design and functionality. Please see a live demo [here](https://financial-dashboard-ten-roan.vercel.app/)


## **Table of Contents**
- [Soar Task (Financial Dashboard)](#soar-task-financial-dashboard)
  - [**Table of Contents**](#table-of-contents)
  - [**Tech Stack**](#tech-stack)
  - [**Features**](#features)
    - [Functional:](#functional)
    - [Non-Functional:](#non-functional)
  - [**Assumptions**](#assumptions)
  - [**Project Setup**](#project-setup)
    - [Prerequisites:](#prerequisites)
    - [Installation:](#installation)
  - [**Running the Application Locally**](#running-the-application-locally)
    - [Start the Development Server:](#start-the-development-server)
  - [**Folder Structure**](#folder-structure)
  - [**Development Practices**](#development-practices)
  - [**TODO**](#todo)

---

## **Tech Stack**
- **Framework**: React.js v19
- **State Management**: Redux Toolkit & Context API
- **Styling**: TailwindCSS
- **Charting Library**: Chart.js
- **Routing**: React Router
- **Form Management & Validation**: Formik & Yup
- **Mock API**: Axios with Mock Adapter
- **Version Control**: Git

---

## **Features**
### Functional:
1. **Responsive Design**: Fully adapts to mobile, tablet, and desktop devices.
2. **Data Visualization**: Dynamic and interactive charts using Chart.js.
3. **Interactive Elements**:
   - Hover effects on buttons and actionable items.
   - Scrollable card and transaction lists for large data sets.
4. **Form Validations**: Ensures user inputs (email, password, etc.) are valid on the settings page.
5. **User Experience Enhancements**:
   - Smooth transitions between sections.
   - Consistent use of icons for improved visual hierarchy.

### Non-Functional:
1. **Performance Optimization**:
   - Lazy loading for components.
   - Efficient state management.
2. **Accessibility**:
   - ARIA labels.
   - Keyboard navigation support.
3. **Browser Compatibility**: Tested on Chrome, Firefox, Safari, and Edge.

---

## **Assumptions**
- **Mock Data**: All API endpoints are mocked for user information, card details, transaction history, and chart data.
- **Data**: Predefined sample data is used to populate the dashboard.
- **Responsiveness**: Breakpoints are tailored for mobile (≤640px), tablet (641px–1024px), and desktop (≥1025px).
- **Quick Transfer User Scroll Arrow Button**: In the design, the "Quick Transfer Users" section only has one arrow button (on the right side) and no space left on the left. Based on this observation, I made the following decision:
     - **Option 1**: Add arrow icons on both sides. However, due to the limited width of the section, this approach would make the layout feel cluttered.  
     - **Option 2**: Display all the contacts on the arrow button click, allowing the user to scroll through the list. I chose this option for better usability and cleaner design.
- **See All My Cards Button**:  
   - Clicking on the "See All" cards button navigates the user to the `credit-cards` page where all cards are displayed.  
   - As there was no specific UI provided for the "See All" functionality, I created a basic layout to display the cards.    

---

## **Project Setup**
### Prerequisites:
1. Node.js (v18 or higher)
2. `pnpm` package manager

### Installation:
1. Clone the repository:

   ```bash
   git clone https://github.com/aditya-v22/financial-dashboard
   cd financial-dashboard
   ```
2. Install dependencies:

   ```bash
   pnpm install
   ```

---

## **Running the Application Locally**
### Start the Development Server:

1. Start React application:

   ```bash
   pnpm dev
   ```
2. Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## **Folder Structure**
```
public/             # Public assets like, favicon
src/
├── api/            # Axios API instance
├── components/     # Reusable components
├── config/         # Config files for graphs and other services
├── constants/      # Sharable constants
├── hooks/          # Sharable hooks
├── mockData/       # Mock data for API
├── pages/          # All pages
├── store/          # Redux store and slices
├── types/          # Sharable types
├── utils/          # Helper functions
└── App.tsx         # Root component
```

---

## **Development Practices**
- **State Management**: Redux slices are organized per feature.
- **Styling**: Follows BEM methodology with Tailwind utility classes.
- **Code Quality**: Prettier and ESLint are configured for formatting and linting.
- **Branching Strategy**: 
   - `main`: Production-ready code.
   - `feature/*`: Feature-specific branches. `feature/responsive-ui`, `feature/api-integration`, `feature/dashboard`, `feature/ui-layout`, `feature/settings`
- **Deployment**: When the code will push on `main` branch, it will deployed to vercel automatically.

---

## **TODO**
1. **Toast Notifications**:  
   - Implement a toast UI to display confirmation or error messages when updating user details.  
2. **Expenses Statistics (Pie Chart)**:  
   - Handle edge cases where data percentages are too small (e.g., 1-2%), which might cause text inside slices to break or overlap.  
