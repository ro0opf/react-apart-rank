import env from '../../data/Env'

export async function getRealEstateDataDownload(lng: number, lat: number, generationNumber: number) {
  try {
    let response = await env.lifeInValley.get<any>(
      'excel/download?startLat=' +
        (lat - 0.012) +
        '&endLat=' +
        (lat + 0.012) +
        '&startLng=' +
        (lng - 0.028) +
        '&endLng=' +
        (lng + 0.028) +
        '&generation_number=' +
        generationNumber,
    )
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')

    link.href = url
    link.setAttribute('download', 'file.xlsx')
    document.body.appendChild(link)
    link.click()
    return response.status
  } catch (error) {
    console.log(error)
    return 'error'
  }
}
