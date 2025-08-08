<template>
  <div id="App">
    <div class="button-section">
      <h3>Syncfusion Buttons</h3>
      <div class="button-group">
        <ejs-button id="primary-btn" :isPrimary="true">Primary Button</ejs-button>
        <ejs-button id="secondary-btn">Secondary Button</ejs-button>
        <ejs-button id="success-btn" cssClass="e-success">Success Button</ejs-button>
        <ejs-button id="info-btn" cssClass="e-info">Info Button</ejs-button>
      </div>
    </div>
    
    <div class="badge-section">
      <h3>Notification Badges</h3>
      <div class="badge-container">
        <div class="badge-item">
          <ejs-button id="update-btn">Updates</ejs-button>
          <span class="e-badge e-badge-info e-badge-notification e-badge-overlap">14</span>
        </div>
        <div class="badge-item">
          <ejs-button id="task-btn">Tasks</ejs-button>
          <span class="e-badge e-badge-success e-badge-notification e-badge-overlap">48</span>
        </div>
        <div class="badge-item">
          <ejs-button id="notify-btn">Notifications</ejs-button>
          <span class="e-badge e-badge-secondary e-badge-notification e-badge-overlap">99</span>
        </div>
      </div>
    </div>

    <div class="grid-section">
      <h3>Data Grid</h3>
      <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings='pageSettings'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Page } from "@syncfusion/ej2-vue-grids"

export default defineComponent({
  name: 'App',
  setup() {
    const data = ref([
      { OrderID: 10248, CustomerID: "VINET", Freight: 32.38, ShipCity: "Reims" },
      { OrderID: 10249, CustomerID: "TOMSP", Freight: 11.61, ShipCity: "Münster" },
      { OrderID: 10250, CustomerID: "HANAR", Freight: 65.83, ShipCity: "Rio de Janeiro" },
      { OrderID: 10251, CustomerID: "VICTE", Freight: 41.34, ShipCity: "Lyon" },
      { OrderID: 10252, CustomerID: "SUPRD", Freight: 51.3, ShipCity: "Charleroi" },
      { OrderID: 10253, CustomerID: "HANAR", Freight: 58.17, ShipCity: "Rio de Janeiro" },
      { OrderID: 10254, CustomerID: "CHOPS", Freight: 22.98, ShipCity: "Bern" }
    ])
    
    const pageSettings = ref({ pageSize: 5 })

    return {
      data,
      pageSettings
    }
  },
  provide: {
    grid: [Page]
  }
})
</script>

<style lang="scss">
@import './styles/app.scss';
</style>
