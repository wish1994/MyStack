<?php get_header();?>
<title>分类页面</title>
    <link rel="stylesheet" href="<?php bloginfo(template_url)?>/css/archive.css">
<?php include('nav.php')?>

<?php wp_nav_menu();?>

<a href="<?php the_permalink() ?>"> <?php the_title(); ?></a>



<?php get_footer();?>