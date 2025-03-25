import mongoose from "mongoose"

export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://adarshpathak181210:Adarshpathak181210@cluster0.6d19m.mongodb.net/FoodDelivery?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log("DB Connected"));
};
