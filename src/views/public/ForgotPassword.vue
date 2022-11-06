<template>
  <div id="form-wrapper">
    <a-row justify="center">
      <a-col>
        <Paragraph className="white-p-20" class="text-align-center">Forgot Password</Paragraph>
        <a-form :model="forgotPasswordDto" name="forgotPassword" :wrapper-col="{ span: 24 }" autocomplete="off" @finish="onSubmit">
          <a-form-item name="username" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Please input your email.' }]">
            <a-input v-model:value="forgotPasswordDto.email" size="large" placeholder="Email"/>
          </a-form-item>
          <a-form-item :wrapper-col="{ offset: 5, span: 16 }" id="submit-button">
            <Button className="white-black-auth" type="primary" html-type="submit">
              <Span className="gray100-span-20">Next</Span>
            </Button>
          </a-form-item>
        </a-form>

        <div class="text-align-center">
          <router-link to="/forgot-password">
            <Paragraph className="white-p-16" id="advice">
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
import store from "@/store";
import { IForgotPasswordDto } from "@/models/Auth";
import { Button, Paragraph, Span } from "@/components/ui";

export default defineComponent({
  components: { Button, Paragraph, Span },
  setup() {
    const forgotPasswordDto = reactive<IForgotPasswordDto>({ email: "" });
    const onSubmit = async (forgotPasswordData: IForgotPasswordDto) =>
      store.dispatch("auth/forgotPassword", forgotPasswordData);

    return {
      forgotPasswordDto,
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

.overriden-seer-error-message >>> .ant-form-item-explain-error {
  color: white;
}

#form-wrapper {
  margin-top: 170px;
}

#submit-button {
  margin-top: 33px;
}

#advice {
  width: 286px;
}
</style>
