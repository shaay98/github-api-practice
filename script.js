"use strict";

data();

async function data() {
  const from = await fetch("https://jsonplaceholder.typicode.com/posts");
  const api = await from.json();

  console.log(api);
}

async function sendPost() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Hello Github",
      body: "This is a sample post",
      userID: 1,
    }),
  };
  const from = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    options
  );
  const api = await from.json();
  console.log(api);
}
sendPost();

////async function userInfo(Username, Public repository count, Profile URL) {

//}
