# AGENTS.md - Expense Tracker Guidelines

## 1. Technical Stack
- **Runtime:** Node.js 20[cite: 1]
- **Build Tool & Bundler:** Vite[cite: 1]
- **Frontend Library:** React[cite: 1]
- **Testing Frameworks:** Vitest, React Testing Library, and Cypress[cite: 2, 3]

## 2. Folder Layout & Essential Commands
### Folder Layout
- `src/` - React source code components and application logic
- `src/components/` - Individual UI components (ExpenseForm, ExpenseList, ExpenseItem, CategoryFilter)
- `cypress/` - End-to-end test specs and configuration

### Essential Commands
- **Install dependencies:** `npm install`
- **Run development server:** `npm run dev`[cite: 3]
- **Run unit tests:** `npm run test` (or `npx vitest run`)[cite: 3]
- **Run test coverage:** `npx vitest run --coverage`[cite: 3]
- **Open Cypress E2E tests:** `npm run cy:open` (or `npx cypress open`)[cite: 3]
- **Run Cypress E2E tests headlessly:** `npm run cy:run` (or `npx cypress run`)[cite: 3]

## 3. Conventions
- **Component Architecture:** Maintain strict adherence to one component per file[cite: 2].
- **State Management:** Keep application state centralized in `App.jsx` and pass down via props/callbacks[cite: 2].
- **Selectors:** Use stable `data-cy` attributes (e.g., `data-cy="add-expense"`) for all elements targeted by E2E tests[cite: 3].

## 4. Strict Rules
- **Dependencies:** No new packages or dependencies may be installed without asking first[cite: 2].
- **Branching Workflow:** Always work on a dedicated feature branch; never commit or push directly to `main`[cite: 1, 2].
- **Pull Requests:** Summarize all changes clearly for every pull request and ensure code passes review before merging[cite: 1, 2]. 