mod models;
use crate::models::Status;
use actix_web::{HttpServer, App, web, Responder,HttpResponse};
use std::io;


async fn status() -> impl  Responder  {
   
   HttpResponse::Ok()
   .json(Status{ status:"ok".to_string()})
    
}


#[actix_rt::main]
async fn main() -> io::Result<()> {
    println!("Starting server at http://127.0.0.1:8081/");
    HttpServer::new(||{
        App::new()
        .route("/",web::get().to(status))
    })
    .bind("127.0.0.1:8081")?
    .run()
    .await

}