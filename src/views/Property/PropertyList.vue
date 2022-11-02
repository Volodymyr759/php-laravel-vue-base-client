<template>
  <a-col 
    class="property-card-wrapper" :xs="24" :sm="11" :md="11" :lg="7"
    v-for="property in properties" :property="property" :key="property.id"
  >
    <div>
      <div v-if="property.images.length > 0" style="text-align: center">
        <img :src="require('C:/Users/user/source/repos/php-laravel-vue-base/storage/app/public/images/' + property.images[0].name)" alt="property photo" style="width: 100%; max-height: 200px" />
      </div>
      <div v-else style="text-align: center">
        <img src="/images/no_property_photo.png" alt="property photo" style="width: 100%; max-height: 200px" />
      </div>
      <br />
      <img src="/images/geo_pin.svg" alt="geo icon" />
      <Span className="gray80-span-12">{{property.address}}</Span>
      <br />
      <a-row style="margin: 6px 0;">
        <a-col :span="8">
          <div v-if="property.status === PropertyStatus.AVAILABLE">
            <img src="/images/green_circle.svg" alt="green circle" />&nbsp;
            <Span className="gray100-span-12">{{PropertyStatus.AVAILABLE}}</Span>
          </div>
          <div v-else>
            <img src="/images/red_ellipse.svg" alt="red circle" />&nbsp;
            <Span className="gray100-span-12">{{PropertyStatus.NOT_AVAILABLE}}</Span>
          </div>
        </a-col>
        <a-col :span="8" :offset="8" style="text-align: right">
          <!-- <span>Actions here</span> -->
          <span>
            <a-tooltip placement="topLeft" :title="'Edit Property: ' + property.address" arrow-point-at-center>
              <a @click="onEdit(property)">
                <a-space>
                  <img src="/images/edit.svg" alt="edit" style="width: 18px; height: 18px" />
                </a-space>
              </a>
            </a-tooltip>
            <a-divider type="vertical" />
            <a-tooltip placement="topLeft" title="Upload Photos" arrow-point-at-center>
              <a @click="onUploadPhotos(property.id)">
                <a-space>
                  <img src="/images/sign_in_squre.svg" alt="sign_in_squre" style="width: 18px; height: 18px" />
                </a-space>
              </a>
            </a-tooltip>
            <a-divider type="vertical" />
            <a-tooltip placement="topLeft" title="Delete" arrow-point-at-center>
              <a @click="onDelete(property.id)">
                <a-space>
                  <img src="/images/delete.svg" alt="delete" style="width: 18px; height: 18px" />
                </a-space>
              </a>
            </a-tooltip>
          </span>
        </a-col>
      </a-row>
      <a-row>
        <a-col :span="10">
          <img src="/images/bathrooms.svg" alt="bathrooms" />
          <Span className="gray100-span-12">{{property.baths}}</Span>&nbsp;
          <img src="/images/beds.svg" alt="bathrooms" />
          <Span className="gray100-span-12">{{property.beds}}</Span>&nbsp;
          <img src="/images/area.svg" alt="area" />
          <Span className="gray100-span-12">{{property.square}} sqft</Span>
        </a-col>
        <a-col :span="7" :offset="7" style="text-align: right">
          <Span className="orange-span-16">{{property.price}} AED/yr</Span>
        </a-col>
      </a-row>
    </div>
  </a-col>
</template>

<script lang="ts">
import { computed, createVNode, defineComponent, PropType } from "vue";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from 'ant-design-vue';
import store from '@/store';
import { IPageSettings } from "@/services/types";
import { IProperty, PropertyStatus } from "@/models/Property";
import Span from "@/components/ui/Span.vue"

export default defineComponent({
  name: "property-list",
  props: {
    settings: {
      type: Object as PropType<IPageSettings>,
      required: true
    }
  },
  emits: ['change-page', 'edit-property', 'delete-property'],
  components: {
    Span
  },
  setup(props, { emit }) {
    const properties = computed<IProperty[]>(() => store.state.properties.properties)
    const total = computed<number>(() => store.state.properties.total);
    const pageSettings: IPageSettings = props.settings;

    // actions
    function onEdit(property: IProperty): void {
      emit('edit-property', property);
    }
    function onDelete(id: number): void {
      Modal.confirm({
        title: 'Do you want to delete this property?',
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode('div', { style: 'color:red;' }, 'The property will be removed immediately.'),
        onOk() { emit('delete-property', id) },
        onCancel() { console.log('Cancel') }
      });
    }
    function onUploadPhotos(id: number){
      alert('Uploading photos is not implemented yet. Id: ' + id);
    }

    function onChangePage(current: number): void {
      emit('change-page', current);
    }

    return {
      properties, total, onChangePage, pageSettings, 
      onEdit, onDelete, onUploadPhotos,
      PropertyStatus
    };
  },
});
</script>

<style scoped>
.property-card-wrapper {
  margin: 12px;
}

@media (max-width: 992px) {
  .property-card-wrapper {
  margin: 12px 4px;
}
}
</style>