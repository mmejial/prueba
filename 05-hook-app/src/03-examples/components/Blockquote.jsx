

export const Blockquote = ({image,name}) => {
  /* console.log(image) */
  return (
    
    <blockquote className="blockquote text-end">

<p className="mb-1">
  <img src={image} alt="" />
</p>
<footer className="blockquote-footer mt-2 pt-2">
{name}
</footer>
</blockquote>
  )
}
