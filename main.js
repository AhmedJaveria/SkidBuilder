
function clickEventU(){
    document.querySelector('.bg-modalU').style.display= 'flex';

    
} 

var x = 0;
var arrayU = Array();
function saveInfoU (){
    document.querySelector('.bg-modalU').style.display= 'none';
    
    arrayU[x] = document.getElementById("UnitOp").value;
    x++;
    document.getElementById("UnitOp").value = "";
    var e = "<hr/>";   
    
   for (var y=0; y<arrayU.length; y++)
   {
     e =  array[y];
   }
  //document.getElementById("UList").innerHTML = e;
   var divU = document.createElement('button');
   divU.innerHTML += e; //document.getElementById('TAG').value;
   divU.draggable="true"
   divU.style.backgroundColor = "white";
   divU.style.position = "center";
   divU.style.left = "50px";
   divU.style.top = "50px";
   divU.style.height = "50px";
   divU.style.width = "260px";
   divU.style.margin = "5px";
   
   document.getElementsByClassName('list')[0].appendChild(divU);
  
    divU.onclick = function() { 
       document.querySelector('.bg-modalU-specs').style.display= 'flex';
}
} 
function clickEventE(){
    document.querySelector('.bg-modalE').style.display= 'flex';

} 
var  a= 0;
var arrayE = Array();
function saveInfoE(){
    document.querySelector('.bg-modalE').style.display= 'none';

    arrayE[a] = document.getElementById("Equip").value;
    a++;
    document.getElementById("Equip").value = "";
    var c = "<hr/>";   
    
   for (var b=0; b<arrayE.length; b++)
   {
     c =  arrayE[b];
   }
   //document.getElementById("EList").innerHTML = c;
   var divE = document.createElement("button") ;
   
   
   divE.innerHTML += c; //document.getElementById('TAG').value;
   divE.draggable="true";
   divE.style.backgroundColor = "white";
   divE.style.position = "center";
   divE.style.left = "50px";
   divE.style.top = "50px";
   divE.style.height = "50px";
   divE.style.width = "260px";
   divE.style.EList= "center";
   divE.style.fontFamily="roboto"
   divE.style.margin = "5px";
   
   document.getElementsByClassName('list3')[0].appendChild(divE);
   
   divE.onclick = function() {  
    document.querySelector('.bg-modalE-specs').style.display= 'flex';
}


}
function saveInfoUspecs (){
    document.querySelector('.bg-modalU-specs').style.display= 'none';
}
function saveInfoEspecs (){
    document.querySelector('.bg-modalE-specs').style.display= 'none';
}
function closeEvent(){

    document.querySelector('.bg-modalU').style.display= 'none';
    document.querySelector('.bg-modalE').style.display= 'none';
    document.querySelector('.bg-modalU-specs').style.display= 'none';
    document.querySelector('.bg-modalE-specs').style.display= 'none';

    document.forms[0].resest(); 
}

/*document.addEventListener('dragover',function(e){
    if(e.target && e.target.tagName== 'divU'){
          //do something
     }
 });

 document.addEventListener('dragdrop',function(e){
    if(e.target && e.target.tagName== 'divE'){
          //do something
     }
 });*/
/*const list_itemsU=document.querySelectorAll('.divU');
const list_itemsE=document.querySelectorAll('.divE');

const skid=document.querySelectorAll('.list2');


for(let i=0; i<list_itemsU.length; i++){  
    const itemU= list_itemsU[i];

    itemU.addEventListener('dragstart', function () {
        draggedItemU = itemU;
        setTimeout(function() {
          itemU.style.display='none'; 
          alert('start');  
        }, 0)
    });

    itemU.addEventListener('dragend', function(){
        setTimeout(function() {
            draggedItemU.style.display = 'block';
            draggedItemU = null; //was null changed to item bcs "nullnull" would display
            alert('end');

         }, 0);
    })

    for(let j=0; j<lists.length; j++){
        const list2=lists[j];

        list2.addEventListener('dragover', function(e){
            e.preventDefault();
            alert('over');
        });
        list2.addEventListener('dragenter', function(e){
           e.preventDefault();
           this.style.backgroundColor='rgba(35, 62, 142,1)';
           alert('enter');

        });

        list2.addEventListener('dragleave', function(e){
            alert('leave');

        });

        list2.addEventListener('drop', function(e){
           console.log('drop');
           this.append(draggedItem);
           this.style.backgroundColor= 'rgba(72, 88, 151, 0.4)';
           alert('drop');

        });
    }

    
}


for(let k=0; k<list_itemsE.length; k++){  
    const itemE= list_itemsE[k];

    itemE.addEventListener('dragstart', function () {
        draggedItemE = itemE;
        setTimeout(function() {
            itemE.style.display='none';  

        }, 0)
    });

    itemE.addEventListener('dragend', function(){
        setTimeout(function() {
            draggedItemE.style.display = 'block';
            draggedItemE = itemE; //was null changed to item_sub bcs "nullnull" would display
         }, 0);
    })

    for(let l=0; l<skid.length; l++){
        const list2=skid[l];

        list2.addEventListener('dragover', function(p){
            p.preventDefault();
        });
        list2.addEventListener('dragenter', function(p){
           p.preventDefault();
           this.style.backgroundColor='rgba(35, 62, 142, 1)';
           p.preventDefault();

        });
        list2.addEventListener('dragleave', function(p){

       });
        list2.addEventListener('drop', function(p){
            console.log('drop');
            this.append(draggedItemE);
            this.style.backgroundColor= 'rgba(72, 88, 151, 0.4)';

        });
    }
}*/





