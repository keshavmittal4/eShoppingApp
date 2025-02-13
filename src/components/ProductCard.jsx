const ProductCard = ({product}) => {
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
        <div className="h-[180px]">
          <img
          src={product?.image}
          alt={product?.title}
          className="object-cover h-full w-full"
           />
        </div>
      </div>
    </div>
  )
}

export default ProductCard;


//time till - 7:4:22