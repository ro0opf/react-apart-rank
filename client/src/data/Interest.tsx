interface Interest {
  total_loan_interest: number
  total_repayment: number
  loanDetail: {
    idx: number
    principal_payment: number
    loan_interest: number
    monthly_payment: number
  }[]
}

export default Interest
