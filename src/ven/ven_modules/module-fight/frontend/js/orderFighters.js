var rowNumber= 0;

function orderFighters() {
    var name;
    var TP;
    var INIT;
    var RK;
    var fighterType= "hero";
    $("form#fighter-input-form input").each(function () {
        switch (this.name) {
            case "fighter-name":
                name=this.value;
                break;
            case "fighter-TP":
                TP=this.value;
                break;
            case "fighter-INIT":
                INIT=this.value;
                break;
            case "fighter-RK":
                RK=this.value;
                break;
            case "unit-Type":
                if (this.checked) {
                    fighterType="monster";
                }
                break;
            default:
                break;
        }
    });
    initFighter(name,TP,INIT,RK,fighterType)
}

/**
 *
 * @param {string} name
 * @param {string} tp
 * @param {string} init
 * @param {string} rk
 * @param {string} type
 */
function initFighter(name,tp,init,rk,type) {
    var rowID = 'fighter-tablerow-'+rowNumber;
    var containerID = 'fighter-row-NR-'+rowNumber;
    var tpID ='fighter-TP-NR-'+rowNumber;
    var initID = 'fighter-INIT-NR-'+rowNumber;
    var fighterType = "fighter-row-"+type;
    var deleter = 'fighter-table-row-deleter-'+rowNumber;

    $('#fight-order-table').append(
        '<tr class="fighter-table-row" id='+rowID+'>' +
            '<td>'+
                '<div class='+fighterType+' id='+containerID+'>' +
                    '<div class="fighter-info-cl1">' +
                        '<span class="fighter-name-cl1">' +
                            "NAME: "+ '<strong>'+name+'</strong>'+
                        '</span>'+
                    '</div>'+
                    '<div class="fighter-info-cl2">' +
                        "TP: "+'<label class="fighter-tp-cl1"><input type="text" class="fighter-value-field fighter-row-field-TP" name="fighter-info-TP-input" id='+tpID+' value='+tp+'></label>'+
                        "INIT: "+'<label class="fighter-init-cl2"><input type="text" class="fighter-value-field fighter-row-field-INIT" id='+initID+' value='+init+'></label>'+
                        "RK: "+'<label class="fighter-rk-cl2"><input class="fighter-value-field fighter-row-field-RK" type="text" value='+rk+'></label>'+
                    '</div>'+
                '</div>'+
            '</td>'+
            '<td><button class="fighter-table-row-deleter" id='+deleter+'>x</button></td>'+
        '</tr>'
    );
    setColor(document.getElementById(containerID));
   $('#'+deleter).click(function () {
        $('#'+rowID).remove();
    });

   document.getElementById(containerID).classList.add('fighter-row-container');
   document.getElementById(initID).addEventListener('change',function () {
       sortTable()
   });
    watchTP(document.getElementById(tpID));
    rowNumber++
}

/**
 *
 * @param {HTMLElement} htmlELEM
 */
function setColor(htmlELEM) {
    if (htmlELEM.classList.contains('fighter-row-monster')) {
        htmlELEM.style.background = 'crimson'
    } else {
        htmlELEM.style.background = 'dodgerblue'
    }
}

/**
 *
 * @param {HTMLElement} htmlELEM
 */
function watchTP(htmlELEM) {
        htmlELEM.addEventListener('change',function () {
            var parentContainer= htmlELEM.parentElement.parentElement.parentElement;
            if (htmlELEM.value==="0"){
                parentContainer.style.background ='silver'
            } else {
                setColor(parentContainer)
            }
        })
}


/**
 * taken from https://www.w3schools.com/howto/howto_js_sort_table.asp
 */
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("fight-order-table");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 0; i < (rows.length -1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            currentFighter = rows[i].getElementsByClassName('fighter-row-field-INIT')[0];
            nextFighter = rows[i + 1].getElementsByClassName('fighter-row-field-INIT')[0];
            // Check if the two rows should switch place:
            if (Number(currentFighter.value) < Number(nextFighter.value)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

