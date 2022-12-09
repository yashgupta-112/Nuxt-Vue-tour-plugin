// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
css : ['~/node_modules/bootstrap/dist/css/bootstrap.css'],
app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js' },
        {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js'}
      ],
      
    }
  }
})