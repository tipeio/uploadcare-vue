<template>
  <div @click.prevent="onClick">
    <slot />
  </div>
</template>

<script>
  const uploadcare = require('uploadcare-widget')
  export default {
    props: {
      publicKey: {
        type: String,
        default: ''
      },
      multiple: {
        type: Boolean,
        default: false
      },
      crop: {
        type: String,
        default: ''
      },
      tabs: {
        type: String,
        default: 'file url camera dropbox gdrive box skydrive'
      }
    },
    methods: {
      onClick () {
        this.fileGroup = uploadcare.openDialog([], {
          publicKey: this.publicKey,
          multiple: this.multiple,
          crop: this.crop,
          tabs: this.tabs,
          systemDialog: true,
          previewStep: true
        })

        this.fileGroup.done((filePromise) => {
          if (this.multiple) {
            const promise = filePromise.promise()
            promise.done(() => {
              const files = filePromise.files()
              files.forEach((fileProm) => {
                fileProm.done((file) => {
                  this.$emit('success', file)
                })
                fileProm.fail((err) => {
                  this.$emit('error', err)
                })
              })
            })
            promise.fail((err) => {
              this.$emit('error', err)
            })
          } else {
            filePromise.done((file) => {
              this.$emit('success', file)
            })
            filePromise.fail((err) => {
              this.$emit('error', err)
            })
          }
        })
        this.fileGroup.fail((err) => {
          this.$emit('error', err)
        })
      }
    }
  }
</script>
