<template>
  <div class="ticket">
    <div class="ticket-panel">
      <span class="id">{{ id }}</span>
      <span class="patient">{{ name }}</span>
      <span class="phone">{{ phone }}</span>
      <span class="type">{{ type }}</span>
      <span class="status">{{ status }}</span>
      <span class="appoint">{{ joined }}</span>
    </div>
    <div class="ticket-ext">
      <h4>ticket description</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quaerat,
        ex, voluptatibus doloremque placeat illum ratione culpa numquam porro
        eaque eligendi tenetur quidem assumenda provident iusto ullam aut enim
        molestiae!
      </p>
      <button
        onclick="document.getElementById('ticket-page').style.display='block'"
      >
        view ticket
      </button>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketComp",
  props: ["id", "name", "phone", "status", "type", "joined"],
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.ticket {
  .ticket-panel {
    background-color: #ddd;
    margin-top: 4px;
    height: 40px;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
    }
    span {
      display: inline-block;
      font-size: 20px;
      line-height: 2;
      text-transform: capitalize;
      text-align: center;
      border-right: 1px solid #999;
      &.id {
        width: 10%;
        height: 100%;
        background-color: $main-color;
        color: #eee;
        padding: 0 1%;
        border-right: 1px solid #ddd;
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
        border-right: 2px solid $main-color;
      }
    }
  }
  .ticket-ext {
    display: none;
    text-align: left;
    border: 2px solid $main-color;
    background-color: #eee;
    border-top: none;
    margin-bottom: 5px;
    padding: 10px;
    h4 {
      display: inline-block;
      margin: 5px 0;
      padding: 5px 0;
      text-transform: capitalize;
      border-bottom: 2px solid $main-color;
    }
    p {
      font-size: 18px;
      margin: 10px 0;
      text-transform: capitalize;
    }
    button {
      width: 13%;
      border: none;
      background-color: $main-color;
      border-radius: 3px;
      color: #fff;
      float: right;
      font-size: 20px;
      text-transform: capitalize;
      padding: 10px 0;
    }
  }
}
</style>
