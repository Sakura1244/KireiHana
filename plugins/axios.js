export default function ({ $axios, redirect }, inject) {
  const youtube = $axios.create()
  youtube.setBaseURL('https://www.googleapis.com/youtube/v3/')

  youtube.onRequest((config) => {
  })
  youtube.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    redirect(`/${code}`)
  })

  const spreadsheet = $axios.create()
  spreadsheet.setBaseURL('https://spreadsheet-json.vercel.app/api')
  spreadsheet.onRequest((config) => {
  })
  spreadsheet.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    redirect(`/${code}`)
  })

  inject('youtube', youtube)
  inject('spreadsheet', spreadsheet)
}
