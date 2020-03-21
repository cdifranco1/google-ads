
export const convertToNum = (pString) => {
  return (parseFloat(pString)/100)
}

export const convertToPercentage = (num) => {
  const percentage = (num * 100).toFixed(2)
  return percentage.toLocaleString() + '%'
}