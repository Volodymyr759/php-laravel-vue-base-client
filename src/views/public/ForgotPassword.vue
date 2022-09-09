<template>
  <div style="margin-top: 170px;">
    <a-row justify="center">
      <a-col>
        <Paragraph className="white-p-20" style="text-align: center;">Forgot Password</Paragraph>
        <a-form
          :model="forgotPasswordFormState"
          name="basic"
          :wrapper-col="{ span: 24 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            name="username" 
            class="overriden-seer-error-message"
            :rules="[{ required: true, message: 'Please input your email.' }]"
          >
            <a-input
              v-model:value="forgotPasswordFormState.username"
              size="large"
              placeholder="Email"
            />
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
import { IForgotPasswordFormState, IErrorInfoFormState } from "@/views/types";
import Button from "@/components/ui/Button.vue";
import Paragraph from "@/components/ui/Paragraph.vue";
import Span from "@/components/ui/Span.vue";

export default defineComponent({
  components: {
    Button,
    Paragraph,
    Span
  },
  setup() {
    const forgotPasswordFormState = reactive<IForgotPasswordFormState>({
      username: ""
    });
    const onFinish = (values: IForgotPasswordFormState) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo: IErrorInfoFormState) => {
      console.log("Failed:", errorInfo);
    };
    return {
      forgotPasswordFormState,
      onFinish,
      onFinishFailed,
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
</style>
