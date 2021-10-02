<template>
  <div class="new-patient">
    <div id="new-patient" class="modal-new-patient">
      <form class="modal-content" action="/action_page.php">
        <span
          onclick="document.getElementById('new-patient').style.display='none'"
          class="close"
          title="Close"
          >&times;</span
        >
        <div class="contain">
          <div class="modal-head">
            <span>new patient</span>
          </div>
          <div class="patient-img">
            <img src="../assets/My-IMG.jpg" alt="patient-Img" />
            <input type="file" id="img-up" />
            <label for="img-up">
              <font-awesome-icon icon="image" />
            </label>
          </div>

          <div class="data-row">
            <label for="id"><b>patient ID</b></label>
            <span>4868</span>
          </div>

          <div class="data-row">
            <label for="name"><b>name</b></label>
            <input type="text" name="name" placeholder="Name" />
          </div>

          <div class="data-row">
            <label for="birth"><b>birth date</b></label>
            <input type="date" name="birth" />
          </div>

          <div class="data-row">
            <label for="gender"><b>gender</b></label>
            <select name="" id="">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div class="data-row">
            <label for="address"><b>address</b></label>
            <input type="text" name="address" placeholder="Address" />
          </div>

          <div class="data-row">
            <label for="phone"><b>phone</b></label>
            <input type="number" name="phone" placeholder="Phone" />
          </div>

          <div class="data-row">
            <label for="email"><b>email</b></label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div class="data-files">
            <div class="files-head">
              <span>patient files</span>
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
// import $ from "jquery";
export default {
  name: "NewPatient",
  props: {},
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.modal-new-patient {
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
    }
  }
}
</style>
