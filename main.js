let m=parseInt(prompt("Enter the maths mark"))
let p=parseInt(prompt("Enter the physics mark"))
let c=parseInt(prompt("Enter the chemistry mark"))

var mpc=m+p+c
var mp=m+p

if(m>=65 && p>=55 && c>=50){
	if(mpc>=190 || mp>=140){
		document.write("Eligible")
	}

	else{
		document.write("Not Eligible")
	}

}

else{
	document.write("Not eligible")
}