<template>
  <div class="tickets">
    <div class="controls">
      <div class="filter"></div>
      <button
        onclick="document.getElementById('new-ticket').style.display='block'"
      >
        <font-awesome-icon icon="plus" />
        <span>new ticket</span>
      </button>
      <div class="clear"></div>
    </div>
    <div class="tickets-list">
      <div class="tickets-contain">
        <div class="ticket-info">
          <span class="id">ID</span>
          <span class="patient">name</span>
          <span class="phone">phone</span>
          <span class="type">type</span>
          <span class="status">status</span>
          <span class="appoint">appointment</span>
        </div>
        <TicketComp />
        <TicketComp />
        <TicketComp />
        <TicketComp />
        <TicketComp />
        <TicketComp />
        <TicketComp />
        <TicketComp />
      </div>
      <TicketPage />
      <NewTicket />
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import TicketComp from "../components/TicketComp.vue";
import TicketPage from "../components/TicketPage.vue";
import NewTicket from "../components/NewTicket.vue";
export default {
  name: "Tickets",
  props: {},
  components: {
    TicketComp,
    TicketPage,
    NewTicket,
  },
  mounted: function () {
    $(".ticket-panel").click(function () {
      $(this).parent().children(".ticket-ext").slideToggle();
    });
  },
};
</script>

<style scoped lang="scss">
@import "../assets/general.scss";
.tickets {
  padding: 15px;
  margin-top: 78px;
  background-color: #fff;
  .controls {
    margin: 20px 0;
    button {
      width: 14.1%;
      border: none;
      background-color: #42b983;
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
  .tickets-list {
    margin-bottom: 30px;
    .tickets-contain {
      .ticket-info {
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
          &.id {
            width: 10%;
            height: 100%;
            padding: 0 1%;
          }
          &.status,
          &.type,
          &.appoint {
            width: 14%;
            padding: 0 1%;
          }
          &.patient,
          &.phone {
            width: 24%;
            padding: 0 1%;
          }
          &.appoint {
            border-right: none;
          }
        }
      }
    }
  }
}
</style>
