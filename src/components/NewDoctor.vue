<template>
  <div class="new-doctor">
    <div id="new-doctor" class="modal-new-doctor">
      <form class="modal-content" action="/action_page.php">
        <span
          onclick="document.getElementById('new-doctor').style.display='none'"
          class="close"
          title="Close Modal"
          >&times;</span
        >
        <div class="contain">
          <div class="modal-head">
            <span>new patient</span>
          </div>
          <div class="doctor-img">
            <img src="../assets/My-IMG.jpg" alt="Doctor-Img" />
            <input type="file" />
          </div>

          <div class="data-row">
            <label for="id"><b>Doctor ID</b></label>
            <span>485</span>
          </div>

          <div class="data-row">
            <label for="name"><b>name</b></label>
            <input type="text" name="name" placeholder="Doctor Name" />
          </div>

          <div class="data-row">
            <label for="phone"><b>phone</b></label>
            <input type="number" name="id" placeholder="Doctor Phone" />
          </div>

          <div class="data-row">
            <label for="address"><b>address</b></label>
            <input type="text" name="id" placeholder="Doctor Address" />
          </div>

          <div class="data-row">
            <label for="category"><b>category</b></label>
            <select name="category" id="">
              <option value="">Select category</option>
              <option value="internal">باطنة</option>
              <option value="teeth">أسنان</option>
              <option value="surgery">جراحة</option>
              <option value="skin">جلدية</option>
              <option value="chest">صدرية</option>
              <option value="women">نسا وتوليد</option>
              <option value="eyes">عيون</option>
              <option value="ears-nose">أنف وأذن وحنجرة</option>
            </select>
          </div>

          <div class="data-row">
            <label for="id"><b>email</b></label>
            <input type="email" name="id" placeholder="Doctor Email" />
          </div>

          <div class="data-row">
            <label for="joined-date"><b>joined at</b></label>
            <input type="date" name="joined-date" />
          </div>

          <div class="doctor-bio">
            <h4>Biography</h4>
            <textarea cols="15" rows="5">Doctor Biography</textarea>
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
  name: "NewDoctor",
  props: {},
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.modal-new-doctor {
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
      .doctor-img {
        width: 25%;
        margin: 30px auto;
        text-align: center;
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
      }
      .doctor-bio {
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
          &:hover {
            background-color: #1d975e;
          }
        }
      }
    }
  }
}
</style>
