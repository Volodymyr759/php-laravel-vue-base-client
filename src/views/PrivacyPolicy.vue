<template>
  <Paragraph className="blue-p-16"> Last updated: June 12, 2021 </Paragraph>
    <Paragraph className="gray80-p-16">
      This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information 
      when You use the Service and tells You about Your privacy rights and how the law protects You.
    </Paragraph>
    <Paragraph className="gray80-p-16">
      We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection 
      and use of information in accordance with this Privacy Policy.
    </Paragraph>
    <Paragraph className="gray80-p-bold-18">Interpretation and Definitions</Paragraph>
    <Paragraph className="gray80-p-18">Definitions</Paragraph>
    <ul id="definitions">
      <li>
        <Span className="gray80-span-bold-16">Account</Span>
        <Span className="gray80-span-16">
          means a unique account created for You to access our Serviceor parts of our Service.
        </Span>
      </li>
      <li>
        <Span className="gray80-span-bold-16">Country</Span>
        <Span className="gray80-span-16">
          refers to: NYC, United States.
        </Span>
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
    Span,
  },
});
</script>

<style scoped>
#definitions {
  margin-left: 25px;
}
</style>