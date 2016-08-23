$(document).ready(function(){
  hs.graphicsDir = chrome.extension.getURL("graphics/");
  hs.maxWidth = 900;
  hs.align = 'auto';
  hs.transitions = ['expand', 'crossfade'];
  hs.fadeInOut = true;
  //удаление двоеточия в описании картинки
  hs.captionEval = 'this.thumb.alt';
  $('.b-attached-image[data-reduced="1"]').each(function(){
    //подключение классов и реакции на нажатия мышкой
    $a = $(this).find('.b-attached-image__link');
    $a.addClass('highslide');
    $a.click(function(){ return hs.expand(this); });
    //добавление текста аттача в alt к картинке для последующего использования highslide
    $a.find('img').attr('alt', $(this).find('.b-attach__title').text());
  });
  //переопределение реакции на нажатие кнопки развёртывания на полный размер
  //стандартная функция не работает, т.к. не может найти hs в скриптах страницы
  $('a.highslide-full-expand').live('click', function(event){
    var matches = /javascript:(.+)/.exec($(this).attr('href'));
    if ( matches != null ) {
      event.preventDefault();
      eval(matches[1]);
    }
    return false;
  });
});
