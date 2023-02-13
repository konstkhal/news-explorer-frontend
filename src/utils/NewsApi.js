class NewsApi {
  constructor(baseUrl, apiKey, fromOffset = 90) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
    this._fromOffset = fromOffset;
    const date = new Date();
    this._todaysDate = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;
    this._fromDate = `${date.getFullYear()}-${date.getMonth() + 1}-${
      date.getDate() - this._fromOffset
    }`;
    console.log(this._fromDate);
  }

  _handleResponse = (res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

  getNewsByQuery = (param) => {
    return fetch(
      `${this._baseUrl}?q=${param}&from=${this._fromDate}&to=${this._todaysDate}&sortedBy=publishedAt&pageSize=100&apiKey=${this._apiKey}`
    ).then(this._handleResponse);
  };
}

export const newsApi = new NewsApi(
  // everything
  //top-headlines?country=us
  "https://nomoreparties.co/news/v2/everything",
  "a3048e784a1a48f188b3c086840f45fb"
);
