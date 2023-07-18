const lists = document.querySelectorAll("li");
let levCount = 0;
for(let i = 0; i<lists.length; i++){
	levCount++;
	if(lists[i].id==="level"){
		break;
	}
}
alert(`The level of the element is: ${levCount}`);