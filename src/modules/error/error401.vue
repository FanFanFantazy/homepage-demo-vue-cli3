<template>
  <ErrorContent code="401" desc="No entry promision" />
</template>

<script>
import ErrorContent from './errorComp/errorContent.vue'
export default {
  name: 'Error401',
  components: {
    ErrorContent
  }
}
</script>
