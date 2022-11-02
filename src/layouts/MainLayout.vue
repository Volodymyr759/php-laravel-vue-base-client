<template>
  <section>
    <!-- Top Menu -->
    <section
      class="flex-row flex-space-between"
      :style="{ background: '#1976D2' }"
    >
      <div>
        <router-link to="/" :style="{ margin: '0 20px' }">
          <img src="/images/logo_new.svg" alt="logo" width="126" height="25" />
        </router-link>
      </div>
      <Paragraph className="white-p-26" style="margin: 0">{{
        title
      }}</Paragraph>
      <div>
        <nav>
          <a-dropdown>
            <img src="/images/main_menu_avatar.svg" alt="avatar" width="32" height="32" />
            <a class="ant-dropdown-link" style="color: 'white'; text-size: 2.5em" @click.prevent >
              <DownOutlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <router-link to="/profile">Profile</router-link>
                </a-menu-item>
                <a-menu-item>
                  <!-- <router-link to="/login">Log Out</router-link> -->
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
      <!-- Side Menu -->
      <div class="side-menu">
        <MenuList :menuItems="menuList" />
      </div>
      <!-- Content -->
      <div class="content-wrapper">
        <router-view />

        <!-- Privacy Policy modal window -->
        <div>
          <a-modal
            v-model:visible="modalPrivacyPolicyVisible"
            title="Privacy Policy"
            centered
            closeIcon="&#10006;"
            width="75%"
            :footer="null"
          >
            <Paragraph className="blue-p-16">
              Last updated: June 12, 2021
            </Paragraph>
            <Paragraph className="gray80-p-16">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </Paragraph>
            <Paragraph className="gray80-p-16">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy.
            </Paragraph>
            <Paragraph className="gray80-p-bold-18">
              Interpretation and Definitions
            </Paragraph>
            <Paragraph className="gray80-p-18"> Definitions </Paragraph>
            <ul style="margin-left: 25px">
              <li>
                <Span className="gray80-span-bold-16">Account</Span>
                <Span className="gray80-span-16">
                  means a unique account created for You to access our Service
                  or parts of our Service.</Span
                >
              </li>
              <li>
                <Span className="gray80-span-bold-16">Country</Span>
                <Span className="gray80-span-16">
                  refers to: NYC, United States.</Span
                >
              </li>
              <li>
                <Span className="gray80-span-bold-16">Company</Span>
                <Span className="gray80-span-16">
                  (referred to as either "the Company", "We", "Us" or "Our" in
                  this Agreement).</Span
                >
              </li>
              <li>
                <Span className="gray80-span-bold-16">Device</Span>
                <Span className="gray80-span-16">
                  means any device that can access the Service such as a
                  computer, a cellphone or a digital tablet.</Span
                >
              </li>
              <li>
                <Span className="gray80-span-bold-16">Feedback</Span>
                <Span className="gray80-span-16">
                  means feedback, innovations or suggestions sent by You
                  regarding the attributes, performance or features of our
                  Service.</Span
                >
              </li>
            </ul>
          </a-modal>
        </div>

        <!-- Terms of Servece modal window -->
        <div>
          <a-modal
            v-model:visible="modalTermsOfServiceVisible"
            title="Terms and Conditions"
            centered
            closeIcon="&#10006;"
            width="75%"
            :footer="null"
          >
            <Paragraph className="blue-p-16">
              Last updated: June 12, 2021
            </Paragraph>
            <Paragraph className="gray80-p-16">
              A terms and conditions agreement outlines the website
              administrator’s rules regarding user behavior and provides
              information about the actions the website administrator can and
              will perform..
            </Paragraph>
            <Paragraph className="gray80-p-16">
              Essentially, your terms and conditions text is a contract between
              your website and its users. In the event of a legal dispute,
              arbitrators will look at it to determine whether each party acted
              within their rights.
            </Paragraph>
            <Paragraph className="gray80-p-bold-18">
              Interpretation and Definitions
            </Paragraph>
            <Paragraph className="gray80-p-18"> Interpretation </Paragraph>
            <Paragraph className="gray80-p-16">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </Paragraph>
            <Paragraph className="gray80-p-18"> Definitions </Paragraph>
            <Paragraph className="gray80-p-16">
              For the purposes of these Terms and Conditions:
            </Paragraph>
            <ul style="margin-left: 25px">
              <li>
                <Span className="gray80-span-bold-16">Account</Span>
                <Span className="gray80-span-16">
                  means a unique account created for You to access our Service
                  or parts of our Service.</Span
                >
              </li>
              <li>
                <Span className="gray80-span-bold-16">Country</Span>
                <Span className="gray80-span-16">
                  refers to: NYC, United States.</Span
                >
              </li>
              <li>
                <Span className="gray80-span-bold-16">Company</Span>
                <Span className="gray80-span-16">
                  (referred to as either "the Company", "We", "Us" or "Our" in
                  this Agreement).</Span
                >
              </li>
              <li>
                <Span className="gray80-span-bold-16">Device</Span>
                <Span className="gray80-span-16">
                  means any device that can access the Service such as a
                  computer, a cellphone or a digital tablet.</Span
                >
              </li>
              <li>
                <Span className="gray80-span-bold-16">Feedback</Span>
                <Span className="gray80-span-16">
                  means feedback, innovations or suggestions sent by You
                  regarding the attributes, performance or features of our
                  Service.</Span
                >
              </li>
            </ul>
          </a-modal>
        </div>

        <footer
          class="flex-row flex-space-between"
          style="
            padding: 0 40px;
            background: linear-gradient(
                0deg,
                rgba(7, 31, 55, 0.05),
                rgba(7, 31, 55, 0.05)
              ),
              #ffffff;
            box-shadow: 0px 0px 5px rgba(26, 39, 37, 0.05);
          "
        >
          <div>
            <Span className="gray80-span-12"
              >© 2022 PropTech - All Rights Reserved.</Span
            >
          </div>
          <div>
            <Span
              className="gray80-span-12"
              style="cursor: pointer"
              @click="modalPrivacyPolicyVisible = true"
              >Privacy Policy</Span
            >
            |
            <Span
              className="gray80-span-12"
              style="cursor: pointer"
              @click="modalTermsOfServiceVisible = true"
              >Terms of Service</Span
            >
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
import Span from "@/components/ui/Span.vue";
import Paragraph from "@/components/ui/Paragraph.vue";

