<template>
  <v-container fluid  v-if="datosParcela != null && datosParcela != 'undefined'">
    <v-row>
      <!--
      <v-col cols="12" sm="3" md="2">
        <v-card height="400" width="256" class="mx-auto">
          <v-navigation-drawer permanent>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  CEMENTERIO PARQUE
                </v-list-item-title>
                <v-list-item-subtitle>
                  GESTION
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col> -->
      <v-col cols="12" sm="3" md="12">


        <v-divider class="mx-6" inset vertical></v-divider>
        <v-form :readonly="isDisableComp()">
          <v-card elevation="5">
            <v-card-text>
              <v-container fluid>
                <v-bottom-navigation horizontal showhint grow hide-on-scroll v-model="navCem" :background-color="color"
                  dark shift>
                  <v-btn @click="CargarTitulares">
                    <span>Titulares</span>

                    <v-icon>mdi-account-details-outline</v-icon>
                  </v-btn>

                  <v-btn @click="CargarDifuntos">
                    <span>Difuntos</span>

                    <v-icon>mdi-grave-stone</v-icon>
                  </v-btn>

                  <v-btn @click="CargarCtaCte()">
                    <span>Cta Cte</span>

                    <v-icon>mdi-currency-usd</v-icon>
                  </v-btn>

                  <v-btn @click="createPDF()">
                    <span>Cedulon</span>

                    <v-icon>mdi-printer</v-icon>
                  </v-btn>
                </v-bottom-navigation>

                <br>
                <v-row>
                  <v-col cols="12" sm="3" md="1">
                    <v-text-field v-model="editedItem.tipo" label="Tipo" :rules="validacion"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="1">
                    <v-text-field v-model="editedItem.manzana" label="Manzana" :rules="validacion">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="1">
                    <v-text-field v-model="editedItem.lote" label="Lote" :rules="validacion"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="1">
                    <v-text-field v-model="editedItem.parcela" label="Parcela" :rules="validacion">
                    </v-text-field>

                  </v-col>
                  <v-col cols="12" sm="6" md="1">
                    <v-text-field v-model="editedItem.nivel" label="Nivel" :rules="validacion"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="1">
                    <v-text-field v-model="editedItem.nro_contrato" label="Nro Contrato"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="2">
                    <v-text-field v-model="editedItem.fecha_contrato" label="Fecha Contrato"></v-text-field>

                  </v-col>
                  <v-col cols="12" sm="3" md="4">
                    <v-text-field v-model="editedItem.nom_titular1" label="Titular 1"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>



                  <v-col cols="12" sm="3" md="1">
                    <v-checkbox v-model="editedItem.unificado" label="Unificado"></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="3" md="1">
                    <v-checkbox v-model="editedItem.ocupado" label="Ocupado"></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="3" md="2">
                    <v-checkbox v-model="editedItem.exento" label="Exento"></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="3" md="2">
                    <v-checkbox v-model="editedItem.emite_cedulon" label="Emite cedulon"></v-checkbox>
                  </v-col>
                  <v-col cols="12" sm="3" md="3">
                    <v-text-field v-model="editedItem.pri_periodo_liq" label="Primer Periodo liquidado" disabled>
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3" md="3">
                    <v-text-field v-model="editedItem.ult_periodo_liq" label="Ultimo periodo Liquidado" disabled>
                    </v-text-field>
                  </v-col>

                </v-row>
                <v-row>

                  <v-col cols="12" sm="3" md="3">
                    <v-text-field v-model="editedItem.fecha_renovacion" label="Fecha renovacion">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3" md="3">
                    <v-text-field v-model="editedItem.cuit" label="Cuit">
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" sm="3" md="3">
                    <v-text-field v-model="editedItem.cuit_vecino_digital" label="Cuit vecino digital">
                    </v-text-field>
                  </v-col>
                </v-row>

                <v-card-actions>
                  <v-row>
                    <v-col cols="12" sm="3" md="3">
                      <v-btn color="primary" elevation="5" x-large text @click="save">
                        Guardar
                      </v-btn>
                    </v-col>

                    <v-col cols="12" sm="3" md="3">
                      <v-btn x-large elevation="5" color="red" text @click="close">
                        Cancelar
                      </v-btn>
                    </v-col>


                  </v-row>
                </v-card-actions>

              </v-container>
            </v-card-text>

          </v-card>
        </v-form>
      </v-col>
    </v-row>
    <br>
    <v-divider></v-divider>
    <v-data-table :headers="headers" :items="datosParcela" sort-by="identificacion" class="elevation-4" 
      :items-per-page="5" :search="search" @click:row="editItem"  dense >

      <template v-slot:top>
        <v-toolbar flat>

          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line hide-details>
          </v-text-field>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>


          <v-dialog v-model="dlgTitular" width="1000">
            <v-card-title class="text-h5 primary dark shift">
              <v-row>
                <v-col cols="12" sm="3" md="6">
                  <v-icon>mdi-account-box</v-icon>
                  Titulares
                </v-col>
                <v-col cols="12" sm="3" md="6">
                  <v-icon>mdi-grave-stone</v-icon>
                  {{ "T:" + editedItem.tipo + " M:" + editedItem.manzana + " L:" + editedItem.lote + " P:" +
                      editedItem.parcela + " N:" + editedItem.nivel
                  }}
                </v-col>
              </v-row>
            </v-card-title>
            <v-card>
              <template>
                <v-card>
                  <v-row>
                    <v-col cols="12" sm="3" md="3">
                      <v-text-field v-model="editedItemTit.nro_titular" label="Tipo Doc" :disabled="isDisableComp()">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3">
                      <v-text-field v-model="editedItemTit.nom_titular" label="Nro doc" :disabled="isDisableComp()">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedItemTit.activo" label="Nombre" :disabled="isDisableComp()">
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn rounded x-large color="primary" class="mb-2" v-bind="attrs" v-on="on">
                      Alta Titular
                    </v-btn>
                  </template>

                  <v-data-table :headers="headTitular" :items="datosTitular" class="elevation-1">
                   
                   <template v-slot:item.actionsTit="{ item }">
                      <v-icon  large class="mr-2" @click="editItemTit(item)">
                        mdi-account-edit
                      </v-icon>
                    </template>

                  </v-data-table>
                </v-card>

              </template>
            </v-card>
          </v-dialog>


          <v-dialog v-model="dlgDifunto"  dense width="1000">
            <v-card-title class="text-h5 primary dark shift">
              <v-row>
                <v-col cols="12" sm="3" md="6">
                  <v-icon>mdi-account-box</v-icon>
                  Difuntos
                </v-col>
                <v-col cols="12" sm="3" md="6">
                  <v-icon>mdi-grave-stone</v-icon>
                  {{ "T:" + editedItem.tipo + " M:" + editedItem.manzana + " L:" + editedItem.lote + " P:" +
                      editedItem.parcela + " N:" + editedItem.nivel
                  }}
                </v-col>
              </v-row>
            </v-card-title>
            <v-card>
              <template>
                <v-card>
                  <v-row>
                    <v-col cols="12" sm="3" md="3">
                      <v-text-field v-model="editedDifuntos.tipo_doc_nombre" label="Tipo Doc"
                        :disabled="isDisableComp()">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3">
                      <v-text-field v-model="editedDifuntos.nro_documento" label="Nro doc" :disabled="isDisableComp()">
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field v-model="editedDifuntos.nom_difunto" label="Nombre" :disabled="isDisableComp()">
                      </v-text-field>
                    </v-col>
                  </v-row>

                  <template v-slot:activator="{ on, attrs }">

                    <v-btn rounded x-large color="primary" class="mb-2" v-bind="attrs" v-on="on">

                      Alta Difunto
                    </v-btn>
                  </template>

                  <v-data-table :headers="headDifuntos" :items="datosDifuntos" class="elevation-1">
                    <template v-slot:item.actionsDif="{ item }">
                      <v-icon large class="mr-2" @click="editItemDif(item)">
                        mdi-cross
                      </v-icon>
                    </template>
                  </v-data-table>
                </v-card>

              </template>
            </v-card>

          </v-dialog>




          <v-dialog v-model="dlgCtaCte" width="1000">
            <v-form>
              <v-card-title class="text-h5 primary dark shift">
                <v-row>
                  <v-col cols="12" sm="3" md="8">
                    <v-icon>mdi-account-box</v-icon>
                    {{ editedItem.nom_titular1 + " " }}
                  </v-col>
                  <v-col cols="12" sm="3" md="4">
                    <v-icon>mdi-grave-stone</v-icon>
                    {{ "T:" + editedItem.tipo + " M:" + editedItem.manzana + " L:" + editedItem.lote + " P:" +
                        editedItem.parcela + " N:" + editedItem.nivel
                    }}
                  </v-col>
                </v-row>


              </v-card-title>
              <v-card>
                <v-row align="center">
                  <v-col class="d-flex" cols="12" sm="3">
                    <v-select v-model="select" :items="ArrayTipoMov" item-text="text" item-value="value"
                      label="Tipo Deuda" return-object @change="CargarCtaCte()">
                    </v-select>
                  </v-col>
                  <v-col class="d-flex" cols="12" sm="3"></v-col>
                  <v-col class="d-flex" cols="12" sm="6">
                    <v-select v-model="select" :items="datosCategoria" item-text="des_categoria"
                      item-value="cod_categoria" label="Categoria" return-object>
                    </v-select>
                  </v-col>
                </v-row>

                <v-divider></v-divider>
                <br>

                <v-simple-table dense id="virtual-scroll-table" v-scroll:#virtual-scroll-table="onScroll">

                  <template v-slot:default>


                    <thead>
                      <tr align="center">
                        <th class="text-left">
                          Movim
                        </th>
                        <th class="text-left">
                          Periodo
                        </th>
                        <th class="text-left">
                          Monto Original
                        </th>
                        <th class="text-left">
                          Debe
                        </th>
                        <th class="text-left">
                          Haber
                        </th>
                        <th class="text-left">
                          Nro Plan
                        </th>
                        <th class="text-left">
                          Nro Proc
                        </th>
                        <th class="text-left">
                          Categoria
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in datosCtaCte">
                        <td>{{ item.movim }}</td>
                        <td>{{ item.periodo }}</td>
                        <td>{{ item.monto_original }}</td>
                        <td>{{ item.debe }}</td>
                        <td>{{ item.haber }}</td>
                        <td>{{ item.nro_plan }}</td>
                        <td>{{ item.nro_procuracion }}</td>
                        <td>{{ item.categoria }}</td>

                      </tr>
                    </tbody>

                    <br><br>

                  </template>

                </v-simple-table>
                <v-divider></v-divider>

                <v-card elevation="5">
                  <v-row align="center">
                    <v-col cols="12" sm="3" md="6">
                    </v-col>

                    <v-col cols="12" sm="3" md="3">
                      <v-text-field v-model="SaldoOriginal" label="Saldo original">

                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="3" md="3">
                      <v-text-field v-model="SaldoDeuda" label="Saldo Actual">

                      </v-text-field>
                    </v-col>
                  </v-row>
                </v-card>
              </v-card>

            </v-form>
          </v-dialog>

        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon large class="mr-2" @click="editItem(item)">
          mdi-table-edit
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary">
          Reset
        </v-btn>
      </template>
    </v-data-table>

  </v-container>

