// 共通処理を書いていきます
$(function() {
    // 質問や回答にマウスオーバーしたときに矢印を表示する
    $('.blink-before-hover').hover(
        function() {
            // mouseover
            $(this).addClass('blink-before');
        },
        function() {
            // mouseout
            $(this).removeClass('blink-before');
        }
    );
});
