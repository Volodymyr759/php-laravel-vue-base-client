<template>
  <div class="sign-form-wrapper">
    <a-row justify="center">
      <a-col>
        <p>Your email address has been confirmed successfully.</p>
        <p>Please <router-link to="/login">Sign In</router-link> to continue.</p>
      </a-col>
    </a-row>
  </div>
  <section class="issues">
    <ul id="issues-list">
      <li>Not designed</li>
      <li>No content</li>
    </ul>
  </section>
</template>

<style scoped>
#issues-list {
  padding: 0 20px;
}
</style>