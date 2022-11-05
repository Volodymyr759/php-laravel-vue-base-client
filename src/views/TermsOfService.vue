<template>
  <Paragraph className="blue-p-16">Last updated: June 12, 2021</Paragraph>
  <Paragraph className="gray80-p-16">
    A terms and conditions agreement outlines the website administrator’s rules regarding user behavior and provides
    information about the actions the website administrator can and will perform..
  </Paragraph>
  <Paragraph className="gray80-p-16">
    Essentially, your terms and conditions text is a contract between your website and its users. In the event of a legal dispute,
    arbitrators will look at it to determine whether each party acted within their rights.
  </Paragraph>
  <Paragraph className="gray80-p-bold-18">Interpretation and Definitions</Paragraph>
  <Paragraph className="gray80-p-18">Interpretation</Paragraph>
  <Paragraph className="gray80-p-16">
    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions
    shall have the same meaning regardless of whether they appear in singular or in plural.
  </Paragraph>
  <Paragraph className="gray80-p-18">Definitions</Paragraph>
  <Paragraph className="gray80-p-16">For the purposes of these Terms and Conditions:</Paragraph>
  <ul style="margin-left: 25px">
    <li>
      <Span className="gray80-span-bold-16">Account</Span>
      <Span className="gray80-span-16">
        means a unique account created for You to access our Service or parts of our Service.
      </Span>
    </li>
    <li>
      <Span className="gray80-span-bold-16">Country</Span>
      <Span className="gray80-span-16">refers to: NYC, United States.</Span>
    </li>
    <li>
      <Span className="gray80-span-bold-16">Company</Span>
      <Span className="gray80-span-16">
        (referred to as either "the Company", "We", "Us" or "Our" in this Agreement).
      </Span>
    </li>
    <li>
      <Span className="gray80-span-bold-16">Device</Span>
      <Span className="gray80-span-16">
        means any device that can access the Service such as a computer, a cellphone or a digital tablet.
      </Span>
    </li>
    <li>
      <Span className="gray80-span-bold-16">Feedback</Span>
      <Span className="gray80-span-16">
        means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.
      </Span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Span from "@/components/ui/Span.vue";
import Paragraph from "@/components/ui/Paragraph.vue";

export default defineComponent({
  components: {
    Paragraph,
    Span
  },
});
</script>
