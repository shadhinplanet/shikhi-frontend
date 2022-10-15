<template>
  <div class="col-lg-4 col-md-6 col-12 mt-4">
    <div class="card">
      <img :src="course.thumbnail" class="card-img-top" alt="" />
      <i class="bi bi-bookmark card-bookmark"></i>
      <div class="card-body pb-0">
        <h5 class="card-title mt-3 mb-3">{{ course.name }}</h5>
        <div class="tutor-meta mb-3">
          <div class="d-inline">
            <span
              class="tutor-meta-icon tutor-icon-user-line"
              area-hidden="true"
              ><i class="bi bi-person"></i
            ></span>
            <span class="tutor-meta-value">{{ course.student.length }}</span>
          </div>

   
        </div>

        <div class="tutor-meta">
          <div class="d-inline">
            <div class="tutor-avatar d-inline">
              <img
                :src="'https://ui-avatars.com/api/?background=0D8ABC&color=fff&name='+course.teacher.name"
                alt=""
                srcset=""
              />
            </div>
          </div>

          <div class="d-inline">
            By
            <a href="#">{{ course.teacher.name }}</a>
            In
            <a href="#">{{ course.category?.name }}</a>
          </div>
        </div>
      </div>
      <hr class="border-1 mb-2" />
      <router-link :to="'/course/' + course.slug" class="btn-tutor">Enroll Course</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['course'],
};
</script>

<style>
</style>