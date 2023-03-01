"use strict"

alert( alert(1) || 2 || alert(3) );

// запустити alert(1) и вернет 2 (запустит alert(2))