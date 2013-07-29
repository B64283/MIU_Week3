
$('#home').on('pageinit', function(){
	//code needed for home page goes here
 });	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#travelForm');
		    tterrorsLink	= $ ("#tterrorsLink");	    
		    
		myForm.validate({
			invalidHandler: function(form, validator) {
			     tterrorsLink.click();
			     //var html= ' ';
			     for(var key in validator.submitted){
			      var label = $(' label[for^=" ' + key +' "]'); 
			       //var legend = label.closest('fieldset').find('.label');
			       //var fieldName = legend.length ? legend.text() : label.text(); 
			        //html += '<li>'+ fieldName +'</li>';  
			     
			     };
			    //$("#TravelTypeErrors ul").html(html);
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
					}
	});
		//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
    
     function storeData(key) {
	    //if there is no key, this means this is a new item and needs a new key
	    
		   var id           = Math.floor(Math.random()*10000001);
	   
	     // set id to existing key we"re editing so it will save over the data
	     // the key is the same key that is passed along from the edit submit event handeler.
	     // then goes to the validate function and the passed here, into the stor data function
		    id= key;
	    }
    
    var item			  = {}; 
	        item.TravelType    =["TravelType:", $("TravelType").value];         
	        item.Destination    =["Destination:", $( "Destination").value];
	        item.clothes        =["Clothes:", $("Clothes").value];
	        item.meds          =["Medication:", $("Medication").value];
	        item.toiletries       =["Toiletries:", $("Toiletries").value];	        
	        item.Duration       =["Duration:", $("Duration").value];	        
	        item.slider1         =["slider1:" , $("slider1").value];
	        item.startdate       =["startdate:", $("startdate").value];	        
	        item.notes          =["notes:", $("notes").value];
 	   	   localStorage.setItem(id, JSON.stringify(item) );
	   alert("Checklist Complete!");
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){
   function clearLocal(){
	    if (localStorage.length === 0){
		    alert("No Data To Clear.");
	    } else {
	        localStorage.clear();
	        alert("All Vacations Deleted.");
	        window.location.reload();
	        return false;
	   }
 }
};
function showData(data){
	displayData.addEventListener("click", getData);
	}
