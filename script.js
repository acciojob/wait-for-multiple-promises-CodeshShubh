//your JS code here. If required.
let tbody = document.getElementById('output');

tbody.innerHTML = `<tr id="loading">
<td colspan="2">Loading...</td>
</tr>`

let startTime = Date.now();

let promise1 = new Promise((resolve , reject)=>{
   let time = Math.floor(Math.random() * 3 + 1);
   setTimeout(()=>{
        resolve(time)
   }, time * 1000)
})

let promise2 = new Promise((resolve , reject)=>{
   let time = Math.floor(Math.random() * 3 + 1);
   setTimeout(()=>{
        resolve(time)
   }, time * 1000)
})

let promise3 = new Promise((resolve , reject)=>{
   let time = Math.floor(Math.random() * 3 + 1);
   setTimeout(()=>{
        resolve(time)
   }, time * 1000)
 })

Promise.all([promise1, promise2, promise3]).then((values) => {
  // clear the loading text
  document.getElementById('loading').remove();
  
  // iterate over the values array and create a row for each promise
  for(let i = 0; i < values.length; i++){
    tbody.innerHTML += `<tr>
        <td>Promise ${i+1}</td> 
        <td>${values[i]}</td>
        </tr>`
  } 
  
  // calculate the total time
  let endTime = Date.now();
  let totalTime = (endTime - startTime) / 1000;
  
  // add the total time row
  tbody.innerHTML += `<tr>
        <td>Total</td>
        <td>${totalTime.toFixed(3)}</td>
        </tr>`
});  





