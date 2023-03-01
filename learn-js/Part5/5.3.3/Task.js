"use strict"

function truncate (str, len) {
  let result;
  if (str.length > len) {
    
    result = str.slice(0,19) +'...'
  }
  else {
    result = str
  }
  return result
}

alert (truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) //= "Вот, что мне хотело…"

alert (truncate("Всем привет!", 20)) //= "Всем привет!"