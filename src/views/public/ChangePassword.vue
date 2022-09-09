<template>
  <div style="margin-top: 120px;">
    <a-row justify="center">
      <a-col>
        <Paragraph className="white-p-20" style="text-align: center;">Change Password</Paragraph>
        <a-form
          :model="changePasswordFormState"
          name="basic"
          :wrapper-col="{ span: 24 }"
          autocomplete="off"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
        >
          <a-form-item
            name="oldPassword"
            class="overriden-seer-error-message"
            :rules="[{ required: true, message: 'Password incorrect.' }]"
          >
            <a-input-password
              v-model:value="changePasswordFormState.oldPassword"
              size="large"
              placeholder="Current Password"
              style="border-radius: 5px"
            />
          </a-form-item>

          <a-form-item
            name="newPassword"
            class="overriden-seer-error-message"
            :rules="[{ required: true, message: 'Password incorrect.' }]"
          >
            <a-input-password
              v-model:value="changePasswordFormState.newPassword"
              size="large"
              placeholder="New Password"
              style="border-radius: 5px"
            />
          </a-form-item>

          <a-form-item
            name="passwordConfirm"
            class="overriden-seer-error-message"
            :rules="[{ required: true, message: 'Confirmation incorrect.' }]"
          >
            <a-input-password
              v-model:value="changePasswordFormState.passwordConfirm"
              size="large"
              placeholder="Repeat Password"
              style="border-radius: 5px"
            />
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 4, span: 16 }" style="margin-top: 33px">
            <Button className="white-black-auth" type="primary" html-type="submit">
              <Span className="gray100-span-20">Next</Span>
            </Button>
          </a-form-item>
        </a-form>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { IChangeFormState, IErrorInfoFormState } from "@/views/types";
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
    const changePasswordFormState = reactive<IChangeFormState>({
      oldPassword: "",
      newPassword: "",
      passwordConfirm: "",
    });
    const onFinish = (values: IChangeFormState) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: IErrorInfoFormState) => {
      console.log("Failed:", errorInfo);
    };
    return {
      changePasswordFormState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>

<style scoped>
/* override .ant-form-item-explain-error origin class from Ant Design View */
.overriden-seer-error-message >>> .ant-form-item-explain-error {
  color: white;
}
</style>