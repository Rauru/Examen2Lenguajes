using System;

namespace ConsoleApp1
{
    class Program
    {
        class Persona
        {
            public int codigo;
            public string nombre;
            public int edad;
            public void ReadFromConsole()
            {
                Console.WriteLine("Ingrese Codigo");
                this.codigo = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Ingrese Nombre");
                this.nombre = Console.ReadLine();
                Console.WriteLine("Ingese Edad");
                this.edad = Convert.ToInt32(Console.ReadLine());
            }

            public void PrintToConsole()
            {
                Console.WriteLine("Codigo:" + this.codigo);
                Console.WriteLine("Nombre:" + this.nombre);
                Console.WriteLine("Edad:" + this.edad);
            }
        };

        /*p.ReadFromConsole();
          p.PrintToConsole();
          }*/
        
        static void Main(string[] args)
        {
           
            var p = new Persona();
            
            p.ReadFromConsole();
            p.PrintToConsole();

            Console.ReadLine();

        }
    }
}