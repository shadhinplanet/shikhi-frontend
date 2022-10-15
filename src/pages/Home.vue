<template>
  <div class="">

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

  </div>
</template>

<script>
import CourseItem from "../components/CourseItem.vue";
import RingLoader from "vue-spinner/src/RingLoader.vue";
import http from "axios";

export default {
  components: { CourseItem, RingLoader },
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    async getCourses() {
      await http.get("courses").then((res) => {
        setTimeout(()=>{
            this.courses = res.data.courses
        },1000)
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