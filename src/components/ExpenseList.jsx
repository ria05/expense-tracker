import ExpenseItem from './ExpenseItem.jsx'

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <ul className="expense-list" aria-live="polite">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDeleteExpense={onDeleteExpense}
        />
      ))}
    </ul>
  )
}

export default ExpenseList
