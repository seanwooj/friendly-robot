import fetch from 'isomorphic-fetch';

class Client {
  fetchPages() {
    return fetch('/api/pages', {
      method: 'get',
      headers: {
        accept: 'application/json',
      }
    })
    .then(this.checkStatus)
    .then(this.parseJson);
  }

  fetchPage(vanityUrl) {
    return fetch('/api/pages?vanityUrl=' + vanityUrl, {
      method: 'get',
      headers: {
        accept: 'application/json',
      }
    })
    .then(this.checkStatus)
    .then(this.parseJson);
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJson(response) {
    return response.json();
  }
}

export const client = new Client();
