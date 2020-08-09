<template>
  <div class="card shadow">
    <div class="card-body">
      <div class="h4 text-center">You're offline</div>
      <div class>Please check your internet connection and try again...</div>
      <div class="mt-3 text-right">
        <button class="btn btn-sm btn-info px-3" @click="refresh">Reconnect</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfflineMode",
  methods: {
    refresh() {
      document.location.reload();
    },
  },
};
</script>