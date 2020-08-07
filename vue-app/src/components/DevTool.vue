<template>
  <div style="position: absolute; top:0px; left: 0px; right: 0px">
      <button class="btn btn-sm btn-info mr-2" @click="setAuth(2)">State: Loading</button>
      <button class="btn btn-sm btn-info mr-2" @click="setAuth(1)">State: Yah Auth</button>
      <button class="btn btn-sm btn-info mr-2" @click="setAuth(0)">State: Not Auth</button>
  </div>
</template>

<script>
export default {
    name: 'DevTool',
    mounted(){
        this.$store.commit('setAuth', localStorage.getItem('auth'))
    },
    methods: {
        setAuth(val){
            localStorage.setItem('auth', val)
            this.$store.commit('setAuth', val)
        }
    }
}
</script>