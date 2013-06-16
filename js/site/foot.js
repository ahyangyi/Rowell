$(document).ready(function(){
    UI_register_func();
    UI_register_hotkeys();
    // UI_set_fileupload();
    UI_init();
    UI_session_retrieved($.cookie(bbs_session_cookie));
});
