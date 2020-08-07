<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->

  <div class="parent shadow">
    <!-- <header class="section d-flex align-items-center px-3 py-2">
      <img src="../assets/avatar_1.jpg" class="pic mr-2" />
      <div>
        <div style="font-size: 17px;font-weight: 300;">Username</div>
        <div style="font-weight: 300;">Online</div>
      </div>
    </header>-->
    <div
      class="left-side section header d-flex align-items-center px-3 py-2 border-bottom"
      style="border-right: 1px solid #0e5963;"
    >
      <img src="../assets/avatar_1.jpg" class="pic mr-2" />
      <div>
        <div style="font-size: 17px;font-weight: 300;">Username</div>
        <div style="font-weight: 300; font-size: 12px;">Online</div>
      </div>
    </div>
    <div
      class="section d-flex justify-content-between align-items-center right-header px-3 py-2 border-bottom"
    >
      <div class="d-flex align-items-center">
        <img src="../assets/avatar_1.jpg" class="pic mr-2" />
        <div>
          <div style="font-size: 17px;font-weight: 300;">Username</div>
          <div style="font-weight: 300; font-size: 12px;">Online</div>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-sm text-light"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="material-icons my-icon">more_vert</i>
        </button>
        <div class="dropdown-menu dropdown-menu-right py-0">
          <a href="#" class="dropdown-item">Info</a>
          <a href="#" class="dropdown-item">Excluir</a>
          <a href="#" class="dropdown-item">Limpar conversa</a>
        </div>
      </div>
    </div>
    <div class="left-side section" style="border-right: 1px solid #bbbbbb;">
      <div class="px-3 py-2 border-bottom">
        <input type="text" class="form-control form-control-sm" placeholder="Search" />
      </div>
      <div class="contact-list">
        <div
          v-for="contact in contacts"
          :key="contact"
          class="contact-item px-3 py-2 border-bottom"
        >
          <div class="d-flex align-items-begin">
            <img src="../assets/avatar_1.jpg" class="pic mr-2" />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                Username {{contact}}
                <span class="text-muted contact-time">00:00</span>
              </div>
              <div class="text-muted">Last message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main class="section">
      <div class="messages-area d-flex flex-column justify-content-end">
        <div class="messages px-3 py-2">
          <div class="d-flex justify-content-center mb-2">
            <div class="quick-tip bg-info text-white px-1">Today</div>
          </div>
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="msg d-flex"
            :class="{'justify-content-end self': message.self}"
          >
            <div class="content mb-2 px-2 py-1">
              {{message.content}}
              <div class="d-flex justify-content-end">
                <div class="msg-timer">00:00</div>
              </div>
            </div>
          </div>
        </div>
        <div class="typer border-top p-3 d-flex justify-content-between align-items-center">
          <button class="btn btn-sm typer-emojis">
            <i class="material-icons my-icon text-muted">mood</i>
          </button>
          <div class="typer-input w-100 mx-2 p-1" contenteditable placeholder="Type Here..."></div>
          <button class="btn btn-sm typer-send">
            <i class="material-icons my-icon text-muted">send</i>
          </button>
        </div>
      </div>
    </main>
    <!-- <div class="right-side d-none section">Right Sidebar</div> -->
    <!-- <footer class="section">Footer</footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  mounted() {
    // Now request contacts and other settings
    this.$root.api
      .contacts()
      .then((list) => {
        console.log(list);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
    messages() {
      return this.$store.state.messages;
    },
  },
  components: {
    // HelloWorld,
  },
};
</script>

<style scoped>
/* [contentEditable="true"]:empty:not(:focus):before { */
[contentEditable="true"]:empty:before {
  content: attr(placeholder);
  color: grey;
  /* font-style:italic; */
}

.pic {
  width: 50px;
  border-radius: 100%;
  background: white;
  /* border: 2px solid #1691a5; */
}

.quick-tip {
  border-radius: 3px;
}

.messages-area {
  height: 531px;
}

.typer-input {
  border: 1px solid lightgray;
  border-radius: 5px;
}
/* .typer-send{
  height: 35px;
} */
.typer-input:focus {
  /* outline: 1px solid #bfbdbd; */
  border: 1px solid #bfbdbd;
  border-radius: 5px;
}

.msg .content {
  /* background: #afd2d8; */
  background: #c5dae2;
  border-radius: 4px;
  font-size: 14px;
  max-width: 80%;
  box-shadow: 0 0.125rem 0.25rem #ababab;
}

.msg.self .content {
  background: #ececec;
}

.msg-timer {
  font-size: 12px;
}

.contact-time {
  font-size: 12px;
}

.messages {
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}

.contact-list {
  height: 483px;
  overflow: hidden;
  overflow-y: scroll;
}

.contact-item:hover {
  background: #f5f7f9;
}

.parent {
  border: 1px solid #bbbbbb;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  background: white;
  border-radius: 3px;
}

.header {
  background: #267681;
  color: white;
}
header {
  /* padding: 2rem; */
  grid-column: 1 / 4;
  background: #267681;
  border-radius: 3px 3px 0px 0px;
  color: white;
  /* padding: 5px 15px; */
}

.right-header {
  background: #267681;
  color: white;
}

.left-side {
  grid-column: 1 / 2;
  /* border-right: 1px solid #bbbbbb; */
  min-width: 270px;
}

main {
  grid-column: 2 / 3;
}

.right-side {
  grid-column: 3 / 4;
}

footer {
  grid-column: 1 / 4;
}

@media screen and (min-width: 480px) {
  .parent {
    width: 100%;
  }
}
@media screen and (min-width: 1024px) {
  .parent {
    width: 900px;
    height: 600px;
  }
}
</style>