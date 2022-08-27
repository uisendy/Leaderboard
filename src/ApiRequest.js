class APIrequest {
  constructor(
    API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/',
    gameID = 'hhhyAX6PDyn0duJMBk6q',
  ) {
    this.API_URL = API_URL;
    this.gameID = gameID;
  }

  static requestAPI = new APIrequest();

  static request = async (url = '', options = null) => {
    const response = await fetch(url, options);
    const scoreitem = await response.json();
    return scoreitem;
  };

  static postScore = async (data, endPoint) => {
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const result = await this.request(
      `${this.requestAPI.API_URL}${endPoint}`,
      postOptions,
    );
    return result;
  };

  static getScores = async () => {
    const getOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const scores = await this.request(
      `${this.requestAPI.API_URL}games/${this.requestAPI.gameID}/scores`,
      getOptions,
    );
    const sortedScores = scores.result.sort(
      (prev, curr) => curr.score - prev.score,
    );
    return sortedScores;
  };
}

export default APIrequest;
