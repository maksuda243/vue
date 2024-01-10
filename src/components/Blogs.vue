<template>
<!-- Hero Area Start-->
    <div class="slider-area ">
        <div class="single-slider section-overly slider-height2 d-flex align-items-center" style="background:url(/assets/img/hero/about.jpg)">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="hero-cap text-center">
                            <h2>Job Blog</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Hero Area End -->
  <section class="blog_area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-5 mb-lg-0">
          <div class="blog_left_sidebar">
            <article class="blog_item" v-for="blog in blogs" :key="blog.id">
              <div class="blog_item_img">
                <img class="card-img rounded-0" :src="blog.image" alt="">
                <a href="#" class="blog_item_date">
                  <h3>{{blog.day}}</h3>
                  <p>{{blog.month}}</p>
                </a>
              </div>

              <div class="blog_details">
                <router-link :to="'/details/' + blog.id"  class="d-inline-block"><h2>{{blog.title}}</h2> </router-link>
                
                <p>{{blog.short_description}}</p>
                <ul class="blog-info-link">
                  <li><a href="#"><i class="fa fa-user"></i> {{blog.author}}</a></li>
                </ul>
              </div>
            </article>
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
</template>

<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: 'Blogs',
  data() {
    return {
      blogs:[],
      recblogs:[]
    };
  },
  methods: {
    Allblog() {
       DataService.blogs()
        .then(response => {
          if(response.data)
            this.blogs= response.data;
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
    this.Allblog();
    this.recblog();
  }
}
</script>
