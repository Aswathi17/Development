<template>
    <div id="" style="padding:80px;">
    <div style="width:960px; height:40px;color: rgb(202, 60, 60);text-align: center;font-size: 20px;">
    <strong>DATA EXTRACT FOR RECONCILATION</strong></div>
        <form class="pure-form pure-form-stacked">
    <fieldset>
           <div class="pure-g">
            <div class="pure-u-1 pure-u-md-1-3">
                <label for="first-name">Brand</label>
                <select id="state" class="pure-input-1-3">
                <option>--All--</option>
                    <option>Levis</option>
                    <option>Denizen</option>
                    <option>Dockers</option>
                    <option>Signature</option>
                </select>
            </div>

            <div class="pure-u-1 pure-u-md-1-3">
                <label for="last-name">Season Code</label>
                <select id="state" class="pure-input-1-3">
                    <option>--All--</option>
                    <!--<option v-for="season in seasons">{{ season.seasonType}}</option>-->
                    <option>191</option>
                    <option>192</option>
                    <option>301</option>
                    <option>502</option>
                </select>
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                <label for="city">Product Code</label>
                <input id="city" class="pure-u-23-24" type="text" placeholder="Enter 1 or multiple PC5 codes">
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                <label for="email">Product Sub Category</label>
                <select id="state" class="pure-input-1-2">
                    <option>--All--</option>
                    <option v-for="category in subCategory">{{ category.subCategory }}</option>
                </select>
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                <label for="last-name">Stage</label>
                <select id="state" class="pure-input-1-3">
                    <option>--All--</option>
                    <!--<option v-for="season in seasons">{{ season.seasonType}}</option>-->
                    <option>Commercial Sample</option>
                    <option>Ad Sample</option>
                </select>
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                <label for="city">PO Prefix</label>
                <input id="city" class="pure-u-23-24" type="text" placeholder="PO">
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                <label for="city">PO Starting ID</label>
                <input id="city" class="pure-u-23-24" type="text" placeholder="PO Starting ID">
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                <label for="first-name">Division</label>
                <select id="state" class="pure-input-1-2">
                <option>--All--</option>
                    <option>LSE</option>
                    <option>LSA</option>
                    <option>APD</option>
                </select>
            </div>
            <div class="pure-u-1 pure-u-md-1-3">
                <label for="city">Delivery Date</label>
                <input id="city" class="pure-u-23-24" type="text" placeholder="Delivery Date">
            </div>
           <!-- <div class="pure-controls">
            <label for="cb" class="pure-checkbox" style="width:200px">
                <input id="cb" type="checkbox"> Available</label>
            </div>-->
        </div> 
        <input type="button" class="pure-button pure-button-primary" value="Search Products" v-on:click="getProductCodes()"/>       
    </fieldset>
</form>
<div v-show="showProducts">
    <ag-grid-vue style="width: 480px; height: 290px;padding: 10px;"
                 class="ag-theme-balham"
                 :columnDefs="columnDefs"
                 :rowData="rowData">
    </ag-grid-vue>
    </div>
    </div>    
</template>
<script>
import {AgGridVue} from "ag-grid-vue";
import axios from 'axios';
export default {
    data() {
            return {
                columnDefs: null,
                rowData: null,
                seasons: null,
                subCategory: null,
                showProducts: false
            }
        },    
    components: {
            AgGridVue
        },
    methods: {
        getProductCodes () {
            return axios.get('http://localhost:8080/products.json').then(response => {
                this.rowData = response.data
                this.showProducts = true;
            })
        }
    },
    beforeMount() {
            this.columnDefs = [
                
                {headerName: 'Product Code', field: 'productCode'},
                {headerName: 'Product Name', field: 'name',},
                //{headerName: 'Model', field: 'category', editable : true},
                //{headerName: 'Price', field: 'price', editable : true},
                //{headerName: 'stock', field: 'stock', editable : true}
                
            ];

            axios.get('http://localhost:8080/seasons.json').then(response => {
                this.seasons = response.data
                   })
            axios.get('http://localhost:8080/subCategory.json').then(response => {
                this.subCategory = response.data
                   })
        }    
}
</script>
