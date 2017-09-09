<?php get_header();?>
    <title>首页</title>
    <link rel="stylesheet" href="<?php bloginfo(template_url)?>/css/home.css">
<?php include('nav.php');?>
    <div id="header">
        <div id="blank"></div>
        <div id="Nav">
            <div class="logo"></div>
            <div class="Nav-right">
                <div class="NavItem NavItem1 selected"></div>
                <div class="NavItem NavItem2"></div>
                <div class="NavItem NavItem3"></div>
                <div class="NavItem NavItem4"></div>
                <div class="NavItem NavItem5"></div>
                <div class="NavItem NavItem6"></div>
            </div>
        </div>
    </div>
    <div id="banner">
        <div class="dot dot1">
            <div class="circle circle1">
                <div class="yuan yuan1"></div>
            </div>
        </div>
        <div class="picture picture1"></div>
        <div class="dot dot2">
            <div class="circle circle2">
                <div class="yuan yuan2"></div>
            </div>
        </div>
        <div class="picture picture2"></div>
        <div class="dot dot3">
            <div class="circle circle3">
                <div class="yuan yuan3"></div>
            </div>
        </div>
        <div class="picture picture3"></div>
        <div class="dot dot4">
            <div class="circle circle4">
                <div class="yuan yuan4"></div>
            </div>
        </div>

        <div class="picture picture4"></div>

    </div>
    <div class="live">
        <form action="">
            <input type="checkbox" id="live-box">
            <div class="live-container">
                
                <div class="live-mes"><div class="live-png"></div>直播预告需要展开查看</div>
                <?php query_posts(array("category_name"=>"live","posts_per_page"=>1));?>
                <?php if(have_posts()):while(have_posts()):the_post();?>
                
                    <?php get_content_first_image(get_the_content());?>
                    <a href=" http://localhost/2017/09/06/tdw-2017-腾讯设计峰会/"><div class="live-pic"><img src="<?php echo get_content_first_image(get_the_content());?>" alt=""></div></a>
    
                <div class="live-post">
                    <a href="<?php the_permalink();?>"><div class="title"><?php the_title()?></div></a> 
                    <div class="time-png"></div>
                    <div class="time"><?php the_time("Y年m月d日");?></div> 
                    <div class="content"><?php the_content()?></div>                          
                </div>    
                <?php endwhile;else:?>
                <h4>NO POST</h4>
                <?php endif;wp_reset_query();?>
            </div>
            <label for="live-box" id="live-label"></label>
        </form>
    </div>

    <div id="content">
        <div class="content-left">
            <div class="courses">
                <div class="courses-top">
                    <div class="course-png"></div>
                    <span>热门课程</span>
                    <a href="http://localhost/category/courses/"><div class="courses-more">more</div></a>
                </div>
                <div class="course-con">
                    <?php query_posts(array("category_name"=>"courses","posts_per_page"=>3));?>
                    <?php if(have_posts()):while(have_posts()):the_post();?>
                    <div class="post post<?php the_Id();?>">    
                        <a href="<?php the_permalink();?>"><img src="<?php echo get_content_first_image(get_the_content());?>" alt=""></a>
                        <a href="<?php the_permalink();?>"><div class="title"><?php the_title()?></div></a>
                        <?php the_content();?>
                    </div>
                    <?php endwhile;else:?>
                    <h4>NO POST</h4>
                    <?php endif;wp_reset_query();?>
                </div>
            </div>
            <div class="sharing">
                <div class="sharing-top">
                    <div class="sharing-png"></div>
                    <span>干货分享</span>
                    <a href="http://localhost/category/sharing/"><div class="sharing-more">more</div></a>
                </div>
                <div class="sharing-con">
                    <?php query_posts(array("category_name"=>"sharing","posts_per_page"=>3));?>
                    <?php if(have_posts()):while(have_posts()):the_post();?>
                    <div class="post post<?php the_Id();?>">    
                        <a href="<?php the_permalink();?>"><div class="pic"><img src="<?php echo get_content_first_image(get_the_content());?>" alt=""></div></a>
                        <div class="detail">
                            <a href="<?php the_permalink();?>"><div class="title"><?php the_title()?></div></a>
                            <div class="time-png"></div>
                            <div class="time"><?php the_time("Y-m-d h:m");?></div> 
                            <?php the_content();?>
                        </div>
                    </div>
                    <?php endwhile;else:?>
                    <h4>NO POST</h4>
                    <?php endif;wp_reset_query();?>
                </div>  
            </div>
            <div class="activities">
                <div class="activities-top">
                    <div class="activities-png"></div>
                    <span>热门活动</span>
                    <a href="http://localhost/category/activites/"><div class="activities-more">more</div></a>
                </div>
                <div class="activities-con">
                    <?php query_posts(array("category_name"=>"activities","posts_per_page"=>3));?>
                    <?php if(have_posts()):while(have_posts()):the_post();?>
                    <div class="post post<?php the_Id();?>">    
                        <a href="<?php the_permalink();?>"><div class="pic"><img src="<?php echo get_content_first_image(get_the_content());?>" alt=""></div></a>
                        <div class="detail">
                            <a href="<?php the_permalink();?>"><div class="title"><?php the_title()?></div></a>
                            <div class="time-png"></div>
                            <div class="time"><?php the_time("Y-m-d h:m");?></div> 
                            <?php the_content();?>
                        </div>
                    </div>
                    <div class="line"></div>
                    <?php endwhile;else:?>
                    <h4>NO POST</h4>
                    <?php endif;wp_reset_query();?>
                </div>  
            </div>
        </div>
        <div class="content-right">

            <div class="top-logo">TOP</div>

            <form action="">
                <label for="hottest-list" class="box popular">最热排行</label>
                <input type="radio" name="list" id="hottest-list">

                <div id="hottest">
                    <div class="hottest-con">
                        <?php query_posts(array("category_name"=>"hottest-list","posts_per_page"=>10));?>
                        <?php if(have_posts()):while(have_posts()):the_post();?>
                        <div class="post post<?php the_Id();?>">    
                            <a href="<?php the_permalink();?>"><div class="pic"><img src="<?php echo get_content_first_image(get_the_content());?>" alt=""></div></a>
                            <a href="<?php the_permalink();?>"><div class="title"><?php the_ID()?>&nbsp;<?php the_title()?></div></a>
                            
                        </div>
                        <?php endwhile;else:?>
                        <h4>NO POST</h4>
                        <?php endif;wp_reset_query();?>
                    </div> 
                </div>
                <label for="newest-list"  class="box new">新课上线</label>
                <input type="radio" name="list" id="newest-list">
                <div id="newest">
                    <div class="newest-con">
                        <?php query_posts(array("category_name"=>"newest-list","posts_per_page"=>6));?>
                        <?php if(have_posts()):while(have_posts()):the_post();?>
                        <div class="post post<?php the_Id();?>">    
                            <a href="<?php the_permalink();?>"><div class="pic"><img src="<?php echo get_content_first_image(get_the_content());?>" alt=""></div></a>
                            <a href="<?php the_permalink();?>"><div class="title"><?php the_ID()?>&nbsp;<?php the_title()?></div></a>
                            
                        </div>
                        <?php endwhile;else:?>
                        <h4>NO POST</h4>
                        <?php endif;wp_reset_query();?>
                    </div> 
                </div>
            </form>


            <div class="line"></div> 
            <div class="right-logo"></div>
            <h2>腾讯大学</h2>
            <div class="description">
                    腾讯大学作为腾讯特色的学习交流平台，服务于腾讯合作伙伴及用户，面向互联网产业链，传播腾讯经验，分享行业知识及优秀实践，助力合作伙伴成长，推动开放共赢的互联网生态圈的建立。
            </div>
            <div class="line"></div> 
            <div class="contact">
                <div class="tel-logo"></div><h2>联系我们</h2>
                <div class="tel-way">
                    <p>合作：university@tencent.com</p>
                    <p>QQ：2813343187</p>
                </div>
            </div>            
        </div>
        <div class="erweima">
            <p>更多腾讯活动资讯</p>
            <div class="erweima-png"></div>
            <p>关注腾讯大学公号</p>
            
        </div>        
    </div>
    <div id="footer" class="clear-top">
        <div class="fenge fenge1"></div>
        <div class="fenge fenge2"></div>
        <div class="fenge fenge3"></div>
        <div class="fenge fenge4"></div>
        <div class="friend-left">
            <h5>开放平台</h5>
            <div class="friend-link">
                <div class="box box1"></div>
                <div class="box box2"></div>
                <div class="box box3"></div>
                <div class="box box4"></div>
                <div class="box box5"></div>
                <div class="box box6"></div>
                <div class="box box7"></div>
                <div class="box box8"></div>
                <div class="box box9"></div>
                <div class="box box10"></div>
                <div class="box box11">更多</div>
            </div>
            <h5>合作伙伴</h5>
            <div class="friend friend1">TechWeb</div>
            <div class="friend friend2">CSDN</div>
            <div class="friend friend3">36Kr</div>
            <div class="friend friend4">DoNews</div>
            <div class="friend friend5">APP游戏部落</div>
            <div class="friend friend6">天极网</div>
            <div class="friend friend7">凤凰网科技频道</div>
            <div class="friend friend8">易观网</div>
            <div class="friend friend9">优亿开发</div>
            <div class="friend friend10">雷锋网</div>
            <div class="friend friend11">飞象网</div>
            <div class="friend friend12">数码港</div>
            <div class="friend friend13">艾瑞网</div>
            <div class="friend friend14">落伍者</div>
            <div class="friend friend15">LAMP人</div>
            <div class="friend friend16">QQ浏览器</div>
            <div class="friend friend17">腾讯科技</div>
            
        </div>
        <div class="friend-right">
            <h5>收听微博</h5>
            <div class="weibo"><div class="weibo-thu"></div>开放平台学院</div>
            <h5>关注空间</h5>
            <div class="Qzone"><div class="zone-thu"></div>开放平台学院</div>
            

        </div>
        <div class="copyright">
            <p>Copyright &copy; 1998 - 2017 Tencent. All Rights Reserved.</p>
        </div>
    </div>
<?php get_footer();?>