<?php get_header();?>
<title>我的主页</title>
    <link rel="stylesheet" href="<?php bloginfo(template_url)?>/css/index.css">
<?php include('nav.php')?>
<div class="container">
    <div class="title-T" id="header"></div>
    <a href="#"><div class="mysite">我的主页</div></a>
    <span class="site-description">最重要的就是不要去看远方模糊的，而要做手边清楚的事。</span>
    <div id="Nav">
        <?php wp_nav_menu();?>
    </div>
    <div class="content clear-top">
        <div id="banner"></div>
        <div class="line">
            <div class="bird bird1"></div>
            <div class="bird bird2"></div>
        </div>
        <div class="content-left">
            <div class="mulu">The latest news</div>

            <?php if(have_posts()):while(have_posts()):the_post();?>
            <div class="post">
                <a href="<?php the_permalink();?>"><div class="title"><?php the_title()?></div></a>
                <div class="category">分类：<?php the_category(' ')?></div>   
            </div>    
            <?php endwhile;endif;?>
            
            <div class="post-nav"><?php posts_nav_link(' &nbsp; ', '上一页', '下一页');?></div>
        </div>
        <div class="content-right"></div>
    </div>
    <div class="shadow"></div>
</div>
<div id="footer"></div>
<a href="#header"><div class="to to-top">回到顶部</div></a>
<a href="#footer"><div class="to to-bottom">去底部</div></a>

<?php get_footer();?>