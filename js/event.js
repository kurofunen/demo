const btn = document.getElementById('output-btn');
btn.addEventListener('click', () => {
    //console.log('クリックされました！');
});

const addbtn = document.getElementById('add-btn');
const list = document.getElementById('parent-list');
const listchild = document.createElement('li');
addbtn.addEventListener('click', () => {
    listchild.textContent = "新たなリスト";
    list.appendChild(listchild);
});
const countbtn = document.getElementById('count-btn');
const countlist = document.getElementById('count-list');
let text;
let textval;
function output(){
    console.log(text.textContent=textval);
    countlist.appendChild(text);
    text.textContent=textval;
}
countbtn.addEventListener('click', () => {
    text = document.createElement('li');
    textval = document.forms.textForm.textBox.value;
    output();
});


const areabtn = document.getElementById('area-btn');
areabtn.addEventListener('click', () => {
    const area= document.forms.areaForm.area.value;
    console.log(area);
});   

const osbtn = document.getElementById('os-btn');
osbtn.addEventListener('click', () => {
    const items = document.forms.osForm.os;
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            console.log(items[i].value);
        }
    }
});
/**/
$(document).on('click keydown', (e) => {
    if(e.type === 'click'){ 
        console.log("くくりっく"); 
    }
    if(e.type === 'keydown'){ 
        console.log("きー");
    }
});

 


