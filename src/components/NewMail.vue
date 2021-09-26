<template>
  <div class="new-mail">
    <div id="new-mail" class="modal-new-mail">
      <form class="modal-content" action="/action_page.php">
        <span
          onclick="document.getElementById('new-mail').style.display='none'"
          class="close"
          title="Close"
          >&times;</span
        >
        <div class="contain">
          <div class="modal-head">
            <span>new mail</span>
          </div>

          <div class="data-row">
            <label for="id"><b>to</b></label>
            <span>myemail49@gmail.com</span>
          </div>

          <div class="mail-content">
            <h4>content</h4>
            <textarea cols="15" rows="5"></textarea>
          </div>

          <div class="modal-foot">
            <button id="send">send</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.modal-new-mail {
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
          margin-left: 1%;
        }
      }
      .mail-content {
        text-align: center;
        margin-bottom: 20px;
        color: #555;
        h4 {
          display: inline-block;
          padding: 5px;
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
          color: #fff;
          border-radius: 0 0 20px 20px;
          transition: all 0.3s ease-in-out;
        }
      }
    }
  }
}
</style>
