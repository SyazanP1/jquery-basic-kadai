$(function(){
  // id:change-colorボタン押下時
  $('#change-color').on('click', function(){
    // id:targetの色を変化
    $('#target').css('color', 'green');
  });

  // id:change-textボタン押下時
  $('#change-text').on('click', function(){
    // id:targetの内容変化
    $('#target').text('Hello!');
  });

  // id:fade-outボタン押下時
  $('#fade-out').on('click', function(){
    // id:targetをフェードアウトする（2秒後）
    $('#target').fadeOut(2000,function(){});
  });

  // id:fade-inボタンを押下時（1秒後）
  $('#fade-in').on('click', function(){
    $('#target').fadeIn(1000,function(){});
  });
});