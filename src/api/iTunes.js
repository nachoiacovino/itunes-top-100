import axios from 'axios';

const iTunes = axios.create({
  baseURL: 'https://itunes.apple.com/us/rss/',
});

export default iTunes;
