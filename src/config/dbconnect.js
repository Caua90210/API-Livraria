//Importando o mongoose
import mongoose, {mongo} from "mongoose";

//Executando e conectando ao banco de dados
async function conectaNaDataBase(){
    
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}

export default conectaNaDataBase;

