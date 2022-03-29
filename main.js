(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 8245)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRI_DATE_FORMATS": () => (/* binding */ GRI_DATE_FORMATS),
/* harmony export */   "FiveDayRangeSelectionStrategy": () => (/* binding */ FiveDayRangeSelectionStrategy),
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_pro4_consecionaria_consecionaria_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 6504);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var signature_pad___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! signature_pad/ */ 9557);
/* harmony import */ var _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./servicios/servicio.service */ 5055);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3339);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 4357);
/* harmony import */ var _awesome_cordova_plugins_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/native-keyboard/ngx */ 6478);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 7210);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 6506);

















const GRI_DATE_FORMATS = Object.assign(Object.assign({}, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_NATIVE_DATE_FORMATS), { display: Object.assign(Object.assign({}, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_NATIVE_DATE_FORMATS.display), { dateInput: {
            year: 'numeric',
            month: '2-digit',
            day: 'numeric',
        } }) });
var start;
var end;
let FiveDayRangeSelectionStrategy = class FiveDayRangeSelectionStrategy {
    constructor(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
        _dateAdapter.setLocale('es');
    }
    selectionFinished(date) {
        return this._createFiveDayRange(date);
    }
    createPreview(activeDate) {
        return this._createFiveDayRange(activeDate);
    }
    _createFiveDayRange(date) {
        if (date) {
            start = this._dateAdapter.addCalendarDays(date, 0);
            end = this._dateAdapter.addCalendarDays(date, 6);
            return new _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.DateRange(start, end);
        }
        return new _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.DateRange(null, null);
    }
};
FiveDayRangeSelectionStrategy.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.DateAdapter }
];
FiveDayRangeSelectionStrategy = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()
], FiveDayRangeSelectionStrategy);

