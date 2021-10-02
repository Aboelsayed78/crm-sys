<template>
  <div class="patients">
    <div class="controls">
      <div class="filter"></div>
      <button
        onclick="document.getElementById('new-patient').style.display='block'"
      >
        <font-awesome-icon icon="user-plus" />
        <span>new patient</span>
      </button>
      <div class="clear"></div>
    </div>
    <div class="patients-list">
      <div class="patients-contain">
        <div class="patient-info">
          <span class="patient-img">image</span>
          <span class="patient">name</span>
          <span class="phone">phone</span>
          <span class="address">address</span>
          <span class="active">active</span>
          <span class="finish">finished</span>
          <span class="date">date</span>
        </div>

        <PatientComp
          v-for="patient in patients"
          :key="patient.id"
          :pic="patient.pic"
          :name="patient.name"
          :phone="patient.phone"
          :address="patient.address"
          :active="patient.active"
          :finished="patient.finished"
          :joined="patient.joined"
          :email="patient.email"
        />
      </div>
      <PatientPage
        v-for="patient in patients"
        :key="patient.id"
        :id="patient.id"
        :pic="patient.pic"
        :name="patient.name"
        :birth="patient.birth"
        :gender="patient.gender"
        :address="patient.address"
        :phone="patient.phone"
        :joined="patient.joined"
        :email="patient.email"
      />
      <NewPatient />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import PatientComp from "../components/PatientComp.vue";
import PatientPage from "../components/PatientPage.vue";
import NewPatient from "../components/NewPatient.vue";
import patientsData from "../json/Patients_Data.json";
export default {
  data: function () {
    return {
      patients: patientsData,
    };
  },
  name: "patients",
  props: {},
  components: {
    PatientComp,
    PatientPage,
    NewPatient,
  },
  mounted: function () {
    $(".patient-panel").click(function () {
      $(this).parent().children(".patient-ext").slideToggle();
    });
  },
};
</script>

<style scoped lang="scss">
@import "../assets/general.scss";
.patients {
  padding: 15px;
  margin-top: 78px;
  background-color: #fff;
  .controls {
    margin: 20px 0;
    button {
      width: 15%;
      border: none;
      background-color: $main-color;
      border-radius: 3px;
      color: #fff;
      float: right;
      font-size: 20px;
      text-transform: capitalize;
      padding: 10px 0;
      svg {
        margin-right: 10px;
        font-size: 22px;
      }
    }
  }
  .patients-list {
    margin-bottom: 30px;
    .patients-contain {
      .patient-info {
        margin-bottom: 3px;
        background-color: $main-color;
        span {
          display: inline-block;
          font-size: 20px;
          color: #fff;
          line-height: 2;
          text-transform: capitalize;
          text-align: center;
          border-right: 2px solid #eee;
          &.patient-img {
            width: 8%;
            height: 100%;
            padding: 0 1%;
          }
          &.patient,
          &.phone {
            width: 20%;
            padding: 0 1%;
          }
          &.active,
          &.finish,
          &.date,
          &.address {
            width: 11%;
            padding: 0 1%;
          }
          &.date,
          &.address {
            width: 15%;
          }
          &.date {
            border-right: none;
          }
        }
      }
    }
  }
}
</style>
