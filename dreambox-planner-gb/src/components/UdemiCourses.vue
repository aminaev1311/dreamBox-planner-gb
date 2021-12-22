<template>
  <div class="coursesList">
    <div class="courseCard" v-for="course in udemiCourses" :key="course">
      <div class="cardWrapper">
        <img  class="udemiImg" :src="course.image_240x135" alt="img">
        <div class="udemiTitle"><a :href="course.url">{{ course.title }}</a></div>
        <div class="udemiHeadline">{{ course.headline }}</div>
        <div class="udemiAddTask" @click="udemiAddHandler(course)">Add this as Task</div>
      </div>
      

    </div>
  </div>
</template>

<script>
import { UDEMI_GET_COURSES } from '../misc/constants';
export default {
  data() {
    return {
      udemiCourses: null
    }
  },
  methods: {
    setCourses(payload) {
      this.udemiCourses = payload;
    },
    async fetchUdemi() {
      let fetchedCoursesObject = {};
      const fetchOptions = {
          method: "GET",
          headers: {
            "Accept": "application/json, text/plain, */*",
            "Authorization": "Basic NkRTQnczOXJ0SUFISHpqNXRXRVdDcDZTeDZDaHZIZHJzc0pCUXhpUzpFRjV5dHY5ZUM4NVlVd1NjdTNieUI3S2RIeGd5ZVZCQkRKUU9NeERWeWtVc21iaEI3Y2pmNGV4bHVhelFwd1F2VWRPclc3WWF1a0hHc2x1eEV3cTFKeVhvV0o5Y0h6NmVzbUFKeldXbVlGVFJNMlhicTVBZE5mV0J4VldxTkRtbg==",
            "Content-Type": "application/json;charset=utf-8"
          },
        }
      fetchedCoursesObject = await fetch(UDEMI_GET_COURSES, fetchOptions).then((res) => res.json());
      let fetchedCourses = [];
      for (const key in fetchedCoursesObject) {
        fetchedCourses.push(fetchedCoursesObject[key]);
      }
      console.log(fetchedCourses);

      this.udemiCourses = fetchedCourses[3]
    },
    udemiAddHandler(course) {
      let udemiTask = {
        id: null,
        title: "Check the " + course.title + " course on Udemi",
        text: "Course headline is " + course.headline,
        deadline: null,
        status: "active"
      }
      console.log(udemiTask)
      this.$emit("addUdemiTask", udemiTask)
    }
    
  },
  mounted() {
    this.fetchUdemi()
  }
}
</script>

<style lang="sass" scoped>
  a 
    text-decoration: none
    color: brown
  .coursesList
    font-family: Lato
    display: flex
    justify-content: space-between
    flex-wrap: wrap
  .courseCard
    margin: 16px
    width: 360px
    background: #E5E5E5
    padding: 24px
    border-radius: 16px
    position: relative
  .cardWrapper
    width: 336px  
    
  .udemiTitle
    margin-top: 24px
    font-weight: bold
    font-size: 1.2em
  .udemiHeadline
    margin: 16px
    text-align: left
  .udemiAddTask
    padding: 4px
    position: absolute
    bottom: 8px
    right: 16px
    border: 1px solid darkgrey
    border-radius: 8px
    

  

    
</style>