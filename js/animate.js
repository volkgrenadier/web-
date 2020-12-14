
function getStyle(a,b){
	if(a.currentStyle){
		return a.currentStyle[b];
	}else{
		return window.getComputedStyle(a,null)[b];
	}
}
function animate(a,b,hanshu){
	clearInterval(a.timer);
	a.timer = setInterval(function (){
		//console.log(a.style.left);
		var flag=true;
		var now=0
		for(var attr in b){
			
			if(attr == "opacity"){
				now = parseInt(getStyle(a,attr)*100);
			}else{
				now = parseInt(getStyle(a,attr));
			}
			var speed = (b[attr]-now)/6;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var current = now + speed;
			if(attr == "opacity"){
				a.style.opacity = current/100;
			}else{
				a.style[attr] = current + "px";
			}
			
			if(b[attr] !== current){
				flag=false;
			}	
		}
		if(flag){
			clearInterval(a.timer);
			if(hanshu){
				hanshu();
			}
		}
	}, 30);
	
}