let AppComponent = class AppComponent {
    constructor(platformId, nativeKeyboard, menu, network, loadingController, alertController, barcodeScanner, firestore, servicio) {
        this.platformId = platformId;
        this.nativeKeyboard = nativeKeyboard;
        this.menu = menu;
        this.network = network;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.barcodeScanner = barcodeScanner;
        this.firestore = firestore;
        this.servicio = servicio;
        this.version = "0.5";
        this.version_boo = false;
        this.semanas_register = false;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(),
        });
        this.for_pedidos = [];
        this.fecha_inicio = "";
        this.fecha_fin = "";
        this.array_semana_fechas = [];
        this.array_semana_fechas_atendidos = [];
        this.locale = 'es';
        this.primer = "";
        this.descuento_planilla_new = "Si";
        this.new_entrada = "Caldo";
        this.data_dni = "";
        this.objeto_dni = {
            nombres_apellidos: ""
        };
        this.form_anadir = false;
        this.consecionaria_entra = "";
        this.contrasena_confirmar = "";
        this.tabla_bloo = true;
        this.contrasena = "";
        this.contrasena_consecionaria = "";
        this.lectores = false;
        this.login_consecionaria = true;
        this.fecha_valor = "";
        this.width = "";
        this.dataSource_2 = [];
        this.information = false;
        this.displayedColumns_5 = ['index', 'dni', 'nombres_apellidos', 'almuerzo', 'entrada', 'descuento_planilla', 'reservado'];
        this.displayedColumns = ['index', 'dni', 'nombres_apellidos', 'almuerzo', 'entrada', 'descuento_planilla', 'reservado', 'hora', 'fecha'];
        this.displayedColumns4 = ['index', 'dni', 'nombres_apellidos', 'almuerzo', 'entrada', 'descuento_planilla', 'reservado', 'hora', 'fecha'];
        this.mondal_faltantes = false;
        this.dataSource_r = [];
        this.total_1 = [];
        this.total_2 = [];
        this.ultima_sincronisacion = 0;
        this.faltante_sincronisar = 0;
        this.sopas_con_1 = 0;
        this.almuerzos_con_1 = 0;
        this.sopas_con_2 = 0;
        this.almuerzos_con_2 = 0;
        this.titlee = "";
        this.dni_inputt = "";
        this.indexado = 0;
        this.firma_bloo = "none";
        this.title = 'alimentacion';
        this.atenblur = false;
        this.blur2 = false;
        this.login = false;
        this.registro = false;
        this.reservar = false;
        this.asistencia = false;
        this.numero_telf = "";
        this.b_reservar = false;
        this.b_cancelar = false;
        this.historial_reservaciones = false;
        this.almuerzo_1 = true;
        this.almuerzo_2 = false;
        this.almuerzo_seleccionado = "";
        this.dni = "";
        this.nombres_apellidos = "";
        this.cambiar_contra = false;
        this.contra_actual = "";
        this.contra_nueva = "";
        this.date = new Date();
        this.fecha_actual = String(this.date.getFullYear() + '-' + String(this.date.getMonth() + 1).padStart(2, '0') + '-' + this.date.getDate()).padStart(2, '0');
        this.dia_semana = "";
        this.concesionaria_1 = "";
        this.concesionaria_2 = "";
        this.totailoo = [];
        this.faltantes_reservados = [];
        this.dias_register = false;
    }
    ;
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Escoja su almuerzo ',
                inputs: [
                    {
                        name: 'radio1',
                        type: 'radio',
                        label: this.opcion_1[this.dia_semana],
                        value: 'value1',
                        handler: () => {
                            this.opcion_escogida = this.opcion_1;
                        },
                        checked: true
                    },
                    {
                        name: 'radio2',
                        type: 'radio',
                        label: this.opcion_2[this.dia_semana],
                        value: 'value2',
                        handler: () => {
                            this.opcion_escogida = this.opcion_2;
                        }
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            this.obtener_firma();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    descargar_semana_registro() {
        var formatedDate = new Date(this.fecha_inicio);
        var formatedDate_end = new Date(this.fecha_fin);
        this.servicio._excel(this.for_pedidos, "Registros " + formatedDate + " al " + formatedDate_end);
    }
    pedidos_cal() {
        var colmna = ['dni', 'nombres_apellidos', 'almuerzo', 'lunes', 'hora_l', 'martes', 'hora_m', 'miercoles', 'hora_mi', 'jueves', 'hora_j', 'viernes', 'hora_v', 'sabado', 'hora_s', 'domingo', 'hora_d'];
        const dias = [
            'domingo',
            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes',
            'sabado',
        ];
        var usu_global = [];
        for (let i = 0; i < this.array_semana_fechas_atendidos.length; i++) {
            var usuario = {
                dni: "",
                nombres_apellidos: "",
                lunes: "",
                fecha_l: "",
                almuerzo_l: "",
                descuento_planilla_l: "",
                hora_l: "",
                reservado_l: "",
                martes: "",
                fecha_m: "",
                almuerzo_m: "",
                descuento_planilla_m: "",
                hora_m: "",
                reservado_m: "",
                miercoles: "",
                fecha_mi: "",
                almuerzo_mi: "",
                descuento_planilla_mi: "",
                hora_mi: "",
                reservado_mi: "",
                jueves: "",
                fecha_j: "",
                almuerzo_j: "",
                descuento_planilla_j: "",
                hora_j: "",
                reservado_j: "",
                viernes: "",
                fecha_v: "",
                almuerzo_v: "",
                descuento_planilla_v: "",
                hora_v: "",
                reservado_v: "",
                sabado: "",
                fecha_s: "",
                almuerzo_s: "",
                descuento_planilla_s: "",
                hora_s: "",
                reservado_s: "",
                domingo: "",
                fecha_d: "",
                almuerzo_d: "",
                descuento_planilla_d: "",
                hora_d: "",
                reservado_d: "",
            };
            for (let u = 0; u < this.array_semana_fechas_atendidos.length; u++) {
                if (this.array_semana_fechas_atendidos[i].dni == this.array_semana_fechas_atendidos[u].dni) {
                    var todo = "";
                    if (this.array_semana_fechas_atendidos[u].fecha) {
                        var año = this.array_semana_fechas_atendidos[u].fecha.substring(6, 10);
                        var mes = this.array_semana_fechas_atendidos[u].fecha.substring(3, 5);
                        var dia = this.array_semana_fechas_atendidos[u].fecha.substring(0, 2);
                        var todo = año + "/" + mes + "/" + dia;
                        var date = new Date(todo);
                        var conversion = String(date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getDate()).padStart(2, '0');
                        const numeroDia = new Date(conversion + " 08:02:15").getDay();
                        const nombreDia = dias[numeroDia];
                        var dia_semana = nombreDia;
                        console.log(numeroDia);
                        usuario.dni = this.array_semana_fechas_atendidos[u].dni;
                        usuario.nombres_apellidos = this.array_semana_fechas_atendidos[u].nombres_apellidos;
                        if (dia_semana == 'lunes') {
                            usuario.lunes = this.array_semana_fechas_atendidos[u].entrada;
                            usuario.fecha_l = this.array_semana_fechas_atendidos[u].fecha;
                            usuario.almuerzo_l = this.array_semana_fechas_atendidos[u].almuerzo;
                            usuario.hora_l = this.array_semana_fechas_atendidos[u].hora;
                            usuario.descuento_planilla_l = this.array_semana_fechas_atendidos[u].descuento_planilla;
                            usuario.reservado_l = this.array_semana_fechas_atendidos[u].reservado;
                        }
                        if (dia_semana == 'martes') {
                            usuario.martes = this.array_semana_fechas_atendidos[u].entrada;
                            usuario.fecha_m = this.array_semana_fechas_atendidos[u].fecha;
                            usuario.almuerzo_m = this.array_semana_fechas_atendidos[u].almuerzo;
                            usuario.descuento_planilla_m = this.array_semana_fechas_atendidos[u].descuento_planilla;
                            usuario.hora_m = this.array_semana_fechas_atendidos[u].hora;
                            usuario.reservado_m = this.array_semana_fechas_atendidos[u].reservado;
                        }
                        if (dia_semana == 'miercoles') {
                            usuario.miercoles = this.array_semana_fechas_atendidos[u].entrada;
                            usuario.fecha_mi = this.array_semana_fechas_atendidos[u].fecha;
                            usuario.almuerzo_mi = this.array_semana_fechas_atendidos[u].almuerzo;
                            usuario.descuento_planilla_mi = this.array_semana_fechas_atendidos[u].descuento_planilla;
                            usuario.hora_mi = this.array_semana_fechas_atendidos[u].hora;
                            usuario.reservado_mi = this.array_semana_fechas_atendidos[u].reservado;
                        }
                        if (dia_semana == 'jueves') {
                            usuario.jueves = this.array_semana_fechas_atendidos[u].entrada;
                            usuario.fecha_j = this.array_semana_fechas_atendidos[u].fecha;
                            usuario.almuerzo_j = this.array_semana_fechas_atendidos[u].almuerzo;
                            usuario.descuento_planilla_j = this.array_semana_fechas_atendidos[u].descuento_planilla;
                            usuario.hora_j = this.array_semana_fechas_atendidos[u].hora;
                            usuario.reservado_j = this.array_semana_fechas_atendidos[u].reservado;
                        }
                        if (dia_semana == 'viernes') {
                            usuario.viernes = this.array_semana_fechas_atendidos[u].entrada;
                            usuario.fecha_v = this.array_semana_fechas_atendidos[u].fecha;
                            usuario.almuerzo_v = this.array_semana_fechas_atendidos[u].almuerzo;
                            usuario.descuento_planilla_v = this.array_semana_fechas_atendidos[u].descuento_planilla;
                            usuario.hora_v = this.array_semana_fechas_atendidos[u].hora;
                            usuario.reservado_v = this.array_semana_fechas_atendidos[u].reservado;
                        }
                        if (dia_semana == 'sabado') {
                            usuario.sabado = this.array_semana_fechas_atendidos[u].entrada;
                            usuario.fecha_s = this.array_semana_fechas_atendidos[u].fecha;
                            usuario.almuerzo_s = this.array_semana_fechas_atendidos[u].almuerzo;
                            usuario.descuento_planilla_s = this.array_semana_fechas_atendidos[u].descuento_planilla;
                            usuario.hora_s = this.array_semana_fechas_atendidos[u].hora;
                            usuario.reservado_s = this.array_semana_fechas_atendidos[u].reservado;
                        }
                        if (dia_semana == 'domingo') {
                            usuario.domingo = this.array_semana_fechas_atendidos[u].entrada;
                            usuario.fecha_d = this.array_semana_fechas_atendidos[u].fecha;
                            usuario.almuerzo_d = this.array_semana_fechas_atendidos[u].almuerzo;
                            usuario.descuento_planilla_d = this.array_semana_fechas_atendidos[u].descuento_planilla;
                            usuario.hora_d = this.array_semana_fechas_atendidos[u].hora;
                            usuario.reservado_d = this.array_semana_fechas_atendidos[u].reservado;
                        }
                    }
                    else {
                    }
                    usu_global.push(usuario);
                }
            }
        }
        this.for_pedidos = usu_global;
    }
    logg() {
        var array_fechas = [];
        var array_atendidos = [];
        var formatedDate = new Date(this.fecha_inicio);
        var formatedDate_end = new Date(this.fecha_fin);
        var fecha_init = String(formatedDate.getDate()).padStart(2, '0') + '-' + String(formatedDate.getMonth() + 1).padStart(2, '0') + '-' + formatedDate.getFullYear();
        var mes_1 = '-' + String(formatedDate.getMonth() + 1).padStart(2, '0') + '-' + formatedDate.getFullYear();
        var fecha_end = String(formatedDate_end.getDate()).padStart(2, '0') + '-' + String(formatedDate_end.getMonth() + 1).padStart(2, '0') + '-' + formatedDate_end.getFullYear();
        var mes_2 = '-' + String(formatedDate_end.getMonth() + 1).padStart(2, '0') + '-' + formatedDate_end.getFullYear();
        var subtraido_1 = fecha_init.substring(0, 2);
        var subtraido_2 = fecha_end.substring(0, 2);
        for (let i = 0; i < 2; i++) {
            var subbb = this.servicio.ver_nube("Reservaciones/" + (parseFloat(subtraido_1) + i) + mes_1 + "/" + "Solis").subscribe(resps => {
                for (let u = 0; u < resps.length; u++) {
                    var arr = {
                        almuerzo: resps[u].any.almuerzo,
                        concesionaria: resps[u].any.concesionaria,
                        descuento_planilla: resps[u].any.descuento_planilla,
                        dni: resps[u].any.dni,
                        entrada: resps[u].any.entrada,
                        fecha: resps[u].any.fecha,
                        reservado: resps[u].any.reservado,
                        nombres_apellidos: resps[u].any.nombres_apellidos,
                    };
                    array_fechas.push(arr);
                }
                this.array_semana_fechas = array_fechas;
                this.servicio.ver_id("Historial consecionaria Solis/" + (parseFloat(subtraido_1) + i) + mes_1).then(resp => {
                    for (let p = 0; p < resp.any.length; p++) {
                        array_atendidos.push(resp.any[p]);
                    }
                    this.pedidos_cal();
                    this.array_semana_fechas_atendidos = array_atendidos;
                    subbb.unsubscribe();
                    console.log(this.array_semana_fechas_atendidos);
                });
            });
        }
    }
    presentAlert_entrada() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: "No Encontrado",
                subHeader: "🥣",
                message: "",
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.presentAlert_descuento("No");
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.presentAlert_descuento("Si");
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlert_descuento(entrada) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: "Tipo de descuento",
                subHeader: "❓",
                message: "¿El almuerzo se atendera por descuento de planilla?",
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.backdropDismiss = false;
            yield alert.present();
        });
    }
    presentAlert_atender(titulo, subtitulo, descripcion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: titulo,
                subHeader: subtitulo,
                message: descripcion,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.form_anadir = true;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlert_sesion(titulo, subtitulo, descripcion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: titulo,
                subHeader: subtitulo,
                message: descripcion,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            this.cerra_sesion();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    escanear_codigo_new() {
        var listo = "false";
        for (let i = 0; i < this.dataSource_2.length; i++) {
            if (this.data_dni == this.dataSource_2[i].dni) {
                listo = "true";
                this.presentAlert("Ya registrado", "⚠️", "Este usuario ya recibio un almuerzo");
                this.loadingController.dismiss();
            }
        }
        if (listo == "false") {
            if (window.navigator.onLine == true) {
                this.servicio.ver_id("Usuarios/" + this.data_dni).then(resp => {
                    if (resp == undefined) {
                        this.presentAlert("No existe", "❌", "Este usuario no existe, por favor comuniquese con recursos humanos");
                        this.new_entrada = "Caldo";
                        this.descuento_planilla_new = "Si";
                        this.form_anadir = false;
                        this.loadingController.dismiss();
                    }
                    else {
                        var almuer = "";
                        var enlace_horario_2 = this.consecionaria_entra + "/horario";
                        this.servicio.ver_id(enlace_horario_2).then(resp48 => {
                            almuer = resp48.any[this.dia_semana];
                            var date = new Date();
                            var hora_actual = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                            this.indexado++;
                            var inde = this.dataSource_2.length + 1;
                            var subir = {
                                index: inde + "",
                                dni: resp.any.dni,
                                nombres_apellidos: resp.any.nombres_apellidos,
                                hora: hora_actual,
                                almuerzo: almuer,
                                entrada: this.new_entrada,
                                descuento_planilla: this.descuento_planilla_new,
                                reservado: "No",
                                fecha: this.servicio.fecha_actual
                            };
                            this.objeto_dni = subir;
                            this.tabla_bloo = false;
                            this.dataSource_2.push(subir);
                            this.faltante_sincronisar = this.dataSource_2.length - this.ultima_sincronisacion;
                            this.guardar_storage();
                            this.obtener_storage();
                            setTimeout(() => { this.tabla_bloo = true; }, 300);
                            this.servicio.addInformacion(this.dataSource_2, "Historial consecionaria " + this.consecionaria_entra + "/" + this.servicio.fecha_actual).then(resp => {
                                this.servicio.addInformacion(subir, "Usuarios/" + this.data_dni + "/historial de consumo/" + this.servicio.fecha_actual).then(respas => {
                                    this.data_dni = "";
                                });
                                this.new_entrada = "Caldo";
                                this.descuento_planilla_new = "Si";
                                this.loadingController.dismiss();
                                this.form_anadir = false;
                                setTimeout(() => { this.setFocus(); }, 300);
                            });
                        });
                    }
                });
            }
            else {
                this.presentAlert("Error de conexion", "Sin internet", "No se puede agregar los datos sin internet");
            }
        }
    }
    presentAlert(titulo, subtitulo, descripcion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: titulo,
                subHeader: subtitulo,
                message: descripcion,
                buttons: [{
                        text: 'Aceptar',
                        handler: () => {
                            setTimeout(() => {
                                this.tabla_bloo = true;
                                this.setFocus();
                                this.dni_inputt = "";
                            }, 300);
                        }
                    }
                ]
            });
            alert.backdropDismiss = false;
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    presentAlert_cancelar(titulo, subtitulo, descripcion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: titulo,
                subHeader: subtitulo,
                message: descripcion,
                buttons: [{
                        text: 'Aceptar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.cancelar_reserva();
                        }
                    },
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentAlert_camara(titulo, subtitulo, descripcion) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: titulo,
                subHeader: subtitulo,
                message: descripcion,
                buttons: [{
                        text: 'Abrir camara',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            this.abrir_camara();
                        }
                    },
                ]
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 2000
            });
            yield loading.present();
            const { role, data } = yield loading.onDidDismiss();
            console.log('Loading dismissed!');
        });
    }
    onChange() {
        var año = this.fecha_valor.substring(0, 4);
        var mes = this.fecha_valor.substring(5, 7);
        var dia = this.fecha_valor.substring(8, 10);
        var todo = dia + "-" + mes + "-" + año;
        this.calcular_comidas(todo);
    }
    obtener_storage() {
        var storage = this.servicio.getItem("Registros " + this.consecionaria_entra + " " + this.servicio.fecha_actual);
        if (storage == null) {
            this.presentAlert("No encontrado", "", "No se encontro ningun dato almacenado");
        }
        else {
            this.dataSource_2 = storage;
        }
    }
    guardar_storage() {
        this.servicio.setItem("Registros " + this.consecionaria_entra + " " + this.servicio.fecha_actual, this.dataSource_2);
        this.servicio.setItem("Faltantes " + this.consecionaria_entra + " " + this.servicio.fecha_actual, this.ultima_sincronisacion);
    }
    sincronisar_datos() {
        this.obtener_storage();
        if (window.navigator.onLine == true) {
            this.presentLoading();
            this.servicio.addInformacion(this.dataSource_2, "Historial consecionaria " + this.consecionaria_entra + "/" + this.servicio.fecha_actual).then(resp => {
                this.presentAlert("Sincronisacion Correcta", "Se sincronizaron " + this.dataSource_2.length + " registros", "");
                this.loadingController.dismiss();
                this.ultima_sincronisacion = this.dataSource_2.length;
                this.faltante_sincronisar = this.dataSource_2.length - this.ultima_sincronisacion;
                this.servicio.setItem("Faltantes " + this.consecionaria_entra + " " + this.servicio.fecha_actual, this.ultima_sincronisacion);
            });
        }
        else {
            this.presentAlert("Error de conexcion", "Sin internet", "Los datos no fueron sincronozados con la base de datos");
        }
    }
    descargar_exe() {
        var _1 = [];
        for (let i = 0; i < this.dataSource_r.length; i++) {
            var va = {
                DNI: this.dataSource_r[i].dni,
                'Nombres y Apellidos': this.dataSource_r[i].nombres_apellidos,
                'Almuerzo': this.dataSource_r[i].almuerzo,
                'Tipo de almuerzo': this.dataSource_r[i].entrada,
                'Reservado': this.dataSource_r[i].reservado,
                'Descuento de planilla': this.dataSource_r[i].descuento_planilla,
                Fecha: this.dataSource_r[i].fecha,
            };
            _1.push(va);
        }
        this.servicio._excel(_1, this.titlee + " registro " + this.servicio.fecha_actual);
        this.servicio.exportar_excel(_1, this.titlee + " registro " + this.servicio.fecha_actual);
    }
    calcular_comidas(fecha) {
        this.servicio.ver_nube("Reservaciones/" + fecha + "/" + this.consecionaria_entra).subscribe(resp => {
            if (resp.length == 0) {
                this.presentAlert("Nada", "⛔", "No se encontro nada en estas fechas " + fecha);
                this.fecha_valor = "";
            }
            var toti = [];
            for (let l = 0; l < resp.length; l++) {
                var al = {
                    dni: resp[l].any.dni,
                    nombres_apellidos: resp[l].any.nombres_apellidos,
                    almuerzo: resp[l].any.almuerzo,
                    entrada: resp[l].any.entrada,
                    fecha: resp[l].any.fecha,
                    descuento_planilla: resp[l].any.descuento_planilla,
                    reservado: resp[l].any.reservado,
                    hora: "--:--"
                };
                toti.push(al);
            }
            this.total_1 = toti;
            var sopas_1 = 0;
            var almuerzo_1 = 0;
            for (let i = 0; i < this.total_1.length; i++) {
                if (this.total_1[i].entrada == 'Caldo') {
                    sopas_1++;
                }
                if (this.total_1[i].entrada == 'Completo') {
                    almuerzo_1++;
                    sopas_1++;
                }
                if (this.total_1[i].entrada == 'Segundo') {
                    almuerzo_1++;
                }
            }
            this.sopas_con_1 = sopas_1;
            this.almuerzos_con_1 = almuerzo_1;
        });
        this.servicio.ver_id("Historial consecionaria " + this.consecionaria_entra + "/" + fecha).then(resp => {
            console.log(resp.any);
            this.total_2 = resp.any;
            var sopas_1 = 0;
            var almuerzo_1 = 0;
            for (let i = 0; i < this.total_2.length; i++) {
                if (this.total_2[i].entrada == 'Sopa') {
                    sopas_1++;
                }
                if (this.total_2[i].entrada == 'Completo') {
                    almuerzo_1++;
                    sopas_1++;
                }
                if (this.total_2[i].entrada == 'Segundo') {
                    almuerzo_1++;
                }
            }
            this.sopas_con_2 = sopas_1;
            this.almuerzos_con_2 = almuerzo_1;
        });
    }
    buscar__fecha(fecha) {
        {
            var enlacer = "Historial consecionaria " + this.consecionaria_entra + "/" + fecha;
            this.servicio.ver_id(enlacer).then(resp => {
                if (resp.length == 0) {
                    this.presentAlert("Nada", "⛔", "No se encontro nada en estas fechas");
                    this.fecha_valor = "";
                }
                this.dataSource_r = resp.any;
            });
        }
    }
    comprobar_consecionaria() {
        this.presentLoading();
        this.servicio.ver_id("Usuarios consecionarias/" + this.consecionaria_entra).then(resp => {
            if (resp == undefined) {
                this.presentAlert("No existente", "❌", "Este usuario no existe, por favor comuniquese con recursos humano");
                this.loadingController.dismiss();
            }
            else {
                if (this.contrasena_consecionaria == resp.any.contrasena) {
                    var arra8 = {
                        usuario: this.consecionaria_entra,
                    };
                    this.servicio.setItem("Sesion", arra8);
                    this.login_consecionaria = false;
                    this.lectores = true;
                }
                else {
                    this.loadingController.dismiss();
                    this.presentAlert("Incorrecto", "❗", "La contraseña es incorrecta");
                }
            }
        });
    }
    leer_dni() {
        if (window.navigator.onLine == true) {
            this.presentLoading();
            this.servicio.ver_id("Usuarios/" + this.dni_inputt).then(re5sp => {
                if (re5sp == undefined) {
                    this.loadingController.dismiss();
                    this.presentAlert("No existe", "❌", "Este usuario no existe, por favor comuniquese con recursos humanos");
                }
                else {
                    console.log(this.consecionaria_entra);
                    this.servicio.ver_id("Reservaciones/" + this.servicio.fecha_actual + "/" + this.consecionaria_entra + "/" + this.dni_inputt).then(resp => {
                        if (resp == undefined) {
                            this.servicio.ver_id("Reservaciones/" + this.servicio.fecha_actual + "/" + this.concesionaria_2 + "/" + this.dni_inputt).then(resp_2 => {
                                this.loadingController.dismiss();
                                var listo_2 = "false";
                                if (resp_2 == undefined) {
                                    this.servicio.ver_id("Reservaciones/" + this.servicio.fecha_actual + "/" + this.concesionaria_1 + "/" + this.dni_inputt).then(resp_2 => {
                                        this.loadingController.dismiss();
                                        var listo_2 = "false";
                                        if (resp_2 == undefined) {
                                            for (let i = 0; i < this.dataSource_2.length; i++) {
                                                if (this.dni_inputt == this.dataSource_2[i].dni) {
                                                    listo_2 = "true";
                                                    this.presentAlert("Ya registrado", "⚠️", "Este usuario ya recibio un almuerzo");
                                                }
                                            }
                                            if (listo_2 == "false") {
                                                this.presentAlert_atender("No encontrado", "📵", re5sp.any.nombres_apellidos + " no reservo un almuerzo ¿Desea atenderlo?");
                                                this.data_dni = this.dni_inputt;
                                                this.dni_inputt = "";
                                            }
                                        }
                                        else {
                                            this.presentAlert("Aqui no es", "⏭️", "Este usuario reservo su almuerzo en otra consecionaria ");
                                            this.dni_inputt = "";
                                        }
                                    });
                                }
                                else {
                                    this.presentAlert("Aqui no es", "⏭️", "Este usuario reservo su almuerzo en otra consecionaria ");
                                    this.dni_inputt = "";
                                }
                            });
                        }
                        else {
                            this.loadingController.dismiss();
                            var listo = "false";
                            for (let i = 0; i < this.dataSource_2.length; i++) {
                                if (this.dni_inputt == this.dataSource_2[i].dni) {
                                    listo = "true";
                                    this.presentAlert("Ya registrado", "⚠️", "Este usuario ya recibio un almuerzo");
                                    this.dni_inputt = "";
                                }
                            }
                            if (listo == "false") {
                                this.dni_inputt = "";
                                this.indexado++;
                                var date = new Date();
                                var hora_actual = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                                var fecha_actual = String(date.getDate()).padStart(2, '0') + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getFullYear();
                                var inde = this.dataSource_2.length + 1;
                                var array = {
                                    index: inde + "",
                                    dni: resp.any.dni,
                                    almuerzo: resp.any.almuerzo,
                                    nombres_apellidos: resp.any.nombres_apellidos,
                                    descuento_planilla: "Si",
                                    entrada: resp.any.entrada,
                                    hora: hora_actual,
                                    reservado: "Si",
                                    fecha: fecha_actual
                                };
                                this.tabla_bloo = false;
                                this.dataSource_2.push(array);
                                this.faltante_sincronisar = this.dataSource_2.length - this.ultima_sincronisacion;
                                this.guardar_storage();
                                this.obtener_storage();
                                this.presentAlert("Tipo de almuerzo", resp.any.entrada, "");
                                setTimeout(() => {
                                    this.tabla_bloo = true;
                                    this.servicio.addInformacion(this.dataSource_2, "Historial consecionaria " + this.consecionaria_entra + "/" + this.servicio.fecha_actual);
                                }, 300);
                            }
                        }
                    });
                }
            });
        }
        else {
            this.presentAlert("Error conexion", "Sin internet", "No se puede leer el dni sin conexion");
            this.loadingController.dismiss();
        }
    }
    abrir_lectora() {
        this.barcodeScanner.scan().then(barcodeData => {
            if (window.navigator.onLine) {
                this.servicio.ver_id("Usuarios/" + barcodeData.text).then(res5p => {
                    if (res5p == undefined) {
                        this.presentAlert("No existe", "❌", "Este usuario no existe, por favor comuniquese con recursos humanos");
                        this.loadingController.dismiss();
                    }
                    else {
                        this.presentLoading();
                        this.servicio.ver_id("Reservaciones/" + this.servicio.fecha_actual + "/" + this.consecionaria_entra + "/" + barcodeData.text).then(resp => {
                            if (resp == undefined) {
                                this.servicio.ver_id("Reservaciones/" + this.servicio.fecha_actual + "/" + this.concesionaria_2 + "/" + barcodeData.text).then(resp_2 => {
                                    this.loadingController.dismiss();
                                    var listo_2 = "false";
                                    if (resp_2 == undefined) {
                                        for (let i = 0; i < this.dataSource_2.length; i++) {
                                            if (barcodeData.text == this.dataSource_2[i].dni) {
                                                listo_2 = "true";
                                                this.presentAlert("Ya registrado", "⚠️", "Este usuario ya recibio un almuerzo");
                                            }
                                        }
                                        if (listo_2 == "false") {
                                            this.presentAlert_atender("No encontrado", "📵", res5p.any.nombres_apellidos + " no reservo un almuerzo ¿Desea atenderlo?");
                                            this.data_dni = barcodeData.text;
                                        }
                                    }
                                    else {
                                        this.presentAlert("Aqui no es", "⏭️", "Este usuario reservo su almuerzo en otra consecionaria ");
                                    }
                                });
                            }
                            else {
                                this.loadingController.dismiss();
                                var listo = "false";
                                for (let i = 0; i < this.dataSource_2.length; i++) {
                                    if (barcodeData.text == this.dataSource_2[i].dni) {
                                        listo = "true";
                                        this.presentAlert("Ya registrado", "⚠️", "Este usuario ya recibio un almuerzo");
                                    }
                                }
                                if (listo == "false") {
                                    this.indexado++;
                                    var date = new Date();
                                    var hora_actual = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
                                    var fecha_actual = String(date.getDate()).padStart(2, '0') + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getFullYear();
                                    var inde = this.dataSource_2.length + 1;
                                    var array = {
                                        index: inde + "",
                                        dni: resp.any.dni,
                                        almuerzo: resp.any.almuerzo,
                                        nombres_apellidos: resp.any.nombres_apellidos,
                                        descuento_planilla: "Si",
                                        entrada: resp.any.entrada,
                                        hora: hora_actual,
                                        reservado: "Si",
                                        fecha: fecha_actual
                                    };
                                    this.tabla_bloo = false;
                                    this.dataSource_2.push(array);
                                    this.faltante_sincronisar = this.dataSource_2.length - this.ultima_sincronisacion;
                                    this.guardar_storage();
                                    this.obtener_storage();
                                    this.presentAlert("Tipo de almuerzo", resp.any.entrada, "");
                                    setTimeout(() => {
                                        this.tabla_bloo = true;
                                        this.servicio.addInformacion(this.dataSource_2, "Historial consecionaria " + this.consecionaria_entra + "/" + this.servicio.fecha_actual);
                                    }, 300);
                                }
                            }
                        });
                    }
                });
            }
            else {
                this.presentAlert("Error de conexion", "Sin internet", "No se puede agregar datos sin internet");
            }
        });
    }
    ngAfterViewInit() {
        this.signaturePad = new signature_pad___WEBPACK_IMPORTED_MODULE_3__["default"](this.signaturePadElement.nativeElement);
    }
    limpiar_firma() {
        this.signaturePad.clear();
    }
    obtener_firma() {
        var data = new Date();
        var hora = data.getHours() + "";
        var min = data.getMinutes() + "";
        var todo_h = hora + min;
        var hora_config_f = this.config.hora_fin.substring(0, 2);
        var min_config_f = this.config.hora_fin.substring(3, 5);
        var hora_config_i = this.config.hora_inicio.substring(0, 2);
        var min_config_i = this.config.hora_inicio.substring(3, 5);
        var todo_fin = hora_config_f + min_config_f;
        var todo_inicio = hora_config_i + min_config_i;
        if (parseFloat(todo_h) < parseFloat(todo_fin) && parseFloat(todo_h) > parseFloat(todo_inicio)) {
            var subir = {
                dni: this.usuario_comprobado.any.dni,
                nombres_apellidos: this.usuario_comprobado.any.nombres_apellidos,
                numero_telf: this.usuario_comprobado.any.numero_telf,
                almuerzo: this.opcion_escogida[this.dia_semana],
                concesionaria: this.opcion_escogida.nombre,
            };
            var enlace = "Reservaciones/" + this.servicio.fecha_actual + "/" + this.opcion_escogida.nombre + "/" + this.dni;
            this.presentLoading();
            this.servicio.addInformacion(subir, enlace).then(resp => {
                this.loadingController.dismiss();
                this.b_reservar = false;
                this.b_cancelar = true;
                this.firma_bloo = "none";
            });
        }
        else {
            this.presentAlert("se paso el tiempo", "💔", "Se acabo el tiempo para poder hacer una reserva");
        }
    }
    openEnd() {
        this.menu.open('end');
    }
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
    checkConnection() {
        var networkState = navigator.onLine;
        var states = {};
        states[_awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Connection.UNKNOWN] = 'Unknown connection';
        states[_awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Connection.ETHERNET] = 'Ethernet connection';
        states[_awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Connection.WIFI] = 'WiFi connection';
        states[_awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Connection.CELL_2G] = 'Cell 2G connection';
        states[_awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Connection.CELL_3G] = 'Cell 3G connection';
        states[_awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Connection.CELL_4G] = 'Cell 4G connection';
        states[_awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Connection.CELL] = 'Cell generic connection';
        states[_awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Connection.NONE] = 'No network connection';
        alert(networkState);
    }
    cancelar() {
        this.presentAlert_cancelar("¿Esta seguro?", "⚠️", "¿Esta seguro de cancelar su reservacion?");
    }
    cancelar_reserva() {
        var data = new Date();
        var hora = data.getHours() + "";
        var min = data.getMinutes() + "";
        var todo_h = hora + min;
        var hora_config_f = this.config.hora_fin.substring(0, 2);
        var min_config_f = this.config.hora_fin.substring(3, 5);
        var hora_config_i = this.config.hora_inicio.substring(0, 2);
        var min_config_i = this.config.hora_inicio.substring(3, 5);
        var todo_fin = hora_config_f + min_config_f;
        var todo_inicio = hora_config_i + min_config_i;
        if (parseFloat(todo_h) < parseFloat(todo_fin) && parseFloat(todo_h) > parseFloat(todo_inicio)) {
            this.presentLoading();
            var enlace = "Reservaciones/" + this.servicio.fecha_actual + "/" + this.concesionaria_1 + "/" + this.dni;
            this.firestore.doc(enlace).delete().then(resp => {
                this.blur2 = false;
                this.b_reservar = true;
                this.loadingController.dismiss();
                this.b_cancelar = false;
            });
            var enlace2 = "Reservaciones/" + this.servicio.fecha_actual + "/" + this.concesionaria_2 + "/" + this.dni;
            this.firestore.doc(enlace2).delete().then(resp => {
                this.blur2 = false;
                this.b_reservar = true;
                this.b_cancelar = false;
                this.loadingController.dismiss();
            });
        }
        else {
            this.presentAlert("se paso el tiempo", "💔", "Se acabo el tiempo para poder hacer una reserva");
        }
    }
    abrir_camara() {
        this.barcodeScanner.scan().then(barcodeData => {
            if (barcodeData.text == this.servicio.fecha_actual) {
                var object = {
                    dni: this.usuario_comprobado.any.dni,
                    nombres_apellidos: this.usuario_comprobado.any.nombres_apellidos,
                    numero_telf: this.usuario_comprobado.any.numero_telf,
                };
                this.servicio.addInformacion(object, 'asistencia/' + this.servicio.fecha_actual + "/dni/" + this.dni).then(resp => {
                    this.asistencia = false;
                    this.reservar = true;
                    this.b_reservar = true;
                });
            }
            else {
                this.presentAlert("Incorrecto", "⚠️", "El codigo leido no es el correcto, por favor contactese con recursos humanos");
            }
        }).catch(err => {
        });
    }
    registrar() {
        this.barcodeScanner.scan().then(barcodeData => {
            var objeto_registro = {
                dni: barcodeData.text,
                nombres_apellidos: this.nombres_apellidos,
                numero_telf: this.numero_telf,
                contrasena: this.contrasena,
            };
            this.servicio.addInformacion(objeto_registro, "Usuarios/" + this.dni);
        });
    }
    setFocus() {
        this.myInput.nativeElement.focus();
    }
    reservar_almuerzo() {
        this.presentAlertConfirm();
    }
    presentAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Cambiar contraseña',
                inputs: [
                    {
                        name: 'name1',
                        type: 'text',
                        value: "",
                        placeholder: 'Contraseña actual'
                    },
                    {
                        name: 'name2',
                        type: 'text',
                        value: "",
                        placeholder: 'Contraseña nueva'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: (alertData) => {
                            this.contra_actual = alertData.name1;
                            this.contra_nueva = alertData.name2;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    desca_hoy() {
        this.servicio._excel(this.dataSource_2, "Registro " + this.servicio.fecha_actual);
        this.servicio.exportar_excel(this.dataSource_2, "Registro " + this.servicio.fecha_actual);
    }
    cerra_sesion() {
        this.servicio.removeItem("Sesion");
        this.consecionaria_entra = "";
        this.login_consecionaria = true,
            this.lectores = false;
    }
    ngOnInit() {
        this.servicio.ver_id("Versiones/Consecionaria").then(resp => {
            if (this.version < resp.version_actual) {
                this.version_boo = true;
            }
            else {
                this.version_boo = false;
            }
        });
        var sesiones = this.servicio.getItem("Sesion");
        if (sesiones == null) {
        }
        else {
            this.consecionaria_entra = sesiones.usuario;
            this.obtener_storage();
            this.login_consecionaria = false,
                this.lectores = true;
        }
        var faltante_storage = this.servicio.getItem("Faltantes " + this.consecionaria_entra + " " + this.servicio.fecha_actual);
        console.log(faltante_storage);
        if (faltante_storage == null) {
        }
        else {
            this.ultima_sincronisacion = parseFloat(faltante_storage);
            this.faltante_sincronisar = this.dataSource_2.length - this.ultima_sincronisacion;
        }
        this.servicio.ver_id("Configuraciones/aplicacion recursos h").then(resp => {
            this.config = resp.any;
        });
        this.servicio.ver_nube("Usuarios consecionarias").subscribe(resp_t => {
            this.concesionaria_1 = resp_t[0].any.nombre;
            this.concesionaria_2 = resp_t[1].any.nombre;
            var enlace_horario_1 = this.concesionaria_1 + "/horario";
            this.servicio.ver_id(enlace_horario_1).then(resp => {
                this.horario_concecionaria_1 = resp.any;
                this.opcion_1 = resp.any;
                this.opcion_escogida = this.opcion_1;
            });
            var enlace_horario_2 = this.concesionaria_2 + "/horario";
            this.servicio.ver_id(enlace_horario_2).then(resp48 => {
                this.horario_concecionaria_2 = resp48.any;
                this.opcion_2 = resp48.any;
            });
        });
        const dias = [
            'domingo',
            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes',
            'sabado',
        ];
        const numeroDia = new Date(this.fecha_actual + " 08:02:15").getDay();
        const nombreDia = dias[numeroDia];
        this.dia_semana = nombreDia;
    }
};
AppComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_10__.PLATFORM_ID,] }] },
    { type: _awesome_cordova_plugins_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__.NativeKeyboard },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController },
    { type: _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_6__.Network },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_13__.AngularFirestore },
    { type: _servicios_servicio_service__WEBPACK_IMPORTED_MODULE_4__.ServicioService }
];
AppComponent.propDecorators = {
    signaturePadElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['firma', { static: true },] }],
    myInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['myInput',] }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-root',
        template: _D_pro4_consecionaria_consecionaria_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [
            {
                provide: _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_RANGE_SELECTION_STRATEGY,
                useClass: FiveDayRangeSelectionStrategy,
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MAT_DATE_FORMATS, useValue: GRI_DATE_FORMATS },
        ],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GRI_DATE_FORMATS": () => (/* binding */ GRI_DATE_FORMATS),
