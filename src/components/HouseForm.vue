<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="bedrooms" class="">Number of bedrooms:</label>
      <input v-model="editable.bedrooms"
             type="number"
             class="form-control"
             name="bedrooms"
             id="bedrooms"
             required
      >
    </div>
    <div class="form-group">
      <label for="bedrooms" class="">Number of bathrooms:</label>
      <input v-model="editable.bathrooms"
             type="number"
             class="form-control"
             name="bathrooms"
             id="bathrooms"
             required
      >
    </div>
    <div class="form-group">
      <label for="price" class="">Price:</label>
      <input v-model="editable.price"
             type="number"
             class="form-control"
             name="price"
             id="price"
             min="0"
             max="5000000"
      >
    </div>
    <div class="form-group">
      <label for="levels" class=""># of floors:</label>
      <input v-model="editable.levels"
             type="number"
             class="form-control"
             name="levels"
             id="levels"
             min="0"
             max="5"
      >
    </div>
    <div class="form-group">
      <label for="size" class="">Year:</label>
      <input v-model="editable.year" type="number" class="form-control" name="year" id="year">
    </div>
    <div class="form-group">
      <label for="description" class="">description:</label>
      <textarea v-model="editable.description"
                type="text"
                class="form-control"
                name="description"
                id="description"
                rows="5"
      ></textarea>
    </div>
    <div class="form-group">
      <label for="imgUrl" class="">Add image:</label>
      <input v-model="editable.imgUrl"
             type="url"
             class="form-control"
             name="imgUrl"
             id="imgUrl"
             required
      >
    </div>
    <div class="button-group my-3">
      <button type="reset" class="btn btn-secondary">
        clear
      </button>
      <button type="submit" class="btn btn-primary">
        submit
      </button>
    </div>
  </form>
</template>
<script>
import { ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'
import { housesService } from '../services/HousesService.js'
import Pop from '../utils/Pop.js'
import { House } from '../models/House.js'
export default {
  // REVIEW PROPS
  props: {
    house: { type: House, default: () => new House() }
  },
  setup(props) {
    const editable = ref({})

    watchEffect(() => {
      editable.value = { ...props.house }
    })

    return {
      editable,
      async handleSubmit() {
        try {
          if (editable.value.id) {
            await housesService.editHouse(editable.value)
          } else {
            await housesService.createHouse(editable.value)
          }
          editable.value = {}
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }

    }
  }
}
</script>

<style>

</style>
