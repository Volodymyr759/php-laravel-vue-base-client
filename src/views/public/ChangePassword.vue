<template>
  <div id="form-wrapper">
    <a-row justify="center">
      <a-col>
        <Paragraph className="white-p-20" class="text-align-center">Change Password</Paragraph>
        <a-form :model="changePasswordDto" name="changePassword" :wrapper-col="{ span: 24 }" autocomplete="off" @finish="onSubmit">
          <a-form-item name="oldPassword" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Password incorrect.' }]">
            <a-input-password v-model:value="changePasswordDto.oldPassword" size="large" placeholder="Current Password" style="border-radius: 5px"/>
          </a-form-item>

          <a-form-item name="newPassword" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Password incorrect.' }]">
            <a-input-password v-model:value="changePasswordDto.newPassword" size="large" placeholder="New Password" style="border-radius: 5px"/>
          </a-form-item>

          <a-form-item name="passwordConfirm" class="overriden-seer-error-message" :rules="[{ required: true, message: 'Confirmation incorrect.' }]">
            <a-input-password v-model:value="changePasswordDto.passwordConfirm" size="large" placeholder="Repeat Password" style="border-radius: 5px"/>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 4, span: 16 }" id="submit-button">
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
import store from "@/store";
import { IChangePasswordDto } from "@/models/Auth";
import { Button, Paragraph, Span } from "@/components/ui";

export default defineComponent({
  components: { Button, Paragraph, Span },
  setup() {
    const changePasswordDto = reactive<IChangePasswordDto>({
      oldPassword: "",
      newPassword: "",
      passwordConfirm: "",
    });
    const onSubmit = async (changePasswordData: IChangePasswordDto) =>
      store.dispatch("auth/changePassword", changePasswordData);

    return {
      changePasswordDto,
      onSubmit,
    };
  },
});
</script>

<style scoped>
.overriden-seer-error-message >>> .ant-form-item-explain-error {
  color: white;
}

#form-wrapper {
  margin-top: 120px;
}

#submit-button {
  margin-top: 33px;
}
</style>