// 1.JavaScript: 字串反轉
function reverseString(str) {
  return str.split("").reverse().join("");
}
//在這邊我先用split讓字串變成array，然後反轉，接下來用join的方式把所以的東西接在一起。
console.log(reverseString("Hello")); // 預期輸出: "olleH”

// 2.JavaScript: 陣列過濾
function filterNumbersGreaterThanFive(numbers) {
  return numbers.filter((e) => {
    return e >= 7;
  });
}

const numbers = [2, 8, 4, 10, 1, 7];
console.log(filterNumbersGreaterThanFive(numbers)); // 預期輸出: [8, 10, 7]
//在這邊我用filter(callbackfunction),把numbers過濾出來，return大於 8 , 10 , 7的數。

//JavaScript: 重構
//問題：重構這段程式碼並說明原因

function formatName(firstName, lastName) {
  //   let formattedName = "";
  //   if (firstName) {
  //     formattedName += firstName;
  //   }
  //   if (lastName) {
  //     formattedName += " " + lastName;
  //   }
  //   return formattedName;
  let fullName = firstName + " " + lastName;
  return fullName;
}
//宣告命名盡量以簡單清楚為主，能精簡的程式不要想得太複雜，當遇到程式碼大量的時候會有效能問題。
console.log(formatName("albert", "Liu"));

//  let fullName =
// firstName.charAt(0).toUpperCase() +
// firstName.slice(1) +
// " " +
// lastName.charAt(0).toUpperCase() +
// lastName.slice(1);
//如果是英文名，同常會給大寫，在這邊用charAt(0)找到字串第一個字用toUpperCase()變成大寫，
//隨後加上除了第一個字後面的幾個英文字所以用slice(1),
//lastName 也是同一個概念，這樣當再輸入的時候就會變成都大寫了。