/* harmony export */   "MY_FORMATS": () => (/* binding */ MY_FORMATS),
/* harmony export */   "FrenchDateProvider": () => (/* binding */ FrenchDateProvider),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 3339);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 6506);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat */ 762);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 8260);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 7498);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 6504);
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-signaturepad */ 2672);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ 3959);
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ 3857);
/* harmony import */ var _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/file-transfer/ngx */ 9832);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/es */ 9492);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 4357);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 7210);
/* harmony import */ var _awesome_cordova_plugins_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/native-keyboard/ngx */ 6478);

























const GRI_DATE_FORMATS = Object.assign(Object.assign({}, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_NATIVE_DATE_FORMATS), { display: Object.assign(Object.assign({}, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_NATIVE_DATE_FORMATS.display), { dateInput: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        } }) });
const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};
class FrenchDateProvider extends _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.NativeDateAdapter {
    parse(value) {
        const it = value.split('/');
        if (it.length == 3) {
            return new Date(+it[2], +it[1] - 1, +it[0], 12);
        }
    }
    format(date, displayFormat) {
        return ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
    }
}
(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.registerLocaleData)(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_7__["default"]);
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
            angular2_signaturepad__WEBPACK_IMPORTED_MODULE_16__.SignaturePadModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatNativeDateModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_17__.MatTableModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_19__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule],
        providers: [_awesome_cordova_plugins_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__.NativeKeyboard, _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_8__.Network, _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__.Downloader, _awesome_cordova_plugins_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__.FileTransfer, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File, _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__.BarcodeScanner, { provide: _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5055:
/*!***********************************************!*\
  !*** ./src/app/servicios/servicio.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFileReader": () => (/* binding */ getFileReader),
/* harmony export */   "ServicioService": () => (/* binding */ ServicioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! xlsx */ 7684);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 300);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ 8178);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/storage */ 188);
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ 3857);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);









const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const EXCEL_EXT = '.xlsx';
function getFileReader() {
    const fileReader = new FileReader();
    const zoneOriginalInstance = fileReader["__zone_symbol__originalInstance"];
    return zoneOriginalInstance || fileReader;
}
let ServicioService = class ServicioService {
    constructor(formBuilder, dowload, db) {
        this.formBuilder = formBuilder;
        this.dowload = dowload;
        this.db = db;
        this.storareRef = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].app().storage().ref();
        this.date = new Date();
        this.fecha_actual = String(this.date.getDate()).padStart(2, '0') + '-' + String(this.date.getMonth() + 1).padStart(2, '0') + '-' + this.date.getFullYear();
        this.formGroup = this.formBuilder.group({
            storageKey: '',
            storageData: '',
        });
    }
    subir_imagen(nombre, imgBase64) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let respuesta = yield this.storareRef.child("users/" + nombre).putString(imgBase64, 'data_url');
                console.log(respuesta);
                respuesta.ref.getDownloadURL().then((downloadURL) => {
                    console.log(downloadURL);
                    this.descargar(downloadURL, nombre);
                    return downloadURL;
                });
            }
            catch (err) {
                return null;
            }
        });
    }
    descargar(file, name) {
        const url = file;
        var request = {
            uri: url,
            title: name + ".xlsx",
            description: "",
            mimeType: "",
            visibleInDownloadsUi: true,
            notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_4__.NotificationVisibility.VisibleNotifyCompleted,
            destinationInExternalFilesDir: {
                dirType: 'Downloads',
                subPath: 'MyFile.xlsx'
            }
        };
        this.dowload.download(request).then((location) => {
        }, (err) => {
        });
    }
    ver_id(coleccion) {
        const lectura = this.db.doc(coleccion).get().toPromise();
        return lectura.then(resp => {
            const dts = resp.data();
            return dts;
        });
    }
    ver_nube(path) {
        var coleccion = this.db.collection(path);
        return coleccion.valueChanges();
    }
    addInformacion(any, ruta) {
        var subida = this.db.doc(ruta).set({
            any
        });
        return subida;
    }
    _excel(json, nombre) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.json_to_sheet(json);
            const WorkBook = {
                Sheets: { 'data': worksheet },
                SheetNames: ['data']
            };
            var bufer = xlsx__WEBPACK_IMPORTED_MODULE_0__.write(WorkBook, { bookType: 'xlsx', type: 'array' });
            const data = new Blob([bufer], { type: EXCEL_TYPE });
            let newInstance = getFileReader();
            newInstance.readAsDataURL(data);
            newInstance.onloadend = () => {
                this.subir_imagen(nombre, newInstance.result);
            };
        });
    }
    exportar_excel(json, nombre) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_0__.utils.json_to_sheet(json);
        const WorkBook = {
            Sheets: { 'data': worksheet },
            SheetNames: ['data']
        };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_0__.write(WorkBook, { bookType: 'xlsx', type: 'array' });
        this.saveAsexcel(excelBuffer, nombre);
    }
    saveAsexcel(buffer, fileName) {
        const data = new Blob([buffer], { type: EXCEL_TYPE });
        file_saver__WEBPACK_IMPORTED_MODULE_2__.saveAs(data, fileName + EXCEL_EXT);
    }
    setItem(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    removeItem(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
    onSetData() {
        this.setItem(this.formGroup.get('storageKey').value, this.formGroup.get('storageData').value);
    }
    onGetData() {
        this.storedData = this.getItem(this.formGroup.get('storageKey').value);
    }
    onRemoveData() {
        this.removeItem(this.formGroup.get('storageKey').value);
    }
    onClearData() {
        this.clear();
    }
};
ServicioService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_4__.Downloader },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore }
];
ServicioService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], ServicioService);



