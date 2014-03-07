(function ($) {
    'use strict';
    var dropDead = new Date('2014-03-11T14:00:00+0000');
    $('#countdown').countdown({
        until: dropDead,
        compact: true,
        layout: '{dnn}{dl}&nbsp;{hnn}{sep}{mnn}{sep}{snn}'
    });
})(jQuery);