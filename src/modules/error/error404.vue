<template>
  <ErrorContent code="404" desc="This page lost in the Galaxy..." />
</template>

<script>
import ErrorContent from './errorComp/errorContent.vue'
export default {
  name: 'Error404',
  components: {
    ErrorContent
  }
}
</script>
