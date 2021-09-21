<template>
  <div class="doctor">
    <div class="doctor-panel">
      <span class="doctor-img"><img src="../assets/My-IMG.jpg" alt="" /></span>
      <span class="name">Dr. hazem soliman</span>
      <span class="category">Dentistry</span>
      <button onclick="document.getElementById('doctor-page').style.display='block'">
        view profile
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DoctorComp",
  props: {},
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.doctor {
  overflow: hidden;
  padding: 20px;
  .doctor-panel {
    background-color: #eee;
    overflow: hidden;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 5px 1px #ccc;
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: 1px 1px 5px 0px #999;
    }
    span {
      text-align: center;
      line-height: 1.8;
      font-size: 20px;
      display: block;
      text-transform: capitalize;
      &.doctor-img {
        width: 100%;
        margin-bottom: 20px;
        img {
          height: 200px;
          width: 100%;
        }
      }
      &.category {
        font-size: 18px;
      }
    }
    button{
      cursor: pointer;
      width: 100%;
      border: none;
      background-color: #42b983;
      font-size: 20px;
      text-transform: capitalize;
      color: #eee;
      padding: 10px 0;
      margin-top: 20px;
    }
  }
}
</style>
