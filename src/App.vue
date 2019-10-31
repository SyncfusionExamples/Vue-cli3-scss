<template>
  <div id="App">
    <ejs-button>EJ2 Button</ejs-button>
    <div class="col-lg-12 control-section default">
            <div class="sample_container badge-default">
                <div class="e-btn-group e-custom-button">
                    <button id="update" class="e-btn">Updates
                        <!-- Notification Badge -->
                        <span class="e-badge e-badge-info e-badge-notification e-badge-overlap">14</span>
                    </button>
                    <button id="task" class="e-btn">Tasks
                        <!-- Notification Badge -->
                        <span class="e-badge e-badge-success e-badge-notification e-badge-overlap">48</span>
                    </button>
                    <button id="notify" class="e-btn">Notifications
                        <!-- Notification Badge -->
                        <span class="e-badge e-badge-secondary e-badge-notification e-badge-overlap">99</span>
                    </button>
                </div>
            </div>
        </div>
        <br></br>
         <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings='pageSettings'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          </e-columns>
        </ejs-grid>
  </div>
  
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
Vue.use(ButtonPlugin);
Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: [
        { OrderID: 10248, CustomerID: "VINET", Freight: 32.38 },
        { OrderID: 10249, CustomerID: "TOMSP", Freight: 11.61 },
        { OrderID: 10250, CustomerID: "HANAR", Freight: 65.83 },
        { OrderID: 10251, CustomerID: "VICTE", Freight: 41.34 },
        { OrderID: 10252, CustomerID: "SUPRD", Freight: 51.3 },
        { OrderID: 10253, CustomerID: "HANAR", Freight: 58.17 },
        { OrderID: 10254, CustomerID: "CHOPS", Freight: 22.98 }
      ],
      pageSettings: { pageSize: 5 }
    };
  },
  provide: {
    grid: [Page]
  }
};
</script>

<style lang="scss">

// SASS Variable override
$accent: black;
$primary: blue;

@import "~@syncfusion/ej2-vue-buttons/styles/button/material.scss";
@import "~@syncfusion/ej2-vue-grids/styles/material.scss";
</style>
