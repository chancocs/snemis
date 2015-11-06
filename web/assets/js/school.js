$(document).ready(function(){

	// listen for change of value in the district select list
	$('#schoolfinder_district').change(function(event){

		var district = $(this).val();
		if(district !== ""){
			//use ajax to auto-populate the school select list based on the selected district
			$.ajax({
				url: Routing.generate('school_ajax',{id: district})
			})
			.done(function (data) {
	            $('#schoolfinder_school').html(data);
	        })
		}
	})

	//submit the form if a school is selected
	$('#schoolfinder_school').change(function(event){

		if($(this).val() !== "0"){
			$('#findByName').submit();
		}
	});

	$('#form_learner').change(function(event){
		if($(this).val() !== ""){
			$('#learnerPersonalForm').submit();
		}
	});

	$('#form_teacher').change(function(event){
		if($(this).val() !== ""){
			$('#findTeacherForm').submit();
		}
	});
        $('#form_material').change(function(event){
		if($(this).val() !== ""){
			$('#findMaterialForm').submit();
		}
	});
        $('#form_need').change(function(event){
		if($(this).val() !== ""){
			$('#findResourceForm').submit();
		}
	});
        // listen for change of value in the district select list
	$('#zonefinder_district').change(function(event){

		var district = $(this).val();
		//use ajax to auto-populate the zone select list based on the selected district
		$.ajax({
			url: Routing.generate('zone_ajax',{id: district})
		})
		.done(function (data) {
            $('#zonefinder_zone').html(data);
        })
	})

	//submit the form if a zone is selected
	$('#zonefinder_zone').change(function(event){

		if($(this).val() !== "0"){
			$('#findByName').submit();
		}
	});
        
        //submit the form if a district is selected
	$('#districtfinder_district').change(function(event){

		if($(this).val() !== "0"){
			$('#findByName').submit();
		}
	});

    if($('.datepicker').length){
		$('.datepicker').datepicker();
    }
    
    $('#learner_exit_reason').change(function(event){
		if($(this).val() === "other"){
			$('#learner_exit_other_reason').prop('readonly','');
		}else{
			$('#learner_exit_other_reason').prop('readonly','readonly');
		}
	});

	$('[autofocus]:enabled:not([readonly]):first').focus();

});