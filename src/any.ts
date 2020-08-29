import axios from 'axios';

export {};

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then(function(response) {
  // オブジェクトの型を新たに自分で定義できる
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  // let data: any;
  // let data: object[];
  let data: Article[];
  data = response.data
  // data = [
  //   {
  //     id: 1,
  //     // title: 'title',
  //     description: 'description'
  //   }
  // ]
  console.log(data);
});
