import axios from 'axios';

const KEY = 'AIzaSyCHHLrz2snClB8jhtkZny390D4CSRrT7N0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
