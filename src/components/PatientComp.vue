<template>
  <div class="patient">
    <div class="patient-panel">
      <span class="patient-img"><img src="../assets/My-IMG.jpg" alt="" /></span>
      <span class="patient">hazem soliman</span>
      <span class="phone">01015479215</span>
      <span class="address">alexandria</span>
      <span class="email">myemail49@yahoo.com</span>
      <span class="active">1</span>
      <span class="finish">4</span>
      <span class="date">28-11-2021</span>
    </div>
    <div class="patient-ext">
      <div class="patient-tickets">
        <div class="patient-active">
          <span class="tickets-title">active tickets</span>
          <div class="tickets-contain">
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
            />
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
            />
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
            />
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
            />
          </div>
        </div>
        <div class="patient-finish">
          <span class="tickets-title">finished tickets</span>
          <div class="tickets-contain">
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
            />
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
            />
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
            />
            <TicketComp
              onclick="document.getElementById('ticket-page').style.display='block'"
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
        class="new-ticket"
        onclick="document.getElementById('new-ticket').style.display='block'"
      >
        send email
      </button>
      <div class="clear"></div>
    </div>
    <TicketPage />
    <NewTicket />
  </div>
</template>

<script>
import TicketComp from "./TicketComp.vue";
import TicketPage from "./TicketPage.vue";
import NewTicket from "./NewTicket.vue";
export default {
  name: "patientComp",
  props: {},
  components: {
    TicketComp,
    TicketPage,
    NewTicket,
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
          border: 1px solid $main-color;
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
          background-color: #fff;
          padding: 5px;
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
                  width: 15%;
                  text-align: center;
                  background-color: $main-color;
                  color: #fff;
                  margin-right: 5%;
                  border-radius: 3px;
                  border-right: none;
                }
                &.patient {
                  width: 50%;
                  margin-right: 5%;
                  text-transform: capitalize;
                }
                &.appoint {
                  width: 25%;
                  margin-right: 0;
                  border-right: none;
                }
                &.status,
                &.type,
                &.phone,
                &.email {
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
