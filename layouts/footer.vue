<template>
  <div class="footer">
    <div class="container">
      <div class="footer__main">
        <div class="footer__copyright">
          Made with
          <b>Nuxt+VueJS</b> and
          <b>Love</b> by
          <a href="https://topzdev.github.io/portfolio/" target="_blank" class="footer__admin">
            Christopher Lugod
            <span>❤️👌</span>
          </a>
        </div>
        <p class="mr-1">visit me on</p>
        <ul class="footer__links">
          <li aria-label="links" title="Visit all my project at Github">
            <a href="https://github.com/topzdev" target="_blank">
              <vue-icon :svg="icons.github" />
            </a>
          </li>

          <li aria-label="links" title="Hire me at  Upwork">
            <a href="https://www.upwork.com/freelancers/~0183563188426b2c0c" target="_blank">
              <svg viewBox="0 0 56.7 56.7" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.4 17.7c-5.3 0-9.3 3.5-10.9 9-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3V14.7H4.3v14.7c0 6.1 4.9 11 10.9 11s10.9-4.9 10.9-11v-2.5c1.1 2.2 2.5 4.6 4 6.7l-3.5 16.3h5.7L34.7 38c2.2 1.4 4.7 2.2 7.7 2.2 6.1 0 11.1-5 11.1-11.4 0-6.1-5-11.1-11.1-11.1zm0 16.9c-2.2 0-4.5-1-6.3-2.5l.6-2.2v-.1c.4-2.4 1.7-6.4 5.8-6.4 3.1 0 5.6 2.5 5.6 5.6-.1 3.1-2.8 5.6-5.7 5.6z"
                />
              </svg>
            </a>
          </li>

          <li aria-label="links" title="Connect me at  Linkedin">
            <a href="https://www.linkedin.com/in/christopher-lugod-ba146b197/" target="_blank">
              <vue-icon :svg="icons.linkedIN" />
            </a>
          </li>

          <li aria-label="links" title="Follow me at facebook">
            <a href="https://www.facebook.com/Christoplugod/" target="_blank">
              <vue-icon :svg="icons.facebook" />
            </a>
          </li>

          <li aria-label="links" title="Tweet me at facebook">
            <a href="https://twitter.com/_christop_" target="_blank">
              <vue-icon :svg="icons.twitter" />
            </a>
          </li>

          <li aria-label="links" title="Follow me at Instagram">
            <a href="https://www.instagram.com/christoplugod/" target="_blank">
              <vue-icon :svg="icons.instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdiGithubCircle,
  mdiLinkedin,
  mdiFacebook,
  mdiTwitter,
  mdiInstagram
} from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        github: mdiGithubCircle,
        linkedIN: mdiLinkedin,
        facebook: mdiFacebook,
        twitter: mdiTwitter,
        instagram: mdiInstagram,
        upwork:
          "M42.4,17.7c-5.3,0-9.3,3.5-10.9,9c-2.5-3.9-4.5-8.3-5.6-12.1h-5.6v14.7c0,2.9-2.4,5.3-5.3,5.3c-2.9,0-5.3-2.4-5.3-5.3V14.7  H4.3v14.7c0,6.1,4.9,11,10.9,11c6,0,10.9-4.9,10.9-11v-2.5c1.1,2.2,2.5,4.6,4,6.7l-3.5,16.3h5.7L34.7,38c2.2,1.4,4.7,2.2,7.7,2.2  c6.1,0,11.1-5,11.1-11.4C53.5,22.7,48.5,17.7,42.4,17.7z M42.4,34.6c-2.2,0-4.5-1-6.3-2.5l0.6-2.2v-0.1c0.4-2.4,1.7-6.4,5.8-6.4  c3.1,0,5.6,2.5,5.6,5.6C48,32.1,45.3,34.6,42.4,34.6z"
      }
    };
  }
};
</script>

<style>
</style>