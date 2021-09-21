<template>
  <div class="doctor-page">
    <div id="doctor-page" class="modal-doctor-page">
      <form class="modal-content" action="/action_page.php">
        <span
          onclick="document.getElementById('doctor-page').style.display='none'"
          class="close"
          title="Close Modal"
          >&times;</span
        >
        <div class="contain">
          <div class="modal-head">
            <span>doctor page</span>
          </div>
          <div class="doctor-img">
            <img src="../assets/My-IMG.jpg" alt="Doctor-Img" />
            <input type="file" class="vanish" />
          </div>

          <div class="data-row">
            <label for="id"><b>Doctor ID</b></label>
            <span>485</span>
          </div>

          <div class="data-row">
            <label for="name"><b>name</b></label>
            <span>youssef ahmed</span>
            <input
              type="text"
              name="name"
              class="vanish"
              value="youssef ahmed"
            />
          </div>

          <div class="data-row">
            <label for="phone"><b>phone</b></label>
            <span>01265549456</span>
            <input
              type="number"
              name="id"
              class="vanish"
              value=""
              placeholder="01265549456"
            />
          </div>

          <div class="data-row">
            <label for="address"><b>address</b></label>
            <span>alexandria</span>
            <input type="text" name="id" class="vanish" value="alexandria" />
          </div>

          <div class="data-row">
            <label for="category"><b>category</b></label>
            <span>جراحة</span>
            <select name="category" id="" class="vanish">
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
            <span>myemail49@yahoo.com</span>
            <input
              type="email"
              name="id"
              class="vanish"
              value="myemail49@yahoo.com"
            />
          </div>

          <div class="data-row">
            <label for="joined-date"><b>joined at</b></label>
            <span>15/6/2021</span>
            <input type="date" name="joined-date" class="vanish" />
          </div>

          <div class="doctor-bio">
            <h4>Biography</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed
              porro fugiat magni cumque nesciunt, aperiam voluptates sequi est
              officia odio totam deserunt adipisci libero ea, repudiandae,
              laborum voluptatum maxime!
            </p>
            <textarea class="vanish" cols="15" rows="5">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet sed
              porro fugiat magni cumque nesciunt, aperiam voluptates sequi est
              officia odio totam deserunt adipisci libero ea, repudiandae,
              laborum voluptatum maxime!</textarea
            >
          </div>

          <div class="modal-foot">
            <button type="button" id="save-doctor" class="vanish">
              save profile
            </button>
            <button type="button" id="edit-doctor">edit ticket</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "DoctorPage",
  props: {},
  components: {},
  mounted: function () {
    $("#edit-doctor").click(function () {
      $("#save-doctor").removeClass("vanish");

      $(".modal-doctor-page .doctor-img input.vanish").removeClass("vanish");

      $(".modal-doctor-page .data-row input.vanish").removeClass("vanish");

      $(".modal-doctor-page .data-row select").removeClass("vanish");

      $(".modal-doctor-page .doctor-bio textarea.vanish").removeClass("vanish");

      $(this).addClass("vanish");
    });

    $("#save-doctor").click(function () {
      $("#edit-doctor").removeClass("vanish");

      $(".modal-doctor-page .doctor-img input").addClass("vanish");

      $(".modal-doctor-page .data-row input").addClass("vanish");

      $(".modal-doctor-page .data-row select").addClass("vanish");

      $(".modal-doctor-page .doctor-bio textarea").addClass("vanish");

      $(this).addClass("vanish");
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.modal-doctor-page {
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
      .vanish {
        display: none;
      }
    }
  }
}
</style>
