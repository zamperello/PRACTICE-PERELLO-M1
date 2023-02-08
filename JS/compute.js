var total_pricePeso = function(){ 

var total_pricemb = document.getElementById("mb").value *10;

var total_pricesmt = document.getElementById("smt").value *30;

var total_pricePeso = total_pricemb+total_pricesmt;
return alert("Total Price of items in Pesos: Php" +total_pricePeso);
}