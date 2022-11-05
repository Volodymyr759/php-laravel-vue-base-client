<template>
  <div>
    <section style="background-color: blue">
      <Span className="white-span-12"> white-span-12 class </Span>
      <hr />
      <Paragraph className="white-p-12"> white-p-12 class </Paragraph>
      <Paragraph className="white-p-16"> white-p-16 class </Paragraph>
      <Paragraph className="white-p-bold-16"> white-p-bold-16 class </Paragraph>
      <Paragraph className="white-p-20"> white-p-20 class </Paragraph>
      <Paragraph className="white-p-26"> white-p-26 class </Paragraph>
    </section>
    <section style="background-color: white">
      <hr />
      <div style="text-align: center"><strong>Gray Spans</strong></div>
      <Span className="gray80-span-12"> gray80-span-12 class </Span>
      <br />
      <Span className="gray80-span-16"> gray80-span-16 class </Span>
      <br />
      <Span className="gray80-span-bold-16"> gray80-span-bold-16 class </Span>
      <br />
      <Span className="gray80-span-20"> gray80-span-20 class </Span>
      <br />
      <Span className="gray100-span-12"> gray100-span-12 class </Span>
      <br />
      <Span className="gray100-span-20"> gray100-span-20 </Span>

      <hr />
      <div style="text-align: center"><strong>Blue Spans</strong></div>
      <Span className="blue-span-16"> blue-span-16 class </Span>

      <hr />
      <div style="text-align: center"><strong>Blue Paragraphs</strong></div>
      <Paragraph className="blue-p-16"> blue-p-16 class </Paragraph>

      <hr />
      <div style="text-align: center"><strong>Orange Spans</strong></div>
      <Span className="orange-span-bold-12"> orange-span-bold-12 class </Span>
      <br />
      <Span className="orange-span-16"> orange-span-16 class </Span>

      <hr />
      <div style="text-align: center"><strong>Orange Paragraphs</strong></div>
      <Paragraph className="orange-p-46"> orange-p-46 class </Paragraph>

      <hr />
      <div style="text-align: center"><strong>Gray Paragraphs</strong></div>
      <Paragraph className="gray100-p-14"> gray100-p-14 class </Paragraph>
      <Paragraph className="gray80-p-16"> gray80-p-16 class </Paragraph>
      <Paragraph className="gray80-p-18"> gray80-p-18 class </Paragraph>
      <Paragraph className="gray80-p-bold-18">
        gray80-p-bold-18 class
      </Paragraph>

      <hr />
      <div style="text-align: center"><strong>Buttons</strong></div>
      <div style="margin: 5px">
        <Button className="blue-white">blue-white small button</Button>
      </div>
      <div style="margin: 5px">
        <Button className="blue-white" size="large"
          >blue-white large button</Button
        >
      </div>
      <div style="margin: 5px">
        <Button className="black-white">black-white small button</Button>
      </div>
      <div style="margin: 5px">
        <Button className="white-black" type="dashed"
          >white-black small button</Button
        >
      </div>
      <div style="margin: 5px">
        <Button className="white-black" type="dashed" size="large"
          >white-black large button</Button
        >
      </div>
      <div style="margin: 5px">
        <Button className="white-black-auth" type="primary" html-type="submit">
          <Span className="gray100-span-20">white-black auth button</Span>
        </Button>
      </div>
      <div style="margin: 5px">
        <Button className="white-red" type="dashed"
          >white-red small button</Button
        >
      </div>
      <div style="margin: 5px">
        <Button className="white-blue" type="dashed"
          >white-blue small button</Button
        >
      </div>
      <div style="margin: 5px">
        <Spin />
      </div>
    </section>
    <section class="functional-section">
      <h3>Temporary section to store routes to public pages:</h3>
      <ul style="padding: 0 20px">
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/register">Register</router-link></li>
        <li>
          <router-link to="/forgot-password">Forgot Password</router-link>
        </li>
        <li>
          <router-link to="/change-password">Change Password</router-link>
        </li>
        <li>
          <router-link to="/link-confirmed"
            >Verification Link Confirmed</router-link
          >
        </li>
      </ul>
    </section>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/ui/Button.vue";
import Span from "@/components/ui/Span.vue";
import Spin from "@/components/ui/Spin.vue";
import Paragraph from "@/components/ui/Paragraph.vue";

export default defineComponent({
  components: {
    Button,
    Paragraph,
    Span,
    Spin,
  },
});
</script>