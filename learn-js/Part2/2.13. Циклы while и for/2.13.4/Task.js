"use strict"
// Два варианта
for (let i = 2; i<=10; i = i + 2) alert(i);

for (let i = 2; i<=10; ++i) {
     if (!(i%2)) {
        alert(i);
     }
}
