<template>
  <div>
    <template v-if="$ua.browser() != 'Internet Explorer'">
      <navbar />
      <nuxt class="main" />
      <scroll-button />
      <Footer />
    </template>
    <template v-else>
      <div class="support">
        <div class="support__cover">
          <img src="@/static/knowvie_bg.jpg" alt />
        </div>
        <div class="support__content mb-2">
          <img src="@/static/knowvie-logo.png" alt class="support__logo" />

          <h1 class="heading--primary">Oh no! Browser not supported</h1>

          <p class="support__explain mb-3">
            Knowvie features is not working in this browser. Please use modern
            browser like google chrome, mozilla, or Microsoft edge (Chromium).
            Click browser icon below to download the selected browser.
          </p>

          <ul>
            <li>
              <a
                href="https://www.google.com/chrome/"
                target="_blank"
                aria-label="Install Google Chrome"
                rel="noreferrer"
              >
                <img src="@/assets/img/chrome.png" alt />
              </a>
            </li>
            <li>
              <a
                href="https://www.mozilla.org/en-US/firefox/new/"
                target="_blank"
                aria-label="Install Mozilla Firefox"
                rel="noreferrer"
              >
                <img src="@/assets/img/firefox.png" alt />
              </a>
            </li>
            <li>
              <a
                href="https://www.mozilla.org/en-US/firefox/new/"
                target="_blank"
                aria-label="Install Chromium"
                rel="noreferrer"
              >
                <img src="@/assets/img/chromium.png" alt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import ScrollButton from "./ScrollTopButton";
import Footer from "./footer";
export default {
  components: {
    Footer,
    Navbar,
    ScrollButton
  }
};
</script>
