<template>
  <div class="mb-4 listing">
    <router-link :to="{name: 'House', params: { houseId: house.id }}">
      <div class="card selectable">
        <!-- REVIEW PROPS -->
        <img :src="house.imgUrl" alt="listing image" class="rounded">
        <div class="card-body">
          <h5 class="d-flex justify-content-between">
            <span>{{ house.bedrooms }} bed / {{ house.bathrooms }} bath - {{ house.levels }} story house</span>
            <span>${{ house.price }}</span>
          </h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { logger } from '../utils/Logger.js'
import { House } from '../models/House.js'

export default {
  // REVIEW PROPS
  props: {
    house: { type: House, required: true }
  },
  setup(props) {
    return {
      deleteHouse() {
        logger.log('working?')
      }
    }
  }
}
</script>

<style>

</style>
