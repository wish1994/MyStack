<?php get_header();?>
<title>news</title>
<link rel="stylesheet" href="<?php bloginfo(template_url)?>/css/single.css">
<?php include('nav.php')?>

    <?php wp_nav_menu();?>

    <?php if(have_posts()):the_post();?>
    <div class="post">
        <a href="<?php the_permalink();?>"><div class="title"><?php the_title()?></div></a>
        <div class="description">作者：<?php the_author(' ')?>&nbsp; &nbsp;分类：<?php the_category(' ')?></div>
        <div class="content"><?php the_content()?></div>
    </div>
    <?php endif;?>

    <?php previous_post_link('%link', '上一篇')?>
    <?php next_post_link('%link', '下一篇')?>

    
<?php include('footer.php')?>