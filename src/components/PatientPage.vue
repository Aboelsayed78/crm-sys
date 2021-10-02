<template>
  <div class="patient-page">
    <div id="patient-page" class="modal-patient-page">
      <form class="modal-content" action="/action_page.php">
        <span
          onclick="document.getElementById('patient-page').style.display='none'"
          class="close"
          title="Close"
          >&times;</span
        >
        <div class="contain">
          <div class="modal-head">
            <span>patient page</span>
          </div>
          <div class="patient-img">
            <img v-bind:src="pic" alt="patient-Img" />
            <input type="file" id="img-up" />
            <label for="img-up" class="vanish">
              <font-awesome-icon icon="image" />
            </label>
          </div>

          <div class="data-row">
            <label for="id"><b>patient ID</b></label>
            <span>{{ id }}</span>
          </div>

          <div class="data-row">
            <label for="name"><b>name</b></label>
            <span>{{ name }}</span>
            <input
              type="text"
              name="name"
              class="vanish"
              value="youssef ahmed"
            />
          </div>

          <div class="data-row">
            <label for="birth"><b>birth date</b></label>
            <span>{{ birth }}</span>
            <input type="date" name="birth" class="vanish" />
          </div>

          <div class="data-row">
            <label for="gender"><b>gender</b></label>
            <span>{{ gender }}</span>
          </div>

          <div class="data-row">
            <label for="address"><b>address</b></label>
            <span>{{ address }}</span>
            <input
              type="text"
              name="address"
              class="vanish"
              value="alexandria"
            />
          </div>

          <div class="data-row">
            <label for="phone"><b>phone</b></label>
            <span>{{ phone }}</span>
            <input
              type="number"
              name="phone"
              class="vanish"
              value="01254987646"
            />
          </div>

          <div class="data-row">
            <label for="email"><b>email</b></label>
            <span>{{ email }}</span>
            <input
              type="email"
              name="email"
              class="vanish"
              value="myemail49@yahoo.com"
            />
          </div>

          <div class="data-files">
            <div class="files-head">
              <span>patient files</span>
              <input type="file" name="" id="file-up" />
              <label for="file-up">upload a file</label>
            </div>
          </div>

          <div class="modal-foot">
            <button type="button" id="save-patient" class="vanish">
              save profile
            </button>
            <button type="button" id="edit-patient">edit profile</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "patientPage",
  props: [
    "id",
    "pic",
    "name",
    "birth",
    "gender",
    "phone",
    "address",
    "active",
    "finished",
    "joined",
    "email",
  ],
  components: {},
  mounted: function () {
    $("#edit-patient").click(function () {
      $("#save-patient").removeClass("vanish");

      $(".modal-patient-page .patient-img label.vanish").removeClass("vanish");

      $(".modal-patient-page .data-row input.vanish").removeClass("vanish");

      $(this).addClass("vanish");
    });

    $("#save-patient").click(function () {
      $("#edit-patient").removeClass("vanish");

      $(".modal-patient-page .patient-img label").addClass("vanish");

      $(".modal-patient-page .data-row input").addClass("vanish");

      $(this).addClass("vanish");
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.modal-patient-page {
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
      color: #fff;
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
        width: 20%;
        margin: 30px auto;
        text-align: center;
        position: relative;
        img {
          width: 100%;
          border-radius: 50%;
          border: 2px solid #eee;
          box-shadow: 1px 1px 5px 0 #999;
          margin-bottom: 20px;
        }
        #img-up {
          display: none;
        }
        label {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 20px;
          background-color: #0005;
          border-radius: 50%;
          cursor: pointer;
          svg {
            font-size: 35px;
            margin: 75px;
            display: block;
            color: #ddd;
          }
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
        span {
          width: 35%;
          margin-right: 5%;
        }
        input {
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
        }
      }
      .vanish {
        display: none;
      }
    }
  }
}
</style>
