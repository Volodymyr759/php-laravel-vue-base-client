<template>
  <div class="auth-form-wrapper">
    <a-row justify="center">
      <a-col>
        <Paragraph className="white-p-20" style="text-align: center">Welcome to</Paragraph>
        <div style="text-align: center; margin-bottom: 25px">
          <img src="/images/logo.svg" alt="logo" width="126" height="25" />
        </div>
        <a-form :model="loginDto" name="loginDto" :wrapper-col="{ span: 24 }" autocomplete="off" @finish="onSubmit">
          <a-form-item name="username" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Please input your email.' }]">
            <a-input v-model:value="loginDto.username" size="large" placeholder="Email"/>
          </a-form-item>

          <a-form-item name="password" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Password incorrect.' }]">
            <a-input-password
              v-model:value="loginDto.password" size="large" placeholder="Password" style="border-radius: 5px"/>
          </a-form-item>

          <a-form-item name="remember" :wrapper-col="{ offset: 5, span: 16 }" style="margin: 20px 0 10px">
            <a-checkbox v-model:checked="loginDto.remember">
              <Paragraph className="white-p-bold-16" style="text-align: center">Remember me</Paragraph>
            </a-checkbox>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 4, span: 16 }">
            <Button className="white-black-auth" type="primary" html-type="submit" >
              <Span className="gray100-span-20">Sign In</Span>
            </Button>
          </a-form-item>
        </a-form>
        <div style="text-align: center; margin-bottom: 25px">
          <router-link to="/forgot-password">
            <Paragraph className="white-p-bold-16" style="text-align: center">Forgot Password?</Paragraph>
          </router-link>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import store from '@/store';
import { ILoginDto } from "@/models/Auth";
import { Button, Paragraph, Span } from "@/components/ui";

export default defineComponent({
  components: {
    Button, Paragraph, Span
  },
  setup() {
    const loginDto = reactive<ILoginDto>({ username: "", password: "", remember: true, });
    const onSubmit = (loginData: ILoginDto) => store.dispatch("auth/login", loginData);

    return {
      loginDto,
      onSubmit
    };
  },
});
</script>

<style scoped>
.ant-input {
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;
}

.overriden-seer-error-message >>> .ant-form-item-explain-error {
  color: white;
}
</style>
