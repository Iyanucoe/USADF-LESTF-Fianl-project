// import React from "react"
// import Card from "./Card"


// function Herodata() {
//     const [loading, setLoading] = useState(false)
//     const [data, setData] = useState(null)
//     const [error, setError] = useState(null)
  
//     const getBeneficiaries = async () => {
//       setLoading(true)
//       try {
//         const rawData = await getDocs(collection(database, "Beneficiaries"))
//         const beneficiaries = rawData.docs.map(beneficiary => beneficiary.data())
//         setData(beneficiaries)
        
//       } catch (error) {
//         setError(error)
//       } finally {
//         setLoading(false)
//       }
//     }
  
//     useEffect(() => {getBeneficiaries()}, [])
//     if (loading || !data) {
//       return(
//       <div>
//         <p>app is loading</p>
//       </div>
//       )
//     }
//     if (error) {
//       return(
//       <div>
//         <p>error try again</p>
//       </div>
//       )
//     }
    
//      return (
//       <div>
//         {
//           data.map(benef => <Card beneficiary={benef} key={benef.whatsapp} />)
//         }
//       </div>
  
//     )
//   }
  
//   export default Herodata
  
  