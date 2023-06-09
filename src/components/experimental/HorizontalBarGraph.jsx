import React from "react";

function HorizontalBarGraph() {
  return (
    <div className="w-full ">
      <h1 className="text-4xl">Intrinsic and Extrinsic Sizing</h1>
      <h1>Available width</h1>
      <div className="border border-black mb-10"></div>

      <h2>Block extrinsically sized by container will take up entire width</h2>
      <div className="border border-black h-10 mb-10"></div>

      <h2>Block intrinsically sized by with min-content</h2>
      <div className="border w-min border-black mb-10">
        <div className=" h-10 w-10 bg-red-300"></div>
        <div className=" h-10 w-32 bg-blue-300"></div>
        <div className=" h-10 w-24 bg-green-300"></div>
      </div>

      <h1>Extrisic sizing by wrapping in container with fixed width</h1>
      <p>(Children are inline-block)</p>
      <div className="w-40 border border-black mb-10">
        <div className="border  border-red-300">
          <div className="inline-block h-10 w-10 bg-red-300"></div>
          <div className="inline-block h-10 w-32 bg-blue-300"></div>
          <div className="inline-block h-10 w-24 bg-green-300"></div>
        </div>
      </div>

      <h1>Intrinsic sizing by setting width to min-content</h1>
      <p></p>
      <div className="w-40 border border-black mb-10">
        <div className="border w-min  border-red-300">
          <div className="inline-block h-10 w-10 bg-red-300"></div>
          <div className="inline-block h-10 w-32 bg-blue-300"></div>
          <div className="inline-block h-10 w-24 bg-green-300"></div>
        </div>
      </div>

      <h1>Intrinsic sizing by setting width to max-content</h1>
      <p>(Notice it overflows wrapper)</p>
      <div className="w-40 border border-black mb-10">
        <div className="border w-max  border-red-300">
          <div className="inline-block h-10 w-10 bg-red-300"></div>
          <div className="inline-block h-10 w-32 bg-blue-300"></div>
          <div className="inline-block h-10 w-24 bg-green-300"></div>
        </div>
      </div>

      <h2 className="text-3xl mb-4">Flexbox</h2>
      <p>
        Flexbox will intrinsically size its children based on their max-content
      </p>
      <div className="flex w-96 border mb-10">
        <p className="border border-black">Item</p>
        <p className="border border-black">Medium Item</p>
        <p className="border border-black">Much larger Item</p>
      </div>

      <p className="mb-4">
        Flexbox sizes its children to their max-content at first, but will then
        set flex basis to auto by default if the children overflow.
      </p>
      <p className="mb-4">
        A flex basis of auto will use content size as a flex-basis, so the
        flexbox will decrease the size of the largest item the least and that of
        the smallest the most.
      </p>
      <p>
        Notice how the elements will never shrink past their min-content size.
        Otherwise, they would disappear.
      </p>
      <div className="flex w-96 border mb-10">
        <p className="border border-black">Item 1</p>
        <p className="border border-black">Medium Item</p>
        <p className="border border-black">
          Much larger Item that has a lot of content
        </p>
      </div>

      <p>When you give elements a width, you are setting their content size</p>
      <div className="flex w-96 border mb-10">
        <p className="border w-20 border-black">w-20</p>
        <p className="border w-20 border-black">w-20</p>
        <p className="border w-20 border-black">w-20</p>
      </div>

      <p className="mb-4">
        Even if you set widths to both flex container and its children, children
        will never get smaller than their min-content
      </p>
      <p className="italic">wrapper has w-10 and each child w-20</p>
      <div className="flex w-10 border border-red-300 mb-10">
        <p className="border w-20 border-black">a lot of text</p>
        <p className="border w-20 border-black">a lot of text</p>
        <p className="border w-20 border-black">a lot of text</p>
      </div>

      <h2 className="text-3xl mb-4">Grid</h2>
      <p>grid-cols-3</p>
      <div className="grid  grid-cols-3 border mb-10">
        <p className="border border-black">Item</p>
        <p className="border border-black">Medium Item</p>
        <p className="border border-black">Much much much larger Item</p>
      </div>

      <p>grid-cols-3 but items' widths set to max-content </p>
      <div className="grid  grid-cols-3 border mb-10">
        <p className="border w-max border-black">Item</p>
        <p className="border w-max border-black">Medium Item</p>
        <p className="border w-max border-black">Much much much larger Item</p>
      </div>

      <p>grid-cols-[repeat(3,min-content)] </p>
      <div className="grid  grid-cols-[repeat(3,min-content)] border mb-10">
        <p className="border  border-black">Item</p>
        <p className="border  border-black">Medium Item</p>
        <p className="border  border-black">Much much much larger Item</p>
      </div>

      <p>grid-cols-[repeat(3,max-content)] </p>
      <div className="grid  grid-cols-[repeat(3,max-content)] border mb-10">
        <p className="border  border-black">Item</p>
        <p className="border  border-black">Medium Item</p>
        <p className="border  border-black">Much much much larger Item</p>
      </div>

      <p>grid-cols-[repeat(3,max-content)] but grid with small width</p>
      <div className="grid  grid-cols-[repeat(3,max-content)] border border-red-300 mb-10 w-[200px]">
        <p className="border  border-black">Item</p>
        <p className="border  border-black">Medium Item</p>
        <p className="border  border-black">Much much much larger Item</p>
      </div>

      <p>grid-cols-[repeat(3,fit-content(100px))] </p>
      <div className="grid  grid-cols-[repeat(3,fit-content(100px))] border mb-10">
        <p className="border  border-black">Item</p>
        <p className="border  border-black">Medium Item</p>
        <p className="border  border-black">Much much much larger Item</p>
      </div>

      <p>grid-cols-[repeat(3,fit-content(100px))] </p>
      <div className="grid  grid-cols-[200px_minmax(900px,_1fr)_100px] border mb-10">
        <p className="border  border-black">Item</p>
        <p className="border  border-black">Medium Item</p>
        <p className="border  border-black">Much much much larger Item</p>
      </div>

      <p>grid-cols-[repeat(3,fit-content(100px))] but grid set to 500px </p>
      <div className="grid  grid-cols-[200px_minmax(900px,_1fr)_100px] border border-red-400 mb-10 w-[500px]">
        <p className="border  border-black">Item</p>
        <p className="border  border-black">Medium Item</p>
        <p className="border  border-black">Much much much larger Item</p>
      </div>
    </div>
  );
}

export default HorizontalBarGraph;
