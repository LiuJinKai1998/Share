window.onload = function() {
	
	var banner=document.getElementById("banner");
	var list=document.getElementById("list");
	var prev=document.getElementById("prev");
	var next=document.getElementById("next");
	function animate(offset){
		var newleft=parseInt(list.style.left)+offset;
		list.style.left=newleft+"px";
		if(newleft<-7680){
			list.style.left = 0 + 'px';
		}
		if(newleft>0){
			list.style.left = -7680 + 'px';
		}
	}
	//左右切换键
	prev.onclick=function(){
		animate(1920);
	}
	next.onclick=function(){
		animate(-1920);
	}
	//定时器
	var timer;
		function autoplay(){
			timer = setInterval(function(){
				next.onclick()
			},3000);
		}
	autoplay();
	//触碰停止
	
	function stopplay(){
		clearInterval(timer);
	}
	
	
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var index = 1;
	function showButton(){
		//清除之前的样式
		for(let i = 0;i<buttons.length;i++){
			if(buttons[i].className == 'on'){
				buttons[i].className = '';
			}
		}
		buttons[index-1].className = 'on';
	}
	prev.onclick = function() {   
		index-=1;
		if(index < 1){
			index = 5;
		}
		showButton();
		animate(1920);
	}
	next.onclick = function() {  
		index+=1;
		if(index > 5){
			index = 1;
		}
		showButton();
		animate(-1920);
	}
	for(var i = 0;i<buttons.length;i++){
		buttons[i].onclick = function() {
			var clickIndex = parseInt(this.getAttribute('index'));
			var offset = 1920*(index - clickIndex);
			animate(offset);
			index = clickIndex;
			showButton();
		}
	}
	banner.onmouseover=stopplay;
	banner.onmouseout=autoplay;
	
	
	//tab
	var ull=document.getElementById("top-tab-ul");
	var ulli=ull.getElementsByTagName("li");
	var top_conn=document.getElementById("tab-conn");
	var top_con=top_conn.getElementsByTagName("div");

	for(var i = 0; i < ulli.length; i++) {
			ulli[i].index = i;
			ulli[i].onclick = function() {
				for(var i = 0; i < ulli.length; i++) {
					ulli[i].className = "";
				}
				this.className = "top-tab-li";
				for(var j = 0; j < top_con.length; j++) {
					top_con[j].className = "top-hide";
				}
				top_con[this.index].className = "top-show";
				top_con[this.index].className="top-con";
			}        
		}
		

		
	
		$(function(){
		//下面文章的瀑布流
		$.ajax({
			type:"get",
			url:'js/article.php',
			dataType:'json',
			cache:false,
			async:true,
			success:function(res){
				console.log(res);
				var str="";	
				var div=document.getElementById("conn");
				console.log(div);
				
				$.each(res,function(i,item){
					str+="<div class='con_li'>"
					str+="<a href='article_item.html?id="+item.aid+"'><img src='"+item.aimg+"'></a>"
					str+="<p class='biaoqian'>"+item.aclass+"</p>"
					str+="<ul><li>"+item.atitle+"</li>"
					str+="<li>"+item.aname+"</li></ul>"
					str+="</div>"
					
				});
					
				div.innerHTML=str;
				
				
			}
		});
		//排行文章
		$.ajax({
			type:"get",
			url:'js/index.php',
			dataType:'json',
			cache:false,
			async:true,
			success:function(res){
				console.log(res);
				var str="";	
				var div=document.getElementById("top-wr");
				
				$.each(res,function(i,item){
					str+="<ul><a href='article_item.html?id="+item.aid+"'>"
					str+="<img src="+item.aimg+" />"
					str+="<li>"+item.atitle+"</li>"
					str+="</a></ul>"
					
				});
					
				div.innerHTML=str;
				
				
			}
		});
		//排行产品
		$.ajax({
			type:"get",
			url:'js/index1.php',
			dataType:'json',
			cache:false,
			async:true,
			success:function(res){
				console.log(res);
				var str="";	
				var div=document.getElementById("top-product");
				
				$.each(res,function(i,item){
					str+="<ul><a href='product_item.html?id="+item.pid+"'>"
					str+="<img src="+item.pimg+" />"
					str+="<li>"+item.pname+"</li>"
					str+="</a></ul>"
					
				});
					
				div.innerHTML=str;
				
				
			}
		});
	})
	
}

	