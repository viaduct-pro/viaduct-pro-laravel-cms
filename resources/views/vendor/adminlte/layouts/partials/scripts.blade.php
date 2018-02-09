<!-- REQUIRED JS SCRIPTS -->

<!-- JQuery and bootstrap are required by Laravel 5.3 in resources/assets/js/bootstrap.js-->
<!-- Laravel App -->
<script src="{{ asset('/js/applte.js') }}" type="text/javascript"></script>
<script src="{{ asset('/js/app.js') }}" type="text/javascript"></script>
<script src="/libs/jquery-migrate/jquery-migrate.min.js"></script>
<script src="/libs/jqueryui/jquery-ui.min.js"></script>
<script src="/libs/bootstrap/dist/js/bootstrap.min.js"></script>
<!--[if lt IE 9]>
<script src="/libs/html5shiv/dist/html5shiv.min.js"></script>
<script src="/libs/Respond/dest/respond.min.js"></script>
<script src="/libs/excanvas/excanvas.js"></script>
<![endif]-->
<script src="/libs/slimScroll/jquery.slimscroll.min.js"></script>
<script src="/libs/pace/pace.min.js"></script>
<script src="/libs/noty/js/noty/packaged/jquery.noty.packaged.min.js"></script>
<script src="/libs/moment/min/moment-with-locales.min.js"></script>
<script src="/libs/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
<script src="/libs/datatables/js/jquery.dataTables.js"></script>
<script src="/libs/bootstrap3-wysiwyg/dist/bootstrap3-wysihtml5.all.min.js"></script>
{{--<script src="/libs/bootstrap-select/dist/js/bootstrap-select.min.js"></script>--}}
<script src="/libs/switchery/dist/switchery.min.js"></script>
<script src="/libs/jquery-tag-it/js/tag-it.min.js"></script>
<script src="/libs/raty/lib/jquery.raty.js"></script>
<script src="/libs/fontIconPicker/jquery.fonticonpicker.min.js"></script>
<script src="/libs/tinymce/tinymce.min.js"></script>

<script src="/js/select2.min.js"></script>
<script src="/js/translit.js"></script>

<script src="/js/purify.min.js"></script>
<script src="/js/fileinput.min.js"></script>
<script src="/libs/bootstrap-fileinput/js/fileinput_locale_ru.js"></script>
<script src="/libs/ckeditor/ckeditor.js"></script>
<script src="/js/jquery.mask.min.js"></script>

<script src="/js/translit.js"></script>
<script src="/js/jquery.validate.min.js"></script>

<!-- Optionally, you can add Slimscroll and FastClick plugins.
      Both of these plugins are recommended to enhance the
      user experience. Slimscroll is required when using the
      fixed layout. -->
<script>
    window.Laravel = {!! json_encode([
        'csrfToken' => csrf_token(),
    ]) !!};

//    $(document).ready(function () {
//        App.init();
//    });
</script>


