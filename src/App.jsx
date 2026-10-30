import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm.jsx'
import ExpenseList from './components/ExpenseList.jsx'
import './App.css'

const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
})

function App() {
  const [expenses, setExpenses] = useState([])

  function handleAddExpense(expense) {
    setExpenses((currentExpenses) => [
      { ...expense, id: crypto.randomUUID() },
      ...currentExpenses,
    ])
  }

  function handleDeleteExpense(expenseId) {
    setExpenses((currentExpenses) =>
      currentExpenses.filter((expense) => expense.id !== expenseId),
    )
  }

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="brand-mark" aria-hidden="true">₹</div>
        <div>
          <p className="eyebrow">PERSONAL FINANCE</p>
          <h1>Expense tracker</h1>
        </div>
      </header>

      <section className="summary-card" aria-label="Spending summary">
        <div>
          <p className="eyebrow">TOTAL SPENDING</p>
          <p className="total-amount">{currency.format(total)}</p>
        </div>
        <div className="expense-count">
          <span className="count-number">{expenses.length}</span>
          <span>{expenses.length === 1 ? 'expense' : 'expenses'}</span>
        </div>
      </section>

      <div className="content-grid">
        <section className="panel form-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MAKE IT COUNT</p>
              <h2>Add an expense</h2>
            </div>
            <span className="heading-icon" aria-hidden="true">＋</span>
          </div>
          <ExpenseForm onAddExpense={handleAddExpense} />
        </section>

        <section className="panel list-panel" aria-labelledby="expenses-heading">
          <div className="section-heading list-heading">
            <div>
              <p className="eyebrow">YOUR ACTIVITY</p>
              <h2 id="expenses-heading">Recent expenses</h2>
            </div>
            {expenses.length > 0 && <span className="list-badge">{expenses.length} total</span>}
          </div>

          {expenses.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">↗</span>
              <p className="empty-title">Nothing to see yet</p>
              <p>Your expenses will show up here once you add one.</p>
            </div>
          ) : (
            <ExpenseList
              expenses={expenses}
              onDeleteExpense={handleDeleteExpense}
            />
          )}
        </section>
      </div>
      <footer className="app-footer">A clearer picture of where your money goes.</footer>
    </main>
  )
}

export default App
