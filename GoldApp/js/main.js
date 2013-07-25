
$('#home').on('pageinit', function(){
	//code needed for home page goes here
 });	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#travelForm');
		    tterrorsLink	= $ ("#tterrorsLink");	    
		    
		myForm.validate({
			invalidHandler: function(form, validator) {
			     tterrorsLink.click();
			     for(var key in validator.submitted){
			       var label =  $(' label[for^=" ' + key +' "]') 
			     };
			},
			submitHandler: function() {
		var data = travelForm.serializeArray();
			storeData(data);
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

}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){
   
};

