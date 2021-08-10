<?php
class TiendasController{
    public function dropzone (request $request){
      $imagen = $request->file('file');
      $ext='.'.$imagen->extension();
      $file=file::create([
        'tienda_id'=>tiendas::where('user_id',Auth::user()->id)->first()->id,
        'tipo'=>'tienda',
        'title'=>$imagen->getClientOriginalName(),
        'ext'=> $ext
      ]);

      $nombreImagen = $file->id.'.'.$imagen->extension();
      $path=public_path('img/tienda')."/".$nombreImagen;
      $imagen->move(public_path('img/tienda'),$nombreImagen);

    }
}
?>