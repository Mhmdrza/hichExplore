// export interface ApiResponseType {
//   data?: CardDataType[];
// }
// export interface CardDataType {
//   catalog_uuid: string;
//   catalog_type: string;
//   total_price?: null;
//   mortgage_amount: number;
//   monthly_rent: number;
//   floor_qty: number;
//   unit_area_extent: number;
//   room_qty: number;
//   parking_qty?: number | null;
//   has_parking: boolean;
//   has_warehouse: boolean;
//   property_age: number;
//   has_internal_warehouse?: null;
//   saloons_img: string;
//   kitchens_img: string;
//   rooms_img: string;
//   district_name: string;
//   unit_variety: string;
//   count_variety: number;
//   catalog_request_uuid: string;
//   image_count: number;
//   create_timestamp: string;
//   score: number;
//   zone_main_name: string;
//   modify_timestamp: string;
//   catalog_tags_id?: number[] | null;
//   thumbnail_img: string;
//   exchangeable_rent?: boolean | null;
//   construction_status: string;
//   old_monthly_rent?: null;
//   old_mortgage_amount?: null;
//   price_edit_timestamp?: null;
//   conversion_ratio?: number | null;
//   badge: string;
//   has_picture: boolean;
//   elevator_or_low_floor: boolean;
//   has_farangi_toilet?: null;
//   has_surface_gas?: boolean | null;
// }

