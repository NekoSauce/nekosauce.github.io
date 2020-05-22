$("#topbar-neo").ready(function(){
	toggleOptionsButtonLabelClasses($("#topbar-neo").width() <= 990);

	$(".tb-context-menu-opener").click(function(e){
		//ontentToPopulateMenu($(this).attr("data"));
		

		toggleContextMenu($(".topbar-context-menu-wrapper"), $(this));
		e.stopPropagation();
	});
});

function toggleOptionsButtonLabelClasses(t) {
	if(t)
		$(".topbar-options").addClass("ar-hidden-content");
	else
		$(".topbar-options").removeClass("ar-hidden-content");
}

function contentToPopulateMenu(context) {
	switch(context) {
		case "staff-ucp-options":
			return 'staff';
			break;
	}
}

function toggleContextMenu(menu, currentButton) {
	//if(!menu.is(":visible"))
	//	alert(currentButton.attr("data"));

	menu.slideToggle();
}

var s = `<div class="tcm-options tcm-options-title">User Controls Matrix</div>
			<div class="tcm-innerwrapper">
				<div class="tcm-options tcm-options-button"><i class="fas fa-user-cog tb-options-buttons-labels tcm-option-usercp"></i></div>

				<div class="tcm-options tcm-options-button"><i class="fas fa-cog tb-options-buttons-labels tcm-option-modcp"></i></div>

				<div class="tcm-options tcm-options-button"><i class="fas fa-cogs tb-options-buttons-labels tcm-option-admincp"></i></div>
			</div>`;

var ss = `<div class="tcm-options tcm-options-title">Information Matrix</div>
				<div class="tcm-innerwrapper">
					<div class="tcm-options tcm-options-button"><i class="fas fa-book tb-options-buttons-labels tcm-option-guidebook"></i></div>

					<div class="tcm-options tcm-options-button"><i class="fas fa-globe-americas tb-options-buttons-labels tcm-option-map"></i></div>

					<div class="tcm-options tcm-options-button"><i class="fas fa-newspaper tb-options-buttons-labels tcm-option-worldstate"></i></div>
				</div>`;