import fetch from 'node-fetch';

const res = await fetch('https://pa-kobayashi-test.herokuapp.com/knockknock');
const data = await res.json();

console.log(data)