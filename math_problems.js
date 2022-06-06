import fetch from 'node-fetch';
import {jwt} from './data.js'; 

const res = await fetch('https://pa-kobayashi-test.herokuapp.com/getProblems', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'token': jwt
  }
});
const data = await res.json();

let postArray = []; 

data['data'].forEach(group => {
  postArray.push(eval(group.operand1 + group.operator + group.operand2))
});

const resPost = await fetch('https://pa-kobayashi-test.herokuapp.com/submitAnswers', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'token': jwt
  },
  body: JSON.stringify({ solution: postArray })
});

const dataPost = await resPost.json(); 

console.log(dataPost);
