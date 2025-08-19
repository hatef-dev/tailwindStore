
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css"
import 'swiper/css/pagination';


var vocabularySwiper = new Swiper(".vocabularySwiper", {
	modules:[Pagination],
	direction: 'horizontal',
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 0,
    allowTouchMove: false,
    
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },

	},
    // rtl: true

});