export default {
  real: fetch(
    "/rest/tgr/v2/catalogs/search/0/12?check_count=true&catalog_type=rent&marketing_url=8a2c81ee87ff530fdef752ca6654beb8"
  )
    .then((r) => r.json())
    .then((r) => r.data),
  mock: `{"data" : [{"catalog_uuid":"56ca3435-a017-4a41-a9f6-eed1ebc08593","catalog_type":"rent","total_price":null,"mortgage_amount":35000000,"monthly_rent":1800000,"floor_qty":2,"unit_area_extent":50,"room_qty":1,"parking_qty":1,"has_parking":true,"has_warehouse":true,"property_age":16,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/b39878f2-3bf8-4f9a-a961-8a185552849e_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/d37fddad-31a0-4987-ad5b-9112f6f12c8f_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/31f201f9-7733-46b0-a54a-e883adcdbd13_medium.jpg","district_name":"حکیمیه","unit_variety":"","count_variety":1,"catalog_request_uuid":"10524478-41ba-4f4a-8bb4-e7c6591ff6c8","image_count":10,"create_timestamp":"2020-05-06T13:03:54.377872","score":36.73776731764983,"zone_main_name":"حکیمیه","modify_timestamp":"2020-05-06T14:41:23.721","catalog_tags_id":[50,52,39,37],"thumbnail_img":"/__file/catalog/2020/5/6/5342f62e-3e8b-441c-9ecf-c7e61f8c5b1f_medium.jpg","exchangeable_rent":null,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":null,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":true,"has_farangi_toilet":null,"has_surface_gas":true},{"catalog_uuid":"7abc4de7-9415-4929-9292-2896db4b67a8","catalog_type":"rent","total_price":null,"mortgage_amount":100000000,"monthly_rent":1000000,"floor_qty":2,"unit_area_extent":85,"room_qty":2,"parking_qty":1,"has_parking":true,"has_warehouse":true,"property_age":4,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/1599b5b4-6722-4309-97ab-6f928cc54d3d_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/56eda68d-bfef-469c-be14-154e8013c6d5_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/192e7669-a629-4807-9103-30caa856c766_medium.jpg","district_name":"جوادیه","unit_variety":"","count_variety":1,"catalog_request_uuid":"afc6b4da-0a8e-43d2-aa69-619d7887f285","image_count":13,"create_timestamp":"2020-05-06T12:38:52.106628","score":36.73776731764983,"zone_main_name":"جوادیه","modify_timestamp":"2020-05-06T15:17:50.387","catalog_tags_id":[104,110,50,43,37,58,13,14,12,4,5,8],"thumbnail_img":"/__file/catalog/2020/5/6/bef038f6-edcd-4131-a187-e8625d68bd43_medium.jpg","exchangeable_rent":null,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":null,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":true,"has_farangi_toilet":null,"has_surface_gas":null},{"catalog_uuid":"8ed0125a-fa71-41fa-ba7b-79e1e1175b5b","catalog_type":"rent","total_price":null,"mortgage_amount":50000000,"monthly_rent":1000000,"floor_qty":4,"unit_area_extent":55,"room_qty":1,"parking_qty":null,"has_parking":false,"has_warehouse":false,"property_age":13,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/7c6514a4-1cba-4376-bb7e-e1d7263d4f79_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/9c621c5d-7524-4f73-b7fb-3c7c70c1e6ec_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/108d6449-2928-4c43-b5d5-23d06aa9b8c7_medium.jpg","district_name":"نظام آباد","unit_variety":"","count_variety":1,"catalog_request_uuid":"b5b3b82d-04bf-4eeb-b32e-918eeab6ae6e","image_count":10,"create_timestamp":"2020-05-06T11:54:06.011907","score":36.73776731764983,"zone_main_name":"نظام آباد","modify_timestamp":"2020-05-06T15:14:37.109","catalog_tags_id":[50],"thumbnail_img":"/__file/catalog/2020/5/6/355e7e43-1d5c-48aa-8b15-4fb14be41cde_medium.jpg","exchangeable_rent":null,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":null,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":false,"has_farangi_toilet":null,"has_surface_gas":null},{"catalog_uuid":"23c2c537-406f-47ef-a112-69d731c7a104","catalog_type":"rent","total_price":null,"mortgage_amount":100000000,"monthly_rent":1200000,"floor_qty":4,"unit_area_extent":80,"room_qty":2,"parking_qty":null,"has_parking":false,"has_warehouse":true,"property_age":0,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/7581c488-3b7d-4d7c-8158-3544058d83c5_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/53e741ae-3818-490c-a5b7-a357bcdffc3a_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/d177ec41-2f9f-429d-b774-efabed115337_medium.jpg","district_name":"تهرانپارس","unit_variety":"","count_variety":1,"catalog_request_uuid":"9562ed47-041e-4571-8519-0c9160e5ddd9","image_count":12,"create_timestamp":"2020-05-06T11:36:15.086043","score":36.73776731764983,"zone_main_name":"تهرانپارس","modify_timestamp":"2020-05-06T13:58:01.969","catalog_tags_id":[52,50,154,103,37,39,44,89,58,14,13,7],"thumbnail_img":"/__file/catalog/2020/5/6/53e741ae-3818-490c-a5b7-a357bcdffc3a_medium.jpg","exchangeable_rent":null,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":null,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":false,"has_farangi_toilet":null,"has_surface_gas":true},{"catalog_uuid":"afee22db-631f-421f-a627-1b8f50f9b1cd","catalog_type":"rent","total_price":null,"mortgage_amount":35000000,"monthly_rent":750000,"floor_qty":1,"unit_area_extent":55,"room_qty":1,"parking_qty":null,"has_parking":false,"has_warehouse":false,"property_age":17,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/90624d1f-4496-46da-9487-a622f84ef566_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/655263ff-95d0-44e6-8989-9ce3104a5ac3_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/afcef065-5d3b-4688-a9f2-ef4d93af66fd_medium.jpg","district_name":"شمیران نو","unit_variety":"","count_variety":1,"catalog_request_uuid":"89eb9157-7e9f-4f7f-bef5-74b54eb75c82","image_count":10,"create_timestamp":"2020-05-06T11:31:28.34532","score":36.73776731764983,"zone_main_name":"شمیران نو","modify_timestamp":"2020-05-06T13:56:42.505","catalog_tags_id":[153,154,44,42,58,53,38,33,3],"thumbnail_img":"/__file/catalog/2020/5/6/b21d9c81-3e74-476c-a920-34224da3bc61_medium.jpg","exchangeable_rent":null,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":null,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":true,"has_farangi_toilet":null,"has_surface_gas":null},{"catalog_uuid":"43094811-7db6-4811-badc-56edae7f78d4","catalog_type":"rent","total_price":null,"mortgage_amount":50000000,"monthly_rent":1000000,"floor_qty":2,"unit_area_extent":71,"room_qty":1,"parking_qty":null,"has_parking":false,"has_warehouse":false,"property_age":23,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/fcc54269-34c9-4036-9554-f91541f5ffc0_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/66a922cf-f72b-4fd8-a92d-b9a0ae0ae3ff_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/8fd145b8-d882-48f7-b14f-c43938541b17_medium.jpg","district_name":"وحیدیه","unit_variety":"","count_variety":1,"catalog_request_uuid":"927a5c65-00e2-4ea9-9356-68382f983ca3","image_count":11,"create_timestamp":"2020-05-06T11:16:11.829107","score":36.73776731764983,"zone_main_name":"وحیدیه","modify_timestamp":"2020-05-06T15:16:27.406","catalog_tags_id":[50],"thumbnail_img":"/__file/catalog/2020/5/6/fcc54269-34c9-4036-9554-f91541f5ffc0_medium.jpg","exchangeable_rent":true,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":33,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":true,"has_farangi_toilet":null,"has_surface_gas":null},{"catalog_uuid":"5b06a385-61af-4f2b-b1c2-a2b700d4065c","catalog_type":"rent","total_price":null,"mortgage_amount":30000000,"monthly_rent":3000000,"floor_qty":3,"unit_area_extent":95,"room_qty":2,"parking_qty":null,"has_parking":false,"has_warehouse":false,"property_age":3,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/c55aa768-b029-4613-89d5-6a50f8d0fbd8_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/a75ab42f-95c7-4471-9a97-112d9735f1cc_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/a248a314-65a7-4210-a4e0-6281dd786c77_medium.jpg","district_name":"اوقاف","unit_variety":"","count_variety":1,"catalog_request_uuid":"f416c590-08fb-4646-866c-59253b328d7d","image_count":13,"create_timestamp":"2020-05-06T10:10:24.659691","score":36.73776731764983,"zone_main_name":"اوقاف","modify_timestamp":"2020-05-06T14:09:11.897","catalog_tags_id":[5,131],"thumbnail_img":"/__file/catalog/2020/5/6/ad85dfa2-0690-4761-99ec-2b84c50a7652_medium.jpg","exchangeable_rent":true,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":40,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":false,"has_farangi_toilet":null,"has_surface_gas":null},{"catalog_uuid":"5134ab66-ecb6-4103-9fb0-0ea04baa8be5","catalog_type":"rent","total_price":null,"mortgage_amount":60000000,"monthly_rent":1000000,"floor_qty":3,"unit_area_extent":75,"room_qty":1,"parking_qty":null,"has_parking":false,"has_warehouse":true,"property_age":5,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/3fb0fb1c-ce8a-4e38-9769-1e41bf2f5d47_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/b677cade-9718-4858-84c7-bce2270bf7f5_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/4fc322d8-8404-409f-8c0c-89e5aa2a3ebc_medium.jpg","district_name":"گلشن - خاک سفید","unit_variety":"","count_variety":1,"catalog_request_uuid":"906c745f-2bae-4d3c-8b3a-732383c94f2b","image_count":10,"create_timestamp":"2020-05-06T09:54:38.869403","score":36.73776731764983,"zone_main_name":"گلشن - خاک سفید","modify_timestamp":"2020-05-06T10:44:29.694","catalog_tags_id":[52,50,154,37,39,44,58,14,13,4],"thumbnail_img":"/__file/catalog/2020/5/6/3fb0fb1c-ce8a-4e38-9769-1e41bf2f5d47_medium.jpg","exchangeable_rent":null,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":null,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":false,"has_farangi_toilet":null,"has_surface_gas":true},{"catalog_uuid":"fbdfccde-68a7-45f2-b9d8-215ff6f3629d","catalog_type":"rent","total_price":null,"mortgage_amount":12000000,"monthly_rent":1500000,"floor_qty":-1,"unit_area_extent":65,"room_qty":1,"parking_qty":null,"has_parking":false,"has_warehouse":false,"property_age":14,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/4dd68faa-5886-4375-bd01-c541e12fcc54_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/f9aea5f8-f870-41a5-9630-95d5e54f2dda_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/cb6f84ca-b15d-4c87-8380-a70f2f55094f_medium.jpg","district_name":"کوهسار","unit_variety":"","count_variety":1,"catalog_request_uuid":"3d55ad78-f59d-4ce3-9ddb-7510378e0073","image_count":10,"create_timestamp":"2020-05-05T17:18:20.619109","score":36.73776731764983,"zone_main_name":"کوهسار","modify_timestamp":"2020-05-06T12:19:12.486","catalog_tags_id":[51,52,39,37],"thumbnail_img":"/__file/catalog/2020/5/6/4dd68faa-5886-4375-bd01-c541e12fcc54_medium.jpg","exchangeable_rent":null,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":null,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":true,"has_farangi_toilet":null,"has_surface_gas":null},{"catalog_uuid":"5c8108d2-8730-434c-aaec-bc4b30e037a6","catalog_type":"rent","total_price":null,"mortgage_amount":25000000,"monthly_rent":1200000,"floor_qty":0,"unit_area_extent":50,"room_qty":1,"parking_qty":null,"has_parking":false,"has_warehouse":false,"property_age":20,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/6/6997e382-6440-42e1-b2ec-92bccd3a880d_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/6/4f165734-91d6-4b68-87b9-886d14ceeab7_medium.jpg","rooms_img":"/__file/catalog/2020/5/6/14427ed6-c978-4598-ae23-c2f72a8c24cd_medium.jpg","district_name":"کوهسار","unit_variety":"","count_variety":1,"catalog_request_uuid":"c55251a6-f747-44de-b710-e695627ae7c6","image_count":10,"create_timestamp":"2020-05-05T17:00:03.705859","score":36.73776731764983,"zone_main_name":"کوهسار","modify_timestamp":"2020-05-06T12:16:13.154","catalog_tags_id":[50,52,37,33],"thumbnail_img":"/__file/catalog/2020/5/6/6997e382-6440-42e1-b2ec-92bccd3a880d_medium.jpg","exchangeable_rent":null,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":null,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":true,"has_farangi_toilet":null,"has_surface_gas":null},{"catalog_uuid":"e129fde3-1cde-4828-b31b-58844c1715ab","catalog_type":"rent","total_price":null,"mortgage_amount":30000000,"monthly_rent":2300000,"floor_qty":1,"unit_area_extent":55,"room_qty":1,"parking_qty":null,"has_parking":false,"has_warehouse":false,"property_age":9,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/5/7f2cf1cc-82e9-4692-ae01-f222fde0156f_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/5/9ff6adfa-9428-4232-a48c-b66e5cc627f4_medium.jpg","rooms_img":"/__file/catalog/2020/5/5/fe0e2e74-8592-4fb7-bba7-69f1b6d0d338_medium.jpg","district_name":"نارمک","unit_variety":"","count_variety":1,"catalog_request_uuid":"19c91904-d0ce-4227-aa94-237a7445f11e","image_count":11,"create_timestamp":"2020-05-05T16:58:34.678998","score":36.73776731764983,"zone_main_name":"نارمک","modify_timestamp":"2020-05-06T11:15:48.744","catalog_tags_id":[50,14,13,12,2,4,8,144,42],"thumbnail_img":"/__file/catalog/2020/5/5/a95d738d-6a13-4ff7-9f93-cdbe66371a64_medium.jpg","exchangeable_rent":true,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":33,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":true,"has_farangi_toilet":null,"has_surface_gas":true},{"catalog_uuid":"d2be6291-6328-48dc-8009-6d08ea1e7ac2","catalog_type":"rent","total_price":null,"mortgage_amount":190000000,"monthly_rent":0,"floor_qty":1,"unit_area_extent":90,"room_qty":2,"parking_qty":null,"has_parking":false,"has_warehouse":true,"property_age":19,"has_internal_warehouse":null,"saloons_img":"/__file/catalog/2020/5/5/6658fcd6-edac-4a49-ba0f-4fd1e7269dcb_smedium.jpg","kitchens_img":"/__file/catalog/2020/5/5/247fc4ee-568d-46aa-9dec-f05a6b4bd4fb_medium.jpg","rooms_img":"/__file/catalog/2020/5/5/0b75e7b7-84f9-4621-8a7b-09196c5f1cfc_medium.jpg","district_name":"اوقاف","unit_variety":"","count_variety":1,"catalog_request_uuid":"59eda195-f9b4-4401-b1b1-8a5df48c130d","image_count":12,"create_timestamp":"2020-05-05T16:41:41.642776","score":36.73776731764983,"zone_main_name":"اوقاف","modify_timestamp":"2020-05-06T12:36:16.081","catalog_tags_id":[153,154,103,52,44,39,42,37,58,13,8,5],"thumbnail_img":"/__file/catalog/2020/5/5/63f477e1-5a90-4eae-a2fa-2faf4dd2a8f6_medium.jpg","exchangeable_rent":null,"construction_status":"completed","old_monthly_rent":null,"old_mortgage_amount":null,"price_edit_timestamp":null,"conversion_ratio":null,"badge":"info_picture_verified","has_picture":true,"elevator_or_low_floor":true,"has_farangi_toilet":null,"has_surface_gas":null}]}`,
};