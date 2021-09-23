<template>
  <div class="side-bar">
    <div class="logo">
      <span class="logo-letter">k</span>
      <span class="slogan">ayan</span>
    </div>
    <div class="pages">
      <ul>
        <li>
          <router-link to="/">
            <font-awesome-icon icon="home" />
            <span class="page-name">home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/tickets">
            <font-awesome-icon icon="ticket-alt" />
            <span class="page-name">tickets</span>
          </router-link>
        </li>
        <li>
          <router-link to="/patients">
            <font-awesome-icon icon="user" />
            <span class="page-name">patients</span>
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/doctors">
            <font-awesome-icon icon="user-md" />
            <span class="page-name">doctors</span>
          </router-link> 
        </li> -->
        <li>
          <router-link to="/reports">
            <font-awesome-icon icon="file-invoice" />
            <span class="page-name">reports</span>
          </router-link>
        </li>
        <li>
          <router-link to="/calendar">
            <font-awesome-icon icon="calendar-alt" />
            <span class="page-name">calendar</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/general.scss";
.side-bar {
  float: left;
  width: 13%;
  background-color: #555;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 20%;
  transition: all 0.25s ease-in-out;
  .logo {
    overflow: hidden;
    height: 77px;
    background-color: #636363;
    text-align: left;
    .logo-letter {
      text-transform: capitalize;
      font-size: 48px;
      color: $main-color;
      margin: 0 12px 0 6px;
      font-family: "Pacifico", cursive;
    }
    .slogan {
      font-size: 45px;
      color: #fff;
      font-family: "Courgette", cursive;
    }
  }
  .pages {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        text-align: left;
        border-bottom: 1px solid #666;
        a {
          height: 50px;
          display: block;
          padding: 10px 0;
          font-size: 20px;
          font-weight: 400;
          text-decoration: none;
          text-transform: capitalize;
          color: #eee;
          &:hover {
            color: #ccc;
          }
          &.router-link-exact-active {
            color: $main-color;
            background-color: #fff;
            svg {
              color: $main-color;
            }
          }
          svg {
            font-size: 25px;
            margin: 2px 10px;
            float: left;
            width: 25%;
          }
          .page-name {
            margin-left: 5px;
          }
        }
      }
    }
  }
  &.mini {
    width: 5%;
    .logo {
      .slogan {
        display: none;
      }
    }
    .pages {
      ul {
        li {
          a {
            svg {
              width: 100%;
              margin: 0;
            }
            .page-name {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
