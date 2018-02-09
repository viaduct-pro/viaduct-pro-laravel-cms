@extends('adminlte::layouts.app')

@section('main-content')
    <h1 class="page-header">Articles</h1>

    <div class="row">

        <div class="col-md-12">


            <div class="panel panel-inverse">
                <div class="panel-heading">
                    <h4 class="panel-title">Select article</h4>
                </div>
                <div class="panel-body">
                    <a href="{{route('user-edit')}}" class="btn btn-primary pull-right">Add user</a>
                    <div class="clearfix"></div>
                    <div class="table-responsive m-t-10">
                        <table class="table table-bordered" id="articles-table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Slug</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th class="width-50"></th>
                                <th class="width-50"></th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    </div>
@stop

@push('scripts')
    <script>
      $(function() {
        $('#articles-table').DataTable({
          processing: true,
          serverSide: true,
          ajax: '{!! route('articles-data') !!}',
          columns: [
            { data: 'id', name: 'id' },
            { data: 'name', name: 'name' },
            { data: 'description', name: 'description' },
            { data: 'slug', name: 'slug' },
            { data: 'created_at', name: 'created_at' },
            { data: 'updated_at', name: 'updated_at' }
          ],
          columnDefs: [
            {
              targets: 6,
              data: "edit",
              render: function (data, type, row, meta) {
                var html = '';
                html = '<a href="/admin/users/user/'+row.id+'"><i data-title="Edit" class="publish fa fa-pencil-square-o"></i></a>';
                return html;
              }
            },
            {
              targets: 7,
              data: "delete",
              render: function (data, type, row, meta) {
                var html = '';
                html = '<a class="send" onclick="return window.confirm(\'Do you really want to delete?\');" href="/admin/users/user/'+row.id+'/delete"><i data-title="Delete" class="publish fa fa-trash-o"></i></a>';
                return html;
              }
            },
//            {
//              targets: 0,
//              data: "image",
//              render: function ( data, type, row, meta ) {
//                var html = '';
//                if(row.photo){
//                  html = '<img height="35" src="/images/small'+row.photo.path+row.photo.name+'">';
//                  return html;
//                } else
//                {
//                  return '-';
//                }
//              }
//            }
          ],
        });
      });
    </script>
@endpush