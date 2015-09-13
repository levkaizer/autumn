var Menu = {
    size:0,
    hidden:false,
    lock: false,
    inPosition: false,
    init: function(){
        Menu.size = $('#main-menu').height();
        $(window).on('scroll', function(){
            if(!Menu.lock) {
                if( $(window).scrollTop() >= 300 && !Menu.hidden ) {
                	Menu.inPosition = true;
                    Menu.lock = true;
                    Menu.hideMenu();
                }
                if($(window).scrollTop() < 300 && Menu.hidden) {
	                Menu.inPosition = false;
                	Menu.lock = true;
                    Menu.showMenu();
                }
            }
        });
        $('#main-menu').on('mouseenter', function(){
        	if(Menu.hidden && !Menu.lock) {
        		Menu.lock = true;
        		Menu.showMenu();
        	}
        });
        $('#main-menu').on('mouseleave', function(){
        	if(!Menu.hidden && !Menu.lock && Menu.inPosition) {
        		Menu.lock = true;
        		Menu.hideMenu();
        	}
        });
    },
    hideMenu: function(){
		$('#main-menu').css({'overflow': 'hidden'}).animate({'width': $('.navbar-brand').outerWidth()+'px'}, 200, function(){
			Menu.hidden = true;
			Menu.lock = false;
		});
    },

    showMenu: function(){
		$('#main-menu').css({'overflow': 'visible'}).animate({'width': '100%'}, 200, function(){
			Menu.hidden = false;
			Menu.lock = false;
		});
    }
};


$(function(){
    Menu.init();
});
