window.onload=function(){
	//tab
	var tab=document.getElementById("article-tab");
	var tabli=tab.getElementsByTagName("li");
	var con=document.getElementById("article-con");
	var condiv=con.getElementsByTagName("div");
	
	for(var i = 0; i < tabli.length; i++) {
	        tabli[i].index = i;
	        tabli[i].onclick = function() {
	            for(var i = 0; i < tabli.length; i++) {
	                tabli[i].className = "";
	            }
	            this.className = "tabli";
	            for(var j = 0; j < condiv.length; j++) {
	                condiv[j].className = "hide";
	            }
	            condiv[this.index].className = "show";
				condiv[this.index].className="article-list";
	        }        
	    }
		
}