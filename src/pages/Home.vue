<template>
  <div class="">
    <Header></Header>

    <section class="pt-4 pb-4">
      <div class="container">
        <h3 class="fw-bolder">Courses</h3>
        <div class="spinner" v-show="courses == ''">
            <ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
       
        </div>
        <div class="row" v-show="courses">
          <CourseItem
            v-for="course in courses"
            :key="course.id"
            :course="course"
          ></CourseItem>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CourseItem from "../components/CourseItem.vue";
import RingLoader from "vue-spinner/src/RingLoader.vue";
import http from "axios";

export default {
  components: { Header, Footer, CourseItem, RingLoader },
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    async getCourses() {
      await http.get("http://shikhi-backend.test/api/courses").then((res) => {
        setTimeout(()=>{
            this.courses = res.data.courses
        },3000)
      });
    },
  },
  mounted() {
    this.getCourses();
  },
};
</script>

<style>

.spinner {
	display: flex;
	justify-content: center;
	padding: 40px;
}

</style>