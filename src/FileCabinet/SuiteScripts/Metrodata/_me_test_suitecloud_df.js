/**
 *@NApiVersion 2.1
 *@NScriptType UserEventScript
 */
define([], function() {

    function beforeLoad(context) {
        var rec = context.newRecord;

        //test upload by SDF
        rec.setValue('custrecord_me_memo_sdf', 'Ini Testing Upload Script Dari SuiteCloud Development Framework')
    }


    return {
        beforeLoad: beforeLoad,
    }
});
