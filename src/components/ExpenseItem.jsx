const currency = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
})

function ExpenseItem({ expense, onDeleteExpense }) {
  const categorySymbol = {
    Food: '⌁',
    Travel: '↗',
    Bills: '▤',
    Other: '◦',
  }[expense.category]

  return (
    <li className="expense-row">
      <span className={`category-icon category-${expense.category.toLowerCase()}`} aria-hidden="true">
        {categorySymbol}
      </span>
      <span className="expense-details">
        <span className="expense-title">{expense.title}</span>
        <span className="expense-meta">{expense.category} · {expense.date}</span>
      </span>
      <span className="expense-amount">−{currency.format(expense.amount)}</span>
      <button
        className="delete-button"
        type="button"
        data-cy={`delete-${expense.id}`}
        aria-label={`Delete ${expense.title}`}
        onClick={() => onDeleteExpense(expense.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default ExpenseItem
