/**
 * @package js
 * @author: Svyatik
 * @version: 0.2
 */

$ (document).ready (function () {
    $ ('.circle').on ('mousemove', function () {

        var element = $ (this).parent ();
        $ (element).css ('webkitAnimation','none');
        setTimeout (function () {
            $ (element).css ('webkitAnimation','');
        }, 1);

        $ (this).parent ().addClass ('play');
    });
});
