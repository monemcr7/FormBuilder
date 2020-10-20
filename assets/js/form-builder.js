$(document).ready(function () {
    // Drag elements
    
    $(".text-field-form").draggable({
        helper: function () {
            return getTextFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".email-field-form").draggable({
        helper: function () {
            return getEmailFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".number-field-form").draggable({
        helper: function () {
            return getNumberFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".password-field-form").draggable({
        helper: function () {
            return getPasswordFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".textarea-field-form").draggable({
        helper: function () {
            return getTextareaFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".date-field-form").draggable({
        helper: function () {
            return getDateFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".select-field-form").draggable({
        helper: function () {
            return getSelectFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".checkbox-field-form").draggable({
        helper: function () {
            return getCheckboxFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".radio-field-form").draggable({
        helper: function () {
            return getRadioFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".upload-field-form").draggable({
        helper: function () {
            return getUploadFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".button-form").draggable({
        helper: function () {
            return getButtonFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });


    $(".form_builder_area").sortable({
        cursor: 'move',
        placeholder: 'placeholder',
        start: function (e, ui) {
            ui.placeholder.height(ui.helper.outerHeight());
        },
        stop: function (ev, ui) {
            getPreview();
        }
    });
    $(".form_builder_area").disableSelection();

    
    function getTextFieldHTML() {
        var field = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">

                    <h2 class="mb-0">

                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="text">Text Field</span> </a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="text" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="placeholder_${field}" data-field="${field}" class="form-control form_input_placeholder" placeholder="Placeholder" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-check"><label class="form-check-label"><input data-field="${field}" type="checkbox" class="form-check-input form_input_req"><span class="req-text">Required</span></label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getEmailFieldHTML() {
        var field = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title"><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="email-text">Email</span></a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="email" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="placeholder_${field}" data-field="${field}" class="form-control form_input_placeholder" placeholder="Placeholder" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-check"><label class="form-check-label"><input data-field="${field}" type="checkbox" class="form-check-input form_input_req"><span class="req-text">Required</span></label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getNumberFieldHTML() {
        var field = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="num-text">Number</span></a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="number" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="placeholder_${field}" data-field="${field}" class="form-control form_input_placeholder" placeholder="Placeholder" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="number" name="placeholder_${field}" data-field="${field}" class="form-control form_input_step" placeholder="step" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-check"><label class="form-check-label"><input data-field="${field}" type="checkbox" class="form-check-input form_input_req"><span class="req-text">Required</span></label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getPasswordFieldHTML() {
        var field = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="pass-text">Password</span></a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="password" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="placeholder_${field}" data-field="${field}" class="form-control form_input_placeholder" placeholder="Placeholder" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-check"><label class="form-check-label"><input data-field="${field}" type="checkbox" class="form-check-input form_input_req"><span class="req-text">Required</span></label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getTextareaFieldHTML() {
        var field = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="textarea-text">Textarea</span></a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="textarea" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="placeholder_${field}" data-field="${field}" class="form-control form_input_placeholder" placeholder="Placeholder" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-check"><label class="form-check-label"><input data-field="${field}" type="checkbox" class="form-check-input form_input_req"><span class="req-text">Required</span></label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getDateFieldHTML() {
        var field = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="date-text">Date</span></a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="date" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-check"><label class="form-check-label"><input data-field="${field}" type="checkbox" class="form-check-input form_input_req"><span class="req-text">Required</span></label></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getSelectFieldHTML() {
        var field = generateField();
        var option1 = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"> </i> <span class="select-text">Select</span></a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="select" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <select name="select_${field}" class="form-control select-op">
                                        <option data-opt=${option1} value="Value">Option</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row li_row">
                            <div class="col-md-12">
                                <div class="field_extra_info_${field}">
                                    <div data-field="${field}" class="row select_row_${field}" data-opt="${option1}">
                                        <div class="col-md-4">
                                            <div class="form-group"><input type="text" value="Option" class="s_opt form-control" /></div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group"><input type="text" value="Value" class="s_val form-control" /></div>
                                        </div>
                                        <div class="col-md-4"><i class="fa fa-plus-circle fa-2x default_blue add_more_select" data-field="${field}"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getCheckboxFieldHTML() {
        var field = generateField();
        var option1 = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="check-text">Checkbox Group</span></a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="checkbox" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="mt-checkbox-list checkbox_list_${field}"><label class="mt-checkbox mt-checkbox-outline"><input data-opt="${option1}" type="checkbox" name="checkbox_${field}" value="Value">
                                            <p class="c_opt_name_${option1}">Option</p><span></span>
                                        </label></div>
                                </div>
                            </div>
                        </div>
                        <div class="row li_row">
                                <div class="col-md-12">
                                    <div class="field_extra_info_${field}">
                                        <div data-field="${field}" class="row checkbox_row_${field}" data-opt="${option1}">
                                            <div class="col-md-4">
                                                <div class="form-group"><input type="text" value="Option" class="c_opt form-control" /></div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group"><input type="text" value="Value" class="c_val form-control" /></div>
                                            </div>
                                            <div class="col-md-4"><i class="fa fa-plus-circle fa-2x default_blue add_more_checkbox" data-field="${field}"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getRadioFieldHTML() {
        var field = generateField();
        var option1 = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="radio-text">Radio Group</span></a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="radio" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <div class="mt-radio-list radio_list_${field}"><label class="mt-radio mt-radio-outline"><input data-opt="${option1 }" type="radio" name="radio_${field}" value="Value">
                                            <p class="r_opt_name_${option1 }">Option</p><span></span>
                                        </label></div>
                                </div>
                            </div>
                        </div>
                        <div class="row li_row">
                            <div class="col-md-12">
                                <div class="field_extra_info_${field}">
                                    <div data-field="${field}" class="row radio_row_${field}" data-opt="${option1 }">
                                        <div class="col-md-4">
                                            <div class="form-group"><input type="text" value="Option" class="r_opt form-control" /></div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group"><input type="text" value="Value" class="r_val form-control" /></div>
                                        </div>
                                        <div class="col-md-4"><i class="fa fa-plus-circle fa-2x default_blue add_more_radio" data-field="${field}"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getUploadFieldHTML() {
        var field = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="file-text">Upload File</span></a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="file" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="label_${field}" class="form-control form_input_label" value="Label" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }

    function getButtonFieldHTML() {
        var field = generateField();
        var html = `    
        <div class="accordion" id="accordion${field}">
            <div class="card">
                <div class="card-header" id="heading${field}">
                    <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${field}" aria-expanded="true" aria-controls="collapse${field}">
                            <a href="#" class="header-title "><i class="fa fa-pencil-square" aria-hidden="true"></i> <span class="button-text">Button</span> </a>
                            <a href="#" class="remove-field" data-field="${field}"><i class="fa fa-times"></i></a>
                        </button>
                    </h2>
                </div>
                <div id="collapse${field}" class="collapse" aria-labelledby="heading${field}" data-parent="#accordion${field}">
                    <div class="card-body">
                        <div class="row li_row form_output" data-type="button" data-field="${field}">
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="class_${field}" class="form-control form_input_button_class" placeholder="Class" value="btn btn-primary" data-field="${field}" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="value_${field}" data-field="${field}" class="form-control form_input_button_value" value="Submit" placeholder="Value" /></div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group"><input type="text" name="text_${field}" class="form-control form_input_name" placeholder="Name" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        return $('<div>').addClass(`li_${field} form_builder_field`).html(html);
    }



    $(document).on('click', '.add_more_select', function () {
        $(this).closest('.form_builder_field').css('height', 'auto');
        var field = $(this).attr('data-field');
        var option = generateField();
        $('.field_extra_info_' + field).append(`<div data-field="${field}" class="row select_row_${field}" data-opt="${option}">
           <div class="col-md-4">
               <div class="form-group"><input type="text" value="Option" class="s_opt form-control" /></div>
           </div>
           <div class="col-md-4">
               <div class="form-group"><input type="text" value="Value" class="s_val form-control" /></div>
           </div>
           <div class="col-md-4"><i class="fa fa-plus-circle fa-2x default_blue add_more_select" data-field="${field}"></i><i class=" fa fa-times-circle default_red fa-2x remove_more_select" data-field="${field}"></i></div></div>`);
        var options = '';
        $('.select_row_' + field).each(function () {
            var opt = $(this).find('.s_opt').val();
            var val = $(this).find('.s_val').val();
            var s_opt = $(this).attr('data-opt');
            options += `<option data-opt="${s_opt}" value="${val}">${opt}</option>`
        });
        $(`select[name=select_${field}]`).html(options);
        getPreview();
    });
    $(document).on('click', '.add_more_radio', function () {
        $(this).closest('.form_builder_field').css('height', 'auto');
        var field = $(this).attr('data-field');
        var option = generateField();
        $('.field_extra_info_' + field).append(`<div data-opt="${option}" data-field="${field}" class="row                                                         radio_row_${field}">
                                               <div class="col-md-4">
                                                   <div class="form-group"><input type="text" value="Option" class="r_opt form-control" /></div>
                                               </div>
                                               <div class="col-md-4">
                                                   <div class="form-group"><input type="text" value="Value" class="r_val form-control" /></div>
                                               </div>
                                               <div class="col-md-4"><i class="fa fa-plus-circle fa-2x default_blue add_more_radio" data-field="${field}"></i><i class=" fa fa-times-circle default_red fa-2x remove_more_radio" data-field="${field}"></i></div>
                                           </div>`);
        var options = '';
        $('.radio_row_' + field).each(function () {
            var opt = $(this).find('.r_opt').val();
            var val = $(this).find('.r_val').val();
            var s_opt = $(this).attr('data-opt');
            options += `<label class="mt-radio mt-radio-outline"><input data-opt="${s_opt}" type="radio" name="radio_${field}" value="${val}"> <p class="r_opt_name_${s_opt}">${opt}</p><span></span></label>`;
        });
        $('.radio_list_' + field).html(options);
        getPreview();
    });
    $(document).on('click', '.add_more_checkbox', function () {
        $(this).closest('.form_builder_field').css('height', 'auto');
        var field = $(this).attr('data-field');
        var option = generateField();
        $('.field_extra_info_' + field).append(`<div data-opt="${option}" data-field="${field}" class="row checkbox_row_${field}">
                                   <div class="col-md-4">
                                       <div class="form-group"><input type="text" value="Option" class="c_opt form-control" /></div>
                                   </div>
                                   <div class="col-md-4">
                                       <div class="form-group"><input type="text" value="Value" class="c_val form-control" /></div>
                                   </div>
                                   <div class="col-md-4"><i class="fa fa-plus-circle fa-2x default_blue add_more_checkbox" data-field="${field}"></i><i class=" fa fa-times-circle default_red fa-2x remove_more_checkbox" data-field="${field}"></i></div>
                               </div>`);
        var options = '';
        $('.checkbox_row_' + field).each(function () {
            var opt = $(this).find('.c_opt').val();
            var val = $(this).find('.c_val').val();
            var s_opt = $(this).attr('data-opt');
            options += `<label class="mt-checkbox mt-checkbox-outline"><input data-opt="${s_opt}" name="checkbox_${field}" type="checkbox" value="${val}"> <p class="c_opt_name_${s_opt}">${opt}</p><span></span></label>`;
        });
        $('.checkbox_list_' + field).html(options);
        getPreview();
    });
    
    $(document).on('keyup', '.s_opt', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $(`select[name=select_${field}]`).find(`option[data-opt=${option}]`).html(op_val);
        getPreview();
    });
    $(document).on('keyup', '.s_val', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $(`select[name=select_${field}]`).find(`option[data-opt=${option}]`).val(op_val);
        getPreview();
    });
    
    $(document).on('keyup', '.r_opt', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.radio_list_' + field).find('.r_opt_name_' + option).html(op_val);
        getPreview();
    });
    $(document).on('keyup', '.r_val', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.radio_list_' + field).find(`input[data-opt=${option}]`).val(op_val);
        getPreview();
    });
    $(document).on('keyup', '.c_opt', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.checkbox_list_' + field).find('.c_opt_name_' + option).html(op_val);
        getPreview();
    });
    $(document).on('keyup', '.c_val', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.checkbox_list_' + field).find(`input[data-opt=${option}]`).val(op_val);
        getPreview();
    });
    $(document).on('click', '.edit_bal_textfield', function () {
        var field = $(this).attr('data-field');
        var el = $('.field_extra_info_' + field);
        el.html(`<div class="form-group"><input type="text" name="label_${field}" class="form-control" placeholder="Enter Text Field Label"/></div><div class="mt-checkbox-list"><label class="mt-checkbox mt-checkbox-outline"><input name="req_${field}" type="checkbox" value="1"> <span class="req-text">Required</span><span></span></label></div>`);
        getPreview();
    });

    $(document).on('click', '.remove-field', function (e) {
        e.preventDefault();
        console.log("test del")
        var field = $(this).attr('data-field');
        $(this).closest('.li_' + field).hide('100', function () {
            $(this).remove();
            getPreview();
        });
    });
    $(document).on('click', '.remove_more_select', function () {
        var field = $(this).attr('data-field');
        $(this).closest('.select_row_' + field).hide('400', function () {
            $(this).remove();
            var options = '';
            $('.select_row_' + field).each(function () {
                var opt = $(this).find('.s_opt').val();
                var val = $(this).find('.s_val').val();
                var s_opt = $(this).attr('data-opt');
                options += `<option data-opt="${s_opt}" value="${val}">${opt}</option>`;
            });
            $(`select[name=select_${field}]`).html(options);
            getPreview();
        });
    });
    $(document).on('click', '.remove_more_radio', function () {
        var field = $(this).attr('data-field');
        $(this).closest('.radio_row_' + field).hide('400', function () {
            $(this).remove();
            var options = '';
            $('.radio_row_' + field).each(function () {
                var opt = $(this).find('.r_opt').val();
                var val = $(this).find('.r_val').val();
                var s_opt = $(this).attr('data-opt');
                options += '<label class="mt-radio mt-radio-outline"><input data-opt="${s_opt}" type="radio" name="radio_${field}" value="${val}"> <p class="r_opt_name_${s_opt}">${opt}</p><span></span></label>';
            });
            $('.radio_list_' + field).html(options);
            getPreview();
        });
    });
    $(document).on('click', '.remove_more_checkbox', function () {
        var field = $(this).attr('data-field');
        $(this).closest('.checkbox_row_' + field).hide('400', function () {
            $(this).remove();
            var options = '';
            $('.checkbox_row_' + field).each(function () {
                var opt = $(this).find('.c_opt').val();
                var val = $(this).find('.c_val').val();
                var s_opt = $(this).attr('data-opt');
                options += `<label class="mt-checkbox mt-checkbox-outline"><input data-opt="${s_opt}" name="checkbox_${field}" type="checkbox" value="${val}"> <p class="r_opt_name_${s_opt}">${opt}</p><span></span></label>`;
            });
            $('.checkbox_list_' + field).html(options);
            getPreview();
        });
    });
    $(document).on('keyup', '.form_input_button_class', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_button_value', function () {
        getPreview();
    });
    $(document).on('change', '.form_input_req', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_placeholder', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_label', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_name', function () {
        getPreview();
    });

    function generateField() {
        return Math.floor(Math.random() * 77);
    }

    function getPreview(plain_html = '') {
        var el = $('.form_builder_area .form_output');
        var html = '';
        el.each(function () {
            var data_type = $(this).attr('data-type');
            var field = $(this).attr('data-field');
            var label = $(this).find('.form_input_label').val();
            var name = $(this).find('.form_input_name').val();
            if (data_type === 'text') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label><input type="text" name="${name}" placeholder="${placeholder}" class="form-control" ${required}/></div>`;
            }
            if (data_type === 'email') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label><input type="email" name="${name}" placeholder="${placeholder}" class="form-control" ${required}/></div>`;
            }
            if (data_type === 'number') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var step = $(this).find('.form_input_step').val();
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label><input type="number" step="${step}" name="${name}" placeholder="${placeholder}" class="form-control" ${required}/></div>`;
            }
            if (data_type === 'password') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label><input type="password" name="${name}" placeholder="${placeholder}" class="form-control" ${required}/></div>`;
            }
            if (data_type === 'textarea') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label><textarea rows="5" name="${name}" placeholder="${placeholder}" class="form-control" ${required}/></div>`;
            }
            if (data_type === 'date') {
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label><input type="date" name="${name}" class="form-control" ${required}/></div>`;
            }
            if (data_type === 'select') {
                var option_html = '';
                $(this).find('select option').each(function () {
                    var option = $(this).html();
                    var value = $(this).val();
                    option_html += `<option value="${value}">${option}</option>`;
                });
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label><select class="form-control" name="${name}">${option_html}</select></div>`;
            }
            if (data_type === 'checkbox') {
                var option_html = '';
                $(this).find('.mt-checkbox').each(function () {
                    var option = $(this).find('p').html();
                    var value = $(this).find('input[type=checkbox]').val();
                    option_html += `<div class="form-check"><label class="form-check-label"><input type="checkbox" class="form-check-input" name="${name}[]" value="' + value + '">${option}</label></div>`;
                });
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label>${option_html}</div>`;
            }
            if (data_type === 'radio') {
                var option_html = '';
                $(this).find('.mt-radio').each(function () {
                    var option = $(this).find('p').html();
                    var value = $(this).find('input[type=radio]').val();
                    option_html += `<div class="form-check"><label class="form-check-label"><input type="radio" class="form-check-input" name="${name}" value="${value}">${option}</label></div>`;
                });
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label>${option_html}</div>`;
            }
            if (data_type === 'file') {
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
                html += `<div class="form-group"><label class="control-label"><span class="label-text">${label}</span></label><input type="file" name="${name}" placeholder="${placeholder}" class="form-control" ${required}/></div>`;
            }
            if (data_type === 'button') {
                var btn_class = $(this).find('.form_input_button_class').val();
                var btn_value = $(this).find('.form_input_button_value').val();
                html += `<div class="form-group"><button name="${name}" type="submit" class="${btn_class}">${btn_value}</button></div>`;
            }

        });
        $('.preview').html(html).show();
    }

});