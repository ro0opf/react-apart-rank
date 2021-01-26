function priceToKor(price: any): string {
  let sPrice : string = ''
  let result = ''
  let count = 0

  if (typeof price === 'string') {
    sPrice = price
  } else if (typeof price === 'number') {
    sPrice = price.toString()
  }
  
  for (let i = sPrice.length - 1; i >= 0; i--) {
    result = sPrice.charAt(i) + result
    count++

    if (count != sPrice.length && count % 3 == 0) {
      result = ',' + result
    }
  }

  return result
}

export default { priceToKor }
