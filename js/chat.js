const arr = [2, 'Hello', 4, true, 6];
// 期待する結果: [4, 'Hello', 8, true, 12]
const arrDobble = arr.map(item => typeof item === 'number' ? item * 2 : item);
//console.log(arrDobble);

//以下のような文字列があります。文字列の中にある単語の頭文字を取得して、アルファベット順に並べた配列を作成してください。
const str = 'The quick brown fox jumps over the lazy dog';
// 期待する結果: ['T', 'q', 'b', 'f', 'j', 'o', 't', 'l', 'd']
const strFstr = str.split(' ').map(word=>word[0]).sort();
//console.log(strFstr);

//以下のようなオブジェクトがあります。オブジェクトのプロパティに格納された値が数値の場合は、その値を2倍にし、そうでない場合はそのままの値を格納してください。
const obj = {
  name: 'Alice',
  age: 30,
  job: 'Engineer',
  salary: 50000,
  isMarried: false
};

// 期待する結果: {name: 'Alice', age: 60, job: 'Engineer', salary: 100000, isMarried: false}
const obj2 = Object.entries(obj);//配列内の各要素に対するキー/値のペアを含む新しい Array 反復子オブジェクトを返
const newObj = {};
 obj2.forEach(([key,value]) => {
   newObj[key] = typeof value === 'number' ? value * 2 : value;
 });
console.log(newObj.age);






    