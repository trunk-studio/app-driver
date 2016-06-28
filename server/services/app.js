import dataNews from '../dataNews.json';
import dataContent from '../dataContent.json';
const log = console.log;

export default class App {

  constructor() {

  }

  getContentById() {
    return dataContent;
  }

  getNewsById() {
    return dataNews;
  }

}
