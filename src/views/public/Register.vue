<template>
  <div class="auth-form-wrapper">
    <a-row justify="center">
      <a-col>
        <Paragraph className="white-p-20" class="text-align-center">Welcome to</Paragraph>
        <div id="welcome">
          <img src="/images/logo.svg" alt="logo" width="126" height="25" />
        </div>
        <a-form :model="registerDto" name="registerDto" :wrapper-col="{ span: 24 }" autocomplete="off" @finish="onSubmit">
          <a-form-item name="username" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Please input your email.' }]">
            <a-input v-model:value="registerDto.username" size="large" placeholder="Email"/>
          </a-form-item>

          <a-form-item name="password" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Password incorrect.' }]">
            <a-input-password v-model:value="registerDto.password" size="large" placeholder="Password" style="border-radius: 5px"/>
          </a-form-item>

          <a-form-item name="passwordConfirm" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Confirmation incorrect.' }]">
            <a-input-password v-model:value="registerDto.passwordConfirm" size="large" placeholder="Confirm" style="border-radius: 5px"/>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 4, span: 16 }" style="margin-top: 33px">
            <Button className="white-black-auth" type="primary" html-type="submit">
              <Span className="gray100-span-20">Sign Up</Span>
            </Button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import store from "@/store";
import { IRegisterDto } from "@/models/Auth";
import { Button, Paragraph, Span } from "@/components/ui";

export default defineComponent({
  components: { Button, Paragraph, Span },
  setup() {
    const registerDto = reactive<IRegisterDto>({
      username: "",
      password: "",
      passwordConfirm: "",
    });
    const onSubmit = async (registerData: IRegisterDto) =>
      store.dispatch("auth/register", registerData);

    return {
      registerDto,
      onSubmit,
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

/* override .ant-form-item-explain-error origin class from Ant Design View */
.overriden-seer-error-message >>> .ant-form-item-explain-error {
  color: white;
}

#welcome {
  text-align: center;
  margin-bottom: 25px;
}
</style>