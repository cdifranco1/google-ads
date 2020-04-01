
export const convertToNum = (pString) => {
  return (parseFloat(pString)/100)
}

export const convertToPercentage = (num) => {
  const percentage = (num * 100).toFixed(2)
  return percentage.toLocaleString() + '%'
}


export const campaignPreviouslyEdited = (arr, campaign) => {
  let exists = false;
  arr.forEach(el => {
    if(el.id === campaign.id)
    exists = true
  })
  return exists
}