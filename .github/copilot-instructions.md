# Copilot Instructions for Event-Booking-

## Project Overview
This is a Node.js/Express web application for booking events. It uses EJS for templating and organizes code into models, routes, and views. Static assets are served from the `public` directory.

## Architecture & Data Flow
- **Models (`models/`)**: Mongoose schemas for `Event`, `Booking`, and `User`. These define the core data structures and relationships.
- **Routes (`routes/`)**: Express route handlers for authentication (`authRoutes.js`), event management (`eventRoutes.js`), and booking (`bookingRoutes.js`). Each route file maps HTTP endpoints to controller logic and interacts with models.
- **Views (`views/`)**: EJS templates for rendering pages. Naming matches route purposes (e.g., `events.ejs`, `bookings.ejs`).
- **Public (`public/`)**: Static files (CSS, JS, images). Frontend scripts are in `public/javaScript/`, styles in `public/stylesheet/style.css`.

## Developer Workflows
- **Start Server**: Run `node app.js` or use `npm start` if defined in `package.json`.
- **Debugging**: Use console logging in route handlers and models. No custom debug tooling detected.
- **Database**: Assumes MongoDB via Mongoose. Connection logic is likely in `app.js` (verify before changing DB config).

## Project-Specific Patterns
- **Route Structure**: Route files group related endpoints. Example: `eventRoutes.js` handles all `/events` logic.
- **Model Usage**: Models are imported in route files and used for DB operations. Follow existing import and usage patterns.
- **View Rendering**: Route handlers render EJS views and pass data as template variables. Example: `res.render('events', { events })`.
- **Static Assets**: Reference CSS/JS/images using `/public/...` paths in EJS templates.

## Integration Points
- **Authentication**: Managed in `authRoutes.js` and `user.js` model. Check these files for login/register logic.
- **Event/Booking Logic**: `Event.js` and `Booking.js` models are used in their respective route files.

## Conventions
- **File Naming**: Lowercase, camelCase for JS files. EJS views named after their purpose.
- **Directory Structure**: Keep models, routes, views, and public assets in their respective folders.
- **No TypeScript or advanced build tools detected.**

## Examples
- To add a new event type, update `Event.js` (model), `eventRoutes.js` (routes), and `newEvent.ejs` (view).
- To add a booking feature, update `Booking.js`, `bookingRoutes.js`, and `bookings.ejs`.

## Key Files
- `app.js`: Main entry point, sets up Express, middleware, and DB connection.
- `models/`: Data schemas.
- `routes/`: API and page logic.
- `views/`: EJS templates.
- `public/`: Static assets.

---
**If any conventions or workflows are unclear, please ask for clarification or provide examples from the codebase.**
