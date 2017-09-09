<?php
function get_content_first_image($content){
  if ( $content === false ) $content = get_the_content();

  preg_match_all('|<img.*?src=[\'"](.*?)[\'"].*?>|i', $content, $images);

  if($images){
    return $images[1][0];
  }else{
    return false;
  }
}
?>