</template>


<script>

export default {
  data: () => ({
    disabled: false,
    dialog: false,
    dialogDelete: false,
    dlgTitular: false,
    dlgDifunto: false,
    dlgCtaCte: false,
    search: "",
    navCem: 1,
    currentPage: 0,
    pageCount: 0,

    headers: [

      { text: 'Identificacion', align: 'start', sortable: false, value: 'identificacion', },
      { text: "Tipo", value: "tipo", width: "10%" },
      { text: "Manzana", value: "manzana", width: "10%" },
      { text: "Lote", value: "lote", width: "10%" },
      { text: "Parcela", value: "parcela", width: "10%" },
      { text: "Nivel", value: "nivel", width: "10%" },
      { text: "Titular", value: "nom_titular1", width: "25%" },
      { text: "", value: "nro_contrato" },
      { text: 'Opciones', value: 'actions', sortable: false },
    ],
    headTitular: [
      { text: 'nro contrib', align: 'start', sortable: false, value: 'nro_titular', },
      { text: 'Nombre', value: 'nom_titular', },
      { text: 'Activo', value: 'activo', },
      { text: 'Opciones', value: 'actionsTit', sortable: false }],
    headDifuntos: [
      { text: "Tipo", value: "tipo", width: "10%" },
      { text: "Manzana", value: "manzana", width: "10%" },
      { text: "Lote", value: "lote", width: "10%" },
      { text: "Parcela", value: "parcela", width: "10%" },
      { text: "Nivel", value: "nivel", width: "10%" },
      { text: 'Tipo Doc', value: 'tipo_doc_nombre', },
      { text: "Nro Doc", value: "nro_documento", },
      { text: "Nombre", value: "nom_difunto", },
      { text: 'Opciones', value: 'actionsDif', sortable: false },
    ],

    busqTit: "",
    datosParcela: [],
    datosCtaCte: [],
    select: { text: "Solo deudas", value: "1" },
    ArrayTipoMov: [{

      text: 'Solo deudas',
      value: "1",
    },
    {
      text: 'Todo',
      value: "0",

    }
    ],
    validacion: [
      value => !!value || 'Requerido.',
    ],



    datosTitular: [],
    datosCategoria: [],
    busqDifuntos: "",

    datosDifuntos: [],

    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard' },
      { title: 'Photos', icon: 'mdi-image' },
      { title: 'About', icon: 'mdi-help-box' },
    ],


    editedIndex: -1,
    editedIndexDif: -1,
    editedIndexTit: -1,
    editedItem: {
      tipo: '',
      manzana: 0,
      lote: 0,
      parcela: 0,
      nivel: 0,
      nro_contrato: '',
      fecha_contrato: '',
      nom_titular1: '',
      nom_titular2: '',
      unificado: '',
      ocupado: '',
      exento: '',
      pri_periodo_liq: '',
      ult_periodo_liq: '',
      fecha_renovacion: '',
      emite_cedulon: '',
      cuit_Vecino_Digital: '',
      cuit: '',
    },
    defaultItem: {

      tipo: '',
      manzana: 0,
      lote: 0,
      parcela: 0,
      nivel: 0,
      nro_contrato: '',
      fecha_contrato: '',
      nom_titular1: '',
      nom_titular2: '',
      unificado: '',
      ocupado: '',
      exento: '',
      pri_periodo_liq: '',
      ult_periodo_liq: '',
      fecha_renovacion: '',
      emite_cedulon: '',
      cuit_Vecino_Digital: '',
      cuit: '',

    },

    editedItemTit: {
      tipo: '',
      manzana: 0,
      lote: 0,
      parcela: 0,
      nivel: 0,
      nro_titular: 0,
      nom_titular: '',
      activo: "",
    },
    defaultItemTit: {

      tipo: '',
      manzana: 0,
      lote: 0,
      parcela: 0,
      nivel: 0,
      nro_titular: 0,
      nom_titular: '',
      activo: "",
    },
    editedDifuntos: {

      tipo_documento: '',
      nro_documento: '',
      nom_difunto: '',
    },

    defaultItemDifuntos: {

      tipo_documento: '',
      nro_documento: '',
      nom_difunto: '',

    }


  }),
  components: {  },
  async mounted() {
    try {
      this.datosParcela = (await this.$http.get("/Cementerio/read")).data;
    } catch (error) {
      this.datosParcela = null;
    }


  },



  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Alta' : 'Editar'

    },
    SaldoDeuda: function () {
      let total = 0;
      for (let i = 0; i < this.datosCtaCte.length; i++) {
        total += parseFloat(this.datosCtaCte[i].debe - this.datosCtaCte[i].haber);
      }
      return total;

    },
    SaldoOriginal: function () {
      let total = 0;
      for (let i = 0; i < this.datosCtaCte.length; i++) {
        total += parseFloat(this.datosCtaCte[i].monto_original - this.datosCtaCte[i].haber);
      }
      return total;

    },

    color() {
      switch (this.navCem) {
        case 0: return 'primary'
        case 1: return 'primary'
        case 2: return 'primary'
        case 3: return 'primary'
        default: return 'primary'
      }
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },

  },

  created() {

  },



  methods: {

    handleClick(value) {
      this.highlightClickedRow(value);
      this.viewDetails(value);
    },
    async CargarDifuntos(value) {

      try {
        //  alert("entrando")
        this.datosDifuntos = (await this.$http.get("/Difunto/BuscarDifuntos?Tipo=" +
          this.editedItem.tipo + "&Manzana=" + this.editedItem.manzana + "&Lote=" + this.editedItem.lote +
          "&Parcela=" + this.editedItem.parcela +
          "&Nivel=" + this.editedItem.nivel)).data;
        this.verDialogo();

      } catch (error) {
        this.datosDifuntos = null;
        //  alert("error")
      }


    },
    async CargarTitulares(value) {

      try {
        //    alert("entrando")
        this.datosTitular = (await this.$http.get("/Titulares_x_Cementerio/listarTitulares?Tipo=" +
          this.editedItem.tipo + "&Manzana=" + this.editedItem.manzana + "&Lote=" + this.editedItem.lote +
          "&Parcela=" + this.editedItem.parcela +
          "&Nivel=" + this.editedItem.nivel)).data;
        this.dlgTitular = true;

      } catch (error) {
        this.datosTitular = null;
        //  alert("error")
      }


    },
    async CargarCtaCte(value) {

      try {
        // alert(this.select.value)
        // if (value == undefined) { value = 1 }
        // if (value == "Todo") { value = 0 } else { value = 1 }
        this.datosCtaCte = (await this.$http.get("/CtasCtes_Cementerio/List6arCtaCte?Tipo=" +
          this.editedItem.tipo + "&Manzana=" + this.editedItem.manzana + "&Lote=" + this.editedItem.lote +
          "&Parcela=" + this.editedItem.parcela +
          "&Nivel=" + this.editedItem.nivel + "&Tipo_consulta=" + this.select.value +
          "&Categoria_desde=" + 1 + "&Categoria_hasta=" + 1)).data;

        this.datosCategoria = (await this.$http.get("/CtasCtes_Cementerio/ListarCategorias")).data;



      } catch (error) {
        this.datosCtaCte = null;
        this.datosCategoria = null;
        //  alert("error")
      }
      this.dlgCtaCte = true;

    },

    verDialogo() {
      this.dlgDifunto = true;

    },

    editItem(item) {

      this.editedIndex = this.datosParcela.indexOf(item)
      this.editedItem = Object.assign({}, item)
      //this.dialog = true

    },
    editItemDif(item) {

      this.editedIndexDif = this.datosDifuntos.indexOf(item)
      this.editedDifuntos = Object.assign({}, item)
      // this.dialog = true

    },
    editItemTit(item) {

      this.editedIndexTit = this.datosTitular.indexOf(item)
      this.editedItemTit = Object.assign({}, item)
      // this.dialog = true

    },


    deleteItem(item) {
      this.editedIndex = this.datosParcela.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.datosParcela.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    isDisableComp() {
      return this.editedIndex != -1;
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
        this.disabled = false
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })

    },
    createPDF() {
      let pdfName = 'test';
      var doc = new jsPDF();
      doc.text("Hello World", 10, 10);
      doc.save(pdfName + '.pdf');
    },
    formatDate(value) {
      return moment(value).format("DD/MM/YYYY")
    },
    parseDate(date) {
      return moment(value).format("MMMM DD YYYY")
    },

    async save() {
      if (this.editedIndex > -1) {
        try {
          await this.$http.post("/Cementerio/update", this.editedItem).data;
        } catch (error) {

        }

        // Object.assign(this.desserts[this.editedIndex], this.editedItem)

      } else {

        try {
          await this.$http.post("/Cementerio/insert", this.editedItem).data;
        } catch (error) {

        }
        //this.desserts.push(this.editedItem)
      }
      // RECARGA DE VISTA
      this.close()
      location.reload()
      this.$router.go(0)
    },
  },
}
</script>

<style>
#virtual-scroll-table {
  max-height: 400px;
  overflow: auto;
}
</style>
