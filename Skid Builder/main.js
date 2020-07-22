const list_items=document.querySelectorAll('.list-item');
const lists=document.querySelectorAll('.list2');

let draggedItem=null;

for(let i=0; i<list_items.length; i++){  
    const item= list_items[i];

    item.addEventListener('dragstart', function () {
        draggedItem = item;
        setTimeout(function() {
            item.style.display='none';

        }, 0)
    });

    item.addEventListener('dragend', function(){
        setTimeout(function() {
            draggedItem.style.display = 'block';
            draggedItem = null;
         }, 0);
    })

    for(let j=0; j<lists.length; j++){
        const list2=lists[j];

        list2.addEventListener('dragover', function(e){
            e.preventDefault();
        });
        list2.addEventListener('dragenter', function(e){
            e.preventDefault();
        });
        list2.addEventListener('dragleave', function(e){
        });
        list2.addEventListener('drop', function(e){
            console.log('drop');
            this.append(draggedItem);
        });
    }

    function clickEvent(){
        document.querySelector('.bg-modal').style.display= 'flex';
    } 

    function closeEvent(){
        document.querySelector('.bg-modal').style.display= 'none';
    
    }
    
}




