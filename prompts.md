# Codex Prompt Templates

## 1. New Feature
- **Context:** We are building a React expense tracker using Vite. The app currently [describe current state].
- **Goal:** Implement the [Feature Name] feature.
- **Constraints:** Follow existing code style, use functional components, keep state management clean, and do not install any new third-party packages without explicit permission.
- **Acceptance Criteria:** [List explicit requirements that can be tested].
- **Examples:** Provide sample input/output or expected UI layout.

## 2. Bug Fix
- **Context:** The application is experiencing a bug in [Component/Feature Name].
- **Goal:** Fix the issue where [describe unexpected behavior].
- **Constraints:** Do not modify unrelated components or logic. Ensure existing tests continue to pass.
- **Acceptance Criteria:** The bug no longer occurs under the specified reproduction steps, and a regression test is included.
- **Examples:** 
  - Expected: [behavior]
  - Actual: [behavior]

## 3. Refactor
- **Context:** The code in [File/Component Name] has grown complex or repetitive.
- **Goal:** Refactor the code to improve readability and maintainability without altering user-facing behavior.
- **Constraints:** Maintain identical inputs/outputs and component props. All existing unit and E2E tests must pass successfully.
- **Acceptance Criteria:** Cleaner code structure, reduced duplication, and zero broken tests.

## 4. Generate Tests
- **Context:** We need comprehensive test coverage for [Component/Feature Name].
- **Goal:** Write unit or component tests using Vitest and React Testing Library.
- **Constraints:** Cover standard edge cases, invalid inputs, and boundary conditions. Do not introduce flaky tests.
- **Acceptance Criteria:** Tests execute successfully and fail appropriately if the underlying logic is broken.

## 5. Review Diff
- **Context:** A set of changes has been made for [Task/PR Name].
- **Goal:** Review the current git diff for potential bugs, security flaws, performance bottlenecks, or style inconsistencies.
- **Constraints:** Focus heavily on edge cases, unhandled errors, and requirements alignment.
- **Acceptance Criteria:** Provide a concise summary of findings, potential risks, and recommended fixes.

## 6. Commit Message
- **Context:** We have completed changes for [Task/PR Name].
- **Goal:** Generate a conventional commit message summarizing the updates.
- **Constraints:** Follow the format `<type>(<scope>): <short description>`, keeping the summary under 50 characters.
- **Acceptance Criteria:** Clear, descriptive commit message explaining the "why" and "what".


## Feature: Add Expense Form

- **Context:** We are building a React-based expense tracker application. Users need a form to input individual expense items so they can track their spending habits.
- **Goal:** Create an `ExpenseForm` component that allows users to submit a new expense with a title, a numerical amount, and a category (Food, Travel, Bills, Other).
- **Constraints:** 
  - Must validate inputs before submission.
  - Reject empty titles, non-numeric amounts, or amounts less than/equal to zero.
  - State must be lifted or managed cleanly (typically passed up via an `onAddExpense` handler prop to the parent `App` component).
  - Use stable `data-cy` attributes for inputs and buttons to support E2E testing (e.g., `data-cy="title"`, `data-cy="amount"`, `data-cy="category"`, `data-cy="add-expense"`).
- **Acceptance Criteria:**
  1. Entering valid data (e.g., Title: "Lunch", Amount: "250", Category: "Food") and clicking submit successfully adds the expense to the list and resets the form inputs.
  2. Leaving the title empty prevents submission and shows a validation error or ignores the click.
  3. Entering a non-numeric value or a negative/zero amount prevents submission.
- **Examples:**
  - *Valid Input:* Title: "Flight", Amount: "4500", Category: "Travel" -> Adds successfully.
  - *Invalid Input:* Title: "", Amount: "100", Category: "Bills" -> Blocked due to empty title.
  - *Invalid Input:* Title: "Coffee", Amount: "-50", Category: "Food" -> Blocked due to negative amount.