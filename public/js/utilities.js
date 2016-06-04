/* JavaScript utility routines */

    function trim(stringToTrim) {
        return stringToTrim.replace(/^\s*/, '').replace(/\s*$/,'');
    }

    function submitform(form_ref) {
        form_ref.submit();
    }

