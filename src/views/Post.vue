<template>

</template>

<script>
import * as postApi from '@/api/post'
export default {
  name: "Post",
  data()  {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    write() {
      postApi.store(this.title, this.content).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>