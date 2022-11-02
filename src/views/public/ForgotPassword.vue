<template>
  <div style="margin-top: 170px;">
    <a-row justify="center">
      <a-col>
        <Paragraph className="white-p-20" style="text-align: center;">Forgot Password</Paragraph>
        <a-form :model="forgotPasswordDto" name="forgotPassword" :wrapper-col="{ span: 24 }" autocomplete="off" @finish="onSubmit">
          <a-form-item name="username" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Please input your email.' }]">
            <a-input v-model:value="forgotPasswordDto.email" size="large" placeholder="Email"/>
          </a-form-item>
          <a-form-item :wrapper-col="{ offset: 5, span: 16 }" style="margin-top: 33px">
            <Button className="white-black-auth" type="primary" html-type="submit">
              <Span className="gray100-span-20">Next</Span>
            </Button>
          </a-form-item>
        </a-form>

        <div style="text-align: center">
          <router-link to="/forgot-password">
            <Paragraph className="white-p-16" style="text-align: center; width: 286px">
              If you still have troubles with access to your account, please, contact us at xxxxxxxxxxxx
            </Paragraph>
          </router-link>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import store from '@/store';
import { IForgotPasswordDto } from "@/models/Auth";
import { Button, Paragraph, Span } from "@/components/ui";

export default defineComponent({
  components: { Button, Paragraph, Span },
  setup() {
    const forgotPasswordDto = reactive<IForgotPasswordDto>({ email: "" });
    const onSubmit = async (forgotPasswordData: IForgotPasswordDto) => store.dispatch("auth/forgotPassword", forgotPasswordData);

    return {
      forgotPasswordDto,
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
