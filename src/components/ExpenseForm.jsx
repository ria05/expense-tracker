import { useState } from 'react'

const categories = ['Food', 'Travel', 'Bills', 'Other']

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const normalizedTitle = title.trim()
    const parsedAmount = Number(amount)

    if (!normalizedTitle) {
      setError('Enter a title for this expense.')
      return
    }

    if (amount.trim() === '' || !Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      setError('Enter an amount greater than zero.')
      return
    }

    onAddExpense({
      title: normalizedTitle,
      amount: parsedAmount,
      category,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
    })
    setTitle('')
    setAmount('')
    setCategory('Food')
    setError('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit} noValidate>
      <label className="field-label" htmlFor="expense-title">Expense title</label>
      <input
        id="expense-title"
        data-cy="title"
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
          if (error) setError('')
        }}
        placeholder="e.g. Lunch with friends"
        autoComplete="off"
        aria-invalid={Boolean(error && !title.trim())}
        aria-describedby={error ? 'expense-error' : undefined}
      />

      <div className="field-row">
        <div className="field-group">
          <label className="field-label" htmlFor="expense-amount">Amount</label>
          <div className="amount-input-wrap">
            <span aria-hidden="true">₹</span>
            <input
              id="expense-amount"
              data-cy="amount"
              type="number"
              min="0.01"
              step="any"
              inputMode="decimal"
              value={amount}
              onChange={(event) => {
                setAmount(event.target.value)
                if (error) setError('')
              }}
              placeholder="0.00"
              aria-invalid={Boolean(error && (amount.trim() === '' || !Number.isFinite(Number(amount)) || Number(amount) <= 0))}
              aria-describedby={error ? 'expense-error' : undefined}
            />
          </div>
        </div>

        <div className="field-group">
          <label className="field-label" htmlFor="expense-category">Category</label>
          <select
            id="expense-category"
            data-cy="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            {categories.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>
      </div>

      {error && <p className="form-error" id="expense-error" role="alert">{error}</p>}

      <button className="submit-button" data-cy="add-expense" type="submit">
        <span aria-hidden="true">＋</span> Add expense
      </button>
      <p className="form-note"><span aria-hidden="true">✦</span> Keep your spending in check, one entry at a time.</p>
    </form>
  )
}

export default ExpenseForm
