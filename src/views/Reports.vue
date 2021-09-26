<template>
  <div class="reports">
    <h1>monthly report</h1>
    <div class="report-contain">
      <div class="examine-stat">
        <h3>examine</h3>
        <div class="number">
          <span class="label">- number of examines</span>
          <span class="stat">50</span>
        </div>
        <div class="cost">
          <span class="label">- cost of examine</span>
          <span class="stat">40</span>
        </div>
        <div class="net">
          <span class="label">- net of examine</span>
          <span class="stat">2000</span>
        </div>
      </div>

      <div class="consult-stat">
        <h3>consult</h3>
        <div class="number">
          <span class="label">- number of consults</span>
          <span class="stat">30</span>
        </div>
        <div class="cost">
          <span class="label">- cost of consult</span>
          <span class="stat">50</span>
        </div>
        <div class="net">
          <span class="label">- net of consults</span>
          <span class="stat">1500</span>
        </div>
      </div>

      <div class="surgery-stat">
        <h3>surgery</h3>
        <div class="number">
          <span class="label">- number of surgeries</span>
          <span class="stat">10</span>
        </div>
        <div class="cost">
          <span class="label">- cost of surgery</span>
          <span class="stat">200</span>
        </div>
        <div class="net">
          <span class="label">- net of surgeries</span>
          <span class="stat">2000</span>
        </div>
      </div>

      <div class="total">
        <span class="label">total</span>
        <span class="stat">5500</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/general.scss";
.reports {
  margin-top: 77px;
  padding: 10px;
  h1 {
    text-transform: capitalize;
  }
  .report-contain {
    width: 80%;
    margin: 15px auto;
    background-color: #f5f5f5;
    padding: 20px;
    border: 2px solid $main-color;
    box-shadow: 1px 1px 5px 0px #ccc;
    .examine-stat,
    .consult-stat,
    .surgery-stat {
      text-transform: capitalize;
      text-align: left;
      margin-bottom: 15px;
      h3 {
        display: inline-block;
        width: 130px;
        padding: 2px 10px;
        color: #fff;
        background-color: $main-color;
      }
      .number,
      .cost,
      .net {
        font-size: 20px;
        padding: 5px 10px;
        color: #555;
        border-right: 2px solid $main-color;
        border-left: 2px solid $main-color;
        .label {
          font-weight: bold;
          display: inline-block;
          width: 65%;
        }
      }
      .number {
        border-top: 2px solid $main-color;
      }
      .net {
        border-bottom: 2px solid $main-color;
        .label {
          width: 90%;
        }
      }
    }
    .total {
      padding: 5px 15px;
      margin-top: 20px;
      text-align: left;
      border: 2px solid $main-color;
      .label {
        font-weight: bold;
        margin-right: 81%;
        color: #555;
        display: inline-block;
        font-size: 30px;
        text-transform: capitalize;
      }
      .stat {
        color: #555;
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}
</style>
