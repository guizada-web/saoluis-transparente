# TODO: Implement Role-Based Authentication and UI

## Backend Changes
- [x] Add requireAdmin middleware to obra delete and put routes in obraRoutes.js (already done)
- [x] Add users table to create-tables.sql
- [x] Insert admin user into create-tables.sql (username: cleanwork, password: cleanwork7, role: admin)
- [x] Add requireAdmin middleware to demanda delete route in demandaRoutes.js

## Frontend Changes
- [x] Create AuthContext in frontend/src/contexts/AuthContext.jsx for managing auth state
- [x] Update frontend/src/pages/Login.jsx to use backend API instead of localStorage (already done)
- [x] Update frontend/src/pages/Register.jsx to use backend API instead of localStorage
- [x] Update frontend/src/services/api.js to include JWT token in headers
- [x] Update frontend/src/components/MapView.jsx to conditionally show admin features (delete/update buttons) based on user role
- [x] Update frontend/src/pages/Home.jsx to conditionally show delete button for demandas based on user role

## Testing
- [ ] Run backend/create-tables.sql to create tables and insert admin
- [ ] Test login as admin: should see all functions
- [ ] Test login as user: should see everything but no delete/manage functions
- [ ] Test registration of new users
