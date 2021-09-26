<template>
  <div class="ticket-page">
    <div id="ticket-page" class="modal-ticket-page">
      <form class="modal-content" action="/action_page.php">
        <span
          onclick="document.getElementById('ticket-page').style.display='none'"
          class="close"
          title="Close"
          >&times;</span
        >
        <div class="contain">
          <div class="modal-head">
            <span>ticket page</span>
          </div>

          <div class="data-row">
            <label for="id"><b>ticket ID</b></label>
            <span>5149</span>
          </div>

          <div class="data-row">
            <label for="name"><b>name</b></label>
            <span>Youssef Ahmed</span>
            <select name="patient-name" id="" class="vanish">
              <option value="">Select Patient</option>
              <option value="youssef">Mohamed Ahmed</option>
              <option value="hazem">Sara Zeyad</option>
              <option value="mohamed">Ahmed Elsayed</option>
            </select>
          </div>

          <div class="data-row">
            <label for="phone"><b>phone</b></label>
            <span>01095486187</span>
          </div>

          <div class="data-row">
            <label for="reserved"><b>reserved at</b></label>
            <span>23/10/2021</span>
            <input type="date" name="reserved" class="vanish" />
          </div>

          <div class="data-row">
            <label for="appointment"><b>appointment</b></label>
            <span>29/10/2021</span>
            <input type="date" name="appointment" class="vanish" />
          </div>

          <div class="data-row">
            <label for="status"><b>status</b></label>
            <span>active</span>
            <select name="status" id="" class="vanish">
              <option value="active">Active</option>
              <option value="finished">Finished</option>
            </select>
          </div>

          <div class="data-row">
            <label for="type"><b>type</b></label>
            <span>examine</span>
            <select name="type" id="" class="vanish">
              <option value="">Select Type</option>
              <option value="examine">Examine</option>
              <option value="consult">consult</option>
              <option value="surgery">Surgery</option>
            </select>
          </div>

          <div class="ticket-descrip">
            <h4>description</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis dolor veritatis voluptatibus harum excepturi
              exercitationem in nihil! Sint, hic eveniet non quis ut repellendus
              debitis error illo vel molestias autem.
            </p>
            <textarea cols="15" rows="5" class="vanish">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis dolor veritatis voluptatibus harum excepturi
              exercitationem in nihil! Sint, hic eveniet non quis ut repellendus
              debitis error illo vel molestias autem.
            </textarea>
          </div>

          <div class="data-files">
            <div class="files-head">
              <span>ticket files</span>
              <input type="file" name="" id="file-up" />
              <label for="file-up">upload a file</label>
            </div>
          </div>

          <div class="modal-foot">
            <button type="button" id="save-ticket" class="vanish">
              save ticket
            </button>
            <button type="button" id="edit-ticket">edit ticket</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "TicketPage",
  props: {},
  components: {},
  mounted: function () {
    $("#edit-ticket").click(function () {
      $("#save-ticket").removeClass("vanish");

      $(".modal-ticket-page .data-row input.vanish").removeClass("vanish");

      $(".modal-ticket-page .data-row select.vanish").removeClass("vanish");

      $(".modal-ticket-page .ticket-descrip textarea.vanish").removeClass(
        "vanish"
      );

      $(this).addClass("vanish");
    });

    $("#save-ticket").click(function () {
      $("#edit-ticket").removeClass("vanish");

      $(".modal-ticket-page .data-row input").addClass("vanish");

      $(".modal-ticket-page .data-row select").addClass("vanish");

      $(".modal-ticket-page .ticket-descrip textarea").addClass("vanish");

      $(this).addClass("vanish");
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.modal-ticket-page {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #474e5dd9;
  padding-top: 50px;
  .modal-content {
    background-color: #eee;
    margin: 0 auto 5% auto;
    width: 70%;
    border: none;
    border-radius: 20px;
    .close {
      position: absolute;
      right: 25px;
      top: -3px;
      font-size: 45px;
      font-weight: bold;
      color: #f1f1f1;
      &:hover,
      &:focus {
        color: #f44336;
        cursor: pointer;
      }
    }
    .contain {
      padding: 0;
      .modal-head {
        background-color: $main-color;
        border-radius: 20px 20px 0px 0px;
        padding: 10px 0;
        span {
          font-size: 28px;
          color: #eee;
          text-transform: capitalize;
          font-weight: bold;
        }
      }
      .ticket-img {
        width: 25%;
        margin: 30px auto;
        img {
          width: 100%;
          border-radius: 50%;
          border: 2px solid #eee;
          box-shadow: 1px 1px 5px 0 #999;
          margin-bottom: 20px;
        }
      }
      .data-row {
        text-align: left;
        padding: 10px 40px;
        font-size: 18px;
        border-bottom: 1px solid #ddd;
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: #ddd;
        }
        label,
        span {
          color: #555;
          display: inline-block;
          text-transform: capitalize;
        }
        label {
          width: 20%;
          margin-right: 5%;
        }
        span {
          width: 35%;
          margin-right: 5%;
        }
        input,
        select {
          padding: 5px;
          width: 35%;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 3px;
          &:focus {
            outline: none;
            border: 1px solid $main-color;
          }
        }
      }
      .ticket-descrip {
        text-align: center;
        margin-bottom: 20px;
        color: #555;
        h4 {
          width: 18%;
          padding: 5px 0;
          margin: 20px auto;
          text-transform: capitalize;
          font-weight: bold;
          border-bottom: 2px solid $main-color;
          color: #555;
        }
        p {
          line-height: 1.75;
          font-size: 18px;
          padding: 0 40px;
        }
        textarea {
          line-height: 1.2;
          font-size: 18px;
          width: 90%;
          padding: 5px;
          margin: 20px 5%;
          border: 2px solid #ccc;
          border-radius: 3px;
          &:focus {
            outline: none;
            border: 2px solid $main-color;
          }
        }
      }
      .data-files {
        padding: 10px 40px;
        text-align: left;
        margin: 10px 0;
        .files-head {
          overflow: hidden;
          span {
            float: left;
            font-size: 21px;
            font-weight: bold;
            text-transform: capitalize;
            padding: 5px 0;
            color: #555;
            border-bottom: 2px solid $main-color;
          }
          input {
            display: none;
          }
          label {
            float: right;
            text-transform: capitalize;
            padding: 10px;
            background-color: $main-color;
            color: #fff;
            cursor: pointer;
            border-radius: 3px;
          }
        }
      }
      .modal-foot {
        background-color: $main-color;
        border-radius: 0 0 20px 20px;
        button {
          background-color: transparent;
          width: 100%;
          padding: 10px 0;
          font-size: 28px;
          text-transform: capitalize;
          font-weight: bold;
          border: none;
          color: #eee;
          border-radius: 0 0 20px 20px;
          transition: all 0.3s ease-in-out;
        }
      }
      .vanish {
        display: none;
      }
    }
  }
}
</style>
