

	/***
		功能：锚点平滑跳转
		锚点起点部分： <a class="gowhere" data-options='{"target":1, "timer":1500, "tag":"content"}'>锚点起点部分</a>
		锚点目的地： 	<div id="menu1">锚点目的地</div>
		使用方法：	$(".gowhere").anchorGoWhere();
	***/
	$.fn.anchorGoWhere = function(options){
		var $this = $(this);
		var $body = $("html,body");
		var defaults = {target:0, timer:500};
		if(options == "" || options == null || options == undefined){
			options = $this.attr('data-options');
			$para = JSON.parse(options);
		}else{
			$para = defaults;
		}
		$this.each(function(i){
			$(this).click(function(){
				switch($para.target){
					case 0:
						$body.animate({scrollTop: 0}, $para.timer);
						break;
					case 1: 
						var $targetTop = $("#" + $para.tag).offset().top;
						var $speed =($targetTop / 3500) * $para.timer;
						//console.log($speed);
						$body.animate({scrollTop: $targetTop}, $speed);
						break;
					case 2:
						var $targetLeft = $("#" + $para.tag).offset().left;
						var $speed =($targetLeft / 3500) * $para.timer;
						$body.animate({scrollLeft: $targetLeft}, $speed);
						break;
				}
				return false;
			});                  
		});
	};
	$(".gowhere").anchorGoWhere();
