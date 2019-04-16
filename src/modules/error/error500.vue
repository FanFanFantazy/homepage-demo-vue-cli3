<template>
  <ErrorContent code="500" desc="Fail to receive response from the server" />
</template>

<script>
import ErrorContent from './errorComp/errorContent.vue'
export default {
  name: 'Error500',
  components: {
    ErrorContent
  }
}
</script>
