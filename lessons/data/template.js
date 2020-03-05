;
let template = document.querySelector('.content__container');


// let template = `<div class="a row content__container px-2 pt-5 pb-1 m-0" style="display: none;" data-chapter="1" data-page="1">
// 											<div class="col-12 d-flex flex-column justify-content-center">

// 												<div class="row ml-2 content__title">
// 													<div class="col-12">

// 													</div>
// 												</div>
// 												<div class="row content__body mx-2 mr-md-0 h-md-75 align-content-center">
// 													<div class="col-12 my-auto">
// 														<div class="content__head mb-3">


// 														</div>
// 														<div class="body w-md-75 text-justify text-md-left">
// 														</div>
// 													</div>
// 												</div>
// 												<div class="row" style="max-height: 25vh;">

// 													<div class="col-12 d-flex justify-content-md-end justify-content-center">
// 														<div class="page__control mb-3 d-flex flex-column align-items-center text-center">
// 															<div class="page__control__elem page__control__up px-2 pt-3 w-100 pb-0" data-chapter="1" data-page="0" data-dir="up" data-id="0">
// 																<svg xmlns="http://www.w3.org/2000/svg" width="17.632" height="10.23" viewBox="0 0 17.632 10.23">
// 																	<path id="Path_459" data-name="Path 459" d="M2043.282,1150.913l8.109-8.109,8.109,8.109" transform="translate(-2042.575 -1141.39)" fill="none" stroke="#f1f1f1" stroke-width="2"/>
// 																</svg>
// 															</div>

// 															<div class="px-2 py-2 w-100 m-0 small">
// 																1/15									
// 															</div>
// 															<div class="page__control__elem page__control__down px-2 pb-3 w-100" data-chapter="1" data-page="0" data-dir="down" data-id="0">
// 																<svg xmlns="http://www.w3.org/2000/svg" width="17.632" height="10.23" viewBox="0 0 17.632 10.23" >
// 																	<path id="Path_460" data-name="Path 460" d="M2043.282,1150.913l8.109-8.109,8.109,8.109" transform="translate(2060.207 1151.62) rotate(180)" fill="none" stroke="#f1f1f1" stroke-width="2" />
// 																</svg>
// 															</div>
// 														</div>
// 													</div>
// 												</div>
// 											</div>

// 										</div>`

let clone = template.cloneNode(true);

export default clone;