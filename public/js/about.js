$(function() {


    var arr_C = ['首&nbsp;&nbsp;页', '核心业务<ul id="menu-show" class="dropdown-menu" aria-labelledby="dropdownMen2" style="text-align:center;display:block;"><li style="clear:both;"><a href="#" style="padding:5px;">核心业务</a></li><li style="clear:both;"><a href="#" style="padding:5px;">销售渠道</a></li><li style="clear:both;"><a href="#" style="padding:5px;">合作伙伴</a></li></ul><ul class="mobile1" style="display:none;"><li style="clear:both;"><a href="#" style="padding:5px;">核心业务</a></li><li style="clear:both;"><a href="#" style="padding:5px;">销售渠道</a></li><li style="clear:both;"><a href="#" style="padding:5px;">合作伙伴</a></li></ul>', '新&nbsp;&nbsp闻', '案&nbsp;&nbsp;例', '关&nbsp;于&nbsp;&nbsp;我&nbsp;们', '&nbsp;联&nbsp;系&nbsp;&nbsp;我&nbsp;们'];
    var arr_E = ['<span class="icon_q"></span>HOME', '<span class="icon_q"></span>CORE<span class="caret"></span><span class=" icon-show">+</span>', '<span class="icon_q"></span>NEWS', '<span class="icon_q"></span>CASE', '<span class="icon_q"></span>ABOUT US', '<span class="icon_q"></span>CONTACT US'];
    $('#s-nav>li').on('mouseenter mouseleave', function(ev) {

        switch (ev.type) {
            case 'mouseenter':
                $(this).children().html(arr_C[$(this).index()]);
                break;
            case 'mouseleave':
                $(this).children().html(arr_E[$(this).index()]);
                break;
        }


    });
})