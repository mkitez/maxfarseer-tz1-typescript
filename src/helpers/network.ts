const API_ROOT = 'https://5ab9ca1ed9ac5c001434ecb4.mockapi.io'

interface IResponse extends Response {
  ok: boolean
}

export const httpGet = async (endPoint: string) => {
  try {
    const response: IResponse = await fetch(`${API_ROOT}/${endPoint}`)
    if (response.ok) {
      const json = await response.json()
      return json
    } else {
      throw new Error(response.status.toString())
    }
  } catch (err) {
    console.log('httpGet error ', err)
  }
}

// without async/await
export const httpGetWithoutAsyncAwait = (endPoint: string) => {
  return fetch(`${API_ROOT}/${endPoint}`)
    .then((response: IResponse) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status.toString())
      }
    })
    .then(json => json)
    .catch(err => console.log('httpGetWithoutAsyncAwait error ', err))
}
