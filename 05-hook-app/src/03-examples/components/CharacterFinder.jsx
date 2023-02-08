

export const CharacterFinder = ({setData}) => {
  return (
    <form onSubmit={setData}>
  <input type="text" 
  className="mr-3"
  />
  <input type="submit" 
  className="btn btn-secondary"
  />
  </form>
  )
}
