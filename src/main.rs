#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;

use rocket::response::content::RawHtml;

#[get("/")]
fn index() -> RawHtml<&'static str> {
    RawHtml(r#"
        <div>
            <p>Hello, world!</p>
        </div>
    "#)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}
