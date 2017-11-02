jQuery(document).ready(function ($) {
	$('.contact-form-wrap i.close-form, .contact-form-wrap').click(function () {
		$('body').removeClass('contact-form-active')
	});
	$('.contact-form-inner').click(function (e) {
		e.stopImmediatePropagation();
	})

	$('.email-btn').click(function () {
		$('body').addClass('contact-form-active')
	});
})