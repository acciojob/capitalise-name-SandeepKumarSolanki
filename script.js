//your JS code here. If required.
let name = prompt("Enter your name")
for(let ch of name){
	if(ch >= 'a' && ch <= 'z'){
		ch.toUpperCase();
	}
}
return name;