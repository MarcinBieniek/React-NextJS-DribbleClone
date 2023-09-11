type Props = {
  params: {
    id: string
  }
}

const page = ({params}: Props) => {
  return (
    <div className="container">
      User profile page
    </div>
  )
}

export default page
