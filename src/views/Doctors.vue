<template>
  <div class="doctors">
    <div class="controls">
      <div class="filter"></div>
      <button onclick="document.getElementById('new-doctor').style.display='block'">
        <font-awesome-icon icon="user-plus" />
        <span>new doctor</span>
      </button>
      <div class="clear"></div>
    </div>
    <div class="doctors-list">
      <div class="doctors-contain">
        <DoctorComp />
        <DoctorComp />
        <DoctorComp />
        <DoctorComp />
        <DoctorComp />
        <DoctorComp />
        <DoctorComp />
        <DoctorComp />
        <div class="clear"></div>
      </div>
      <DoctorPage />
      <NewDoctor />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import DoctorComp from "../components/DoctorComp.vue";
import DoctorPage from "../components/DoctorPage.vue";
import NewDoctor from "../components/NewDoctor.vue";
export default {
  name: "patients",
  props: {},
  components: {
    DoctorComp,
    DoctorPage,
    NewDoctor,
  },
  mounted: function () {
    $(".doctor-panel").click(function () {
      $(this).parent().children(".doctor-ext").slideToggle();
    });
  },
};
</script>

<style scoped lang="scss">
@import "../assets/general.scss";
.doctors {
  padding: 15px;
  margin-top: 78px;
  background-color: #fff;
  .controls {
    margin: 20px 0;
    button {
      width: 14%;
      border: none;
      background-color: #42b983;
      border-radius: 3px;
      color: #eee;
      float: right;
      font-size: 20px;
      text-transform: capitalize;
      padding: 10px 0;
      svg{
        margin-right: 10px;
        font-size: 22px;
      }
    }
  }
  .doctors-list {
    .doctors-contain {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      .doctor {
        width: 25%;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
