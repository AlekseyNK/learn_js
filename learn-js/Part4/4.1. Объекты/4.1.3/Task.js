"use strict"

const user = {
    name: "John"
  };
  
  // это будет работать?
  user.name = "Pete";
  // это будет работать! меняется наполнение объекта, а не объект

  console.log(user.name)