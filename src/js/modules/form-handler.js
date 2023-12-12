import AOS from 'aos';

$('input[name=referral]').change(function () {
	const isVisible = Boolean(parseInt($(this).prop('value')));

	$('.js-referrer-display').css('display', isVisible ? 'block' : 'none');
});

$('input[type="search"]').on('input', function() {
	var $input = $(this);
	var $clearButton = $input.siblings('.js-clear-input');

	if ($input.val().trim() !== '') {
		$clearButton.show();
	} else {
		$clearButton.hide();
	}
});

$('.js-clear-input').on('click', function(event) {
	event.preventDefault();
	var $input = $(this).siblings('input[type="search"]');

	$(this).hide();
	$input.val('');
});

$('input[maxlength]').on('input', function () {
    var maxLength = $(this).attr('maxlength');

    var currentCharacters = $(this).val().length;
    var charactersLeft = maxLength - currentCharacters;

    console.log(charactersLeft);

    $(this).parent().siblings('div').find('[data-type-counter]').text(charactersLeft);
});

$('.js-form-procceed').on('click', function(event) {
	event.preventDefault();
	
	const $this = $(this);
	const $currentSection = $this.closest('[data-order]');
	const index = $currentSection.data('order');

	$currentSection
		.removeClass('is-current')
		.addClass('is-past')
		.next()
		.addClass('is-past');

	$currentSection.next().addClass('is-current');

	AOS.refresh();
});

$('.js-form-edit').on('click', function(event) {
	event.preventDefault();
	
	const $this = $(this);
	const $currentSection = $this.closest('[data-order]');

	$currentSection.siblings().removeClass('is-current');

	$currentSection.addClass('is-current')
			.prev()
			.addClass('is-past', $currentSection.data('order') !== '1')

	AOS.refresh();
});


$('.js-duplicate-fields').on('click', function (event) {
    event.preventDefault();

    const $this = $(this);
    const maxCopies = Math.abs($this.data('max-copies'));
    let currentCopies = $this.data('current-copies');
    
    const $target = $(`.js-fields[data-field-target=${$this.data('field-target')}]`);
    const $clonedFields = $target.clone();


    if(currentCopies < maxCopies) {
	    $clonedFields.addClass('flex flex-wrap border-t border-solid border-purple pt-[1.1rem] mt-[1.6rem] is-copy').removeClass('contents');
	    
	    const newFieldTarget = $target.length + 1;
	    $clonedFields.attr('data-field-target', newFieldTarget);

	    $clonedFields.find('input').each(function(index, el) {
	    	const $label = $(this).parent().siblings('label');
	    	const uniqueId = Math.floor(Math.random() * Date.now()).toString(16);

	    	$(this).attr('id', uniqueId);
	    	$label.attr('for', uniqueId);
	    	
	    });    	

	    $target.after($clonedFields);
	    $this.data('current-copies', ++currentCopies);
    } 

    if(currentCopies == maxCopies) {
    	$this.hide();
    }
});

$(document).on('click', '.js-fields-delete', function(event) {
	event.preventDefault();

	const $this = $(this);
	const $duplicateButton = $this.closest('form').find('.js-duplicate-fields');
	let currentCopies = $duplicateButton.data('current-copies');
	
	$duplicateButton.show();
	$duplicateButton.data('current-copies', --currentCopies);
	
	$this.closest('.js-fields').remove();
});