const menuList = [
  {
    linkTo: "/",
    imageSrc: "/images/dashboard.svg",
    altText: "dashboard",
    title: "Dashboard",
  },
  {
    linkTo: "/tenants",
    imageSrc: "/images/tenants.svg",
    altText: "tenants",
    title: "Tenants",
  },
  {
    linkTo: "/properties",
    imageSrc: "/images/key.svg",
    altText: "properties",
    title: "Properties",
  },
  {
    linkTo: "/leases",
    imageSrc: "/images/leases.svg",
    altText: "leases",
    title: "Leases",
  },
  {
    linkTo: "/applications",
    imageSrc: "/images/applications.svg",
    altText: "applications",
    title: "Applications",
  },
  {
    linkTo: "/reports",
    imageSrc: "/images/forms.svg",
    altText: "reports",
    title: "Reports",
  },
  {
    linkTo: "/maintenance",
    imageSrc: "/images/maintenance.svg",
    altText: "maintenance",
    title: "Maintenance",
  },
  {
    linkTo: "/admins",
    imageSrc: "/images/tenants.svg",
    altText: "admin",
    title: "Admins",
  },
  {
    linkTo: "/test",
    imageSrc: "/images/forms.svg",
    altText: "Tests",
    title: "Tests",
  },
];

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
    Span,
  },
  setup() {
    const modalPrivacyPolicyVisible = ref(false);
    const modalTermsOfServiceVisible = ref(false);

    const store = useStore();
    const onLogout = () => {
      store.dispatch('auth/logout')
    }

    return {
      modalPrivacyPolicyVisible,
      modalTermsOfServiceVisible,
      onLogout,
      menuList,
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
</style>