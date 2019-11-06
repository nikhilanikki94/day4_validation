// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// document.title="javascript";
// console.log(document.all[7]);


//console.log(document.getElementById('intro'));
// let store= document.getElementById('intro');
// console.log(store.textContent);
// store.textContent="new topic";
// store.innerText="wwelocme";
// store.innerHTML='<h1>Helloooo</h1>';

//document.getElementById('test').innerHTML='<p>welcome to ict kerala</p>';




let hold=document.getElementsByClassName('heading');
hold[1].textContent="kerala gov";


//change the style
// hold[1].style.borderBottom='solid 3px red'
// hold[0].style.fontWeight='bold';
// hold[0].style.backgroundColor="green";
// for(i=0;i<hold.length;i++)
// {
//     hold[i].style.backgroundColor="blue";

// }

let safe=document.getElementsByTagName('h1');
safe[1].textContent='content changed';


// let area=document.querySelector('input');
// area.value='plinggg';
  

//USING id
// let area=document.querySelector('#helo');
// area.value='plinggguuu';


let area=document.querySelectorAll('input');
area[0].value='plinggguuu';


//TO CHANGE VALUE OF A BUTTON
// let submit=document.querySelector('input[type="button"]');
// submit.value='send';
// let sheo= document.querySelector('.lichild');
// sheo.style.color='green';
//   let last=document.querySelector('.lichild:last-child');
//   last.style.color='pink';


  //STYLE THE NTH CLASS
//   let nth=document.querySelector('.lichild:nth-child(2)');
//   nth.style.color="cyan";

   function myfunction(){
       //alert("kjhj");
       let submit=document.querySelector('input[type="button"]');
       submit.value='send';
       let sheo= document.querySelector('.lichild');
       sheo.style.color='green';
        let last=document.querySelector('.lichild:last-child');
        last.style.color='pink';
        let nth=document.querySelector('.lichild:nth-child(2)');
        nth.style.color="cyan";

   }
   function onlodfunction(){
     alert("wrking");
   }
   function changingfld(val){
     alert("the input changed. the new value is"+ val);
   }
   function submitimg(){
     alert("submitted");
   }