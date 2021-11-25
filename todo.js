function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
             var response = JSON.parse(this.responseText);
            //  var klist=response.list;
            var tbody = document.getElementById("tab-body");
            var trow="";

            for(var i=0; i<response.length; i++){

                if(response[i].completed==true){
                    trow += `<tr class="mt-1"><td><input class="checkk" type="checkbox" id="checking" checked disabled> </td>`

                }else{
                    trow += `<tr class="mt-1"><td><input class="chec" type="checkbox" name="chk" onclick="return counter()"> </td>`

                }

                trow += `<td>${response[i].title}</td></tr>`;

                
           }
            tbody.innerHTML = trow;


        }}
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
}

window.addEventListener("load", ajax);

			//counter

function counter(){               
	var a= document.getElementsByName('chk');
	var i= 0;
	var count;
	for(count=0; count<a.length; count++){
	if(a[count].checked==true){
	i= i+1;
	}
	}
	if(i>=5){
	
			// ### Promise validation ####                          
	new Promise ((res, rej) =>{
	console.log('starting promise');
	
	if(i<=5){ setTimeout(() => res(),100); console.log('resolve');}
	if(i>=6){ setTimeout(() => rej(),100);console.log('reject');}
	}).then(mssg)
	.catch();
	                           
	function mssg(){
	
	   if(swal("Good job!", "You have been completed 5 tasks", "success")){
		   //if(confirm(`You have selected ${i} tasks. Do you want to continue selection?`)){
	       console.log('OK pressed');}
	    else{console.log('Cancel pressed');
	    alert(`You wanna cancel your ${i} tasks`);
	    alert('Press OK to Refresh the page');
	    location.reload();
	
	    }
	   }
	
	}
	
	// function refresh(){
	//     if(confirm(`You have checked ${i} tasks.`)){
	//         console.log('OK pressed');
	//     }
	// else{ console.log('Cancel pressed');
	//     alert(`Good Job!!!! You have completed ${i} tasks`);
	//     alert('Press OK to Refresh the page');
	   
	// // loadRest();
	
	// location.reload();
	
	
	// }
	// }
	 }
	 