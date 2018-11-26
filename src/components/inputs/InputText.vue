<template>
  <div class="field">
    <label class="label" v-bind:for="field.ident">{{field.label}}</label>
    <div class="control">
      <input class="input" v-bind:type="field.type" v-bind:name="field.name" v-bind:id="field.ident" v-bind:placeholder="field.placeholder"
        v-bind:value="field.value" v-on:change="onchange">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'InputText',
    props: {
      field: {
        type: Object,
        required: true
      }
    },
    methods: {
      onchange(ev) {
        this.$emit('setValue', this.field.value, ev.target.value)
      }
    }
  }

</script>
