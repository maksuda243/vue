<template>
  <!-- Hero Area Start-->
   <div class="slider-area ">
      <div class="single-slider section-overly slider-height2 d-flex align-items-center" style="background:url(/assets/img/hero/about.jpg)">
          <div class="container">
              <div class="row">
                  <div class="col-xl-12">
                      <div class="hero-cap text-center">
                          <h2>Blog Details</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
   </div>
   <!-- Hero Area End -->
   <!--================Blog Area =================-->
   <section class="blog_area single-post-area pt-3 ">
      <div class="container">
         <div class="row">
            <div class="col-lg-8 posts-list">
               <div class="single-post">
                  <div class="feature-img">
                     <img class="img-fluid" :src="blog.image" alt="">
                  </div>
                  <div class="blog_details">
                     <h2>{{blog.title}}</h2>
                     <ul class="blog-info-link mt-3 mb-4">
                        <li><a href="#"><i class="fa fa-user"></i> {{blog.author}}</a></li>
                     </ul>
                     <p class="excert">
                       {{blog.description}}
                     </p>
                  </div>
               </div>
               <div class="navigation-top">
                  <div class="d-sm-flex justify-content-between text-center">
                     <p class="like-info"><span class="align-middle"><i class="fa fa-heart"></i></span> Lily and 4
                        people like this</p>
                     <div class="col-sm-4 text-center my-2 my-sm-0">
                        <!-- <p class="comment-count"><span class="align-middle"><i class="fa fa-comment"></i></span> 06 Comments</p> -->
                     </div>
                     <ul class="social-icons">
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                        <li><a href="#"><i class="fab fa-behance"></i></a></li>
                     </ul>
                  </div>
                  
               </div>
               <div class="blog-author">
                  <div class="media align-items-center">
                     <img src="/assets/img/blog/author.png" alt="">
                     <div class="media-body">
                        <a href="#">
                           <h4>{{blog.author}}</h4>
                        </a>
                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                           our dominion twon Second divided from</p>
                     </div>
                  </div>
               </div>
              
            </div>
            <div class="col-lg-4">
               <div class="blog_right_sidebar">
                  <aside class="single_sidebar_widget popular_post_widget">
                        <h3 class="widget_title">Recent Post</h3>
                        <div class="media post_item" v-for="rblog in recblogs" :key="rblog.id">
                            <img :src="rblog.image" width="100px" alt="post">
                            <div class="media-body">
                            <router-link :to="'/details/' + rblog.id" ><h3>{{rblog.title}}</h3> </router-link>
                                <p>{{rblog.publish_date}}</p>
                            </div>
                        </div>
                    </aside>
                  
               </div>
            </div>
         </div>
      </div>
   </section>
   <!--================ Blog Area end =================-->
</template>

<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: 'Blogs',
  data() {
    return {
      blog:[],
      recblogs:[]
    };
  },
  methods: {
    singleblog(id) {
       DataService.singleBlog(id)
        .then(response => {
          if(response.data)
            this.blog= response.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
      });
    },
    recblog() {
       DataService.recentblogs()
        .then(response => {
          if(response.data)
            this.recblogs= response.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
      });
    },
  }, mounted() {
    this.singleblog(this.$route.params.id);
    this.recblog();
  }
}
</script>
