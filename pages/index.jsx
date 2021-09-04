import Layout from "../components/layout";

const Index = () => {
    return ( 
        < Layout>
       


        <h1>Hola Mundo</h1>
        <p> Primera pagina usando NextJs ❤ </p>




        <style jsx>{
            `
        h1 {
            color: red;
        }
        p{
            text-align: center;
        }
        `
    }
        </style>
 </Layout>

     )
}
 
export default Index;

