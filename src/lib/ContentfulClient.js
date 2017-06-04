const contentful = require('contentful');

const SPACE_ID = '4bfme0qry1sf'
const ACCESS_TOKEN = '87b291853592493032ed043722c08071bab837cec4ca251c65227a5e66ab86e7'

class ContentfulClient {
  constructor() {
    this.client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN
    });
  }

  // conceivably not that important.
  fetchContentTypes = () => {
    return this.client.getContentTypes()
    .then((response) => response.items)
    .catch((error) => {
      console.error(error)
    })
  }

  sync = () => {
    this.client.sync({initial: true})
    .then((response) => {
      console.log(response.entries)
      console.log(response.assets)
    });
  }

  fetchPages = () => {
    return this.client.getEntries({
      content_type: 'page'
    })
    .then((response) => response.items)
    .catch((error) => {
      console.log(error);
    })
  }

}

export default ContentfulClient;
