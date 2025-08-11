export function OtherSection() {
  return (
    <section className="py-24 text-center">
      <h2 className="font-medium tracking-widest text-xl uppercase">
        Outras edições
      </h2>

      <div className="grid grid-cols-4 gap-3 mt-16 h-80">
        <div className="bg-gray-500 rounded-xl ">Foto 1 </div>

        <div className="bg-gray-500 row-span-2 rounded-xl">Foto 2</div>

        <div className="bg-gray-500 col-span-2 rounded-xl">Foto 3</div>
        <div className=" bg-gray-500 rounded-xl">Foto 4</div>
        <div className="bg-gray-500 rounded-xl">Foto 5</div>
        <div className="bg-gray-500 rounded-xl">Foto 6</div>
      </div>
    </section>
  );
}
