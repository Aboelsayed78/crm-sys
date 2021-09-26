<template>
  <div class="main-page">
    <div class="header">
      <font-awesome-icon icon="bars" class="side-toggle" />
      <div class="search-form">
        <form action="">
          <input type="text" placeholder="Search In Tickets And Customers" />
          <button>search</button>
          <div class="clear"></div>
        </form>
      </div>
      <div class="user-badge">
        <img src="../assets/My-IMG.jpg" alt="user-pic" />
        <span>Mohamed</span>
        <div class="clear"></div>
      </div>
      <div class="clear"></div>
    </div>
    <router-view />
    <div class="footer">
      <h4>designed by <span>&lt;mohamed elsayed/&gt;</span></h4>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "MainPage",
  props: {},
  components: {},
  mounted: function () {
    $(".side-toggle").click(function () {
      $(".side-bar").toggleClass("mini");
      $(".main-page").toggleClass("extend");
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/general.scss";
.main-page {
  float: right;
  width: 87%;
  overflow: hidden;
  transition: all 0.25s ease-in-out;
  .header {
    position: fixed;
    z-index: 1;
    width: 87%;
    box-shadow: 0 0 4px 0 #ccc;
  }
  .header,
  .footer {
    background-color: #ddd;
    padding: 8px 15px;
    border-bottom: 1px solid #ccc;
    .side-toggle {
      width: 2.5%;
      margin: 13px 2% 0 0.5%;
      float: left;
      font-size: 30px;
      cursor: pointer;
      &:hover {
        color: $main-color;
      }
    }
    .search-form {
      float: left;
      width: 65%;
      margin-right: 15%;
      margin-top: 8px;
      form {
        overflow: hidden;
        input {
          width: 75%;
          height: 40px;
          border: none;
          border-radius: 3px;
          float: left;
          font-size: 22px;
          padding: 5px 10px;
          &:focus {
            outline: none;
            border: 1px solid $main-color;
          }
        }
        button {
          width: 23%;
          height: 40px;
          border: none;
          background-color: $main-color;
          border-radius: 3px;
          color: #fff;
          float: right;
          font-size: 22px;
          text-transform: capitalize;
          padding: 5px;
        }
      }
    }
    .user-badge {
      float: right;
      width: 15%;
      overflow: hidden;
      background-color: $main-color;
      padding: 4px;
      border-radius: 30px;
      transition: all 0.75s ease-in-out;
      img {
        width: 52px;
        height: 52px;
        float: left;
        border: 1px solid #eee;
        border-radius: 50%;
        animation: all 0.75s ease-in-out;
        transition: all 0.75s ease-in-out;
      }
      span {
        width: 60%;
        float: right;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        margin: 9% 3% 0 3%;
        transition: all 0.75s ease-in-out;
      }
    }
  }
  .footer {
    border-top: 1px solid #ccc;
    border-bottom: none;
    position: inherit;
    // margin-top: 250px;
    h4 {
      margin: 10px 0;
      text-transform: capitalize;
      span {
        color: $main-color;
      }
    }
  }
  &.extend {
    width: 95%;
    .header {
      width: 95%;
    }
  }
}
</style>
