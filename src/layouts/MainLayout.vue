<template>
  <section>
    <!-- Top Menu -->
    <section class="flex-row flex-space-between" id="main-section" >
      <div>
        <router-link to="/" id="main-link">
          <img src="/images/logo_new.svg" alt="logo" id="logo" />
        </router-link>
      </div>
      <Paragraph className="white-p-26">{{ title }}</Paragraph>
      <div>
        <nav>
          <a-dropdown>
            <img src="/images/main_menu_avatar.svg" alt="avatar" id="avatar" />
            <a class="ant-dropdown-link" id="avatar-link" @click.prevent >
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <router-link to="/profile">Profile</router-link>
                </a-menu-item>
                <a-menu-item>
                  <Paragraph className="gray100-p-14" @click="onLogout">Log Out</Paragraph>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </nav>
      </div>
    </section>
    <!-- Page Body -->
    <section class="flex-row page-body">
      <div class="side-menu">
        <MenuList :menuItems="sideMenuList" />
      </div>
      <div class="content-wrapper">
        <router-view />
        <div>
          <a-modal
            v-model:visible="modalPrivacyPolicyVisible"
            title="Privacy Policy"
            centered
            closeIcon="&#10006;"
            width="75%"
            :footer="null"
          >
            <privacy-policy />
          </a-modal>
        </div>
        <div>
          <a-modal
            v-model:visible="modalTermsOfServiceVisible"
            title="Terms and Conditions"
            centered
            closeIcon="&#10006;"
            width="75%"
            :footer="null"
          >
            <terms-of-service />
          </a-modal>
        </div>

        <footer class="flex-row flex-space-between seer-footer">
          <div>
            <Span className="gray80-span-12">© 2022 PropTech - All Rights Reserved.</Span>
          </div>
          <div>
            <Span className="gray80-span-12" class="privacy-and-terms" @click="modalPrivacyPolicyVisible = true">
              Privacy Policy
            </Span>
            |
            <Span className="gray80-span-12" class="privacy-and-terms" @click="modalTermsOfServiceVisible = true">
              Terms of Service
            </Span>
          </div>
        </footer>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { DownOutlined } from "@ant-design/icons-vue";
import MenuList from "@/layouts/MenuList.vue";
import sideMenuList from "@/layouts/sideMenuList";
import Span from "@/components/ui/Span.vue";
import Paragraph from "@/components/ui/Paragraph.vue";
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";
import TermsOfService from "@/views/TermsOfService.vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
  components: {
    DownOutlined,
    MenuList,
    Paragraph,
    PrivacyPolicy,
    Span,
    TermsOfService,
  },
  setup() {
    const modalPrivacyPolicyVisible = ref(false);
    const modalTermsOfServiceVisible = ref(false);

    const store = useStore();
    const onLogout = () => {
      store.dispatch("auth/logout");
    };

    return {
      modalPrivacyPolicyVisible,
      modalTermsOfServiceVisible,
      onLogout,
      sideMenuList,
    };
  },
});
</script>

<style scoped>
.side-menu {
  padding: 40px 0 40px;
  width: 72px;
  height: 100vh;
  background: #ffffff;
  box-shadow: 1px 1px 5px rgba(26, 39, 37, 0.07);
}

#logo {
  width: 126px;
  height: 25px;
}

#main-section {
  background: #1976d2;
}

#main-link {
  margin: 0 20px;
}

#avatar {
  width: 32px;
  height: 32px;
}

#avatar-link {
  color: white;
  font-size: 2.5em;
}

.privacy-and-terms {
  cursor: pointer;
}
</style>