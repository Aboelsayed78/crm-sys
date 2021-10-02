<template>
  <div class="patient">
    <div class="patient-panel">
      <span class="patient-img"><img v-bind:src="pic" alt="" /></span>
      <span class="patient">{{ name }}</span>
      <span class="phone">{{ phone }}</span>
      <span class="address">{{ address }}</span>
      <span class="email">{{ email }}</span>
      <span class="active">{{ active }}</span>
      <span class="finish">{{ finished }}</span>
      <span class="date">{{ joined }}</span>
    </div>
    <div class="patient-ext">
      <div class="patient-tickets">
        <div class="patient-active">
          <span class="tickets-title">active tickets</span>
          <div class="tickets-contain">
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
              v-for="patient in patients"
              :key="patient.id"
              :id="patient.id"
              :name="patient.name"
            />
          </div>
        </div>
        <div class="patient-finish">
          <span class="tickets-title">finished tickets</span>
          <div class="tickets-contain">
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
              v-for="patient in patients"
              :key="patient.id"
              :id="patient.id"
              :name="patient.name"
            />
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <button
        class="patient-page"
        onclick="document.getElementById('patient-page').style.display='block'"
      >
        view profile
      </button>
      <button
        class="new-ticket"
        onclick="document.getElementById('new-ticket').style.display='block'"
      >
        new ticket
      </button>
      <button
        class="new-mail"
        onclick="document.getElementById('new-mail').style.display='block'"
      >
        send email
      </button>
      <div class="clear"></div>
    </div>
    <TicketPage
      v-for="patient in patients"
      :key="patient.id"
      :id="patient.id"
      :name="patient.name"
      :phone="patient.phone"
      :joined="patient.joined"
      :birth="patient.birth"
      :status="patient.status"
      :type="patient.type"
    />
    <NewTicket />
    <NewMail />
  </div>
</template>

<script>
import TicketComp from "./TicketComp.vue";
import TicketPage from "./TicketPage.vue";
import NewTicket from "./NewTicket.vue";
import NewMail from "./NewMail.vue";
import patientsData from "../json/Patients_Data.json";
export default {
  data: function () {
    return {
      patients: patientsData,
    };
  },
  name: "patientComp",
  props: [
    "pic",
    "name",
    "phone",
    "address",
    "active",
    "finished",
    "joined",
    "email",
  ],
  components: {
    TicketComp,
    TicketPage,
    NewTicket,
    NewMail,
  },
};
</script>

<style lang="scss">
@import "../assets/general.scss";
.patient {
  .patient-panel {
    background-color: #ddd;
    margin-top: 5px;
    height: 60px;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
    }
    span {
      text-align: center;
      display: inline-block;
      line-height: 2.8;
      font-size: 20px;
      height: 100%;
      border-right: 1px solid #999;
      &.patient-img {
        width: 8%;
        padding: 0 1%;
        border-left: 2px solid $main-color;
        img {
          height: 50px;
          width: 85%;
          border-radius: 50%;
          // border: 1px solid $main-color;
        }
      }
      &.patient,
      &.address,
      &.phone {
        width: 20%;
        padding: 0 1%;
        text-transform: capitalize;
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
        border-right: 2px solid $main-color;
      }
      &.email {
        display: none;
      }
    }
  }
  .patient-ext {
    display: none;
    text-align: left;
    border: 2px solid $main-color;
    background-color: #eee;
    border-top: none;
    margin-bottom: 5px;
    padding: 10px 15px;
    .patient-tickets {
      margin: 40px 0 20px;
      .patient-active,
      .patient-finish {
        width: 49.25%;
        margin-right: 1.5%;
        float: left;
        position: relative;
        .tickets-title {
          text-transform: capitalize;
          background-color: $main-color;
          padding: 5px 5px 5px 5px;
          color: #fff;
          font-size: 18px;
          display: inline-block;
          border-radius: 3px 3px 0px 0px;
          top: -35px;
          position: absolute;
        }
        .tickets-contain {
          background-color: #eee;
          padding: 5px;
          height: 200px;
          overflow: auto;
          border: 2px solid $main-color;
          border-radius: 0px 3px 3px 3px;
          box-shadow: 1px 1px 5px 0px #999;
          .ticket {
            .ticket-panel {
              background-color: #ddd;
              padding: 5px;
              margin-bottom: 5px;
              border-radius: 3px;
              cursor: pointer;
              &:hover {
                background-color: #ccc;
              }
              span {
                text-align: left;
                display: inline-block;
                line-height: 1.7;
                font-size: 18px;
                border-right-color: $main-color;
                &.id {
                  width: 20%;
                  text-align: center;
                  background-color: $main-color;
                  color: #fff;
                  margin-right: 15%;
                  border-radius: 3px;
                  border-right: none;
                }
                &.patient {
                  width: 65%;
                  margin-right: 0;
                  border-right: none;
                  text-transform: capitalize;
                }
                &.appoint {
                  width: 25%;
                  margin-right: 0;
                }
                &.status,
                &.type,
                &.appoint,
                &.phone {
                  display: none;
                }
              }
            }
          }
        }
      }
      .patient-finish {
        margin-right: 0;
      }
    }
    button {
      width: 14%;
      border: none;
      background-color: $main-color;
      border-radius: 0px 3px 3px 0px;
      color: #fff;
      float: right;
      font-size: 20px;
      text-transform: capitalize;
      padding: 10px 0;
      &.new-ticket {
        width: 11.3%;
        border-right: 1px solid #fff;
        border-radius: 0;
      }
      &.new-mail {
        width: 11.4%;
        border-right: 1px solid #fff;
        border-radius: 3px 0 0 3px;
      }
    }
  }
  .modal-new-ticket {
    .modal-content {
      .data-row {
        .patient-row {
          select.patient-name {
            width: 100%;
            margin-right: 0;
          }
          button.new-patient-btn {
            display: none;
          }
        }
      }
    }
  }
}
</style>
