// const john='john';
// const peter='peter';
// const sayHi=(name)=>console.log(`${name}`);
// sayHi(john);
// const names=require('./practise3.js');
// const say=require('./practise-2.js');
// require('./practise-1.js');
// console.log(names.share1);
// console.log(say.name);
// say.sayhii();
// say.hello();
// const path=require('path');
// console.log(path.sep)
// const filepath=path.join('content','subfolder','test.txt');
// console.log(filepath)



// const {readFileSync,writeFileSync}=require('fs');
// const first=readFileSync('./content/first.txt','utf8');
// const second=readFileSync('./content/second.txt','utf8');
// writeFileSync('./content/result_sync.txt',`here is the result page ${first} and ${second}`);
// writeFileSync('./content/result_sync.txt','hello this is result page',{flag:'a'});
// const fs=require('fs');
// try{
//     fs.readFile('./content/first.txt','utf8',(err,data)=>{
//         if(err){
//         console.log(err);
//     }
//  console.log(data);
// });
   // }
// catch(err){
//     console.log(err);
// }
// console.log("hello");



// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end("welcome to home page");
//     }
//     if(req.url==='/about'){
//         res.end('welcome to about page');
//     }
//     res.end(`
//         <h1>oops!</h1>
//         <p>there is no page found</p>
//         <a href="/">back home</a>`
//   )
// })




// const _=require('lodash');
// const items=[1,[2,[3,[4]]]];
// const newitems=_.flattenDeep(items);
// console.log(newitems);

