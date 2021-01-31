import env from '../../data/Env'
import Interest from '../../data/Interest'

export async function gInterest(type: string, principal: number, interestCost: number, period: number) {
  try {
    let response = await env.instance.get<Interest>(
      'https://api.apart-back.gq:9999/calculator?type=' +
        type +
        '&principal=' +
        principal +
        '0000' +
        '&interest=' +
        interestCost +
        '&period=' +
        period,
    )
    return response.data
  } catch (error) {
    console.log(error)
    return {
      total_loan_interest: 0,
      total_repayment: 0,
      loanDetail: [
        {
          idx: 0,
          principal_payment: 0,
          loan_interest: 0,
          monthly_payment: 0,
        },
      ],
    }
  }
}
