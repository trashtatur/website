const FORM_FIELD_CONTAINER_CLASS = 'fighter-form-field-container';
const FORM_FIELD_CLASS = 'fighter-form-field';
const FORM_FIELD_LABEL = 'fighter-form-field-label';
var topRowFields = 1;
var col1Fields = 0;
var col2Fields = 0;
var col3Fields = 0;

function addRowField(context, name, editable, numOrTXT, sortBy, extLink) {
    switch (context) {
        case "top-row":
            if (topRowFields < 3) {
                topRowFields++;
                addSectionField(context, name, editable, numOrTXT, sortBy, extLink)
            }
            break;
        case "col1":
            if (col1Fields < 6) {
                col1Fields++;
                addSectionField(context, name, editable, numOrTXT, sortBy, extLink)
            }
            break;
        case "col2":
            if (col2Fields < 6) {
                col2Fields++;
                addSectionField(context, name, editable, numOrTXT, sortBy, extLink)
            }
            break;
        case "col3":
            if (col3Fields < 6) {
                col3Fields++;
                addSectionField(context, name, editable, numOrTXT, sortBy, extLink)
            }
            break;
    }
}

/**
 *
 * @param {string} sectionName
 * @param {string} name
 * @param {boolean} editable
 * @param {boolean} numOrTXT
 * @param {boolean} sortBy
 * @param {boolean} extLink
 */
function addSectionField(sectionName,  name, editable, numOrTXT, sortBy, extLink) {

    var container = createContainerAndLabel(FORM_FIELD_CONTAINER_CLASS, name);
    var inputField = createFormField(name, editable, numOrTXT, sortBy, extLink);
    inputField.id = 'fighter-form-'+sectionName+'-field' + col1Fields;
    inputField.maxlength = "8";
    container.appendChild(inputField);
    var fieldContainer = document.getElementById('fighter-form-'+sectionName);
    var rowAddButton = document.getElementById('fighter-form-add-'+sectionName+'-button');
    fieldContainer.insertBefore(container, rowAddButton);
}

/**
 *
 * @param {string} classString
 * @param {string} name
 * @returns {HTMLElement}
 */
function createContainerAndLabel(classString, name) {
    var container = document.createElement('div');
    container.classList.add(classString);
    var label = document.createElement('label');
    label.classList.add(FORM_FIELD_LABEL);
    label.innerText = name + ": ";
    container.appendChild(label);

    return container;
}

/**
 *
 * @param {string} name
 * @param {boolean} editable
 * @param {boolean} numOrTXT
 * @param {boolean} sortBy
 * @param {boolean} extLink
 * @returns {HTMLElement}
 */
function createFormField(name, editable, numOrTXT, sortBy, extLink) {
    var inputField = document.createElement('input');
    inputField.placeholder = name;
    inputField.classList.add(FORM_FIELD_CLASS);

    editable ? inputField.setAttribute('data-editable', 'true') : inputField.setAttribute('data-editable', 'false');
    numOrTXT ? inputField.type = 'number' : inputField.type = 'text';
    sortBy ? inputField.setAttribute('data-sortBy', 'true') : inputField.setAttribute('data-sortBy', 'false');
    extLink ? inputField.setAttribute('data-link', 'true') : inputField.setAttribute('data-link', 'false');

    return inputField;
}

$(document).ready(function () {
    $('.fighter-add-field-button').each(function () {
        $(this).on('click', function () {
            if ($(this).next().css('visibility') == 'visible') {
                $(this).next().css('visibility', 'hidden');
            } else {
                $(this).next().css('visibility', 'visible')
            }
        })
    })
});

exports.addRowField = addRowField;
