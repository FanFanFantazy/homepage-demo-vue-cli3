<template lang="pug">
  p 111111111
</template>

<script>
/* eslint-disable */
let request = require('request')
let cheerio = require('cheerio')
const baseUrl = 'https://www.socialstatuspgh.com'
const arr = []

export default {
  name: 'socialStatus',
  props: {
  },
  data () {
    return {
    }
  },
  created () {
    this.handleSelect()
  },
  methods: {
    handleSelect () {
      request({
        url: `${baseUrl}/collections/sneakers/jordan`,
        method: 'GET',
        headers: {
          'User-Agent': 'Chrome/71.0.3578.98'
        }
      }, function (err, res) {
        if (err) return console.log(err)
        let $ = cheerio.load(res.body.toString())
        let segement = $('.product')
        segement.each(function () {
          let title = $(this).find('.text-container').find('h1').text().trim()
          let temp = $(this).find('.product-price-container').text().trim().replace(/\s+/g, '').split('$')
          let price = `$${temp[temp.length - 1]}`
          let url = `${baseUrl}${$(this).find('.product-card').attr('href')}`
          let image = `https:${$(this).find('img').attr('src')}`
          let detial = title
          arr.push({
            title: title,
            url: url,
            price: price,
            detial: detial,
            image: image
          })
        })
        if (arr.length === 0) {
          return
        }
        console.log(arr.shift())
      })
    }
  }
}
</script>

<style scoped>
</style>
