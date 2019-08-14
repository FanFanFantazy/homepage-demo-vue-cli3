<template lang="pug">
  div.editor
    mavon-editor.editorStyle(language="en" :ishljs="true" :toolbars="toolbars", codeStyle="paraiso-dark", @save="saveMavon")
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'editor',
  components: {
    mavonEditor
  },
  data () {
    return {
      toolbars: {
        bold: true,
        italic: true,
        header: true,
        underline: true,
        strikethrough: true,
        mark: true,
        subscript: true,
        superscript: true,
        quote: true,
        ol: true,
        ul: true,
        link: true,
        imagelink: true,
        code: true,
        table: true,
        fullscreen: true,
        readmodel: true,
        htmlcode: true,
        undo: true,
        redo: true,
        trash: true,
        save: true,
        navigation: true,
        alignleft: true,
        aligncenter: true,
        alignright: true,
        subfield: true,
        preview: true
      }
    }
  },
  methods: {
    saveMavon (value, render) {
      var urlObject = window.URL || window.webkitURL || window
      var exportBlob = new Blob([render])
      var saveLink = document.createElementNS('http://www.w3.org/1999/xhtml', 'a')
      saveLink.href = urlObject.createObjectURL(exportBlob)
      saveLink.download = '1111.html'
      this.fakeClick(saveLink)
    },
    fakeClick (obj) {
      var ev = document.createEvent('MouseEvents')
      ev.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
      obj.dispatchEvent(ev)
    }
  }
}
</script>
<style scoped>
.editor {
  margin: auto;
  width: 100%;
  height: 590px;
}
</style>
<style lang="scss">
.editorStyle {
  height: 100%;
  z-index: 0 !important;
  >.v-note-op.shadow {
    background-color: #333 !important;
    .op-icon.dropdown-wrapper.dropdown .popup-dropdown {
      background: #333;
      .dropdown-item {
        &:hover {
          color: #333;
        }
      }
    }
  }
  .v-right-item {
    >.op-icon.selected {
      color: rgba(255, 255, 255, 0.8) !important;
      background: #000 !important;
    }
  }
  .v-left-item {
    >.op-icon.selected {
      color: rgba(255, 255, 255, 0.8) !important;
      background: #000 !important;
    }
  }
  .v-note-panel.shadow {
    background-color: #eee !important;
    textarea {
      background-color: #eee !important;
    }
    pre {
      background-color: #000 !important;
      color: #FFF !important;
    }
    .v-note-show .v-show-content {
      background-color: #333 !important;
      color: #ccc
    }
  }
}
</style>
