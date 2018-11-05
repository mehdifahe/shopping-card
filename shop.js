
let shop=Array.from(document.querySelectorAll('.btn-delete'))
for (var i = 0 ; i < shop.length; i++) {
shop[i].addEventListener('click',function myfunction(event){
    if (confirm("Are you sure you want to remove this item?")){
   var button = event.target
   button.parentElement.parentElement.remove()
}else if(false){
	event.preventDefault()
/*else false*/
}   
})
}

function myfunction(event){
    if (confirm("Are you sure you want to remove this item?")){
   var button = event.target
   button.parentElement.parentElement.remove()
}else if(false){
	event.preventDefault()
/*else false*/
}   
}

function likefunction(event){
	var click=event.target
	if(click.style.color==='red') 
		click.style.color='#c5bbbb'
		else click.style.color='red'

}




 var count = 0;
   var countEl = document.getElementById('count');
    function plus(){
        count++;
        countEl.value = count;
        document.querySelector('.price').innerHTML=count*150 +(' ')+'DT'
    }
    function minus(){
      if (count > 0) {
        count--;
        countEl.value = count;
         document.querySelector('.price').innerHTML=count*150 + (' ')+'DT'
      }  
    }




 var w = 0;
   var wEl = document.getElementById("quantity");
    function plous(){
        w++;
        wEl.value = w;
        let m=document.getElementById('price')
        m.innerHTML=w*200 +(' ')+'DT'
    }
    function minous(){
      if (w > 0) {
        w--;
        wEl.value = w;
        let m=document.getElementById('price')
        m.innerHTML=w*200 +(' ')+'DT'
      }  
    }




var x = 0;
   var xEl = document.getElementById("quantity-nike");
    function addi(){
        x++;
        xEl.value = x;
	 	let e=document.getElementById('price1')
     	e.innerHTML=x*120 +(' ')+'DT'
    }
    function sous(){
      if (x > 0) {
        x--;
        xEl.value = x;
         let e=document.getElementById('price1')
        e.innerHTML=x*120 +(' ')+'DT'
      }  
    }

