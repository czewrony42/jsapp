const axios = require("axios")

exports.getFortuneRandomly = async () => {
  try {
    const response = await axios.get('https://api.kanye.rest/');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
