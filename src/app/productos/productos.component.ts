import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  
  nuevoProducto = {
      id:0,
      nombre: '',
      precio: 0,
      descuento: true
    };

  productos = [
    { id: 1, nombre: 'Producto A', precio: 100, descuento: false },
    { id: 2, nombre: 'Producto B', precio: 200, descuento: true },
    { id: 3, nombre: 'Producto C', precio: 300, descuento: false }
    ];

    contador:number = 4;
   agregarproducto()
   {
      this.nuevoProducto.id=this.contador;
      this.contador++;
      this.productos.push(this.nuevoProducto);
      this.nuevoProducto={
        id:0,
      nombre: '',
      precio: 0,
      descuento: true
      }
   }

   ideliminar: number = 0;

   eliminarproducto(parametro: number)
   {
    const pos = this.productos.findIndex(obj=>obj.id==parametro);
    if(pos!==-1)
    {
     this.productos.splice(pos,1);
     this.ideliminar =0;
    }
   }
}
