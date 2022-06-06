import fetch from 'node-fetch';

const res = await fetch('https://pa-kobayashi-test.herokuapp.com/knockknock');

console.log(res)