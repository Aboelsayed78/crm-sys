<template>
  <div class="new-ticket">
    <div id="new-ticket" class="modal-new-ticket">
      <form class="modal-content" action="/action_page.php">
        <span
          onclick="document.getElementById('new-ticket').style.display='none'"
          class="close"
          title="Close Modal"
          >&times;</span
        >
        <div class="contain">
          <div class="modal-head">
            <span>new ticket</span>
          </div>

          <div class="data-row">
            <label for="id"><b>ticket ID</b></label>
            <span>5149</span>
          </div>

          <div class="data-row">
            <label for="name"><b>name</b></label>
            <div class="patient-row">
              <select name="patient-name" id="" class="patient-name">
                <option value="">Select Patient</option>
                <option value="youssef">Youssef Ahmed</option>
                <option value="hazem">Hazem Soliman</option>
                <option value="mohamed">Mohamed Elsayed</option>
              </select>
              <button type="button" class="new-patient-btn">
                <font-awesome-icon icon="user-plus" />
              </button>
            </div>
          </div>

          <div class="data-row new-patient">
            <span>new patient</span>
            <form action="">
              <label for="name"><b>name</b></label>
              <input type="text" name="name" placeholder="Patient Name" />
              <label for="birth-date"><b>birth date</b></label>
              <input type="date" name="birth-date" />
              <label for="email"><b>email</b></label>
              <input type="email" name="email" placeholder="Patient Email" />
              <label for="phone"><b>phone</b></label>
              <input type="number" name="phone" placeholder="Patient Phone" />
              <label for="address"><b>address</b></label>
              <input
                type="text"
                class="patient-address"
                name="address"
                placeholder="Patient Address"
              />
            </form>
          </div>

          <div class="data-row">
            <label for="phone"><b>phone</b></label>
            <span></span>
          </div>

          <div class="data-row">
            <label for="reserved"><b>reserved at</b></label>
            <input type="date" name="reserved" />
          </div>

          <div class="data-row">
            <label for="appointment"><b>appointment</b></label>
            <input type="date" name="appointment" />
          </div>

          <div class="data-row">
            <label for="status"><b>status</b></label>
            <select name="status" id="">
              <option value="active">Active</option>
              <option value="finished">Finished</option>
            </select>
          </div>

          <div class="data-row">
            <label for="type"><b>type</b></label>
            <select name="type" id="">
              <option value="">Select Type</option>
              <option value="examine">Examine</option>
              <option value="consult">Consult</option>
              <option value="surgery">Surgery</option>
            </select>
          </div>

          <div class="ticket-descrip">
            <h4>description</h4>
            <textarea cols="15" rows="5">
              Descripe Patient Status
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
            <button id="save">save profile</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "NewTicket",
  props: {},
  components: {},
  mounted: function () {
    $(".data-row button.new-patient-btn").click(function () {
      $(".data-row.new-patient").slideToggle();
      $(".patient-name").fadeToggle();
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.modal-new-ticket {
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
          color: #fff;
          text-transform: capitalize;
          font-weight: bold;
        }
      }
      .patient-img {
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
        }
        label {
          width: 20%;
          text-transform: capitalize;
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
        .patient-row {
          width: 35%;
          display: inline-block;
          select.patient-name {
            width: 80%;
            margin-right: 5%;
          }
          button.new-patient-btn {
            width: 15%;
            border: none;
            background: $main-color;
            color: #fff;
            padding: 5px;
            border-radius: 3px;
          }
        }
        &.new-patient {
          background-color: #ddd;
          padding: 0;
          border-bottom: 2px solid $main-color;
          display: none;
          span {
            display: block;
            padding: 5px 0;
            margin-bottom: 10px;
            text-transform: capitalize;
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            color: #fff;
            background-color: $main-color;
          }
          form {
            padding: 10px 40px;
            label {
              width: 15%;
              margin-right: 0;
            }
            input {
              width: 30%;
              margin: 5px 2.5%;
              &.patient-address {
                width: 80%;
              }
            }
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
          color: #fff;
          border-radius: 0 0 20px 20px;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: #1d975e;
          }
        }
      }
    }
  }
}
</style>