/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        projectId: 'alimentacion-beta',
        appId: '1:26544359367:web:81a4e6ed4b79072bfd3be2',
        storageBucket: 'alimentacion-beta.appspot.com',
        locationId: 'us-central',
        apiKey: 'AIzaSyDfONwg2V-NG8S7h8euXq_BUUD4QiCXcQg',
        authDomain: 'alimentacion-beta.firebaseapp.com',
        messagingSenderId: '26544359367',
        measurementId: 'G-XP4S7NB7N6',
    },
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		7479,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		1439,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\" integrity=\"sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />\n<div style=\"background: rgba(0, 0, 0, 0.459);width: 100%;height: 100%;position: absolute;display: flex;justify-content: center;z-index: 15;\" *ngIf=\"form_anadir\">\n  <div class=\"alerta_no\">\n    <ion-list>\n      <ion-radio-group value=\"biff\">\n        <ion-list-header>\n          <ion-label style=\"font-size:16px\">Tipo de almuerzo 🥣</ion-label>\n        </ion-list-header>\n\n        <ion-item (click)=\"new_entrada = 'Caldo'\">\n          <ion-label>Caldo</ion-label>\n          <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\n        </ion-item>\n\n        <ion-item (click)=\"new_entrada = 'Completo'\">\n          <ion-label>Completo</ion-label>\n          <ion-radio slot=\"start\" value=\"lii\"></ion-radio>\n        </ion-item>\n\n        <ion-item (click)=\"new_entrada = 'Segundo'\">\n          <ion-label>Segundo</ion-label>\n          <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\n        </ion-item>\n\n\n\n      </ion-radio-group>\n    </ion-list>\n\n    <ion-list>\n      <ion-radio-group value=\"biff\">\n        <ion-list-header>\n          <ion-label style=\"font-size:16px\">¿Descuento por planilla? 💲</ion-label>\n        </ion-list-header>\n\n        <ion-item (click)=\"descuento_planilla_new = 'Si'\">\n          <ion-label>Si</ion-label>\n          <ion-radio slot=\"start\" value=\"biff\"></ion-radio>\n        </ion-item>\n\n        <ion-item (click)=\"descuento_planilla_new = 'No'\">\n          <ion-label>No</ion-label>\n          <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\n        </ion-item>\n\n\n\n      </ion-radio-group>\n    </ion-list>\n\n    <div style=\"display: flex;justify-content:center;width: 100%;\">\n\n    <button (click)=\"new_entrada = 'Si';descuento_planilla_new = 'Si';form_anadir = false;\">Cancelar</button>\n    <button style=\" font-weight: 600;\" (click)=\"form_anadir = false;presentLoading();escanear_codigo_new()\">Aceptar</button>\n\n  </div>\n\n  </div>\n  </div>\n\n<div style=\"width: 375px;height: 667px;margin-left: 5%;margin-top:2%;box-shadow: 0 0 15px rgba(0, 0, 0, 0.411);\">\n\n\n<div style=\"width: 100%;height: 100%;background:rgba(0, 0, 0, 0.274);position:absolute;z-index: 19\" *ngIf=\"version_boo\">\n<div style=\"margin-left: 8%;\nborder-radius: 6px;\ntext-align: center;\nwidth: 85%;\nheight: 48%;\nbackground: #e02323;\">\n  <h1>La version actual de la aplicacion es muy antigua por favot comuniquese con recursos humanos</h1>\n</div>\n</div>\n\n\n<ion-menu style=\"--min-width:100%\" side=\"end\" type=\"push\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar style=\"background: rgb(37, 189, 75);\" color=\"rgb(87, 207, 56)\">\n      <ion-title style=\"color:#fff\">Registros</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n\n<div style=\"margin:0\" class=\"h_\">\n\n  <div style=\"width:40%;margin-left: 5%;margin-bottom: 5%;\" class=\"ion_seg\"> <ion-segment>\n    <ion-segment-button  (click)=\"dias_register = true;semanas_register = false\" value=\"friends\">\n      <ion-label style=\"color:#000\">Semanas</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"enemies\"  (click)=\"dias_register = false;semanas_register = true\">\n      <ion-label style=\"color:#000\">Dias</ion-label>\n    </ion-segment-button>\n  </ion-segment> </div>\n\n  <div *ngIf=\"dias_register\">\n  <mat-form-field  appearance=\"fill\">\n\n    <mat-label>Enter a date range</mat-label>\n    <mat-date-range-input [formGroup]=\"range\"  [rangePicker]=\"picker\">\n      <input style=\"color:#000\" matStartDate placeholder=\"Start date\" formControlName=\"start\" [(ngModel)]=\"fecha_inicio\">\n      <input  style=\"color:#000\" matEndDate placeholder=\"End date\" formControlName=\"end\" [(ngModel)]=\"fecha_fin\">\n    </mat-date-range-input>\n    <mat-datepicker-toggle  matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-date-range-picker #picker></mat-date-range-picker>\n  </mat-form-field>\n\n <button style=\"width: 25%;height:30px;background:rgba(0, 0, 0, 0.835);color:#fff;display: block;margin-left: 5%;\" (click)=\"presentAlert('Datos insufientes','','Algunos dias no cuentan con registros')\">Ver registros</button>\n <button style=\"width: 25%;height:30px;background:rgba(0, 0, 0, 0.835);color:#fff;display: block;margin-left: 5%;margin-top: 5%;\" (click)=\"descargar_semana_registro()\">Descargar registro</button>\n\n  <div *ngFor=\"let item of for_pedidos\">\n  <div style=\"margin-top:10%\" class=\"names\">{{item.nombres_apellidos}}</div>\n  <div style=\"display: flex;\n  overflow-y: hidden;height: 200px;\">\n\n  <div style=\"margin-top: 3%;min-width: 60%;margin-left:4%;display: inline-block;\">\n    <div class=\"dia_semana\">Lunes {{item.fecha_l}}</div>\n\n    <div class=\"grid_semana\">\n      <div style=\"grid-column: 1;grid-row: 1;border: 1px solid rgba(0, 0, 0, 0.664);\">Almuerzo</div> <div style=\"grid-column: 2;grid-row: 1;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.almuerzo_l}}</div>\n      <div style=\"grid-column: 1;grid-row: 2;border: 1px solid rgba(0, 0, 0, 0.664);\">Tipo de almuerzo</div>  <div style=\"grid-column: 2;grid-row: 1;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.lunes}}</div>\n      <div style=\"grid-column: 1;grid-row: 3;border: 1px solid rgba(0, 0, 0, 0.664);\">Hora</div> <div style=\"grid-column: 1;grid-row: 2;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.hora_l}}</div>\n      <div style=\"grid-column: 1;grid-row: 4;border: 1px solid rgba(0, 0, 0, 0.664);\">Reservado</div>  <div style=\"grid-column: 2;grid-row: 1;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.reservado}}</div>\n      <div style=\"grid-column: 1;grid-row: 5;border: 1px solid rgba(0, 0, 0, 0.664);\">Descuento</div> <div style=\"grid-column: 2;grid-row: 1;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.descuento_planilla}}</div>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 3%;min-width: 60%;margin-left:4%;display: inline-block;\">\n    <div class=\"dia_semana\">Lunes {{item.fecha_l}}</div>\n\n    <div class=\"grid_semana\">\n      <div style=\"grid-column: 1;grid-row: 1;border: 1px solid rgba(0, 0, 0, 0.664);\">Almuerzo</div> <div style=\"grid-column: 2;grid-row: 1;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.almuerzo_l}}</div>\n      <div style=\"grid-column: 1;grid-row: 2;border: 1px solid rgba(0, 0, 0, 0.664);\">Tipo de almuerzo</div>  <div style=\"grid-column: 2;grid-row: 2;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.lunes}}</div>\n      <div style=\"grid-column: 1;grid-row: 3;border: 1px solid rgba(0, 0, 0, 0.664);\">Hora</div> <div style=\"grid-column: 2;grid-row: 3;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.hora_l}}</div>\n      <div style=\"grid-column: 1;grid-row: 4;border: 1px solid rgba(0, 0, 0, 0.664);\">Reservado</div>  <div style=\"grid-column: 2;grid-row: 4;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.reservado_l}}</div>\n      <div style=\"grid-column: 1;grid-row: 5;border: 1px solid rgba(0, 0, 0, 0.664);\">Descuento</div> <div style=\"grid-column: 2;grid-row: 5;border: 1px solid rgba(0, 0, 0, 0.664);\">{{item.descuento_planilla_l}}</div>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 3%;min-width: 60%;margin-left:4%;display: inline-block;\">\n    <div class=\"dia_semana\">Martes {{item.fecha_m}}</div>\n\n    <div class=\"grid_semana\">\n      <div style=\"grid-column: 1;grid-row: 1;\">Almuerzo</div> <div style=\"grid-column: 2;grid-row: 1;\">{{item.almuerzo_m}}</div>\n      <div style=\"grid-column: 1;grid-row: 2;\">Tipo de almuerzo</div>  <div style=\"grid-column: 2;grid-row: 2;\">{{item.martes}}</div>\n      <div style=\"grid-column: 1;grid-row: 3;\">Hora</div> <div style=\"grid-column: 2;grid-row: 3;\">{{item.hora_m}}</div>\n      <div style=\"grid-column: 1;grid-row: 4;\">Reservado</div>  <div style=\"grid-column: 2;grid-row: 4;\">{{item.reservado_m}}</div>\n      <div style=\"grid-column: 1;grid-row: 5;\">Descuento</div> <div style=\"grid-column: 2;grid-row: 5;\">{{item.descuento_planilla_m}}</div>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 3%;min-width: 60%;margin-left:4%;display: inline-block;\">\n    <div class=\"dia_semana\">Miercoles {{item.fecha_m}}</div>\n\n    <div class=\"grid_semana\">\n      <div style=\"grid-column: 1;grid-row: 1;\">Almuerzo</div> <div style=\"grid-column: 2;grid-row: 1;\">{{item.almuerzo_mi}}</div>\n      <div style=\"grid-column: 1;grid-row: 2;\">Tipo de almuerzo</div>  <div style=\"grid-column: 2;grid-row: 2;\">{{item.miercoles}}</div>\n      <div style=\"grid-column: 1;grid-row: 3;\">Hora</div> <div style=\"grid-column: 2;grid-row: 3;\">{{item.hora_mi}}</div>\n      <div style=\"grid-column: 1;grid-row: 4;\">Reservado</div>  <div style=\"grid-column: 2;grid-row: 4;\">{{item.reservado_mi}}</div>\n      <div style=\"grid-column: 1;grid-row: 5;\">Descuento</div> <div style=\"grid-column: 2;grid-row: 5;\">{{item.descuento_planilla_mi}}</div>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 3%;min-width: 60%;margin-left:4%;display: inline-block;\">\n    <div class=\"dia_semana\">Jueves {{item.fecha_j}}</div>\n\n    <div class=\"grid_semana\">\n      <div style=\"grid-column: 1;grid-row: 1;\">Almuerzo</div> <div style=\"grid-column: 2;grid-row: 1;\">{{item.almuerzo_j}}</div>\n      <div style=\"grid-column: 1;grid-row: 2;\">Tipo de almuerzo</div>  <div style=\"grid-column: 2;grid-row: 2;\">{{item.jueves}}</div>\n      <div style=\"grid-column: 1;grid-row: 3;\">Hora</div> <div style=\"grid-column: 2;grid-row: 3;\">{{item.hora_j}}</div>\n      <div style=\"grid-column: 1;grid-row: 4;\">Reservado</div>  <div style=\"grid-column: 2;grid-row: 4;\">{{item.reservado_j}}</div>\n      <div style=\"grid-column: 1;grid-row: 5;\">Descuento</div> <div style=\"grid-column: 2;grid-row: 5;\">{{item.descuento_planilla_j}}</div>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 3%;min-width: 60%;margin-left:4%;display: inline-block;\">\n    <div class=\"dia_semana\">Viernes {{item.fecha_v}}</div>\n\n    <div class=\"grid_semana\">\n      <div style=\"grid-column: 1;grid-row: 1;\">Almuerzo</div> <div style=\"grid-column: 2;grid-row: 1;\">{{item.almuerzo_v}}</div>\n      <div style=\"grid-column: 1;grid-row: 2;\">Tipo de almuerzo</div>  <div style=\"grid-column: 2;grid-row: 2;\">{{item.viernes}}</div>\n      <div style=\"grid-column: 1;grid-row: 3;\">Hora</div> <div style=\"grid-column: 2;grid-row: 3;\">{{item.hora_v}}</div>\n      <div style=\"grid-column: 1;grid-row: 4;\">Reservado</div>  <div style=\"grid-column: 2;grid-row: 4;\">{{item.reservado_v}}</div>\n      <div style=\"grid-column: 1;grid-row: 5;\">Descuento</div> <div style=\"grid-column: 2;grid-row: 5\">{{item.descuento_planilla_v}}</div>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 3%;min-width: 60%;margin-left:4%;display: inline-block;\">\n    <div class=\"dia_semana\">Sabado {{item.fecha_s}}</div>\n\n    <div class=\"grid_semana\">\n      <div style=\"grid-column: 1;grid-row: 1\">Almuerzo</div> <div style=\"grid-column: 2;grid-row: 1\">{{item.almuerzo_s}}</div>\n      <div style=\"grid-column: 1;grid-row: 2\">Tipo de almuerzo</div>  <div style=\"grid-column: 2;grid-row: 1\">{{item.sabado}}</div>\n      <div style=\"grid-column: 1;grid-row: 3\">Hora</div> <div style=\"grid-column: 1;grid-row: 2\">{{item.hora_s}}</div>\n      <div style=\"grid-column: 1;grid-row: 4\">Reservado</div>  <div style=\"grid-column: 2;grid-row: 1\">{{item.reservado_s}}</div>\n      <div style=\"grid-column: 1;grid-row: 5\">Descuento</div> <div style=\"grid-column: 2;grid-row: 1\">{{item.descuento_planilla_s}}</div>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 3%;min-width: 60%;margin-left:4%;display: inline-block;\">\n    <div class=\"dia_semana\">Domingo {{item.fecha_d}}</div>\n\n    <div class=\"grid_semana\">\n      <div style=\"grid-column: 1;grid-row: 1\">Almuerzo</div> <div style=\"grid-column: 2;grid-row: 1\">{{item.almuerzo_d}}</div>\n      <div style=\"grid-column: 1;grid-row: 2\">Tipo de almuerzo</div>  <div style=\"grid-column: 2;grid-row: 2\">{{item.domingo}}</div>\n      <div style=\"grid-column: 1;grid-row: 3\">Hora</div> <div style=\"grid-column: 2;grid-row: 3\">{{item.hora_d}}</div>\n      <div style=\"grid-column: 1;grid-row: 4\">Reservado</div>  <div style=\"grid-column: 2;grid-row: 4\">{{item.reservado_d}}</div>\n      <div style=\"grid-column: 1;grid-row: 5\">Descuento</div> <div style=\"grid-column: 2;grid-row: 5\">{{item.descuento_planilla_d}}</div>\n    </div>\n  </div>\n\n\n  </div>\n</div>\n\n\n\n </div>\n\n\n\n <div *ngIf=\"semanas_register\">\n\n\n\n  <div style=\"background:#1b2e35;height:65px;width:240px;border-radius:8px;margin-left: 18%;\" class=\"calendario\">\n\n    <input style=\"background: #0000;color:#fff\" type=\"date\" [(ngModel)]=\"fecha_valor\" (ngModelChange)=\"onChange()\">\n  </div>\n\n  <div style=\"margin: 5%;display: inline-block\" class=\"anchos\">\n\n    <div style=\"background:#fff; width:100%;height:35px;font-size: 18px;color:#000;text-align:center;line-height: 30px;  box-shadow: 0 0 15px rgba(0, 0, 0, 0.397);border: 1px solid rgba(255, 255, 255, 0.753);\">Pedidos</div>\n\n    <div class=\"grisp\">\n      <div style=\"grid-column:1;grid-row:1;text-align:center;line-height:30px;border: 1px solid rgba(255, 255, 255, 0.753);\">Segundos</div> <div  style=\"grid-column:2;grid-row:1;text-align:center;line-height:30px;border: 1px solid rgba(255, 255, 255, 0.753);\">{{almuerzos_con_1}}</div>\n      <div style=\"grid-column:1;grid-row:2;text-align:center;line-height:30px;border: 1px solid rgba(255, 255, 255, 0.753);\">Caldos</div> <div  style=\"grid-column:2;grid-row:2;text-align:center;line-height:30px;border: 1px solid rgba(255, 255, 255, 0.753);\">{{sopas_con_1}}</div>\n    </div>\n\n    <div style=\"background:#1b2e35; width:100%;height:35px;font-size: 18px;color:#fff;text-align:center;line-height: 30px;  box-shadow: 0 0 15px rgba(0, 0, 0, 0.397);border: 1px solid rgba(255, 255, 255, 0.753);margin-top:10px\" (click)=\"dataSource_r = total_1;;titlee = 'Pedidos' \">Ver listado</div>\n  </div>\n\n\n\n\n  <div style=\"margin: 5%;display: inline-block\" class=\"anchos\">\n\n    <div style=\"background:#fff; width:100%;height:35px;font-size: 18px;color:#000;text-align:center;line-height: 30px; box-shadow: 0 0 15px rgba(0, 0, 0, 0.397);border: 1px solid rgba(255, 255, 255, 0.753);\">Atendidos</div>\n\n    <div class=\"grisp\">\n      <div style=\"grid-column:1;grid-row:1;text-align:center;line-height:30px;border: 1px solid rgba(255, 255, 255, 0.753);\">Segundos</div> <div  style=\"grid-column:2;grid-row:1;text-align:center;line-height:30px;border: 1px solid rgba(255, 255, 255, 0.753);\">{{almuerzos_con_2}}</div>\n      <div style=\"grid-column:1;grid-row:2;text-align:center;line-height:30px;border: 1px solid rgba(255, 255, 255, 0.753);\">Caldos</div> <div  style=\"grid-column:2;grid-row:2;text-align:center;line-height:30px;border: 1px solid rgba(255, 255, 255, 0.753);\">{{sopas_con_2}}</div>\n    </div>\n\n    <div style=\"background:#1b2e35; width:100%;height:35px;font-size: 18px;color:#fff;text-align:center;line-height: 30px;  box-shadow: 0 0 15px rgba(0, 0, 0, 0.397);border: 1px solid rgba(255, 255, 255, 0.753);margin-top:10px\" (click)=\"dataSource_r = total_2;titlee = 'Atendidos' \">Ver listado</div>\n\n\n  </div>\n\n\n\n\n\n<div  style=\"overflow-y: hidden;width: 90%;height: 45%;margin-left: 5%;border-radius:8px;box-shadow: 0 0 56px #0000005c;margin-top: 10%;position: sticky;\"  >\n  <div style=\"overflow-x: hidden;height: 100%;width: 200%;\">\n  <table  style=\"background: #0000;width: 100%;height:100%;position: sticky;\"mat-table [dataSource]=\"dataSource_r\"  *ngIf=\"tabla_bloo\">\n\n    <ng-container ngSwit matColumnDef=\"index\">\n      <th style=\"background:#fff;text-align:center;font-size:16px;font-weight: 800;padding:0;width: 6%;\" mat-header-cell *matHeaderCellDef> N\"</th>\n      <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{dataSource_r.indexOf(element) + 1}}</td>\n    </ng-container>\n\n    <ng-container ngSwit matColumnDef=\"hora\">\n      <th style=\"background:#fff;text-align: center;font-weight: 800;color:#000;padding:0\" mat-header-cell *matHeaderCellDef> Hora </th>\n      <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px;padding:0\" mat-cell *matCellDef=\"let element\"> {{element.hora}} </td>\n    </ng-container>\n\n    <ng-container ngSwit matColumnDef=\"dni\">\n      <th style=\"color:#000;width: 11%;;background:#fff;text-align: center;text-align: center;font-weight: 800;padding:0\" mat-header-cell *matHeaderCellDef> DNI. </th>\n      <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.dni}} </td>\n    </ng-container>\n\n    <ng-container ngSwit matColumnDef=\"almuerzo\">\n      <th style=\"color:#000;background:#fff;text-align: center;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef>Almuerzo </th>\n      <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.almuerzo}} </td>\n    </ng-container>\n\n    <ng-container ngSwit matColumnDef=\"fecha\">\n      <th style=\"color:#000;background:#fff;text-align: center;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef>Fecha </th>\n      <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.fecha}} </td>\n    </ng-container>\n\n\n\n    <ng-container ngSwit matColumnDef=\"reservado\">\n      <th style=\"color:#000;background:#fff;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef> Reservado </th>\n      <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.reservado}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"nombres_apellidos\">\n      <th style=\"color:#000;background:#fff;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef> Nombres </th>\n      <td  style=\"color:#000;background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.nombres_apellidos}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"descuento_planilla\">\n      <th style=\"width: 13%;;color:#000;background:#fff;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef> Descuento de planilla </th>\n      <td  style=\"color:#000;background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.descuento_planilla}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"entrada\">\n      <th style=\"color:#000;background:#fff;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef> Tipo de almuerzo </th>\n      <td  style=\"color:#000;background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.entrada}} </td>\n    </ng-container>\n\n\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns4; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns4;\"></tr>\n  </table>\n</div>\n\n\n  </div>\n\n\n  <button (click)=\"descargar_exe()\" style=\"background: rgba(5, 221, 77, 0.911); border: 0; margin-left: 10%;margin-top: 2%; color: #fff;font-size: 15px;border-radius: 8px; height: 40px;width: 35%;margin-bottom: 15px;\" class=\"b_Exe\" >Descargar<i style=\"font-size: 20px;margin-left: 5%;\" class=\"fas fa-file-excel\"></i> </button>\n\n</div>\n\n</div>\n  </ion-content>\n</ion-menu>\n\n\n<div style=\"display:flex;justify-content:center\" *ngIf=\"information\">\n\n<div class=\"information\">\n  <i (click)=\"information = false\" style=\"margin-top: 7%;\n  color: 3♣;\n  color: #000;\n  margin-left: 83%;\n  font-size: 33px;\" class=\"fa-solid fa-rectangle-xmark\"></i>\n<h1 style=\"text-align:center;font-size: 30px;color:#000;margin-top: 0;\">Informacion</h1>\n<div>\n  <div style=\"display: flex;\n  overflow-y: hidden;height: 200px;\">\n\n  <div style=\"margin-top: 3%;\n  min-width: 60%;\n  margin-left: 12%;\n  width: 75%;\n  background: #0a6ad1;\n  display: inline-block;\">\n    <div class=\"dia_semana\" style=\"color:#fff\">{{information_atendido.nombres_apellidos}}</div>\n\n    <div style=\"background:#0a6ad1\" class=\"grid_semana\">\n      <div style=\"grid-column: 1;grid-row: 1;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">Almuerzo</div> <div style=\"grid-column: 2;grid-row: 1;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">{{information_atendido.almuerzo}}</div>\n      <div style=\"grid-column: 1;grid-row: 2;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">Tipo de almuerzo</div>  <div style=\"grid-column: 2;grid-row: 2;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">{{information_atendido.entrada}}</div>\n      <div style=\"grid-column: 1;grid-row: 3;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">Hora</div> <div style=\"grid-column: 2;grid-row: 3;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">{{information_atendido.hora}}</div>\n      <div style=\"grid-column: 1;grid-row: 4;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">Reservado</div>  <div style=\"grid-column: 2;grid-row: 4;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">{{information_atendido.reservado}}</div>\n      <div style=\"grid-column: 1;grid-row: 5;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">Descuento</div> <div style=\"grid-column: 2;grid-row: 5;border: 1px solid rgba(255, 255, 255, 0.664);color:#fff\">{{information_atendido.descuento_planilla}}</div>\n    </div>\n  </div>\n\n\n\n  </div>\n</div>\n</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n<div style=\"height:100%;background: #e1e8ef;display: flex;flex-wrap: wrap;justify-content: center;background: linear-gradient(45deg, #1fb6ed, #0045c3)\"   *ngIf=\"login_consecionaria\">\n\n    <div style=\"margin-top:0%\" class=\"svg\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"svg\" x=\"0px\" y=\"0px\" width=\"150px\" height=\"150px\" viewBox=\"0 0 213.235 241.176\" enable-background=\"new 0 0 213.235 241.176\" xml:space=\"preserve\" fill=\"#0057B8\">\n        <path d=\"M108.581,64.968V14.124l44.007,25.422L108.581,64.968\"/>\n        <path fill-opacity=\"0.9\" d=\"M153.591,92.101V41.258L109.582,66.68L153.591,92.101\"/><path d=\"M155.586,92.062V41.221l44.009,25.42L155.586,92.062\"/><path fill-opacity=\"0.7\" d=\"M200.299,119.14V68.297l-44.004,25.421L200.299,119.14\"/><path fill-opacity=\"0.85\" d=\"M155.586,146.255V95.412l44.009,25.422L155.586,146.255\"/><path fill-opacity=\"0.7\" d=\"M200.299,173.35v-50.844l-44.004,25.422L200.299,173.35\"/><path fill-opacity=\"0.6\" d=\"M155.586,200.482v-50.84l44.009,25.417L155.586,200.482\"/><path fill-opacity=\"0.5\" d=\"M153.591,200.521v-50.84l-44.009,25.418L153.591,200.521\"/><path fill-opacity=\"0.6\" d=\"M108.581,227.696v-50.844l44.007,25.421L108.581,227.696\"/><path fill-opacity=\"0.5\" d=\"M106.62,227.696v-50.844l-44.005,25.421L106.62,227.696\"/><path fill-opacity=\"0.7\" d=\"M61.562,200.553V149.71l44.007,25.423L61.562,200.553\"/><path fill-opacity=\"0.7\" d=\"M59.709,200.56v-50.843l-44.008,25.422L59.709,200.56\"/><path fill-opacity=\"0.7\" d=\"M14.699,173.467v-50.843l44.01,25.42L14.699,173.467\"/><path fill-opacity=\"0.5\" d=\"M59.709,146.235V95.392l-44.008,25.42L59.709,146.235\"/><path fill-opacity=\"0.7\" d=\"M14.699,119.141V68.297l44.01,25.421L14.699,119.141\"/><path fill-opacity=\"0.6\" d=\"M59.709,92.101V41.258L15.701,66.68L59.709,92.101\"/><path fill-opacity=\"0.85\" d=\"M61.562,92.092V41.249l44.007,25.419L61.562,92.092\"/>\n        <path fill-opacity=\"0.9\" d=\"M106.62,64.968V14.124L62.614,39.546L106.62,64.968\"/>\n      </svg>\n    </div>\n\n    <div style=\"    margin-top: 69%;\n    height: 17%;\" class=\"inputs\">\n      <input type=\"text\" placeholder=\"Usuario\" [(ngModel)]=\"consecionaria_entra\">\n      <input type=\"password\" placeholder=\"Contraseña\" (keydown.enter)=\"comprobar_consecionaria()\" [(ngModel)]=\"contrasena_consecionaria\">\n    </div>\n\n    <div style=\"width: 35%;margin-top:5%;height:35% \" class=\"inputs\">\n      <button class=\"b_ingresar\" style=\"box-shadow: 5px 5px 10px #0000004d, -5px -5px 10px #00000042;\" (click)=\"comprobar_consecionaria()\">Ingresar</button>\n\n      </div>\n\n\n</div>\n\n\n\n\n\n  <div  id=\"main\" style=\"height:100%;width: 100%;background: rgb(243, 249, 255);flex-wrap: wrap;display: flex;\" *ngIf=\"lectores\">\n\n\n    <div style=\"position:absolute;margin-top: -3%;\n    transform: scale(0.8);\" class=\"dmm_ribbon\">\n      <span style=\"    writing-mode: vertical-rl;\n      padding-top: 0;\n      line-break: anywhere;\n      line-height: 37px;\n      text-align: center;\n      width: 100%;\" class=\"dmm_rbcnt\">{{consecionaria_entra}}</span>\n  </div>\n\n\n    <div style=\"min-height:45%;width: 100%;background: linear-gradient(45deg, #1fb6ed, #0045c3);\">\n   <div (click)=\"presentAlert_sesion('Cerrar sesion','¿Esta seguro de cerrar sesion?','')\" style=\"   width: 35px;\n   height: 35px;\n   background: rgb(205 62 62);\n   margin-top: 4%;\n   border-radius: 5px;\n   margin-left: 87%;\n   position: absolute;\">\n   <i style=\"    width: 100%;\n   font-size: 20px;\n   margin-top: 8px;\n   text-align: center;\n   empty-cells: hide;\" class=\"fa-solid fa-power-off\"></i>\n    </div>\n\n\n\n\n    <h1 style=\"text-align:center;margin-top:0\">\n\n\n\n      <div>\n\n        <i style=\"margin-top: 29%;\n        margin-left: 40%;\n        color: #fff;\n        font-size: 48px;\n        position: absolute;\" (click)=\"openEnd()\" class=\"fa-solid fa-caret-left\"></i>\n      <div style=\"margin-top: -10%;\" id=\"camera\" (click)=\"abrir_lectora()\">\n        <div class=\"strip\">\n        </div>\n        <div class=\"lens\">\n          <h1 style=\"margin-bottom: 0;margin-top: 7px;padding-top: 124%;display: inline-block;font-size:42px;font-family: 'Merriweather Sans', sans-serif;color:#000;margin-top: 20px;\">{{dataSource_2.length}} </h1>\n\n        </div>\n        <div class=\"led\">\n        </div>\n        <div class=\"btn\">\n        </div>\n      </div>\n      <div id=\"panel\">\n        <div class=\"pic\">\n          <img src=\"http://lorempixel.com/150/150/people\"/>\n        </div>\n        <div style=\"display:flex;justify-content: center;\">\n\n          <a href=\"#\" class=\"lnk\">My Portfolio</a>\n\n      </div>\n      </div>\n      <div style=\"top: 3%;background: #07375a73;\" class=\"shadow\">\n      </div>\n    </div>\n\n\n      <div style=\"margin-top: 0px;\">\n      <input style=\"height:27px\" type=\"text\" placeholder=\"DNI\" class=\"inputt\" #myInput (keydown.enter)=\"leer_dni();setFocus()\" [(ngModel)]=\"dni_inputt\">\n    </div>\n    </h1>\n\n\n    <h1 style=\"text-align:center; font-family: 'Bebas Neue';color: #1b2e35;margin:0\">\n\n </h1>\n\n\n\n\n\n  </div>\n\n  <div class=\"contenedor_atendidis_todo\" >\n\n\n\n    <div style=\"justify-content: center;margin-top: 10%;height: 100%;width:100%;display: none;justify-content:center;flex-wrap: wrap;\" >\n    <div class=\"contenedor_atendido\" *ngFor=\"let item of dataSource_2\">\n      <div style=\"height:100%;width: 20%;display:inline-flex;justify-content:center;flex-wrap: wrap;\"><i style=\"    margin-top: 10px;\n        color: #5fa5e0;\n        font-size: 27px;margin-top: 22%;\" class=\"fa-solid fa-user\"></i></div>\n\n        <div style=\"width: 60%;display: inline-grid;height:100%\"><h1 style=\"color: #000;\n          font-size: 14px;\n          margin: 0;\n          margin-top: 6%;\">{{item.nombres_apellidos}}</h1></div>\n        <div (click)=\"information_atendido = item;information = true\" style=\"display: flex;\n        justify-content: center;\n        width: 20%;\n        height: 100%;\"><i style=\"margin-left: 9%;\n          font-size: 22px;\n          color: #000;\n          margin-top: 25%;\" class=\"fa-solid fa-chevron-right\"></i></div>\n      </div>\n\n    </div>\n\n\n    <div  style=\"overflow-y: hidden;width: 90%;height: 70%;margin-left: 0%;border-radius:8px;box-shadow: 0 0 25px #0000005c;margin-top: 5%;position: sticky;\"  >\n      <div style=\"overflow-x: hidden;height: 100%;width: 220%;\">\n      <table  style=\"background: #0000;width: 100%;height:100%;position: sticky;\"mat-table [dataSource]=\"dataSource_2\"  *ngIf=\"tabla_bloo\">\n\n        <ng-container ngSwit matColumnDef=\"index\">\n          <th style=\"background:#fff;text-align:center;font-size:16px;font-weight: 800;padding:0;width: 6%;\" mat-header-cell *matHeaderCellDef> N\"</th>\n          <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.index}} </td>\n        </ng-container>\n\n        <ng-container ngSwit matColumnDef=\"hora\">\n          <th style=\"background:#fff;text-align: center;font-weight: 800;color:#000;padding:0\" mat-header-cell *matHeaderCellDef> Hora </th>\n          <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px;padding:0\" mat-cell *matCellDef=\"let element\"> {{element.hora}} </td>\n        </ng-container>\n\n        <ng-container ngSwit matColumnDef=\"dni\">\n          <th style=\"color:#000;width: 11%;;background:#fff;text-align: center;text-align: center;font-weight: 800;padding:0\" mat-header-cell *matHeaderCellDef> DNI. </th>\n          <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.dni}} </td>\n        </ng-container>\n\n        <ng-container ngSwit matColumnDef=\"almuerzo\">\n          <th style=\"color:#000;background:#fff;text-align: center;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef>Almuerzo </th>\n          <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.almuerzo}} </td>\n        </ng-container>\n\n        <ng-container ngSwit matColumnDef=\"fecha\">\n          <th style=\"color:#000;background:#fff;text-align: center;text-align: center;font-weight: 800;width: 15%;\" mat-header-cell *matHeaderCellDef>Fecha </th>\n          <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.fecha}} </td>\n        </ng-container>\n\n        <ng-container ngSwit matColumnDef=\"reservado\">\n          <th style=\"color:#000;background:#fff;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef> Reservado </th>\n          <td style=\"background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.reservado}} </td>\n        </ng-container>\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"nombres_apellidos\">\n          <th style=\"color:#000;background:#fff;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef> Nombres </th>\n          <td  style=\"color:#000;background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.nombres_apellidos}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"descuento_planilla\">\n          <th style=\"width: 13%;;color:#000;background:#fff;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef> Descuento de planilla </th>\n          <td  style=\"color:#000;background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.descuento_planilla}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"entrada\">\n          <th style=\"color:#000;background:#fff;text-align: center;font-weight: 800;\" mat-header-cell *matHeaderCellDef> Tipo de almuerzo </th>\n          <td  style=\"color:#000;background:#fff;text-align: center;padding-left: 0;font-size:12px\" mat-cell *matCellDef=\"let element\"> {{element.entrada}} </td>\n        </ng-container>\n\n\n\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n\n      </div>\n\n      <button style=\"line-height: 20px;background:#fff;color:#000;width: 26%;border-radius:5px;background: rgb(44, 206, 58);color:#fff;box-shadow: 0 0 10px rgba(0, 0, 0, 0.288);margin-left: 64%;\n      position: absolute;\n      margin-top: 85%;height:38px\" (click)=\"desca_hoy()\">Descargar<i style=\"font-size: 20px;margin-left: 5%;\" class=\"fas fa-file-excel\"></i></button>\n\n<button style=\"color:#000;width: 30%;border-radius:5px;background: rgb(17 137 211);color:#fff;box-shadow: 0 0 10px rgba(0, 0, 0, 0.288);margin-left: 3%;\nposition: absolute;\nmargin-top: 85%;height:38px;line-height: 20px;\" (click)=\"obtener_storage()\">Actualizar <i style=\"font-size: 20px;margin-left: 5%;\"  class=\"fa-solid fa-rotate\"></i></button>\n\n\n<div style=\"background:#fff;color:#000;width: 30%;border-radius:5px;background: rgb(211 201 17);color:#fff;box-shadow: 0 0 10px rgba(0, 0, 0, 0.288);margin-left: -62%;\nposition: absolute;\nmargin-top: 85%;height:38px\">\n\n<button style=\"width: 100%;border-radius: 5px;background: rgb(211 201 17);color: #fff;box-shadow: 0 0 10px rgb(0 0 0 / 29%);margin-left: 0%;position: absolute;margin-top: 0%;\nheight: 100%;\" (click)=\"sincronisar_datos()\">\n<div  style=\"margin-left: 93%;border-radius: 15px;width: 18px;height: 18px;margin-top: -21px;\nbackground: rgb(201, 43, 43);line-height: 18px;\">{{faltante_sincronisar}}</div>Singronisar <i style=\"font-size: 20px;margin-left: 5%;\"  class=\"fa-solid fa-upload\"></i></button>\n</div>\n\n  </div>\n\n\n  </div>\n\n\n\n\n\n</div>\n\n\n\n\n<div style=\"position: absolute;\ntop: 4%;\nborder-radius: 8px;\nflex-wrap: wrap;\njustify-content: center;\nleft: 30%;\nbackground: #fff;\nwidth: 68%;\nbox-shadow: 0 0 38px #0000006e;\nheight: 90%;\">\n\n\n<h1 style=\"color: #000;\ntext-align: center;\nheight:30%;\nmargin-top: 20px;\nfont-size: 75px;\">{{objeto_dni.nombres_apellidos}}</h1>\n\n\n\n<div style=\"margin-left:20%;width: 60%;height:105px;box-shadow: 0 0 15px rgba(59, 75, 94, 0.616);\">\n  <h1 style=\"font-size: 70px;\n  color: #fff;\n  text-align: center;\n  line-height: 100px;\n  background: #13b8dc;\">{{objeto_dni.entrada}}</h1>\n</div>\n\n<div style=\"margin-left:20%;width: 60%;height:105px;box-shadow: 0 0 15px rgba(59, 75, 94, 0.616);\">\n  <h1 style=\"font-size: 60px;\n  color: #fff;\n  text-align: center;\n  line-height: 100px;\n  background: #13dc8f;\">Descuento por planilla: {{objeto_dni.descuento_planilla}}</h1>\n</div>\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@500&family=Righteous&family=Secular+One&display=swap\");\n@import url(https://fonts.googleapis.com/css?family=News+Cycle:400);\n.cabezal {\n  z-index: 0;\n  border-bottom-left-radius: 45px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  height: 60%;\n}\n.alerta_no {\n  overflow-x: hidden;\n  height: 385px;\n  margin-top: 10%;\n  width: 50%;\n  border-radius: 15px;\n  background: #fff;\n}\n.inputt {\n  border: 0;\n  background: #fff;\n  box-shadow: 0 0 15px #00000070;\n  width: 35%;\n  border-radius: 8px;\n  height: 32px;\n  text-align: center;\n  color: #000;\n  font-size: 18px;\n}\n.alerta_no button {\n  width: 35%;\n  font-size: 18px;\n  height: 50px;\n  background: #0000;\n  color: #2f81c5;\n}\n.reloj {\n  width: 100%;\n  height: 100%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-image: url('campana.png');\n}\n.inputs {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n.inputs input {\n  width: 80%;\n  color: #fff;\n  font-size: 15px;\n  font-family: \"Kanit\", sans-serif;\n  background: rgba(0, 0, 0, 0.233);\n  border: 0;\n  margin-top: 5%;\n  box-shadow: 5px 5px 10px #0000003d, -5px -5px 10px #0000002c;\n  outline: none;\n  border-radius: 8px;\n  height: 35px;\n}\n.fa-power-off:active {\n  color: #ee850d;\n}\n.inputs input::placeholder {\n  color: rgba(255, 255, 255, 0.657);\n}\n.inputs button {\n  color: #fff;\n  font-size: 18px;\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 5%;\n  background: #282828;\n  height: 40px;\n  box-shadow: 5px 5px 10px #bfc5cb, -5px -5px 10px #ffffff;\n}\n.contenido_bajo h1 {\n  font-size: 14px;\n  color: #1b2e35;\n}\n.b_crear {\n  background: #1b2e35;\n  width: 28%;\n  display: inline-block;\n  border-radius: 50px;\n  height: 30px;\n  color: #fff;\n}\n.b_crear h1 {\n  margin: 0;\n  text-align: center;\n  line-height: 30px;\n  color: #fff;\n}\n.b_ingresar {\n  border: 0;\n  border-radius: 8px;\n  background: #1b2e35;\n}\n.titulo_input {\n  margin-left: 5%;\n}\n.t_t {\n  font-family: \"Righteous\", cursive;\n  color: #1b2e35;\n  margin-left: 5%;\n  letter-spacing: 1px;\n  font-size: 43px;\n}\n.text_hoy h1 {\n  color: #1b2e35;\n  font-size: 78px;\n  padding-top: 0%;\n  text-align: center;\n  margin: 0;\n  font-family: \"Bebas Neue\", cursive;\n}\n.grid_seleccionador {\n  display: grid;\n  width: 60%;\n  height: 25%;\n  grid-template-columns: 20% 60% 20%;\n  grid-template-rows: 100%;\n}\n.seleccion_almuerzo_1 {\n  grid-row: 1;\n  grid-template-columns: 2;\n}\n.seleccion_almuerzo_2 {\n  grid-row: 1;\n  grid-template-columns: 2;\n}\n.seleccion_almuerzo_1 h1 {\n  color: #1b2e35;\n  line-height: 33px;\n  font-size: 18px;\n  padding-top: 0%;\n  text-align: center;\n  margin: 0;\n  font-family: \"Kanit\", sans-serif;\n}\n.seleccion_almuerzo_2 h1 {\n  color: #1b2e35;\n  line-height: 33px;\n  font-size: 18px;\n  padding-top: 0%;\n  text-align: center;\n  margin: 0;\n  font-family: \"Kanit\", sans-serif;\n}\n.fa-angle-left {\n  color: #1b2e35;\n}\n.fa-qrcode {\n  font-size: 200px;\n  color: #1b2e35;\n}\n.div_h {\n  background: #f9ca21;\n  width: 32%;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.294);\n  height: 50px;\n  border-radius: 5px;\n}\n.cabezar_menu {\n  width: 55px;\n  height: 55px;\n  margin-top: 10%;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.336);\n  margin-left: 7%;\n  position: absolute;\n  border-radius: 100px;\n  background: #f9ca21;\n}\n.contenido {\n  width: 100%;\n  height: 92%;\n  background: #fff;\n  display: flex;\n  padding-top: 30%;\n  overflow-x: hidden;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.historial_reservaciones_content {\n  height: 100%;\n  width: 100%;\n  background: #fff;\n}\n.text_hoy h2 {\n  margin: 0;\n  font-family: \"Kanit\", sans-serif;\n  color: #1b2e35;\n  text-align: center;\n}\n.b_reservar {\n  background: #1b2e35;\n  color: #fff;\n  border: 0;\n  border-radius: 100px;\n  font-size: 18px;\n  width: 100px;\n  margin-top: 15%;\n  height: 100px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.555);\n}\n.horario {\n  display: grid;\n  grid-template-columns: 30% 30% 30% 30% 30% 30% 30%;\n  grid-template-rows: 30px 50px;\n  height: 35%;\n  width: 100%;\n  margin-top: 15%;\n}\n.blur {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  background: rgba(240, 240, 240, 0.192);\n}\n.horario div h1 {\n  font-family: \"Kanit\", sans-serif;\n  padding-top: 0%;\n  color: #1b2e35;\n  margin: 0;\n  font-size: 15px;\n  text-align: center;\n}\n.center {\n  background: #1b2e35;\n  font-family: \"Bebas Neue\", cursive;\n  height: 8%;\n}\n.mondal {\n  background: rgba(0, 0, 0, 0.253);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 5;\n}\n.information {\n  width: 80%;\n  position: absolute;\n  z-index: 19;\n  margin-top: 31%;\n  height: 60%;\n  background: #fff;\n  box-shadow: 0 0 35px rgba(28, 31, 34, 0.466);\n}\n.faltantes {\n  width: 90%;\n  background: #fff;\n  height: 350px;\n  position: absolute;\n  margin-left: 5%;\n  margin-top: 10%;\n  border-radius: 8px;\n}\n.h_ {\n  margin-top: 400%;\n  height: 100%;\n  z-index: 20;\n  width: 100%;\n  background: #fff;\n  transition: 0.3s;\n  overflow-x: hidden;\n}\n.anchos {\n  width: 40%;\n  height: 100px;\n}\n.grid_semana {\n  line-height: 30px;\n  font-size: 14px;\n  min-width: 100%;\n  text-align: center;\n  color: #000;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n  height: 137px;\n  box-shadow: 0 0 15px #496a8580;\n  border-radius: 5px;\n}\n.names {\n  width: 90%;\n  color: #000;\n  text-align: center;\n  font-size: 21px;\n  height: 35px;\n  line-height: 32px;\n  margin-bottom: 5%;\n  margin-left: 5%;\n  box-shadow: 0 0 15px #496a8580;\n}\n.dia_semana {\n  width: 100%;\n  text-align: center;\n  font-size: 18px;\n  height: 30px;\n  border-radius: 5px;\n  margin-bottom: 15px;\n  height: 32px;\n  color: #000;\n  box-shadow: 0 0 15px #496a8580;\n}\n.grisp {\n  width: 100%;\n  background: #fff;\n  margin-top: 5%;\n  color: #000;\n  display: grid;\n  grid-template-columns: 70% 30%;\n  grid-template-rows: 50% 50%;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.397);\n  height: 80px;\n}\n.center h1 {\n  font-size: 35px;\n  line-height: 55px;\n}\n.cuadro {\n  border: 2px dashed #fff;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.199);\n  background: radial-gradient(#ffffff82, transparent);\n  width: 85%;\n  margin: 7%;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  height: 50%;\n}\n.cuadro h1 {\n  font-family: \"Bebas Neue\", cursive;\n  color: #1b2e35;\n  font-size: 40px;\n  text-align: center;\n}\n.title_regresar {\n  font-family: \"Bebas Neue\", cursive;\n  color: #1b2e35;\n  font-size: 40px;\n  margin-left: 10%;\n}\n.historial_reservaciones h1 {\n  font-family: \"Kanit\", sans-serif;\n  font-size: 15px;\n}\n.horario div {\n  height: 100%;\n  margin: 0;\n}\n.cuadro button {\n  width: 30%;\n  color: #fff;\n  font-size: 20px;\n  font-family: \"Kanit\", sans-serif;\n  height: 40px;\n  background: #1b2e35;\n  margin-left: 5%;\n  border: 0;\n  border-radius: 8px;\n}\n.cuadro_leido {\n  width: 90%;\n  height: 50px;\n  border-radius: 8px;\n  margin-left: 5%;\n  margin-top: 8%;\n  background: #fff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.281);\n}\nbody {\n  background-color: #0057B8;\n  text-align: center;\n  line-height: 100vh;\n}\n.svg {\n  display: inline-block;\n  height: 200px;\n  width: 200px;\n  line-height: 200px;\n  text-align: center;\n  background-color: #fff;\n  border-radius: 50%;\n  position: absolute;\n}\n#svg {\n  display: inline-block;\n  vertical-align: middle;\n  fill: #0057B8;\n}\n#svg path:nth-child(1) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 0.3s;\n}\n#svg path:nth-child(1):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(2) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 0.6s;\n}\n#svg path:nth-child(2):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(3) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 0.9s;\n}\n#svg path:nth-child(3):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(4) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 1.2s;\n}\n#svg path:nth-child(4):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(5) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 1.5s;\n}\n#svg path:nth-child(5):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(6) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 1.8s;\n}\n#svg path:nth-child(6):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(7) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 2.1s;\n}\n#svg path:nth-child(7):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(8) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 2.4s;\n}\n#svg path:nth-child(8):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(9) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 2.7s;\n}\n#svg path:nth-child(9):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(10) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 3s;\n}\n#svg path:nth-child(10):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(11) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 3.3s;\n}\n#svg path:nth-child(11):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(12) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 3.6s;\n}\n#svg path:nth-child(12):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(13) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 3.9s;\n}\n#svg path:nth-child(13):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(14) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 4.2s;\n}\n#svg path:nth-child(14):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(15) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 4.5s;\n}\n#svg path:nth-child(15):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(16) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 4.8s;\n}\n#svg path:nth-child(16):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(17) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 5.1s;\n}\n#svg path:nth-child(17):hover {\n  animation-play-state: paused;\n}\n#svg path:nth-child(18) {\n  animation: pweek 5.4s linear infinite;\n  animation-delay: 5.4s;\n}\n#svg path:nth-child(18):hover {\n  animation-play-state: paused;\n}\n@keyframes pweek {\n  0% {\n    fill: #0057B8;\n  }\n  20% {\n    fill: #F11E4A;\n  }\n  40% {\n    fill: #F8A527;\n  }\n  60% {\n    fill: #266D7F;\n  }\n  80% {\n    fill: #82A;\n  }\n  100% {\n    fill: #0057B8;\n  }\n}\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #333;\n}\n#camera, #panel {\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 300px;\n  height: 280px;\n  margin: -150px;\n  background: #eaeaea;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 50px;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n}\n#panel {\n  box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.2);\n  transform: rotate(-90deg) scale(0);\n}\n.contenedor_atendidis_todo {\n  width: 100%;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  height: 55%;\n  margin-top: 0%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  overflow-x: hidden;\n  background: #e9f0f5;\n}\n.contenedor_atendido {\n  height: 55px;\n  box-shadow: 0 0 8px rgba(79, 92, 97, 0.212);\n  width: 85%;\n  background: #fff;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 5%;\n  border-radius: 8px;\n}\n#main {\n  height: 100%;\n  width: 100%;\n  flex-wrap: wrap;\n  display: flex;\n}\n#camera {\n  z-index: 2;\n  transform: scale(0.5);\n}\n.btn {\n  position: absolute;\n  top: 22px;\n  right: 35px;\n  width: 40px;\n  height: 30px;\n  background-color: #2e3e4f;\n  border-radius: 15px;\n  box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.4);\n  transition: all 0.2 ease-in-out;\n  -webkit-transition: all 0.2 ease-in-out;\n  -moz-transition: all 0.2 ease-in-out;\n  -ms-transition: all 0.2 ease-in-out;\n  -o-transition: all 0.2 ease-in-out;\n  animation: 0.5s btn;\n  -webkit-animation: 0.5s btn;\n  -moz-animation: 0.5s btn;\n  -ms-animation: 0.5s btn;\n  -o-animation: 0.5s btn;\n  animation-iteration-count: 5;\n  -webkit-animation-iteration-count: 5;\n  -moz-animation-iteration-count: 5;\n  -ms-animation-iteration-count: 5;\n  -o-animation-iteration-count: 5;\n}\n.btn:hover {\n  cursor: pointer;\n  margin-top: 2px;\n  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);\n}\n.shadow {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 240px;\n  height: 20px;\n  margin: 170px -120px 0px;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.3);\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -ms-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n}\n.strip {\n  height: 110px;\n  background-color: #54b59a;\n  border-top: 10px solid #479a83;\n  border-bottom: 10px solid #479a83;\n  margin: 80px 0px;\n  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.4);\n}\n.lens {\n  position: absolute;\n  top: 50%;\n  left: 57%;\n  width: 144px;\n  height: 144px;\n  margin: -90px;\n  display: flex;\n  justify-content: center;\n  border: 18px solid #b44b37;\n  border-radius: 50%;\n  background-color: #111;\n  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.4);\n}\n.lens:before {\n  content: \"\";\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  margin: 27px;\n  border: 20px solid #3c3c3c;\n  border-radius: 50%;\n  background: #222222;\n  top: -16px;\n}\n.lens:after {\n  content: \"\";\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  top: -15px;\n  margin: 57px;\n  border: 11px solid #161616;\n  border-radius: 50%;\n  background: #838383;\n}\n.led {\n  position: absolute;\n  left: 35px;\n  top: 30px;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background-color: #ff8873;\n  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);\n  animation: led 0.8s infinite;\n}\n.pic {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -120px -75px;\n  border: 5px solid #ccc;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.2);\n}\n.lnk {\n  position: relative;\n  top: 220px;\n  font: 22px \"News Cycle\", sans-serif;\n  color: #777;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  text-transform: uppercase;\n  transition: all 0.2s ease-in-out;\n  -webkit-transition: all 0.2s ease-in-out;\n  -moz-transition: all 0.2s ease-in-out;\n  -ms-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n}\n.lnk:hover {\n  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);\n}\n/* slide */\nbody.open > #panel {\n  -webkit-transform-origin: 0% 100%;\n  -webkit-transform: rotate(0deg) scale(1);\n  -moz-transform-origin: 0% 100%;\n  -moz-transform: rotate(0deg) scale(1);\n  -ms-transform-origin: 0% 100%;\n  -ms-transform: rotate(0deg) scale(1);\n  -o-transform-origin: 0% 100%;\n  -o-transform: rotate(0deg) scale(1);\n  transform-origin: 0% 100%;\n  transform: rotate(0deg) scale(1);\n  margin-left: 0;\n}\nbody.open > #camera {\n  margin-left: -300px;\n}\nbody.open > .shadow {\n  margin: 170px -260px 0px;\n  width: 520px;\n}\n/* keyframes */\n@keyframes led {\n  from {\n    opacity: 0.2;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes btn {\n  from {\n    margin-top: 0px;\n    top: 22px;\n  }\n  to {\n    margin-top: 2px;\n    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);\n  }\n}\n.dmm_ribbon {\n  margin-bottom: 40px;\n  position: relative;\n  z-index: 0;\n  color: #fff;\n  width: 40px;\n  height: 100px;\n  top: -5px;\n  left: 20px;\n  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.3);\n  border-radius: 5px 0 0 0;\n  text-align: center;\n}\n.dmm_ribbon:hover {\n  height: 120px;\n}\n.dmm_ribbon:hover span {\n  padding-top: 55px;\n}\n.dmm_ribbon:before, .dmm_ribbon:after {\n  content: \"\";\n  position: absolute;\n  width: 20px;\n  height: 70px;\n  background: #666;\n  z-index: -2;\n}\n.dmm_ribbon:before {\n  bottom: 18px;\n  right: 5px;\n  -moz-transform: rotate(12deg) skew(18deg, 28deg);\n  -webkit-transform: rotate(12deg) skew(18deg, 28deg);\n  border-right-color: #174c66;\n  transform: rotate(12deg) skew(18deg, 28deg);\n  box-shadow: 8px 25px 4px rgba(0, 0, 0, 0.5);\n  border-top-color: #174c66;\n}\n.dmm_ribbon:after {\n  bottom: 16px;\n  left: 5px;\n  transform: rotate(-23deg) skew(-18deg, -28deg);\n  box-shadow: -5px 20px 4px rgba(0, 0, 0, 0.5);\n}\n.dmm_ribbon span {\n  display: block;\n  height: 100%;\n  position: relative;\n  border-radius: 5px 0 0 0;\n  background-color: #42a5d4;\n  background-image: linear-gradient(#42a5d4 0, #42a5d4 5px, #24769d 15%, #24769d 65%, #42a5d4 100%);\n  padding-top: 35px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.dmm_ribbon span:before, .dmm_ribbon span:after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n}\n.dmm_ribbon span:before {\n  border-style: solid;\n  border-width: 5px;\n  border-color: transparent;\n  right: -5px;\n  top: 0;\n  transform: rotate(45deg);\n  border-radius: 5px;\n  border-top-color: #174c66;\n  border-left-color: #174c66;\n}\n.dmm_ribbon span:after {\n  bottom: -20px;\n  left: 0;\n  border-style: solid;\n  border-width: 20px;\n  border-color: #42a5d4 #42a5d4 transparent #42a5d4;\n}\n/*# sourceMappingURL=data:application/json;base64,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NkR2QjtBQTVEQTtFQUFxQyxXQUFBO0VBQVksa0JBQUE7RUFDL0MsV0FBQTtFQUFZLFlBQUE7RUFBYSxnQkFBQTtFQUFpQixXQUFBO0FBb0U1QztBQW5FQTtFQUFtQixZQUFBO0VBQWEsVUFBQTtFQUM5QixnREFBQTtFQUNBLG1EQUFBO0VBQ0EsMkJBQUE7RUFJRiwyQ0FBQTtFQUdBLDJDQUFBO0VBQTRDLHlCQUFBO0FBd0U1QztBQXZFQTtFQUFrQixZQUFBO0VBQWEsU0FBQTtFQUsvQiw4Q0FBQTtFQUdBLDRDQUFBO0FBNEVBO0FBekVBO0VBQWlCLGNBQUE7RUFBZSxZQUFBO0VBQWEsa0JBQUE7RUFFM0Msd0JBQUE7RUFBeUIseUJBQUE7RUFNM0IsaUdBQUE7RUFDQSxpQkFBQTtFQUFtQiw4QkFBQTtFQUNuQiwyQkFBQTtFQUE2QixlQUFBO0VBQWdCLHNCQUFBO0FBb0Y3QztBQW5GQTtFQUErQyxXQUFBO0VBQVksa0JBQUE7RUFDM0QsV0FBQTtBQXdGQTtBQXZGQTtFQUF3QixtQkFBQTtFQUFvQixpQkFBQTtFQUM1Qyx5QkFBQTtFQUEwQixXQUFBO0VBQVksTUFBQTtFQUVULHdCQUFBO0VBQ3NCLGtCQUFBO0VBQ25ELHlCQUFBO0VBQTBCLDBCQUFBO0FBb0cxQjtBQW5HQTtFQUF1QixhQUFBO0VBQWMsT0FBQTtFQUFRLG1CQUFBO0VBQzdDLGtCQUFBO0VBQW1CLGlEQUFBO0FBMEduQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXIrU2Fuczp3Z2h0QDUwMCZmYW1pbHk9UmlnaHRlb3VzJmZhbWlseT1TZWN1bGFyK09uZSZkaXNwbGF5PXN3YXAnKTtcclxuXHJcbi5jYWJlemFsXHJcbntcclxuICB6LWluZGV4OiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDQ1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGhlaWdodDogNjAlO1xyXG5cclxufVxyXG5cclxuLmFsZXJ0YV9ub1xyXG57XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGhlaWdodDogMzg1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uaW5wdXR0XHJcbntcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwMDAwNzA7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcblxyXG59XHJcblxyXG4uYWxlcnRhX25vIGJ1dHRvblxyXG57XHJcbiAgd2lkdGg6IDM1JTtcclxuICBmb250LXNpemU6MThweDtcclxuICBoZWlnaHQ6NTBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDtcclxuICBjb2xvcjogcmdiKDQ3LCAxMjksIDE5Nyk7XHJcbn1cclxuXHJcbi5yZWxvalxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2NhbXBhbmEucG5nJyk7XHJcbn1cclxuLmlucHV0c1xyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuLmlucHV0cyBpbnB1dFxyXG57XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIzMyk7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIG1hcmdpbi10b3A6NSU7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICMwMDAwMDAzZCwgLTVweCAtNXB4IDEwcHggIzAwMDAwMDJjO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuXHJcbn1cclxuXHJcbi5mYS1wb3dlci1vZmY6YWN0aXZlXHJcbntcclxuICBjb2xvcjogcmdiKDIzOCwgMTMzLCAxMyk7XHJcbn1cclxuLmlucHV0cyBpbnB1dDo6cGxhY2Vob2xkZXIgeyBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1Nyk7IH1cclxuXHJcbi5pbnB1dHMgYnV0dG9uIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6MThweDtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbi10b3A6NSU7XHJcbiAgYmFja2dyb3VuZDogIzI4MjgyODtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNiZmM1Y2IsIC01cHggLTVweCAxMHB4ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jb250ZW5pZG9fYmFqbyBoMVxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMWIyZTM1OztcclxufVxyXG5cclxuLmJfY3JlYXJcclxue1xyXG4gIGJhY2tncm91bmQ6ICMxYjJlMzU7XHJcbiAgd2lkdGg6IDI4JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xyXG4gIGhlaWdodDogMzBweDtjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJfY3JlYXIgaDFcclxue1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6MzBweDtcclxuICBjb2xvcjojZmZmXHJcbn1cclxuXHJcbi5iX2luZ3Jlc2FyXHJcbntcclxuICBib3JkZXI6MDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDojMWIyZTM1O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4udGl0dWxvX2lucHV0XHJcbntcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi50X3Rcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnUmlnaHRlb3VzJywgY3Vyc2l2ZTtcclxuICBjb2xvcjogIzFiMmUzNTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXNpemU6IDQzcHg7XHJcbn1cclxuLnRleHRfaG95IGgxXHJcbntcclxuICBjb2xvcjojMWIyZTM1O1xyXG4gIGZvbnQtc2l6ZTo3OHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XHJcbn1cclxuXHJcbi5ncmlkX3NlbGVjY2lvbmFkb3Jcclxue1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBoZWlnaHQ6IDI1JTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA2MCUgMjAlO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxufVxyXG5cclxuLnNlbGVjY2lvbl9hbG11ZXJ6b18xXHJcbntcclxuICBncmlkLXJvdzogMTtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI7XHJcbn1cclxuXHJcbi5zZWxlY2Npb25fYWxtdWVyem9fMlxyXG57XHJcbiAgZ3JpZC1yb3c6IDE7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyO1xyXG59XHJcblxyXG4uc2VsZWNjaW9uX2FsbXVlcnpvXzEgaDFcclxueyBjb2xvcjojMWIyZTM1O1xyXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG4uc2VsZWNjaW9uX2FsbXVlcnpvXzIgaDFcclxueyBjb2xvcjojMWIyZTM1O1xyXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG5cclxufVxyXG5cclxuLmZhLWFuZ2xlLWxlZnRcclxue1xyXG4gIGNvbG9yOiAjMWIyZTM1XHJcbn1cclxuXHJcbi5mYS1xcmNvZGVcclxue1xyXG4gIGZvbnQtc2l6ZTogMjAwcHg7XHJcbiAgY29sb3I6ICMxYjJlMzVcclxufVxyXG5cclxuLmRpdl9oXHJcbntcclxuICBiYWNrZ3JvdW5kOiAjZjljYTIxO1xyXG4gIHdpZHRoOiAzMiU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjI5NCk7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG59XHJcbi5jYWJlemFyX21lbnVcclxue1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDo1NXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwJTtcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMzM2KTtcclxuICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y5Y2EyMTtcclxufVxyXG5cclxuLmNvbnRlbmlkb1xyXG57XHJcbiAgd2lkdGg6IDEwMCU7aGVpZ2h0OiA5MiU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctdG9wOiAzMCU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uaGlzdG9yaWFsX3Jlc2VydmFjaW9uZXNfY29udGVudFxyXG57XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi50ZXh0X2hveSBoMlxyXG57XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiMxYjJlMzU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbmlkb19iYWpvXHJcbntcclxuXHJcbn1cclxuXHJcblxyXG4uYl9yZXNlcnZhclxyXG57XHJcbiAgYmFja2dyb3VuZDogIzFiMmUzNTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czoxMDBweDtcclxuICBmb250LXNpemU6MThweDtcclxuICB3aWR0aDoxMDBweDtcclxuICBtYXJnaW4tdG9wOjE1JTtcclxuICBoZWlnaHQ6MTAwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgwLCAwLCAwLCAwLjU1NSk7XHJcbn1cclxuXHJcblxyXG4uaG9yYXJpb1xyXG57XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAzMCUgMzAlIDMwJSAzMCUgMzAlIDMwJTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggNTBweDtcclxuICBoZWlnaHQ6MzUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG5cclxuLmJsdXJcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjE5Mik7XHJcbn1cclxuXHJcbi5ob3JhcmlvIGRpdiBoMSB7XHJcbiAgZm9udC1mYW1pbHk6ICdLYW5pdCcsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZy10b3A6IDAlO1xyXG4gIGNvbG9yOiAjMWIyZTM1O1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6MTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJcclxue1xyXG4gIGJhY2tncm91bmQ6ICMxYjJlMzU7XHJcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcclxuXHJcbiAgaGVpZ2h0OjglXHJcbn1cclxuXHJcbi5tb25kYWxcclxue1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNTMpO1xyXG4gIHdpZHRoOiAxMDAlO2hlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmluZm9ybWF0aW9uXHJcbntcclxuICB3aWR0aDogODAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxOTtcclxuICBtYXJnaW4tdG9wOiAzMSU7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgMzVweCByZ2JhKDI4LCAzMSwgMzQsIDAuNDY2KVxyXG59XHJcblxyXG4uZmFsdGFudGVzXHJcbntcclxuICB3aWR0aDo5MCU7YmFja2dyb3VuZDojZmZmO2hlaWdodDogMzUwcHg7cG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgYm9yZGVyLXJhZGl1czo4cHg7XHJcbn1cclxuLmhfXHJcbntcclxuICBtYXJnaW4tdG9wOjQwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDojZmZmO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cclxufVxyXG5cclxuLmFuY2hvc1xyXG57XHJcbiAgd2lkdGg6IDQwJTtcclxuICBoZWlnaHQ6MTAwcHg7XHJcbn1cclxuXHJcbi5ncmlkX3NlbWFuYVxyXG57XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAyMCUgMjAlIDIwJSAyMCU7XHJcbiAgICBoZWlnaHQ6IDEzN3B4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzQ5NmE4NTgwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ubmFtZXNcclxue1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICM0OTZhODU4MDtcclxufVxyXG5cclxuLmRpYV9zZW1hbmFcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3gtc2hhZG93OiAwIDAgMTVweCAjNDk2YTg1ODA7XHJcbn1cclxuXHJcbi5ncmlzcFxyXG57XHJcblxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxuICBtYXJnaW4tdG9wOjUlO1xyXG4gIGNvbG9yOiMwMDA7XHJcbiAgZGlzcGxheTpncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzAlIDMwJTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwJSA1MCU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwLjM5Nyk7XHJcblxyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuLmNlbnRlciBoMVxyXG57IGZvbnQtc2l6ZTogMzVweDtcclxuICBsaW5lLWhlaWdodDogNTVweDtcclxufVxyXG5cclxuLmN1YWRyb1xyXG57XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggcmdiYSgwLCAwLCAwLCAwLjE5OSk7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KCNmZmZmZmY4MiwgdHJhbnNwYXJlbnQpO1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWFyZ2luOiA3JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDo1MCVcclxufVxyXG5cclxuLmN1YWRybyBoMVxyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdCZWJhcyBOZXVlJywgY3Vyc2l2ZTtcclxuICBjb2xvcjojMWIyZTM1O1xyXG4gIGZvbnQtc2l6ZTo0MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4udGl0bGVfcmVncmVzYXJcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7XHJcbiAgY29sb3I6IzFiMmUzNTtcclxuICBmb250LXNpemU6NDBweDtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG59XHJcblxyXG4uaGlzdG9yaWFsX3Jlc2VydmFjaW9uZXMgaDFcclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnS2FuaXQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZToxNXB4XHJcbn1cclxuXHJcbi5ob3JhcmlvIGRpdntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi5jdWFkcm8gYnV0dG9ue1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBmb250LXNpemU6MjBweDtcclxuICBmb250LWZhbWlseTogJ0thbml0Jywgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDojMWIyZTM1O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5cclxuLmN1YWRyb19sZWlkb1xyXG57XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6NTBweDtcclxuICBib3JkZXItcmFkaXVzOjhweDtcclxuICBtYXJnaW4tbGVmdDo1JTtcclxuICBtYXJnaW4tdG9wOiA4JTtcclxuICBiYWNrZ3JvdW5kOiNmZmY7Ym94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI4MSlcclxufVxyXG5cclxuXHJcbiRwYXRoTnVtYmVyOiAxODtcclxuXHJcbi8vIFRoZSBjb2xvciB0aGF0IHdpbGwgYmUgYXQgdGhlIGJlZ2lubmluZyBhbmQgdGhlIGVuZCBvZiB0aGUgbG9vcC5cclxuJGZpcnN0Q29sb3I6ICMwMDU3Qjg7XHJcblxyXG4vLyBUaGUgbGlzdCBvZiBhbGwgdGhlIHVzZWQgY29sb3JzLiBZb3UgY2FuIGFkZCBvciByZW1vdmUgY29sb3JzLCB0aGUgYW5pbWF0aW9uIHN0YXlzIGZsdWlkLiBUaGUgJGZpcnN0LWNvbG9yIG11c3QgcmVtYWluIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QgdGhvdWdoLlxyXG4kbGlzdENvbG9yczogI0YxMUU0QSwgI0Y4QTUyNywgIzI2NkQ3RiwgIzgyQSwgJGZpcnN0Q29sb3I7XHJcblxyXG4kZGVsYXlDb2VmZjogMC4zcztcclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU3Qjg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnN2ZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4jc3ZnIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmaWxsOiAkZmlyc3RDb2xvcjtcclxuXHJcbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAxOCB7XHJcblxyXG4gICAgICBwYXRoOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgIGFuaW1hdGlvbjogcHdlZWsgJGRlbGF5Q29lZmYqJHBhdGhOdW1iZXIgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogJGkqJGRlbGF5Q29lZmY7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwd2VlayB7XHJcbiAgMCUge1xyXG4gICAgZmlsbDogJGZpcnN0Q29sb3I7XHJcbiAgfVxyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRsaXN0Q29sb3JzKSB7XHJcbiAgICAjeyRpKigxMDAvbGVuZ3RoKCRsaXN0Q29sb3JzKSl9JSB7XHJcbiAgICAgIGZpbGw6IG50aCgkbGlzdENvbG9ycywgJGkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OZXdzK0N5Y2xlOjQwMCk7XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMzMzO1xyXG59XHJcblxyXG4jY2FtZXJhLCAjcGFuZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OjUwJTsgdG9wOjUwJTtcclxuICB3aWR0aDozMDBweDsgaGVpZ2h0OjI4MHB4O1xyXG4gIG1hcmdpbjotMTUwcHg7XHJcbiAgYmFja2dyb3VuZDojZWFlYWVhO1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmdiYSgwLDAsMCwuMik7IGJvcmRlci1yYWRpdXM6NTBweDtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNwYW5lbCB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0zcHggMHB4IHJnYmEoMCwwLDAsLjIpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpIHNjYWxlKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpIHNjYWxlKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06cm90YXRlKC05MGRlZykgc2NhbGUoMCk7XHJcbiAgLW8tdHJhbnNmb3JtOnJvdGF0ZSgtOTBkZWcpIHNjYWxlKDApO1xyXG4gIHRyYW5zZm9ybTpyb3RhdGUoLTkwZGVnKSBzY2FsZSgwKTtcclxufVxyXG5cclxuXHJcbi5jb250ZW5lZG9yX2F0ZW5kaWRpc190b2RvXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gIGhlaWdodDogNTUlO1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjMzLCAyNDAsIDI0NSk7XHJcbn1cclxuXHJcblxyXG4uY29udGVuZWRvcl9hdGVuZGlkb1xyXG57XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSg3OSwgOTIsIDk3LCAwLjIxMik7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuI21haW5cclxue1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4jY2FtZXJhIHtcclxuICB6LWluZGV4OjI7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMnB4OyByaWdodDogMzVweDtcclxuICB3aWR0aDogNDBweDsgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTNlNGY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDBweCByZ2JhKDAsMCwwLC40KTtcclxuICB0cmFuc2l0aW9uOmFsbCAuMiBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246YWxsIC4yIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjphbGwgLjIgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246YWxsIC4yIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246YWxsIC4yIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbjogLjVzIGJ0bjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogLjVzIGJ0bjtcclxuICAtbW96LWFuaW1hdGlvbjogLjVzIGJ0bjtcclxuICAtbXMtYW5pbWF0aW9uOiAuNXMgYnRuO1xyXG4gIC1vLWFuaW1hdGlvbjogLjVzIGJ0bjtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjU7XHJcbiAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjU7XHJcbiAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6NTtcclxuICAtby1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjU7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIG1hcmdpbi10b3A6MnB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMCwwLDAsLjQpO1xyXG59XHJcblxyXG4uc2hhZG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiAyNDBweDsgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMTcwcHggLTEyMHB4IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zdHJpcCB7XHJcbiAgaGVpZ2h0OiAxMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRiNTlhO1xyXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzQ3OWE4MztcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICM0NzlhODM7XHJcbiAgbWFyZ2luOiA4MHB4IDBweDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCByZ2JhKDAsMCwwLC40KTtcclxufVxyXG5cclxuLmxlbnMge1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDo1MCU7IGxlZnQ6NTclO1xyXG4gIHdpZHRoOjE0NHB4OyBoZWlnaHQ6MTQ0cHg7XHJcbiAgbWFyZ2luOi05MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyOjE4cHggc29saWQgI2I0NGIzNztcclxuICBib3JkZXItcmFkaXVzOjUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxMTE7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAwcHggcmdiYSgwLDAsMCwuNCk7XHJcbn1cclxuXHJcbi5sZW5zOmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7XHJcbiAgbWFyZ2luOiAyN3B4O1xyXG4gIGJvcmRlcjogMjBweCBzb2xpZCByZ2IoNjAsIDYwLCA2MCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigzNCwgMzQsIDM0KTtcclxuICB0b3A6IC0xNnB4O1xyXG59XHJcblxyXG4ubGVuczphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA4cHg7IGhlaWdodDogOHB4O1xyXG4gIHRvcDogLTE1cHg7XHJcbiAgbWFyZ2luOiA1N3B4O1xyXG4gIGJvcmRlcjogMTFweCBzb2xpZCByZ2IoMjIsIDIyLCAyMik7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxMzEsIDEzMSwgMTMxKTtcclxufVxyXG5cclxuLmxlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDM1cHg7IHRvcDogMzBweDtcclxuICB3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMzYsIDExNSk7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAwcHggcmdiYSgwLDAsMCwuMSk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxlZCAuOHMgaW5maW5pdGU7XHJcbiAgLW1vei1hbmltYXRpb246IGxlZCAuOHMgaW5maW5pdGU7XHJcbiAgLW1zLWFuaW1hdGlvbjogbGVkIC44cyBpbmZpbml0ZTtcclxuICAtby1hbmltYXRpb246IGxlZCAuOHMgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBsZWQgLjhzIGluZmluaXRlO1xyXG59XHJcblxyXG4ucGljIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7IGxlZnQ6IDUwJTtcclxuICB3aWR0aDogMTUwcHg7IGhlaWdodDogMTUwcHg7XHJcbiAgbWFyZ2luOiAtMTIwcHggLTc1cHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDBweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG5cclxuLmxuayB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjIwcHg7XHJcbiAgZm9udDogMjJweCAnTmV3cyBDeWNsZScsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmxuazpob3ZlciB7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcblxyXG4vKiBzbGlkZSAqL1xyXG5ib2R5Lm9wZW4gPiAjcGFuZWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMGRlZykgc2NhbGUoMSk7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG4gIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKSBzY2FsZSgxKTtcclxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxuICAtbXMtdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKSBzY2FsZSgxKTtcclxuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG4gIC1vLXRyYW5zZm9ybTpyb3RhdGUoMGRlZykgc2NhbGUoMSk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxuICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpIHNjYWxlKDEpO1xyXG4gIG1hcmdpbi1sZWZ0OjA7XHJcbn1cclxuXHJcbmJvZHkub3BlbiA+ICNjYW1lcmEge1xyXG4gIG1hcmdpbi1sZWZ0Oi0zMDBweDtcclxufVxyXG5cclxuYm9keS5vcGVuID4gLnNoYWRvdyB7XHJcbiAgbWFyZ2luOiAxNzBweCAtMjYwcHggMHB4O1xyXG4gIHdpZHRoOjUyMHB4O1xyXG59XHJcblxyXG4vKiBrZXlmcmFtZXMgKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxlZCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5Oi4yO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGxlZCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5Oi4yO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuQC1tcy1rZXlmcmFtZXMgbGVkIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6LjI7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OjE7XHJcbiAgfVxyXG59XHJcblxyXG5ALW8ta2V5ZnJhbWVzIGxlZCB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5Oi4yO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsZWQge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTouMjtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBidG4ge1xyXG4gIGZyb20ge1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICB0b3A6IDIycHg7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBtYXJnaW4tdG9wOjJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMCwwLDAsLjQpO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGJ0biB7XHJcbiAgZnJvbSB7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIHRvcDogMjJweDtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG1hcmdpbi10b3A6MnB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgwLDAsMCwuNCk7XHJcbiAgfVxyXG59XHJcblxyXG5ALW1zLWtleWZyYW1lcyBidG4ge1xyXG4gIGZyb20ge1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICB0b3A6IDIycHg7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBtYXJnaW4tdG9wOjJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMCwwLDAsLjQpO1xyXG4gIH1cclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBidG4ge1xyXG4gIGZyb20ge1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICB0b3A6IDIycHg7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBtYXJnaW4tdG9wOjJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMCwwLDAsLjQpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBidG4ge1xyXG4gIGZyb20ge1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICB0b3A6IDIycHg7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBtYXJnaW4tdG9wOjJweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMCwwLDAsLjQpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4uZG1tX3JpYmJvbnttYXJnaW4tYm90dG9tOjQwcHg7IHBvc2l0aW9uOnJlbGF0aXZlOyB6LWluZGV4OjA7XHJcbiAgY29sb3I6I2ZmZjsgd2lkdGg6NDBweDsgaGVpZ2h0OjEwMHB4OyB0b3A6LTVweDsgbGVmdDoyMHB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzoxcHggMCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzoxcHggMCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6MXB4IDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6NXB4IDAgMCAwOyAtd2Via2l0LWJvcmRlci1yYWRpdXM6NXB4IDAgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4IDAgMCAwOyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxyXG4uZG1tX3JpYmJvbjpob3ZlcntoZWlnaHQ6MTIwcHg7IH1cclxuLmRtbV9yaWJib246aG92ZXIgc3BhbntwYWRkaW5nLXRvcDo1NXB4OyB9XHJcbi5kbW1fcmliYm9uOmJlZm9yZSwuZG1tX3JpYmJvbjphZnRlcntjb250ZW50OicnOyBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoyMHB4OyBoZWlnaHQ6NzBweDsgYmFja2dyb3VuZDojNjY2OyB6LWluZGV4Oi0yOyB9XHJcbi5kbW1fcmliYm9uOmJlZm9yZXtib3R0b206MThweDsgcmlnaHQ6NXB4O1xyXG4gIC1tb3otdHJhbnNmb3JtOnJvdGF0ZSgxMmRlZykgc2tldygxOGRlZywgMjhkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxMmRlZykgc2tldygxOGRlZywgMjhkZWcpO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjojMTc0YzY2O1xyXG4gIC1vLXRyYW5zZm9ybTpyb3RhdGUoMTJkZWcpIHNrZXcoMThkZWcsIDI4ZGVnKTtcclxuXHJcbi1tcy10cmFuc2Zvcm06cm90YXRlKDEyZGVnKSBza2V3KDE4ZGVnLCAyOGRlZyk7XHJcbnRyYW5zZm9ybTpyb3RhdGUoMTJkZWcpIHNrZXcoMThkZWcsIDI4ZGVnKTtcclxuLW1vei1ib3gtc2hhZG93OjhweCAyNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbi13ZWJraXQtYm94LXNoYWRvdzo4cHggMjVweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5ib3gtc2hhZG93OjhweCAyNXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNSk7IGJvcmRlci10b3AtY29sb3I6IzE3NGM2NjsgfVxyXG4uZG1tX3JpYmJvbjphZnRlcntib3R0b206MTZweDsgbGVmdDo1cHg7XHJcbi1tb3otdHJhbnNmb3JtOnJvdGF0ZSgtMjNkZWcpIHNrZXcoLTE4ZGVnLCAtMjhkZWcpO1xyXG4td2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTIzZGVnKSBza2V3KC0xOGRlZywgLTI4ZGVnKTtcclxuLW8tdHJhbnNmb3JtOnJvdGF0ZSgtMjNkZWcpIHNrZXcoLTE4ZGVnLCAtMjhkZWcpO1xyXG4tbXMtdHJhbnNmb3JtOnJvdGF0ZSgtMjNkZWcpIHNrZXcoLTE4ZGVnLCAtMjhkZWcpO1xyXG50cmFuc2Zvcm06cm90YXRlKC0yM2RlZykgc2tldygtMThkZWcsIC0yOGRlZyk7XHJcbi1tb3otYm94LXNoYWRvdzotNXB4IDIwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuLXdlYmtpdC1ib3gtc2hhZG93Oi01cHggMjBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5ib3gtc2hhZG93Oi01cHggMjBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XHJcblxyXG5cclxuLmRtbV9yaWJib24gc3BhbntkaXNwbGF5OmJsb2NrOyBoZWlnaHQ6MTAwJTsgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOjVweCAwIDAgMDsgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjVweCAwIDAgMDtcclxuICBib3JkZXItcmFkaXVzOjVweCAwIDAgMDsgYmFja2dyb3VuZC1jb2xvcjojNDJhNWQ0O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCAjNDJhNWQ0KSwgY29sb3Itc3RvcCg1cHgsICM0MmE1ZDQpLCBjb2xvci1zdG9wKDE1JSwgIzI0NzY5ZCksIGNvbG9yLXN0b3AoNjUlLCAjMjQ3NjlkKSwgY29sb3Itc3RvcCgxMDAlLCAjNDJhNWQ0KSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNDJhNWQ0IDAsICM0MmE1ZDQgNXB4LCAjMjQ3NjlkIDE1JSwgIzI0NzY5ZCA2NSUsICM0MmE1ZDQgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTotbW96LWxpbmVhci1ncmFkaWVudCgjNDJhNWQ0IDAsICM0MmE1ZDQgNXB4LCAjMjQ3NjlkIDE1JSwgIzI0NzY5ZCA2NSUsICM0MmE1ZDQgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTotbXMtbGluZWFyLWdyYWRpZW50KCM0MmE1ZDQgMCwgIzQyYTVkNCA1cHgsICMyNDc2OWQgMTUlLCAjMjQ3NjlkIDY1JSwgIzQyYTVkNCAxMDAlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOi1vLWxpbmVhci1ncmFkaWVudCgjNDJhNWQ0IDAsICM0MmE1ZDQgNXB4LCAjMjQ3NjlkIDE1JSwgIzI0NzY5ZCA2NSUsICM0MmE1ZDQgMTAwJSk7XHJcbmJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KCM0MmE1ZDQgMCwgIzQyYTVkNCA1cHgsICMyNDc2OWQgMTUlLCAjMjQ3NjlkIDY1JSwgIzQyYTVkNCAxMDAlKTtcclxucGFkZGluZy10b3A6IDM1cHg7IC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyBjdXJzb3I6cG9pbnRlcjsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG4uZG1tX3JpYmJvbiBzcGFuOmJlZm9yZSwuZG1tX3JpYmJvbiBzcGFuOmFmdGVye2NvbnRlbnQ6Jyc7IHBvc2l0aW9uOmFic29sdXRlO1xyXG56LWluZGV4Oi0xOyB9XHJcbi5kbW1fcmliYm9uIHNwYW46YmVmb3Jle2JvcmRlci1zdHlsZTpzb2xpZDsgYm9yZGVyLXdpZHRoOjVweDtcclxuYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50OyByaWdodDotNXB4OyB0b3A6MDsgLW1vei10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtcclxuLXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTsgLW8tdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7XHJcbi1tcy10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTsgdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7XHJcbi1tb3otYm9yZGVyLXJhZGl1czo1cHg7IC13ZWJraXQtYm9yZGVyLXJhZGl1czo1cHg7IGJvcmRlci1yYWRpdXM6NXB4O1xyXG5ib3JkZXItdG9wLWNvbG9yOiMxNzRjNjY7IGJvcmRlci1sZWZ0LWNvbG9yOiMxNzRjNjY7IH1cclxuLmRtbV9yaWJib24gc3BhbjphZnRlcntib3R0b206LTIwcHg7IGxlZnQ6MDsgYm9yZGVyLXN0eWxlOnNvbGlkO1xyXG5ib3JkZXItd2lkdGg6MjBweDsgYm9yZGVyLWNvbG9yOiM0MmE1ZDQgIzQyYTVkNCB0cmFuc3BhcmVudCAjNDJhNWQ0OyB9XHJcbiJdfQ== */";

/***/ }),

/***/ 5382:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2095:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 1219:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map